function[ph1,ph0p,ph0]=init_P(rule);
spins=[0;1]; %% spins
% rule=randi([0 1],[1 8]);
operh=@plus;
% sps1=shiftdim(sps,-1);
% sps1=shiftdim(sps,-2);
% sps1=shiftdim(sps,-3);
[s0,s1,s2,s3]=ndgrid(spins,spins,spins,spins);
svc=shiftdim(permute(cat(5,s0,s1,s2,s3),circshift(1:5,1)),-1);
svl=circshift(svc,1,2);
svr=circshift(svc,-1,2);
rv=sum([svl;svc;svr].*2.^(0:2)',1);
rv=squeeze(rule(rv+1));

siz1=size(rv);
% siz1(1)=2;
rvc=rv(2:3,:,:,:,:);
% siz2=size(rvc);
tv=permute(cat(5,s1,s2),[5 6 7 8 9 1 2 3 4]);
hmd=squeeze(sum(xor(rvc,tv),1));
ph0=reshape(hmd,[4 4 2 2 2 2]);
ph0=ph0(:,:,1,:,:,1);
ph0p=permute(squeeze(ph0),[12 11 1 10 9 3 2 8 7 4 6 5 ]);
ph1=reshape(hmd,[4 1 4 2 4 2]);
end



% end