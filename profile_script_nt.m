profile off
profile on

findhfir;
samplesys
sys0=sys;
sprev = rng(0,'v5uniform');
total=2^18;bchsize=2^8;bmax=2^10;

lst0=randi([0 1],[total,102]);
% idx=randperm(size(lst0,1));
% lst0=lst0(idx,:);
sys0.familyname='2dntca';
lst0=bin2hex(char(lst0+'0'),'post');
sys0.critname='seed0';
% sys0.critname='cov_seq_v0';
if ~exist('bchi','var');
bchi=1;
end
bchi0=bchi;
% sys0.crit=@(odr,d) odr>0.4 && min(d)<0.7;;
sys0.crit=@(odr,d)true;
% lst0=1:2^18;

% idx=randperm(numel(lst0));
bchmax=total/bchsize;
mlst0=reshape(lst0,[bchmax bchsize 26]);
% bmax=1600;
%%
for bchi=bchi0:bmax
fprintf('batch %d of %d\n',bchi,bmax)    
lst=squeeze(mlst0(bchi,:,:));
derrida_general
end


profile viewer
profsave
