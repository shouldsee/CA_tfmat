
samplesys
load('tmp','tca_list')
load('tmp','ntca_list')
% lst=ntca_list;
sys=change_adv(sys,'2dtca',{6152,0.5},env);

sys.familyname='2dntca';
jmax=100;
sys.k=800;
sys.hmax=100;
sys0=sys;
tmp=[];
% lst=6152;


figure(sys.fnum)
avi=(sys.rdf([jmax sys.sizf(sys)]));
im1=squeeze([mean(avi,1) ]);
im2=squeeze([avi(1,:,:)] );
subplot(2,2,1)
fi=imagesc(im1);
% fi=imagesc(squeeze([mean(avi,1) avi(1,:,:)] ));
caxis auto;
subplot(2,2,2)
view(30,60)
cla
ax2=gca;
hold on
subplot(2,2,3)
fi2=imagesc(im2);
subplot(2,2,4)
h=histogram(im2(:)+1,0:0.05:1,'Norm','pdf');
ylim([0 30])




if ~exist('odi','var')
    odi=1;
end




odi=odi;


k=0;
for odi=odi:size(lst,1);
    od=lst(odi,:);
sys=sys0;
sys=change_adv(sys,sys.familyname,{od 0.5},env);
avi=(sys.rdf([jmax sys.sizf(sys)]));
      
siz=size(avi);
siz(2)=siz(2)-2;
siz(3)=siz(3)-2;
siz=[sys.hmax siz];
tmp=zeros(siz); 
smtmp=tmp;
    %%
    avi=(sys.rdf([jmax sys.sizf(sys)]));

% set(h.Parent,'YScale','log')
% set(h.Parent,'YLim',10^5);
avc=avi;
% avs=[];
i=1;
fir=reshape(2.^(0:9-1),1,3,3);
% horizon=1;
% try 
%     recs(odi,:,:)=rec;
% end
% rec=zeros(sys.hmax,2)*nan;
trans=2;

while i<sys.hmax;
    i=i+1;
%     avs(i,:,:)=mean(avc,1);
    avcnew=(sys.adv(avc,i));
%     cavcnew=convn(avcnew(1,:,:),fir,'valid')+1;
%     cavc=convn(avc(1,:,:),fir,'valid')+1;
%     idx=sub2ind([2^9,2^9],cavc,cavcnew);
%     tmp(i,:,:)=hdist(idx);
    cavcnew=convn(avcnew,fir,'valid')+1;
    cavc=convn(avc,fir,'valid')+1;
    idx=sub2ind([2^9,2^9],cavc,cavcnew);
    tmp(i,:,:,:)=shiftdim(hdist(idx),-1);
    
    if i>trans
    smtmpnow=mean(tmp(i-2:i,:,:,:),1);
    smtmp(i-trans,:,:,:)=smtmpnow;
    if i>trans+10;
%     msmtmp=mean(mean(tmp,3),4);
    
    mtp=mean(smtmpnow(:));
    
    stpmat=((smtmp(i-trans,:,:,:)-smtmp(i-10-trans,:,:,:))); 
    stp=mean(abs(stpmat(:)))/abs(mean(stpmat(:)));
    end
%     rec(i-2,:)=[mtp,stp];
%     [mtp,stp]
    end

    avc=avcnew;
    
%     im1=[avc(1,:,:)];

    try
        im2=[smtmpnow(:,1,:,:)] ;
    catch
        im2=[];
%         im2=[mean(tmp(i,:,:),1)] ;   
    end
    if mean(tmp(:))<0.1 & i>20
        break
    end

%     set(fi,'CData',squeeze( im1));
if mtp<-1;
    set(fi2,'CData',squeeze(im2));
%     set(h,'Data',im2(:));
% 
    drawnow
%     fprintf('step %d of %d, rnum %s \n',i,sys.hmax,num2str(od))
    pause(0.025)
end
%     drawnow
end
%%
fprintf('step %d of %d, rnum %s \n',i,sys.hmax,num2str(od))
% plot3(ax2,rec(:,1),rec(:,2),1:sys.hmax,'color',rand(1,3))
% text(ax2,mtp,stp,i+1,num2str(od));
fprintf(outf,'%f\t%f\t%d\t%s\t%d\n',mtp,stp,i,num2str(od),bchi);
% drawnow
% k=k+1;
% if k==6;
% pause
% k=0;
% cla(ax2)
% end
end
%%
xlabel(ax2,'mtp')
ylabel(ax2,'stp')
