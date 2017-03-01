sys00=change_adv(sys,'2dtca',{6152,0.5},0);
msh=100;
nodes={};
rnums=[];
dmat=ones(msh,msh)*inf;
sys0=sys00;
nodes{1}=sys0.alias;
rnums(1)=sys0.od;
dict(sys0.od+1)=1;

% any(cellfun(@(x) isequal(x, 6152), nodes))
%%
imax=50;
while true
    dmat(dmat==0)=inf;
for i=1:imax;
   
%     
% %     sys0=dict(sum())
%     p=exp(-d(1,:));
%     rnum=rnums(gendist(p,1,1));
% %     rule=flip(dec2base(rnum,2,18)-'0');
%     sys0=change_adv(sys0,'2dtca',{rnum,0.5},0);    
    rule=sys0.rule;flpidx=randi([1,18]);rule(flpidx)=~rule(flpidx);
    newrnum=base2dec(char(flip(rule)+'0'),2);
    sys=change_adv(sys0,'2dtca',{newrnum,0.5},0);
    d=finddst(sys,sys0);
    
    if ~ismember(sys.od,rnums);
    nodes{end+1}=sys.alias;
    rnums(end+1)=sys.od;
    dict(sys.od+1)=size(rnums,2);
    if max(size(nodes))==size(dmat,1);dmat=padarray(dmat,[msh msh],0,'post');end
    end
    a=dict(sys0.od+1);
    b=dict(sys.od+1);
    if a>b
    c=a;
    a=b;
    b=c;
    end
    dmat(a,b)=d;
    
    if exp(-d)>2*rand();
        sys0=sys;
        dmat(1,dict(sys.od+1))=finddst(sys00,sys);
    end 
    fprintf('%d of %d, d=%d \n',i,imax,d);
end
save('tmp');

% % dmat(dmat==0)=inf;
% nnodes=max(size(nodes));
% edgemat=1-dmat(1:nnodes,1:nnodes);
% 
% % % edgemat=dmat(1:nnodes,1:nnodes);
% edgemat(edgemat==1)=0;
% edgemat(edgemat<0.6)=0;
% G=graph(edgemat,nodes);
% p=plot(G);
% % G.Edges.LWidths = 7*(G.Edges.Weight-min(G.Edges.Weight))/(max(G.Edges.Weight)-min(G.Edges.Weight))+0.001;
% G.Edges.LWidths=exp(3*(G.Edges.Weight-0.5));

% p.LineWidth = G.Edges.LWidths;
% layout(p,'force3')
% labelnode(p,1:max(size(G.Nodes)),rnums)
% drawnow
end
%%
% labelnode(p,1:max(size(G.Nodes)),nodes)
dmat=padarray(dmat,max(size(dmat))-size(dmat),inf,'post');
dmat(isinf(dmat) | isnan(dmat))=0;
dmat=(dmat+dmat')/2;
nnodes=max(size(nodes));
edgemat=1-dmat(1:nnodes,1:nnodes);

% % edgemat=dmat(1:nnodes,1:nnodes);
edgemat(edgemat==1)=0;
edgemat(edgemat<0.55)=0;
G=graph(edgemat,nodes);
p=plot(G);
G.Edges.LWidths=exp(3*(G.Edges.Weight-0.5));
p.LineWidth = G.Edges.LWidths;
layout(p,'force')
labelnode(p,1:max(size(G.Nodes)),rnums)