%%  derrida plot
N=20000;
k=30;
% N=200;
% k=50;
hmax=50;

hrange=linspace(0,1,k+1);
if ~exist('lst','var');
lst=randi([0 255],[1 500]);
end

fprintf('%s\t%s\n','rulenum','horizon');

for od =lst;
sys.rvct=2.^(0:2)';
if ~od;
sys.rule=eca_rule(randi([0 255]));
else
sys.rule=eca_rule(od);
end    
rs=randi([0 2^k-1],[N 2]);
as=rs(:,1);
bs=rs(:,2);
avs=(dec2base(as,2,k))-'0';
bvs=(dec2base(bs,2,k))-'0';

avc=avs;
bvc=bvs;
horizon=0;
histo=[];
while horizon<hmax;
    horizon=horizon+1;

    avcnew=forward(avc,sys,2);
bvcnew=forward(bvc,sys,2);

h3=mean(xor(avc,bvc),2);

avc=avcnew;
bvc=bvcnew;

histo(horizon,:)=avc(1,:);

if horizon~=hmax;
    continue
end
h1=mean(xor(avs,bvs),2);
h2=mean(xor(avcnew,bvcnew),2);


his1=histogram2(h1,h2,hrange,hrange,'Normalization','pdf');
hv1=his1.Values;
lhv1=log(hv1);
lhv1(isinf(lhv1))=0;
xlim([0,1]);
ylim([0,1])
zlim([0 40])
view(-0,90)


his2=histogram2(h3,h2,hrange,hrange,'Normalization','pdf');
hv2=his2.Values;
lhv2=log(hv2);
lhv2(isinf(lhv2))=0;

figure(1)
cla
imagesc(rot90(lhv1,1));
caxis([-3 3])

figure(3)
cla
imagesc(rot90(lhv2,1))
caxis([-3 3])
title(od)
% surf(lhv);

% histogram2(h1,h2,'Normalization','cdf');
% xlim([0,1]);
% ylim([0,1])
% zlim([0 1])

% view(-50,50)
fprintf('%d\t%d\n',od,horizon)
drawnow 
end
figure(2)
imagesc(histo);
fprintf('Paused, enter to continue \n');
pause

end
