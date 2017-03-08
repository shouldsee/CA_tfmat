% dmat=(dmat+dmat')/2;
% figure(1)
nodes=rnums;
edgemat=(dmat+dmat');
% edgemat(edgemat>0.47)=0;
edgemat(isnan(edgemat))=0;
edgemat(spfun(@(x)x<exp(cutoff),edgemat))=0;
% edgemat(spfun(@(x)log(x)<(cutoff),edgemat))=0;
% dense=sum(edgemat.^2,1)./sum(edgemat>0,1)>0.1;
dense=0;
% dense=sum(spfun(@(x) x<0.35,edgemat),1)./sum(edgemat>0,1)>0.8;
isobool=((sum(edgemat,1))==0 | dense);
% isobool=((sum(edgemat,1))==0);
% edgemat(spfun(@(x)x<0.3,edgemat))=0;

% isobool=(sum(edgemat,1))==0;

nidx=find(1-isobool);
s=sum(edgemat,1);
[~,ind]=sort(s(nidx),'descend');
nidx=nidx(ind);
% emat=(edgemat(idx));

cap=2000;
nodeidx=[nidx(1:min(cap,numel(nidx)))];
if ~any(nodeidx==6153);
nodeidx=[nodeidx(1:end-1) 6153];
end
[xs,ys]=ndgrid(nodeidx,nodeidx);
idx=sub2ind([2^18,2^18],xs,ys);
% emat=(edgemat(idx));

emat=(edgemat(idx));
emat=(emat+emat')/2;

% x=emat(emat~=0);
% emat(emat==0)=nan;

% emat(emat>prctile(x,70))=0;
mat=[];
emat0=emat;
% for i=1:6;
% m=max(emat,[],2);
% mat(:,:,i)=m;
% emat(bsxfun(@eq,emat,m))=-Inf;
% end
% emat=emat0.*isinf(emat);
emat=(emat0+emat0')/2;
emat(isnan(emat))=0;

nodes=cellstr(num2str(rnums(nodeidx)'));
% G=graph(emat,nodes,'upper','OmitSelfLoops')
G=graph(emat,nodes,'OmitSelfLoops')
G.Nodes.Seed=ismember(rnums(nodeidx)',lst);
G.Nodes.Dense=ismember(rnums(nodeidx)',find(Dense)-1);
% G=graph(emat,);
% G=rmnode(G,find(isobool));
% G.Edges.Weight=exp(3*-(G.Edges.Weight-1));
G.Edges.LWidths=exp(3*(G.Edges.Weight));
% G.Edges.Weight=exp(3*G.Edges.Weight);
%%
% graph2visjs(G,sprintf('./Annotations/seed%d_sub%d_BSatlas%dnode.js',rnum+1,subbchi,size(G.Nodes,1)));

graph2visjs(G,sprintf('./Annotations/seed%d_BSatlas%dnode_%ddense.js',rnum+1,size(G.Nodes,1),sum(G.Nodes.Dense)));
% graph2visjs(G,sprintf('./Annotations/seed%d_sub%d_BSatlas%dnode.js',rnum+1,subbchi,size(G.Nodes,1)));