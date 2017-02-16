function [as,tsiz]=sample(sys);
N=sys.N;
k=sys.k;
hmax=sys.hmax;
adv=sys.adv;
rdf=sys.rdf;

siz=sys.sizf(sys);
tsiz=[hmax siz];
as=zeros([hmax prod(siz)]);
ac=sys.rdf([1 siz]);

for i=1:hmax;
    as(i,:)=ac(:);
    ac=sys.adv(ac,i);
%     imagesc(squeeze(ac));
%     pause
end
% figure(sys.fnum)
% imagesc(as);
end