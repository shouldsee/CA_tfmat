profile off
profile on

sys0.critname='cov_seq2_v2';
% sys0.crit=@(odr,d) odr>0.4 && min(d)<0.7;;
sys0.cirt=@(odr,d)true;
lst0=1:2^18;
idx=randperm(numel(lst0));
mlst0=reshape(lst0(idx),[2^6 2^12]);
% bmax=2^12;
bmax=1600;
for bchi=bchi0:bmax
fprintf('batch %d of %d\n',bchi,bmax)    
lst=mlst0(:,bchi);
derrida_general
end
profile viewer
profsave
