%%
if ~exist('init','var');
dmat=sparse(2^18,2^18);
rnums=0:2^18-1;
init=0;


t=readtable('Annotations/b0out');
lst=t.Var1;
lst=[6152;lst];
od0=lst(1);

E0=0*rnums;
G0=logical(0*rnums);
G1=G0;
V0=logical(0*rnums);
end


%%
samplesys
sys.hmax=11; % hmax need to be odd
sys.N=300;
od0=6152;
sys00=change_adv(sys,'2dtca',{od0,0.5},0);
sys0=change_adv(sys,'2dtca',{6408,0.5},0);
sys0=change_adv(sys,'2dtca',{14344,0.5},0);
sys0=change_adv(sys,'2dtca',{137224,0.5},0);
sys0=change_adv(sys,'2dtca',{145416,0.5},0);
sys0=change_adv(sys,'2dtca',{145672,0.5},0);
sys0=change_adv(sys,'2dtca',{14600,0.5},0);
sys0=change_adv(sys,'2dtca',{145672,0.5},0);
msh=100;
%%
% nodes={};
% rnums=[];
% dmat=ones(msh,msh)*inf;
% sys0=sys00;
% nodes{1}=sys0.alias;
% rnums(1)=sys0.od;
% dict(sys0.od+1)=1;



c=combnk(1:18,2);
l=length(c);

