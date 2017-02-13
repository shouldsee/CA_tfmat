function []=sample(f,n,fnum);
mat=zeros(n,n);

svc=randi([0 1],[1 n]);
for i=1:n

mat(i,:)=svc;
svl=circshift(svc,1,2);
svr=circshift(svc,-1,2);
svc=f(svl,svc,svr);
end

figure(fnum)
imagesc(mat);
end