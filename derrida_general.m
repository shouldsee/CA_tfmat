%%  derrida plot
N=1000;
hmax=200;
k=200;
% familyname='2dtca';
fnum=1;
sys0=sys;
dt=1;
fields = fieldnames(sys0, '-full');
% Find out how many there are - for our loop.
numberOfFields = length(fields);
for f = 1 : numberOfFields
    thisField = fields{f};
    commandLine = sprintf('%s = sys0.%s', thisField, thisField);
    snapnow;
    eval(commandLine);
end
% sys0.familyname=familyname;
% sys0.k=k;
% sys0.N=N;
% sys0.hmax=hmax;
% sys0.fnum=1;
% crit=sys0.crit;
% familyname=sys0.familyname;
% critname=sys0.critname;
% critname='tst';


% sys0=change_adv(sys0,'2dVlog',lst(1));

%% initiate default params
if ~exist('silent','var');silent=0;end
if ~exist('lst','var');lst=randi([0 255],[1 500]);end
if ~exist('pau','var');pau=0;end
if ~exist('init','var');init=1;end





 
if ~silent;    
try
    gdir=[getenv('repos'),'/gallery/corrprofile/',familyname,'/',critname,'/'];
    sfig=1;
    mkdir(gdir);
    logfname=[gdir,'log.csv'];
    logid=fopen(logfname,'a');
    fprintf(logid,'print some thing here \n');
    fprintf(logid,'%s\t%s\t%s\t\t\n','canonical_name','order','alias');
catch
    sfig=0;
    fprintf('img storage:cannot find $repos in env or failed to create subfolder in $repos \n')
end


end

%% initiate figure
setcolor='caxis(f1.Parent,[0 0.5])';
% setcolor='caxis(f1.Parent,''auto'')';

try
    eval(setcolor)
catch
        
fh1=figure(sys0.fnum);
aspect=hmax/(k+5+hmax)+.02;
ht=.6;
set(fh1,'units','normalized','position',[.0 1 ht ht*aspect]);
f1=imagesc(zeros(sys0.hmax,sys0.hmax+5+sys0.k));
colorbar
eval(setcolor)
end
% caxis(f1.Parent,[0 0.3])

if init
order=0;ordernew=order;
%% wt matrix to adapt neural network
W=rand([hmax,k])-0.5;
Wnew=W;
init=0;
Ws=[];
ods=[];
end


% sys0=change_adv(sys0,'1deca',lst(1));
sys0=change_adv(sys0,familyname,{lst(1,:) dt});
%% initiate the configs;
avi=(sys0.rdf([N sys0.sizf(sys0)]));
bvi=(sys0.rdf([N sys0.sizf(sys0)]));
histo0=(repmat(avi(1,:),[hmax,1]));
cvs0=(zeros(hmax,N));

for odi =1:size(lst,1); %% od for "override"
% parfor odi =1:numel(lst(:)); %% od for "override"
    od=lst(odi,:);
    sys=sys0;
   sys=change_adv(sys,familyname,{od dt});

%% record order and decide whether a plot should be saved
% if exp(ordernew)>rand(1,1)
% % if exp((ordernew-order)/0.005)>rand(1,1)
%     W=Wnew;
%     order=ordernew;
%     Ws=cat(1,Ws,shiftdim(W,-1));
%     ods=[ods;order];
% end





%% update the advance function
% adv=adv_log_torus_phi(3.80);
% sys=change_adv(sys,'2dVlog',od);
% sys=change_adv(sys,'1deca',od);

%% keep a copy in sys struct
% sys.adv=adv;
% sys.dst=dst;

%%
% avc=avi;
% bvc=bvi;
avc=(avi);
bvc=(bvi);
histo=histo0;
cvs=cvs0;
% histo=gpuArray(repmat(avi(1,:),[hmax,1]));
% cvs=gpuArray(zeros(hmax,N));

%% 
horizon=0;
while horizon<sys.hmax;
    if pau; fprintf('%d\t%d\n',od,horizon);    end
    horizon=horizon+1;    
    cvc=sys.dst(avc,bvc);    
    avcnew=(sys.adv(avc,horizon));
    bvcnew=(sys.adv(bvc,horizon));
    histo(horizon,:)=gather(avc(1,:));
    cvs(horizon,:)=cvc;    
    
if horizon~=sys.hmax;
    avc=avcnew;
    bvc=bvcnew;
    continue
end


%% calculate and arrange the profile 
d=pdist((cvs),'corr');
d=max(max(d(:)),1)-d;
stds=std(cvs,[],2);
dmat=sqrt(squareform(d).*stds.*stds');
d=triu(dmat);
ordernew=gather(mean(d(:)));

pdata=gather([dmat, 0.5*ones(sys.hmax,5),histo]);



%% plot and save the profile
if ~silent && crit(ordernew,d)
set(f1,'CData',pdata);
alias=sprintf('%s-%s',sys.familyname,sys.alias);
% tl=sprintf('%6.5f-%s-%s-order',ordernew,alias,num2str(od));
tl=sprintf('%6.5f-%s-order',ordernew,num2str(od));
title(f1.Parent,tl)

    if sfig
    frame = getframe(fnum);
    fname=[gdir,tl,'_corrprofile.jpg'];
    saveas(fh1,fname);
    % savefig(fh1,[gdir,alias,'_corrprofile.jpg']);
    end
end

fprintf(fopen(logfname,'a'),'%d\t%s\t%s\t\t\n',od,ordernew,sys.alias);
fprintf('%d\t%d\t%d\t%f\t%f\t%s\n',odi,od,horizon,ordernew,order,sys.alias)
% hmap(2,cvs,10,1);
drawnow 
end
if pau;
    fprintf('Paused, enter to continue \n');
    pause

end

end
