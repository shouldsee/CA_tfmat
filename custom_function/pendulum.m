function [ xdt ] = pendulum( x )
%% x(1)=theta;
%% x(2)=thetadt;
xdt=0*x;
xdt(:,1)=mod(x(:,1)+x(:,2)+pi,2*pi)-x(:,1)-pi;
% xdt(:,1)=x(:,2);
xdt(:,2)=-9.81*sin(x(:,1));
%UNTITLED2 Summary of this function goes here
%   Detailed explanation goes here


end

