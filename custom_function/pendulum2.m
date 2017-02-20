function [ xdt ] = pendulum2( x,dampk )
%% x(1)=theta;
%% x(2)=thetadt;
xdt=0*x;
% xdt(:,1)=1-dampk*sin(mod(x(:,1)/pi,1));
xdt(:,1)=1-dampk*abs(sin(mod(x(:,1)*pi,pi)));
% xdt(:,2)=x(:,1)-x(:,2);
xdt(:,2)=1-dampk*abs(sin(mod(x(:,1)*pi,pi)))-x(:,2);
% xdt(:,1)=x(:,2);
% xdt(:,2)=-9.81*sin(x(:,1))-dampk.*x(:,2);
%UNTITLED2 Summary of this function goes here
%   Detailed explanation goes here


end

