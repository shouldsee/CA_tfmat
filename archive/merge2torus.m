function[phb]=merge2torus(phm,ph0,operh)

ph0pt=permute(ph0,[2 3 1 5 6 4]);
phb=operh(phm,ph0pt);

% ph2m=reshape(phb,[4,(4*m)^2,4,2,4*(4*m)^2,2]);

end