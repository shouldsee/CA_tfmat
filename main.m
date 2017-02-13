% rule=
itnum=1;
[phtaux]=init_auxiliary(itnum);
phtauxsq=square(phtaux);
rule=randi([0 1],[1 2^3]);

Ks=linspace(-5,5,12);
Kauxs=linspace(-5,5,12);
% Ts=linspace(-5,5,20);
% Tauxs=linspace(-5,5,30);
% Ks=25./Ts;
% Kauxs=25./Tauxs;
[Ks,Kauxs]=ndgrid(Ks,Kauxs);
Kss=Ks(:);
Kauxss=Kauxs(:);
Es=[];
%%
for rnum=(1:2^8)-1
%     rnum=94;
%     rnum=49;
    if ~od
        rnum=randi([1 2^8])-1;
    else
            rnum=od;
    end

    rule=str2num(dec2base(rnum,2,8)')';
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
ppmtsq20=ppmtsq^20;
ent=sum(entropise(sum((ppmtsq)^1,1)));
ent2=sum(entropise(sum((ppmtsq)^20,1)));

% subplot(1,2,1)
% imagesc(phmsq)
% subplot(1,2,2)
% 
% imagesc(phmtsq)
%%
[psi,E]=eigs(ppmtsq,1,'LM');
% e=diag(E);
phi=pinv(psi);
epre=entropise(phi.*psi);
ent1=sum(epre(:));

% [psi,E]=eigs(ppmtsq20,1,'LM');
% epre=entropise(phi.*psi);
% ent2=sum(epre(:));

% fprintf('%.3d\t%.3d\t%.3d\n',log(E(1)),std(psi(:,2)),max(abs(psi(:,2))));
% pp=ppmtsq^1;
% fprintf('%d\t%.3d\t%.3d\t%.3d\n',r10,ent,std(psi(:,2)),max(abs(psi(:,2))));
fprintf('%d\t%.3d\t%.3d\t\n',r10,K,ent)
Es(rnum+1,i,1)=(ent1);
Es(rnum+1,i,2)=(ent1);

end
%%
% plot((Ks),log(Es))
figure(fnum)
clf
rEs=reshape(Es(rnum+1,:,1),size(Ks));
rEs2=reshape(Es(rnum+1,:,2),size(Ks));
% surface(Ks,Kauxs,rEs);
subplot(1,1,1);
imagesc(abs(rEs));  
caxis([0,18])
title(rnum);
% subplot(1,2,2)
% imagesc(abs(rEs2));
% caxis([0,18])
% xlabel('x')
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