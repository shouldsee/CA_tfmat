% rule=
itnum=1;
[phtaux]=init_auxiliary(itnum);
phtauxsq=square(phtaux);
rule=randi([0 1],[1 2^3]);
Ks=linspace(-5,5,20);
Kauxs=linspace(-5,5,20);
[Ks,Kauxs]=ndgrid(Ks,Kauxs);
Kss=Ks(:);
Kauxss=Kauxs(:);
Es=[];
%%
for rnum=(1:2^8)-1
    rule=str2num(dec2base(rnum,2,8)')';
    rule=randi([0 1],[1 2^3]);
    r10=sum(rule.*(2.^(7:-1:0)));

[ph1,ph0p,ph0]=init_P(rule);
phm=ph1;

for i=1:itnum;
phm=mergeblock(phm,ph1,ph0p,@plus);
end
phmt=merge2torus(phm,ph0,@plus);
phmsq=square(phm);
phmtsq=square(phmt);

% Es=0.*Kss;
for i=1:length(Kss);
K=Kss(i);
Kaux=Kauxss(i);

ppmtsq=exp(-K*phmtsq-Kaux*phtauxsq);

ent=sum(entropise(sum(ppmtsq,1)));

% subplot(1,2,1)
% imagesc(phmsq)
% subplot(1,2,2)
% 
% imagesc(phmtsq)
%%
% [psi,E]=eigs(ppmtsq,2,'LM');
% e=diag(E);
% phi=pinv(psi);
% fprintf('%.3d\t%.3d\t%.3d\n',log(E(1)),std(psi(:,2)),max(abs(psi(:,2))));
% pp=ppmtsq^1;
% fprintf('%d\t%.3d\t%.3d\t%.3d\n',r10,ent,std(psi(:,2)),max(abs(psi(:,2))));
fprintf('%d\t%.3d\t%.3d\t\n',r10,K,ent)
Es(rnum+1,i)=(ent);
end
%%
% plot((Ks),log(Es))
figure(2)
cla
rEs=reshape(Es(rnum+1,:),size(Ks));
% surface(Ks,Kauxs,rEs);
imagesc(rEs)
caxis([0,8])
xlabel('x')
% ylim([1.5 2.5])
end
%%
clf
imagesc(Es)
[~,id]=sort(Es(:,end),'descend');
rlist=0:255;
%%
% rkd_rlist=rlist(id);
% rkd_Es=Es(id,:);
imagesc(rkd_Es)
rkd_rlist(1:25)
rkd_rlist(200:255)
% phi*ppmsq*psi
% sum(phi'.*psi)