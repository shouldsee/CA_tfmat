function[incr]=RK4(eof,dof,dt);
wt=shiftdim([1 2 2 1]/6,-1);
k1=eof(dof);
k2=eof(dof+dt/2*k1);
k3=eof(dof+dt/2*k2);
k4=eof(dof+dt*k3);
incr=dt*sum(wt.*cat(3,k1,k2,k3,k4),3);

end