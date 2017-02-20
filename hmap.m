function[im]=hmap(fnum,cvs,n,conta);
figure(fnum);
clf
idx=round(linspace(1,size(cvs,1),n));
[xs,ys]=ndgrid(idx,idx);
im=repmat(zeros(50,50),n,n);
ax=gca;
for i=1:n
    for j=1:n;
        if ~conta
        ax=subplot(n,n,j+n*(i-1));
        end
        lhv=heatmap(ax,cvs(xs(i,j),:),cvs(ys(i,j),:),conta);
        
        im((i-1)*50+1:i*50,(j-1)*50+1:j*50)=lhv;
    end
end
imagesc(im)
end