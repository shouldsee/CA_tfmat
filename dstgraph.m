irule=zeros(1,18);
r1=(0:2^18-1)';
rule1=1-(dec2base(r1,2,18)-'0');
rule2=rule1;
rule2(:,1:9)=rule1(:,18:-1:10);
rule2(:,10:18)=rule1(:,9:-1:1);
r2=base2dec(char(rule2+'0'),2);
r2=min(r1,r2);

%%
dmat=sparse(2^18,2^18);
rnums=0:2^18-1;

%%
samplesys
sys.hmax=25;
sys00=change_adv(sys,'2dtca',{6152,0.5},0);
msh=100;
% nodes={};
% rnums=[];
% dmat=ones(msh,msh)*inf;
sys0=sys00;
% nodes{1}=sys0.alias;
% rnums(1)=sys0.od;
% dict(sys0.od+1)=1;



% any(cellfun(@(x) isequal(x, 6152), nodes))
c=combnk(1:18,2);
l=length(c);
mutate=zeros(length(c)+18,18);
sub=[1:l 1:l l+1:l+18; c(:)' 1:18];
mutate=zeros(18,18);
idx=logical(eye(18));
% siz=size(mutate);
% idx=sub2ind(siz,sub(1,:),sub(2,:));
% % mutate(1:l,c(:,1))=1;mutate(1:l,c(:,2))=1;
mutate(idx)=1;
imagesc(mutate)
mutate=[zeros(1,18);mutate];
l=size(mutate,1);
%%
imax=50;k=0;
while true
    
%     rnum=sys0.od;
avi=(sys0.rdf([l sys0.N sys0.sizf(sys0)]));  
avc=avi;         
h=shiftdim(fspecial('gaussian', [3 3], 1),-2 );
[xs,ys,zs]=ndgrid(1:l,1:size(avc,2),2:sys0.dd-1,2:sys0.dd-1);
idx=sub2ind(size(avc),xs,ys,zs);
cvc=zeros(sys0.hmax,l^2);

fprintf('expanding %d......',sys0.od)
    rules=xor(sys0.rule,mutate);
    rulenums=base2dec(char(flip(rules,2)+'0'),2);
    sub=combnk(rulenums,2);
    idx=sub2ind([2^18,2^18],sub(:,1),sub(:,2));
%     syss{1}=sys0;
    for i=1:l;
        syss{i}=change_adv(sys0,'2dtca',{rulenums(i),0.5},0);
    end
    for horizon=1:sys0.hmax
         ablur=convn(avc-.5,h,'same');
         for i=1:l;
         avc(i,:,:,:)=syss{i}.adv(squeeze(avc(i,:,:,:)),horizon);
         end
    end
    dmat(idx)=abs( (pdist(corr(reshape(ablur,l,[])'))));
%     cvc(horizon,:)= reshape(abs( squareform(pdist(corr(reshape(ablur,l,[])'))))  ,1,[]);
         
    sys0=change_adv(sys0,'2dtca',{randi([0 2^18-1]),0.5},0);
    k=k+1;
    if k==5;
        save('tmp1');
        k=0;
    end
fprintf('done\n')
drawnow
end
% %%
% % bvi=(sys0.rdf([N sys0.sizf(sys0)]));
% histo0=(repmat(avi(1,:),[sys0.hmax,1]));
% cvs0=(zeros(sys0.hmax,1));
% 
% avc=(avi);
% bvc=(bvi);
% cvs=cvs0;
% h=shiftdim(fspecial('gaussian', [3 3], 1),-1 );
% [xs,ys,zs]=ndgrid(1:size(avc,1),2:sys.dd-1,2:sys.dd-1);
% idx=sub2ind(size(avc),xs,ys,zs);
% 
% while horizon<sys.hmax;
% %     if pau; fprintf('%d\t%d\n',od,horizon);    end
%     horizon=horizon+1;    
% 	ablur=convn(avc-.5,h,'same');
% 	bblur=convn(bvc-.5,h,'same');
%     cvc= abs( [corr(ablur(:),bblur(:))]);
%     avcnew=(sys.adv(avc,horizon));
%     bvcnew=(sys0.adv(bvc,horizon));
%     histo(horizon,:)=gather(avc(1,:));
%     cvs(horizon,:)=cvc;    
%     
% if horizon~=sys.hmax;
%     avc=avcnew;
%     bvc=bvcnew;
%     continue
% end
% end
%     dmat(dmat==0)=inf;
% for i=1:imax;
%    
% %     
% % %     sys0=dict(sum())
% %     p=exp(-d(1,:));
% %     rnum=rnums(gendist(p,1,1));
% % %     rule=flip(dec2base(rnum,2,18)-'0');
% %     sys0=change_adv(sys0,'2dtca',{rnum,0.5},0);    
%     rule=sys0.rule;flpidx=randi([1,18]);rule(flpidx)=~rule(flpidx);
%     newrnum=base2dec(char(flip(rule)+'0'),2);
%     sys=change_adv(sys0,'2dtca',{newrnum,0.5},0);
%     d=finddst(sys,sys0);
%     
%     if ~ismember(sys.od,rnums);
%     nodes{end+1}=sys.alias;
%     rnums(end+1)=sys.od;
%     dict(sys.od+1)=size(rnums,2);
%     if max(size(nodes))==size(dmat,1);dmat=padarray(dmat,[msh msh],0,'post');end
%     end
%     a=dict(sys0.od+1);
%     b=dict(sys.od+1);
%     if a>b
%     c=a;
%     a=b;
%     b=c;
%     end
%     dmat(a,b)=d;
%     
%     if exp(-d)>2*rand();
%         sys0=sys;
% %         dmat(1,dict(sys.od+1))=finddst(sys00,sys);
%     end 
%     fprintf('%d of %d, d=%d \n',i,imax,d);
% end
% save('tmp');
% 
% % % dmat(dmat==0)=inf;
% % nnodes=max(size(nodes));
% % edgemat=1-dmat(1:nnodes,1:nnodes);
% % 
% % % % edgemat=dmat(1:nnodes,1:nnodes);
% % edgemat(edgemat==1)=0;
% % edgemat(edgemat<0.6)=0;
% % G=graph(edgemat,nodes);
% % p=plot(G);
% % % G.Edges.LWidths = 7*(G.Edges.Weight-min(G.Edges.Weight))/(max(G.Edges.Weight)-min(G.Edges.Weight))+0.001;
% % G.Edges.LWidths=exp(3*(G.Edges.Weight-0.5));
% 
% % p.LineWidth = G.Edges.LWidths;
% % layout(p,'force3')
% % labelnode(p,1:max(size(G.Nodes)),rnums)
% % drawnow
% end
%%
figure(1)
cap=1000;
% labelnode(p,1:max(size(G.Nodes)),nodes)
dmat=padarray(dmat,max(size(dmat))-size(dmat),inf,'post');
dmat(isinf(dmat) | isnan(dmat))=0;
dmat=(dmat+dmat')/2;
% nnodes=min(max(size(nodes)),cap);
% edgemat=1-dmat(1:nnodes,1:nnodes);

% % edgemat=dmat(1:nnodes,1:nnodes);
% edgemat(edgemat==1)=0;
% edgemat(edgemat<0.57)=0;
% isobool=sum(edgemat,1)==0;

%%
% dmat=(dmat+dmat')/2;
figure(1)
nodes=rnums;
edgemat=dmat;
edgemat(edgemat>0.43)=0;
isobool=sum(edgemat,1)==0;
nodeidx=find(1-isobool);
[xs,ys]=ndgrid(nodeidx,nodeidx);
idx=sub2ind([2^18,2^18],xs,ys);
emat=full(edgemat(idx));
nodes=cellstr(num2str(rnums(nodeidx)'));
G=graph(emat,nodes,'upper','OmitSelfLoops')
% G=graph(emat,);
% G=rmnode(G,find(isobool));
p=plot(G);
G.Edges.LWidths=exp(3*(G.Edges.Weight-0.5));
p.LineWidth = G.Edges.LWidths;
layout(p,'force')
labelnode(p,1:max(size(G.Nodes)),nodes);
highlight(p,[1],'NodeColor','g','MarkerSize',10)
%%
irule=zeros(1,18);
r1=(0:2^18-1)';
rule1=1-(dec2base(r1,2,18)-'0');
rule2=rule1;
rule2(:,1:9)=rule1(:,18:-1:10);
rule2(:,10:18)=rule1(:,9:-1:1);
r2=base2dec(char(rule2+'0'),2);
r=min(r1,r2);

sys0=sys00;
sys=change_adv(sys,'2dtca',{r2(6153),0.5},0);

finddst(sys0,sys)
% r2=r1;
% for r=r1;
%     rule=1-dec2base(r,2,18)-'0';
%     irule(1:9)=rule(18:-1:10);
%     irule(10:18)=rule(9:-1:1);
%     inum=base2dec(char(irule+'0'),2);
%     
%     r2=min(r,inum);
% end