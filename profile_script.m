profile off
profile on

load('seq')
% load('seqidx')

bchi=124;
bchi0=bchi;
critname='cov_seq_v0';
samplesys
sys0.critname=critname;
% sys0.crit=@(odr,d) odr>0.4 && min(d)<0.7;;
sys0.crit=@(odr,d)true;
sys0.familyname='2dtca';
sys=sys0;
% lst0=1:2^18;
% idx=randperm(numel(lst0));

bchsiz=2^9;bmax=2^18/bchsiz;
mlst0=reshape(mlst0(:),[bchsiz bmax]);

% mlst0=reshape(lst0(idx),[bchsiz bmax]);
% bmax=2^10;
% bmax=1600;

for bchi=bchi0:bmax
fprintf('batch %d of %d\n',bchi,bmax)    
lst=mlst0(:,bchi);
% derrida_general
densifluct
end


profile viewer
profsave
