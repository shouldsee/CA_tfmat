% function[phlarge]=superblock(phm,ph1,operh)

phma=shiftdim(ph1,-6);
pha=operh(operh(phm,phma),ph0p);
phb=permute(pha,[1 2 3 7 8 9 4 5 6 10 11 12]);
m=size(pha,2);
ph4m=reshape(phb,[4,(4*m)^2,4,2,4*(4*m)^2,2]);

% end