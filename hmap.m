function[]=hmap(fnum,cvs);
figure(fnum);
idx=round(linspace(1,100,5));
[xs,ys]=ndgrid(idx,idx);
for i=1:5
    for j=1:5;
        ax=subplot(5,5,j+5*(i-1));
        heatmap(ax,cvs(xs(i,j),:),cvs(ys(i,j),:));
    end
end
end