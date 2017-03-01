function [ lhv1] = heatmap(ax,h1,h2,repress )
%UNTITLED7 Summary of this function goes here
%   Detailed explanation goes here
hrange=linspace(0,1,50);
% figure(3)
[x,y]=ndgrid(hrange,hrange);

% his1=histogram2(ax,h1,h2,hrange,hrange,'Normalization','pdf');
% hv1=his1.Values;


X = h1;
Y = h2;

%# bin centers (integers)
xbins = hrange;
ybins = hrange;
xNumBins = numel(xbins); yNumBins = numel(ybins);

%# map X/Y values to bin indices
Xi = round( interp1(xbins, 1:xNumBins, X, 'linear', 'extrap') );
Yi = round( interp1(ybins, 1:yNumBins, Y, 'linear', 'extrap') );

%# limit indices to the range [1,numBins]
Xi = max( min(Xi,xNumBins), 1);
Yi = max( min(Yi,yNumBins), 1);

%# count number of elements in each bin
hv1 = accumarray([Yi(:) Xi(:)], 1, [yNumBins xNumBins]);

lhv1=log(hv1);
lhv1(isinf(lhv1))=0;
if ~repress
imagesc(ax,hrange,hrange,lhv1);
% xlim([0,1]);
% ylim([0,1])
view([0,-90])
end

end

