function[pdata,record,tl,sys]=sys_derrida(sys)

%% unpack vars
N=sys.N;
hmax=sys.hmax;
k=sys.k;
familyname=sys.familyname;
fnum=sys.fnum;
crit=sys.crit{1};
critname=sys.crit{2};
od=sys.od;
% sys=change_adv(sys,'2dVlog',lst(1));

%% initiate default params

silent=0;
pau=0;
init=0;
ordernew=0;




 
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
fh1=figure(sys.fnum);
aspect=hmax/(k+5+hmax)+.2;
ht=.6;
set(fh1,'units','normalized','position',[.0 1 ht ht*aspect]);
f1=imagesc(zeros(sys.hmax,sys.hmax+5+sys.k));
caxis([0 1])
colorbar



%% initiate the configs;
avi=sys.rdf([N sys.sizf(sys)]);
bvi=sys.rdf([N sys.sizf(sys)]);


%% update the advance function
% adv=adv_log_torus_phi(3.80);
% sys=change_adv(sys,'2dVlog',od);
% sys=change_adv(sys,'1deca',od);
sys=change_adv(sys,familyname,od);

%% keep a copy in sys struct
% sys.adv=adv;
% sys.dst=dst;

%%
avc=avi;
bvc=bvi;
histo=repmat(avi(1,:),[hmax,1]);
cvs=zeros(hmax,N);

%% 
horizon=0;
while horizon<sys.hmax;
    if pau; fprintf('%d\t%d\n',od,horizon);    end
    horizon=horizon+1;    
    cvc=sys.dst(avc,bvc);    
    avcnew=sys.adv(avc,horizon);
    bvcnew=sys.adv(bvc,horizon);
    histo(horizon,:)=avc(1,:);
    cvs(horizon,:)=cvc;    
    
if horizon~=sys.hmax
    avc=avcnew;
    bvc=bvcnew;
    continue
end


%% calculate and arrange the profile 
d=pdist(cvs,'corr');
ordernew=mean(d);
dmat=squareform(d);
pdata=[dmat, 0.5*ones(sys.hmax,5),histo];



%% plot and save the profile
if ~silent && crit(ordernew);
set(f1,'CData',[dmat, 0.5*ones(sys.hmax,5),histo]);
alias=sprintf('%s-%s',sys.familyname,sys.alias);
tl=sprintf('%4.3f-%s-%4.3d-order',ordernew,alias,od);

title(f1.Parent,tl)
    if sfig
    frame = getframe(fnum);
    fname=[gdir,tl,'_corrprofile.jpg'];
    saveas(fh1,fname);
    % savefig(fh1,[gdir,alias,'_corrprofile.jpg']);
    end
end
record=sprintf(logid,'%d\t%s\t%s\t\t\n',od,ordernew,sys.alias);
fprintf(logid,record);
fprintf('%d\t%d\t%f\t%f\t%s\n',od,horizon,ordernew,order,sys.alias)
drawnow 
end

% if pau;
%     fprintf('Paused, enter to continue \n');
%     pause
% 
% end

end
