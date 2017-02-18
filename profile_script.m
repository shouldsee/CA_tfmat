profile off
profile on


% load('seq')
% load('seqidx')
bchi0=bchi;
sys0.critname='cov_seq_v0';
% sys0.crit=@(odr,d) odr>0.4 && min(d)<0.7;;
sys0.crit=@(odr,d)true;
% lst0=1:2^18;
% idx=randperm(numel(lst0));
% mlst0=reshape(lst0(idx),[2^8 2^10]);
bmax=2^10;
% bmax=1600;

for bchi=bchi0:bmax
fprintf('batch %d of %d\n',bchi,bmax)    
lst=mlst0(:,bchi);
derrida_general
end


profile viewer
profsave
