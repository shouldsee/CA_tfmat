% ntnumhex=hex2bin(ntnum);
ntnum=char(flip(ntrule')+'0');
s=bin2hex(ntnum,'post');
ntnum1=(hex2bin(s));
ntnumt=ntnum1(1:102);
ntrule1=flip(ntnumt-'0');
%%
% ntnum1f=(ntnum1f(1:102));
% ntnum1f=flip(ntnum1(end-101:end));
% ntrule1=flip(ntrule1(1:102));
ntrule1=ntnum1f-'0';
sum(ntrule1==ntrule')

ntrule2=flip(ntnum-'0');
% sum(ntrule2==ntrule')