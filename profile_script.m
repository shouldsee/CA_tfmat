profile off
profile on

sys0.critname='odr0.4_MINd0.7_batch1';
sys0.crit=@(odr,d) odr>0.4 && min(d)<0.7; ;

lst0=1:2^18;
idx=randperm(numel(lst0));
mlst0=reshape(lst0(idx),[2^8 2^10]);
bmax=2^10;
for bchi=1:bmax
fprintf('batch %d of %d\n',bchi,bmax)    
lst=mlst0(:,bchi);
derrida_general
end
profile viewer
profsave