sub=[1:l 1:l l+1:l+18; c(:)' 1:18];
mutate=zeros(length(c)+18,18);

mutate=zeros(18,18);
idx=logical(eye(18));
mutate(idx)=1;
mutate=[zeros(1,18);mutate];
imagesc(mutate)
% mutate=[zeros(1,18);mutate];
l=size(mutate,1);
%%
imax=50;k=0;cst=1;
%%
lst=unique(randi([0,2^18-1],[50 1]));
od0=lst(1);
% G1=G0;

for od0=lst(find(lst==od0):end)';


%% init seed
sys00=change_adv(sys,'2dtca',{od0,0.5},0);
G1=G1 | G0;
G0=logical(0*rnums);
if V0(od0+1)==1;
    fprintf('seed at %d ,skipped \n',od0);
    continue
end
G0(sys00.od+1)=1;
V0;
sys0=sys00;
fprintf('seed at %d \n',od0);

while true 
    %% major search loop
    more=find(G0 & ~V0)';
if isempty(more) | sum(G0)>30;
    fprintf('no more nodes to expand, reseed \n')
    break       
end
s=sum(dmat+dmat',1);
[~,ind]=sort(s(more),'descend');
more=more(ind);
% [~,rnum]=max(s(more));
%%
morer=permute(dec2base(more,2,18)-'0',[1 3 2]);
% rules=bsxfun(@xor,morer-1,mutate)
morerules=sum(xor(morer,shiftdim(mutate,-1)).*2.^(shiftdim(17:-1:0,-1)),3);
ingroup=ismember(morerules,G0);

outmorenum=length(mutate)-sum(ingroup,2);
morerules(ingroup)=-1;
morerules=sort(morerules,2,'descend')

%%
parfor ri=0:numel(more)
    %% abandon node if too many adjacent nodes by criteria
    %% Otherwise, add node to the group
    %% ri=0 gives traj for
    if ~ri
        sys0=sys00;
        sys0=change_adv(sys0,'2dtca',{rnum-1,0.5},0);
        V0(rnum)=1;
        fprintf('expanding %d......',sys0.od)   
        rules=xor(sys0.rule,mutate);
        
        rulenums=unique([base2dec(char(flip(rules,2)+'0'),2);find(G0)'-1]);
        sub=combnk(rulenums,2)+1;
        idx=sub2ind([2^18,2^18],sub(:,1),sub(:,2));
        l=length(rulenums);

avi=repmat(sys0.rdf([1 sys0.N sys0.sizf(sys0)]),[l 1]);  
bvi=(sys0.rdf([l sys0.N sys0.sizf(sys0)]));  
avc=avi; 
bvc=bvi;
h=shiftdim(fspecial('gaussian', [3 3], 1),-2 );
% [xs,ys,zs]=ndgrid(1:l,1:size(avc,2),2:sys0.dd-1,2:sys0.dd-1);
% cidx=sub2ind(size(avc),xs,ys,zs);
% cvc=zeros(sys0.hmax,l^2);

%     syss{1}=sys0;
    parfor i=1:l;
        syss{i}=change_adv(sys0,'2dtca',{rulenums(i),0.5},0);
    end
    for horizon=1:sys0.hmax
         ablur=convn(avc-.5,h,'same');
         bblur=convn(bvc-.5,h,'same');
         
         for i=1:l;
         avc(i,:,:,:)=syss{i}.adv(squeeze(avc(i,:,:,:)),horizon);
         bvc(i,:,:,:)=syss{i}.adv(squeeze(bvc(i,:,:,:)),horizon);
         
         end
    end
    

%     cvc(horizon,:)= reshape(abs( squareform(pdist(corr(reshape(ablur,l,[])'))))  ,1,[]);
%     E0(sys0.od+1)=E0(sys0.od+1)+cst;
%     E=dmat(sys0.od+1,:)+dmat(:,sys0.od+1)'+E0;
%     p=exp(-E);
%     p(p==1)=0;
%     p=cumsum(p/sum(p));
%     [~,rnum]=find(p>rand(),1);
   
    
%     sys0=change_adv(sys0,'2dtca',{randi([0 2^18-1]),0.5},0);
    k=k+1;
    if k==5;
%         save('tmp3');
        k=0;
    end

% a=(pdist(reshape(ablur,l,[]),'corr'));
% size(a)
% subplot(1,2,1)
% imagesc(squareform(b-a));
% subplot(1,2,2)
% imagesc(squareform(b));
% imagesc(a)


    %     dmat(idx)= 1+(pdist(reshape(ablur,l,[]),'corr'))-(pdist(reshape(bblur,l,[]),'corr'));
% a=(pdist(reshape(ablur,l,[]),'corr'));
% b=(pdist(reshape(bblur,l,[]),'corr'));
%     dmat(idx)= -(pdist(reshape(ablur,l,[]),'corr'))+(pdist(reshape(bblur,l,[]),'corr'));
    pd=-(pdist(reshape(avc,l,[]),'corr'))+(pdist(reshape(bvc,l,[]),'corr'));
    spd=squareform(pd);

    adj_pre=rulenums(log(max(spd(rulenums==sys0.od,:),0))>-2)+1;

    adj=adj_pre((G0(adj_pre)==0));
    if length(adj)>5;
        G0(rnum)=0;
        fprintf('too many neighbors, abandon node...')

%         G0i=find(G0);
%         [~,gind]=ismember(G0i-1,rulenums);
%         [sub1,sub2]=ndgrid(G0i,G0i);
%         [gsub1,gsub2]=ndgrid(gind,gind);
%         idx=sub2ind([2^18,2^18],sub1,sub2);
%         gidx=sub2ind(size(spd),gsub1,gsub2);
%         dmat(idx)=spd(gidx);

    else
    G0(adj)=1;
    dmat(idx)=pd;
    end
    fprintf('done\n')
    
    
end
% drawnow
% % pause
end
% %%
end

%%
% dmat=(dmat+dmat')/2;
figure(1)
nodes=rnums;
edgemat=(dmat+dmat')/2;
% edgemat(edgemat>0.47)=0;
edgemat(spfun(@(x)x<0.25,edgemat))=0;
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

cap=1000;
nodeidx=[nidx(1:min(cap,numel(nidx)))];
if ~any(nodeidx==6153);
nodeidx=[nodeidx(1:end-1) 6153];
end
[xs,ys]=ndgrid(nodeidx,nodeidx);
idx=sub2ind([2^18,2^18],xs,ys);
% emat=(edgemat(idx));

emat=(dmat(idx));
emat=(emat+emat')/2;

x=emat(emat~=0);
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


nodes=cellstr(num2str(rnums(nodeidx)'));
% G=graph(emat,nodes,'upper','OmitSelfLoops')
G=graph(emat,nodes,'OmitSelfLoops');
% G=graph(emat,);
% G=rmnode(G,find(isobool));
% G.Edges.LWidths=exp(3*-(G.Edges.Weight-1));
% G.Edges.Weight=exp(3*-(G.Edges.Weight-1));
G.Edges.LWidths=exp(3*(G.Edges.Weight));
% G.Edges.Weight=exp(3*G.Edges.Weight);
%%
graph2visjs(G,sprintf('BSatlas%dnode.js',size(G.Nodes,1)));
%%
% 
% p=plot(G);
% p.LineWidth = G.Edges.LWidths;
% layout(p,'force')
% labelnode(p,1:max(size(G.Nodes)),nodes);
% highlight(p,find(nodeidx==6153),'NodeColor','g','MarkerSize',10)
% 
