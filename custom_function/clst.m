function [ semat,lo ] = clst( emat )
%UNTITLED Summary of this function goes here
%   Detailed explanation goes here
dd=pdist(emat);
tree=linkage(dd);
lo = optimalleaforder(tree,dd);
semat=emat(lo,lo);


end

