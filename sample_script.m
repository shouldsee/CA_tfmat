sys1=sys;
id=15;
repn=20;
sys1.adv=@(a)sig(linopt(a,repmat(squeeze(Ws(16,:,:,:)),[repn,1]),horizon));
sys1.hmax=repn*sys.hmax;
% for a=1:100;
% pdata=sample(sys1);
% mp=[mp;mean(pdata,1)];
% a
% end
pdata=sample(sys1);
[~,idx]=sort(mean(pdata,1));

figure(1)
imagesc(pdata(:,idx)')
figure(2)
hist(mp(:),0:0.02:1);