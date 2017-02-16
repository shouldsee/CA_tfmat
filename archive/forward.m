function[avc]=forward(avs,sys,dim);
dim2=ndims(avs)+1;
avl=circshift(avs,1,dim);
avr=circshift(avs,-1,dim);
avc=sys.rule(sum(cat(dim2,avr,avs,avl).*shiftdim(sys.rvct,1-dim2),dim2)+1);
end