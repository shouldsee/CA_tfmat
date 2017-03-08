% samplesys
sys0=sys;
sys0.N=500;
sys0.k=600;
sys0.hmax=200;
% try
% sys0=change_adv(sys,'2dtca',{od00,0.5});
% catch
%     od00=39007;
% sys0=change_adv(sys,'2dtca',{od00,0.5});
% end
sys0=sys;

if ~exist('bchi');
    bchi=nan;
%     critname='tst1';
end
    try
    gdir=[getenv('repos'),'/gallery/densicorr_profile/',sys.familyname,'/',sys.critname,'/bch',num2str(bchi),'/'];
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

%%
ffcor=figure(2);
ht=0.5;
aspect=1600/1200;
set(ffcor,'units','normalized','position',[.0 1 ht ht*aspect]);

intl=6;
kmax=ceil(sys0.hmax/intl);
fcor=imagesc(zeros(kmax,kmax));
caxis(fcor.Parent,[-5 0])
sys00=sys0;




% for od=lst(:)';
parfor odi=1:size(lst,1);
    od=lst(odi,:);
%     sys=sys0;
sys0=change_adv(sys00,sys00.familyname,{od,0.5},env);
sys=sys0;
% syss=sys0;
avi=sys0.rdf([1 sys0.N sys0.sizf(sys0)]);
avk=repmat(avi,[intl,1]);
avck=repmat(avi,[ceil(sys.hmax/intl) 1]);
% fi=imagesc(squeeze(mean(avk(:,1,:,:),1)));
% caxis([0 0.8])
avc=avi;
for horizon=1:ceil(sys.hmax/intl)*intl+1;
    avc(:,:,:,:)=sys.adv(squeeze(avc(:,:,:,:)),horizon);
    k=mod(horizon,intl)+1;
    avk(k,:,:,:)=avc;
    if k==intl
%     imagesc(squeeze(avc(1,:,:)));
    ii=ceil(horizon/intl);
    avck(ii,:,:,:)=mean(avk,1);
    squeeze(mean(avk(:,1,:,:),1));
%     set(fi,'CData',squeeze(mean(avk(:,1,:,:),1)));
%     drawnow
    end
end


%%
siz=size(avck);
avckm=reshape(avck,siz(1),[]);

% im=hmap(2,avckm,siz(1),1);
pd=pdist(avckm,'corr');
spd=squareform(pd);

% d=pdist((cvs),'corr');
pd=max(max(pd(:)),1)-pd;
spd=log(squareform(pd));
stds=std(avckm,[],2);
dmat=sqrt(spd.*stds.*stds');


set(fcor,'CData',spd);
densistd=std(avckm(end,:));
densi=mean(avckm(end,:));

alias=sprintf('%s-%s',sys.familyname,sys.alias);
tl=sprintf('%.4f.mcov.%.4f.std.%.4f.densi.%s.%s',mean(spd(isfinite(spd))),densistd,densi,alias,num2str(sys.od));

% tl=sprintf('%6.5f-%s-%s-order',ordernew,alias,num2str(od));
% tl=sprintf('%6.5f-%s-order-batch%d',ordernew,num2str(od),bchi);
% title(fcor.Parent,tl)
title(tl);

if sfig
%     frame = getframe(fnum);
%     fname=[gdir,tl,'_corrprofile.jpg'];
%     saveas(fh1,fname);
    saveas(ffcor,[gdir,tl,'.jpg']);
    % savefig(fh1,[gdir,alias,'_corrprofile.jpg']);
end
end
% saveas(2,[gdir,tl,'_detailcorr.jpg']);