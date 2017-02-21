function[firs]=enum(firs)
rvct=reshape(2.^(0:8),3,3);
rvctx=flip(rvct,1);
for i=1:4;
%     firs=cat(3,firs,rot90(rvct,i),rot90(rvctx,i),rot90(rvcty,i));
    firs=cat(4,firs,rot90(rvct,i),rot90(rvctx,i));
end
end