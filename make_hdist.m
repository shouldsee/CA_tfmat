configs=(1:2^9)'-1;
binConf=dec2base(configs,2,9)-'0';
size(binConf);
binCoconf=permute(binConf*2,[1 3 2])+permute(binConf,[3 1 2]);

tp=reshape(binCoconf,[],9)';
htp=hist(tp,0:3)';
nhtp=htp./sum(htp,2);
Hxy= sum(-nhtp.*log2(nhtp),2,'omitnan');
Hxy=reshape(Hxy,2^9,[]);

tp=reshape(binConf,[],9)';
htp=hist(tp,0:3)';
nhtp=htp./sum(htp,2);
Hx= sum(-nhtp.*log2(nhtp),2,'omitnan');

hdist=Hxy-(Hx+Hx')/2;
% Hx=
% E(isnan(E))=0;
% size(nhtp)