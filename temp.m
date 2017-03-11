%%
sys.hmax=100;
sys.k=5000;
% sys=change_adv(sys,'log1d',3.9999);
% sys=change_adv(sys,'1deca',110);
% s='00000000081003e81e89f78510';
s=ntnumhex;
sys=change_adv(sys,'2dntca',{s,0.5},env);

% % sys.critname='pendtst';
% sys.crit=@(od,d)true;
% sys.hmax=100;
% sys.k=200;
% sys.N=5;
% sys.fnum=5;
% % sys=change_adv(sys,'pendulum2',[1,0.01]);
jmax=500;
[im_all,tsiz]=sample(sys);

for odi=1:size(lst,1);
    
    
    
    od=lst(odi,:);
    sys=change_adv(sys,'2dntca',{od 0.5},env);

    %%
    avi=(sys.rdf([jmax sys.sizf(sys)]));
figure(sys.fnum)
im1=squeeze([mean(avi,1) ]);
im2=squeeze([avi(1,:,:)] );
subplot(2,2,1)
fi=imagesc(im1);
% fi=imagesc(squeeze([mean(avi,1) avi(1,:,:)] ));
caxis auto;
subplot(2,2,3)
fi2=imagesc(im2);
subplot(2,2,4)
h=histogram(im2(:)+1,0:0.05:1,'Norm','pdf');
ylim([0 30])
% set(h.Parent,'YScale','log')
% set(h.Parent,'YLim',10^5);
avc=avi;
avs=[];
i=1;
while i<sys.hmax;
    i=i+1;
    avs(i,:,:)=mean(avc,1);
%     set(fi,'CData',squeeze([avs(i,:,:) avc(1,:,:)]));
im1=[avc(1,:,:)];
im2=[avs(i,:,:)] ;
    set(fi,'CData',squeeze( im1));
    set(fi2,'CData',squeeze(im2));
    set(h,'Data',im2(:));

    avc=(sys.adv(avc,i));
    drawnow
    fprintf('step %d of %d, rnum %s \n',i,sys.hmax,od)
%     pause(0.05)
    
end
%%
pause
end
% ims=reshape(im_all/jmax,tsiz);
% for i=1:sys.hmax;
% imagesc(squeeze(ims(i,:,:)));
% caxis([0 1])
% drawnow
% pause(0.1)
% end
%%
[ods,idx]=sort(ods);
Ws=Ws(idx,:,:,:);
%%
agg=[];
for id=1:size(ods);
sys1=sys;
sys.rdf=@(siz)(rand(siz)-0.5);
id=17;
repn=5;
h=size(Ws,3);
W=squeeze(Ws(id,:,:,:));
wline=reshape(Ws,[],h^2);
wim=reshape(W,[],h);
% sys1.adv=@(a,horizon)sig(linopt(a,repmat(W,[repn,1]),horizon));
sys1.adv=@(a,horizon)min(2,max(0,linopt(a,repmat(W,[repn,1]),horizon)));
sys1.hmax=repn*size(Ws,2);
agg=cat(3,agg,pdata);
% for a=1:100;
% pdata=sample(sys1);
% mp=[mp;mean(pdata,1)];
% a
% end
pdata=sample(sys1);
idx=1:size(pdata,2);
% [~,idx]=sort(mean(pdata,1));

figure(1)
% pdata(s<0.1)=0;
imagesc(pdata(:,idx)')
caxis([0 2])
drawnow
id;
% pause
end 
% figure(2)
% hist(mp(:),0:0.02:1);
%%
s=std(agg,[],3);

%%
d=pdist(pdata);
tree=linkage(d,'average');
ol=optimalleaforder(tree,d);
dmat=squareform(d);
dmatod=dmat(ol,ol);
figure(1)
imagesc([pdata(ol,idx),pdata(:,idx)]');
figure(2)
imagesc([dmat dmatod])

%%

%%
ts=linspace(0,10,1000);
dof0=[pi,-0.125]';
dofs=odesolver(@pendulum,dof0,ts,@RK4);
figure(1)
hold on
% scatter(dofs(1,:),dofs(,2),3,'x');
xs=mod(dofs(1,:),2*pi);
ys=(dofs(2,:));
scatter3(ts,xs,ys,3,'x');
% ylim([-1,1])
% zlim([-1 1])