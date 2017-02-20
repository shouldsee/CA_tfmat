function[dofs,ts]=odesolver(eof,dof0,ts,tdmethod);
dof=dof0;
lts=max(size(ts));
dofs=repmat(dof0,[1 1 lts]);

dofs(:,:,1)=dof0;
dts=diff(ts);

for i=2:lts;
    localincr=tdmethod(eof,dof,dts(i-1));
    dof=mod(dof+localincr,[1 0]);
%     dof(1)=mod(dof(1),2*pi);
    dofs(:,:,i)=dof;
end

end