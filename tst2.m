
ts=0:0.1:10;
dof0=[-1;1];
dof=dof0;
lts=max(size(ts));
dofs=zeros(max(size(dof0)),lts);
tdmethod=@RK4;
eof=@pendulum;
% 
dofs(:,1)=dof0;
dts=diff(ts);
i0=2;
%%
for i=i0:lts;
    localincr=tdmethod(eof,dof,dts(i-1));
%     dof=dof+localincr+10*get_entropic_force(dof,2,dts(i-1));
    dofs(:,i)=dof;
    i0=i;
    
end
%%
xs=sin(dofs(1,:));
ys=-cos(dofs(1,:));
% scatter3(ts,dofs(:,1),dofs(:,2))
scatter3(ts,xs,ys);
% xlim([0 i0*dts(1)])
ylim([-1 1])
zlim([-1 1])
%%
ts=linspace(0,10,1000);
dof0=3*(rand(10,2)-0.5);
dofs=odesolver(@pendulum,dof0,ts,@RK4);
figure(1)
% scatter(dofs(1,:),dofs(,2),3,'x');
cla
for i=1:5;
    hold on
xs=(dofs(i,1,:));
ys=(dofs(i,2,:));
scatter3(ts,xs,ys,3,'x');
end
% ylim([-1,1])
% zlim([-1 1])
%%
%% 
N=100;
xs=zeros(2,N);
for i=1:N;
    xs(:,i)=10*get_entropic_force([1.7;0.4],4,0.2);
    i
end
RK4(@pendulum,[1.7;-.2],0.05)
hist(xs(2,:),50)
mean(xs(2,:))
%%
% /* --- Monte Carlo path sampling --- */
dt=0.05;
num_sample_paths=100;
num_time_steps=100;
cur_macrostate=[pi,-0.02]';

num_dofs=max(size(cur_macrostate));
sample_paths=zeros(num_dofs,num_time_steps,num_sample_paths);

% sigma = [1 0; 0 1]/310;
sigma=1/1410;
R=chol(sigma);
% sample_paths = EMPTY_PATH_LIST();
for i = 1:num_sample_paths
    cur_path = zeros(num_dofs,num_time_steps);
    cur_state = cur_macrostate;
    for n = 1:num_time_steps
        cur_path(:,n) = cur_state;
        localincr=tdmethod(eof,cur_state,dt);
        thermal_noise=[zeros(num_dofs/2,1);(randn(1,num_dofs/2)*R)'];
        cur_state = cur_state+localincr+thermal_noise;
        cur_state(1)=mod(cur_state(1),2*pi);
    end
    sample_paths(:,:,i) = cur_path;
end
%%
% x1s=linspace(0,2*pi,100);
% x2s=linspace(-5,5,100);
% xs=ndgrid(x1s,x2s);
% xi=[x1s(:)',xys(:)'];
[p,xi]=ksdensity(cur_path','Kernel','box','bandwidth',0.125 ...
    ,'Support',[0 -inf;2*pi inf]...
    , 'PlotFcn','contour'    ...
    )
siz=size(xi);
msh=reshape(xi,sqrt(siz(1)),sqrt(siz(1)),siz(2));
dV=prod(squeeze(msh(2,2,:)-msh(1,1,:)));
V=sum(p(:)>0)*dV;
% ksdensity(cur_path','Kernel','box','bandwidth',0.125 ...
%     ...,'Support',[0 -15;2*pi 10]...
%     , 'PlotFcn','contour'    ...
%     )
scatter3(xi(:,1),xi(:,2),p>0);
%%
figure(1)
siz=size(sample_paths);
ps=reshape(sample_paths,siz(1),[]);
scatter(ps(1,:),ps(2,:))
%%za