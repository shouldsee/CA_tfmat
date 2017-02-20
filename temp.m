%%
sys.hmax=100;
sys.k=1000;
% sys=change_adv(sys,'log1d',3.9999);
% sys=change_adv(sys,'1deca',110);
sys=change_adv(sys,'2dtca',6152);

[s,tsiz]=sample(sys);
figure(sys.fnum)
imagesc(s);
caxis([0 1])
drawnow
pause

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