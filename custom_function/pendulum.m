function [ xdt ] = pendulum( x,dampk )
%% x(1)=theta;
%% x(2)=thetadt;
xdt=0*x;
xdt(:,1)=x(:,2);
% xdt(:,1)=x(:,2);
xdt(:,2)=-9.81*sin((x(:,1)-0.5)*2*pi)-dampk.*x(:,2);
%UNTITLED2 Summary of this function goes here
%   Detailed explanation goes here


end

