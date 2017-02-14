%%  derrida plot
N=20000;
k=30;
% N=200;
% k=50;
hmax=50;
fh1=figure(1);
set(fh1,'units','normalized','position',[.0 1 .4 .4]);
f1=imagesc(zeros(hmax,hmax+5+k));
caxis([0 1])
colorbar


try
    gdir=[getenv('repos'),'/gallery/corrprofile/'];
    sfig=1;
    mkdir(gdir);
catch
    sfig=0;
    fprintf('img storage:cannot find $repos in env or failed to create subfolder in $repos \n')
end
hrange=linspace(0,1,k+1);
if ~exist('lst','var');
lst=randi([0 255],[1 500]);
end

fprintf('%s\t%s\n','rulenum','horizon');

for od =lst;
sys.rvct=2.^(0:2)';
if ~od;
sys.rule=eca_rule(randi([0 255]));
else
sys.rule=eca_rule(od);
end    
rs=randi([0 2^k-1],[N 2]);
as=rs(:,1);
bs=rs(:,2);
avi=(dec2base(as,2,k))-'0';
bvi=(dec2base(bs,2,k))-'0';

avc=avi;
bvc=bvi;
horizon=0;
histo=[];
cvs=[];
while horizon<hmax;
    horizon=horizon+1;    
    cvc=mean(xor(avc,bvc),2);
    avcnew=forward(avc,sys,2);
    bvcnew=forward(bvc,sys,2);
    
    

    histo(horizon,:)=avc(1,:);
    cvs(horizon,:)=cvc;
if horizon~=hmax;
    avc=avcnew;
    bvc=bvcnew;
    continue
end
d=squareform(pdist(cvs,'corr'));
h1=mean(xor(avs,bvs),2);
h2=mean(xor(avcnew,bvcnew),2);
h3=mean(xor(avc,bvc),2);
% his1=histogram2(h1,h2,hrange,hrange,'Normalization','pdf');
% hv1=his1.Values;
% lhv1=log(hv1);
% lhv1(isinf(lhv1))=0;
% xlim([0,1]);
% ylim([0,1])
% zlim([0 40])
% view(-0,90)

% 

% figure(1)
% cla
% imagesc(rot90(lhv1,1));
% caxis([-3 3])
set(f1,'CData',[d, 0.5*ones(hmax,5),histo]);
% imagesc([d, 0.5*ones(hmax,5),histo])
% caxis([0 1]);
alias=sprintf('ECA%d',od);
title(f1.Parent,alias)
if sfig
frame = getframe(1);
fname=[gdir,alias,'_corrprofile.jpg'];
saveas(fh1,fname);
% savefig(fh1,[gdir,alias,'_corrprofile.jpg']);
end



% histogram2(h1,h2,'Normalization','cdf');
% xlim([0,1]);
% ylim([0,1])
% zlim([0 1])

% view(-50,50)
fprintf('%d\t%d\n',od,horizon)
drawnow 
end

% figure(3)
% his2=histogram2(h3,h2,hrange,hrange,'Normalization','pdf');
% hv2=his2.Values;
% lhv2=log(hv2);
% lhv2(isinf(lhv2))=0;
% 
% cla
% imagesc(rot90(lhv2,1))
% caxis([-3 3])
% title(od)
% % surf(lhv);
% 
% figure(2)
% imagesc(histo);


fprintf('Paused, enter to continue \n');
% pause

end
