function [ output_args ] = heatmap(ax,h1,h2 )
%UNTITLED7 Summary of this function goes here
%   Detailed explanation goes here
hrange=linspace(0,1,50);
% figure(3)
his1=histogram2(h1,h2,hrange,hrange,'Normalization','pdf');
hv1=his1.Values;
lhv1=log(hv1);
lhv1(isinf(lhv1))=0;
imagesc(ax,hrange,hrange,lhv1);
% xlim([0,1]);
% ylim([0,1])
view([0,-90])
end
