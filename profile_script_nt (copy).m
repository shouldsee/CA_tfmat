profile off
profile on
make_hdist
findhfir
%%
findhfir;
samplesys
sys0=sys;
sprev = rng(0,'v5uniform');
total=2^18;bchsize=2^8;bmax=2^10;

lst0=randi([0 1],[total,102]);
% idx=randperm(size(lst0,1));
% lst0=lst0(idx,:);
sys0.familyname='2dntca';
lst0=bin2hex(char(lst0+'0'),'pre');
sys0.critname='seed0_fixed';
sys0.critname='seed0_detailed';
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
outfname='log.csv';
outf=fopen(outfname,'w');
for bchi=bchi:bmax
fprintf('batch %d of %d\n',bchi,bmax)    
lst=squeeze(mlst0(bchi,:,:));
odi=1;
% derrida_general
temperature
end

%%
profile viewer
profsave
%%
sys0.critname='tst_typicals';

t=readtable('./Annotations/typicals.csv','ReadVariableNames',0);
m=table2array(t(:,1));
lst=char();
for i=1:size(m,1);
    lst(i,:)=m{i};
end
endsys0.critname='tst_typicals';
%%
t=readtable('./Annotations/top50s.csv','ReadVariableNames',0);
m=table2array(t(:,1));
lst=char();
for i=1:size(m,1);
    lst(i,:)=m{i};
end
%%
derrida_general