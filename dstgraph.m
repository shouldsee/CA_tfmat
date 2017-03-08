%%
if ~exist('init','var');
dmat=sparse(2^18,2^18);
rnums=0:2^18-1;
init=0;


t=readtable('Annotations/b0out');
lst=t.Var1;
lst_B0=[6152;lst];
od0=lst(1);


E0=0*rnums;
G0=logical(0*rnums);
G1=G0;
G2=G1;
Dense=G0;

V0=logical(0*rnums);

lst00=[6152 199384 185845 131764 5858 240758 103554]
end
if ~exist('bchi0','var')
bchi0=1;
end
load('seq','mlst0')
load('tmp','sps')
MSGID ='stats:pdist:ConstantPoints';
%%
samplesys
sys.hmax=13; % hmax need to be odd
sys.N=500;
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

% nodes={};
% rnums=[];
% dmat=ones(msh,msh)*inf;
sys0=sys00;
% nodes{1}=sys0.alias;
% rnums(1)=sys0.od;
% dict(sys0.od+1)=1;



c=combnk(1:18,2);
l=length(c);

sub=[1:l 1:l l+1:l+18; c(:)' 1:18]';
mutate=zeros(length(c)+18,18);
idx=sub2ind(size(mutate),sub(:,1),sub(:,2));
mutate(idx)=1;

mutate=zeros(18,18);
idx=logical(eye(18));
mutate(idx)=1;
mutate=[zeros(1,18);mutate];

% imagesc(mutate)
l=size(mutate,1);
%%
imax=50;k=0;cst=1;

%%
% lst=unique(randi([0,2^18-1],[50 1]));
% od0=lst(1);

% while length(rnums)>0;
% G2=G1|G2;
% G1=0.*rnums;

% while sum(G1)<500;
%     od0=a;

cutoff=-4.5;
for bchi=bchi0:size(mlst0,1);
    bchi0=bchi;
    subbchi=0;
    lst=mlst0(bchi,:);
%     lst=lst00;
%     lst=lst_B0;
%     lst=6152;
%     lst=43199;
%     lst=od000;
% 51240
for od0=lst(:)';
    
%   for od0=lst(find(lst==od0):end)';
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

rulenums=find(G0)'-1;
lmax=83;
    avi=repmat(sys0.rdf([1 sys0.N sys0.sizf(sys0)]),[lmax 1]);  
    bvi=(sys0.rdf([lmax sys0.N sys0.sizf(sys0)]));  
     avc=avi; 
    bvc=bvi;

while true  
more=find(G0 & ~V0 );

if isempty(more) | sum(G0)>62;
    fprintf('no more nodes to expand, reseed \n')
    break       
end

s=sum(dmat+dmat',1);
[~,ind]=sort(s(more),'descend'); 
more=more(ind);
% [~,rnum]=max(s(more));


for ri=1:numel(more)
    rnum=more(ri);
    V0(rnum)=1;

%     if ~ri
%         
%     else
    rnum=more(ri)-1;
    sys0=sys00;
    sys0=change_adv(sys0,'2dtca',{rnum,0.5},0);
    V0(rnum+1)=1;
        

         fprintf('expanding %d......',sys0.od)
        
        if G1(rnum+1)==0;        
        rules=xor(sys0.rule,mutate);
        else 
        continue
%         rules=sys0.rule;
        end
        
        rulenums0=base2dec(char(flip(rules,2)+'0'),2);
%         sort()
        rulenums0=rulenums0(~ismember(rulenums0,rulenums));
        rl=length(rulenums0);
        rulenums=[rulenums;rulenums0];
%         rulenums=unique([base2dec(char(flip(rules,2)+'0'),2);find(G0)'-1]);
        
        sub=combnk(rulenums,2)+1;
        idx=sub2ind([2^18,2^18],sub(:,1),sub(:,2));
        l=length(rulenums);

   
    h=shiftdim(fspecial('gaussian', [3 3], 1),-2 );
% [xs,ys,zs]=ndgrid(1:l,1:size(avc,2),2:sys0.dd-1,2:sys0.dd-1);
% cidx=sub2ind(size(avc),xs,ys,zs);
% cvc=zeros(sys0.hmax,l^2);

%     syss{1}=sys0;
    parfor i=l-rl:l;
        syss=change_adv(sys0,'2dtca',{rulenums(i),0.5},0);
        try
        avc(i,:,:,:)=avi(i,:,:,:);
        bvc(i,:,:,:)=bvi(i,:,:,:);
    
        for horizon=1:sys0.hmax
%          ablur=convn(avc-.5,h,'same');
%          bblur=convn(bvc-.5,h,'same');
%          
%          for i=1:l;
         avc(i,:,:,:)=syss.adv(squeeze(avc(i,:,:,:)),horizon);
         bvc(i,:,:,:)=syss.adv(squeeze(bvc(i,:,:,:)),horizon);       
        end        
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
%     pd=-(pdist(reshape(avc,l,[]),'corr'))+(pdist(reshape(bvc,l,[]),'corr'));
pa=squareform(pdist(reshape(avc(1:l,:,:,:),l,[]),'corr'));
pb=squareform(pdist(reshape(bvc(1:l,:,:,:),l,[]),'corr'));
    pd=-(pdist(reshape(avc(1:l,:,:,:),l,[]),'corr'))+(pdist(reshape(bvc(1:l,:,:,:),l,[]),'corr'));
    pd(isnan(pd))=0;
    spd=squareform(pd);
%     spd(isnan(spd))=0;
    adjprj=(max(spd(rulenums==sys0.od,:),0))>exp(cutoff) ;
    slf=(rulenums==sys0.od)';
    try
        adj_pre=rulenums(adjprj)+1;
    catch
        adj_pre=[];
    end
    adj=adj_pre((G0(adj_pre)==0));
    if sum((adj-1)==138504);       
    end
    if length(adj)>9/18*size(mutate,1);
        G0(rnum)=0;
        fprintf('too many neighbors, abandon node...')

%         G0i=find(G0);
%         [~,gind]=ismember(G0i-1,rulenums);
%         [sub1,sub2]=ndgrid(G0i,G0i);
%         [gsub1,gsub2]=ndgrid(gind,gind);
%         idx=sub2ind([2^18,2^18],sub1,sub2);
%         gidx=sub2ind(size(spd),gsub1,gsub2);
%         dmat(idx)=spd(gidx);
%     spd=spd(1:l-rl,1:l-rl);
    [~,sind]=max(spd(slf,1:l-rl+1));
     bsind=rulenums(sind)+1;
    s1=[(rnum+1),bsind];
    s1=sort(s1,2);
    slf=find(slf);
%     sind=find(sind);
    s2=[slf+sind.*0,sind];    
    s2=sort(s2,2);
    idx=sub2ind(size(dmat),s1(:,1),s1(:,2));
    idxa=sub2ind(size(spd),s2(:,1),s2(:,2));
    rulenums=rulenums(1:l-rl+1);


    
    dmat(idx)=max(spd(idxa),dmat(idx));
    Dense(rnum+1)=1;

    else
    sind=G0(rulenums+1)';
    bsind=rulenums(sind)+1;
%     bslf=rnum+1;
%     adjprji=find(adjprj);
%     adjprji=adjprji(G0(rulenums(adjprji)+1)==0);
    
    G0(adj)=1;
    rulenums=rulenums(1:l-rl+1);

%     if sum(ismember(adj,sps))
%     end
    
%     [suba1,suba2]=ndgrid(find(slf),find(sind)); 
%     idxa=sub2ind(size(spd),suba1,suba2);

%     sub=combnk(bind,2);
%     idx=sub2ind([2^18,2^18],sub(:,1),sub(:,2));
%     dmat(idx)=spd(idxa);
try
    s1=[(rnum+1)+bsind.*0,bsind];
    s1=sort(s1,2);
    slf=find(slf);
    sind=find(sind);
    s2=[slf+sind.*0,sind];    
    s2=sort(s2,2);
    idx=sub2ind(size(dmat),s1(:,1),s1(:,2));
    idxa=sub2ind(size(spd),s2(:,1),s2(:,2));

%     dmat(rnum+1,bsind)=spd(slf,sind);
% if length(s2)==1;
% end
spd(isnan(spd))=0;
dmat(idx)=max(spd(idxa),dmat(idx));
end
% dmat(s1(:,1),s1(:,2))=spd(s2(:,1),s2(:,2));
    end
    fprintf('done\n')
    
    
end
% drawnow
% % pause

end
% %%
% if sum(G1)>300;
    expt;
    subbchi=subbchi+1;
    G1=0.*rnums;
    dmat(isnan(dmat))=0;
    dmat=0.*dmat;
% end

end

%%


end
%

%%
p=plot(G);
p.LineWidth = G.Edges.LWidths;
layout(p,'force')
labelnode(p,1:max(size(G.Nodes)),nodes);
highlight(p,find(nodeidx==6153),'NodeColor','g','MarkerSize',10)

%%

emat;
dd=pdist(emat);
tree=linkage(dd);
lo = optimalleaforder(tree,dd);
semat=emat(lo,lo);

edmat=(dmat+dmat');
i=sum(edmat,1)>0;
ii=find(i);
edmat=edmat(i,i);
imagesc(dmat)
%%
% edmat(edmat<exp(cutoff))=0;
[cledmat,lo]=clst(edmat);
iii=ii(lo);
imagesc(cledmat);

%%
g1=iii(1:28);
sps=g1;
save('tmp','sps')
% num2str(g1)