function[d]=finddst(sys,sys0);
% % samplesys
% sys.k=100;
% sys=change_adv(sys,'2dtca',{6152,0.5},0);
% rule=sys.rule;flpidx=randi([1,18]);rule(flpidx)=~rule(flpidx);
% newrnum=base2dec(char(flip(rule)+'0'),2);
% sys0=change_adv(sys,'2dtca',{newrnum,0.5},0);

%%
horizon=0;
% rule=flip(dec2base(rnum,2,18)-'0');
avi=(sys0.rdf([sys0.N sys0.sizf(sys0)]));
bvi=avi;
% bvi=(sys0.rdf([N sys0.sizf(sys0)]));
histo0=(repmat(avi(1,:),[sys0.hmax,1]));
cvs0=(zeros(sys0.hmax,1));
avc=(avi);
bvc=(bvi);
histo=histo0;
cvs=cvs0;
h=shiftdim(fspecial('gaussian', [3 3], 1),-1 );
[xs,ys,zs]=ndgrid(1:size(avc,1),2:sys.dd-1,2:sys.dd-1);
idx=sub2ind(size(avc),xs,ys,zs);
while horizon<sys.hmax;
%     if pau; fprintf('%d\t%d\n',od,horizon);    end
    horizon=horizon+1;    
	ablur=convn(avc,h,'same');
	bblur=convn(bvc,h,'same');
    cvc=mean(corr(ablur(:),bblur(:)));
    
%     cvc=sys.dst(avc,bvc);
    avcnew=(sys.adv(avc,horizon));
    bvcnew=(sys0.adv(bvc,horizon));
    histo(horizon,:)=gather(avc(1,:));
    cvs(horizon,:)=cvc;    
    
if horizon~=sys.hmax;
    avc=avcnew;
    bvc=bvcnew;
    continue
end
end

%% calculate and arrange the profile 
% d=pdist((cvs),'corr');
% d=max(max(d(:)),1)-d;
% stds=std(cvs,[],2);
% dmat=sqrt(squareform(d).*stds.*stds');
% d=triu(dmat);
% ordernew=gather(mean(d(:)));
% 
% pdata=gather([dmat, 0.5*ones(sys.hmax,5),histo]);
% hmap(2,cvs,10,1);
% sys0.alias
% plot(cvs)
% drawnow 
d=1/mean(cvs);