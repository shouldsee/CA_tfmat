function[ph2m]=mergeblock(phm,phma,ph0p,operh)

phma=shiftdim(phma,-6);
pha=operh(operh(phm,phma),ph0p);
phb=permute(pha,[1 2 3 7 8 9 4 5 6 10 11 12]);
siz=size(phb);
ph2m=reshape(phb,[4,prod(siz(2:5)),4,2,prod(siz(8:11)),2]);

% ph2m=reshape(phb,[4,(4*m)^2,4,2,4*(4*m)^2,2]);

end