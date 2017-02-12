% rule=
rule=randi([0 1],[1 8]);

[ph1,ph0p,ph0]=init_P(rule);
phm=ph1;
for i=1:1;
phm=mergeblock(phm,ph1,ph0p,@plus);
end
phmt=merge2torus(phm,ph0,@plus);
phmsq=square(phm);
phmtsq=square(phmt);
subplot(1,2,1)
imagesc(phmsq)
subplot(1,2,2)
imagesc(phmtsq)
%%
K=1;
ppmt=exp(-K*phmt);
ppmtsq=square(ppmt);
[psi,E]=eigs(ppmtsq,1,'LM');
fprintf('%.3d\t%.3d\t%.3d\n',E,std(psi(:,1)),max(psi(:,1)));
phi=pinv(psi);
% phi*ppmsq*psi
% sum(phi'.*psi)