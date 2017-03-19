%%
global env
env=[];
env.henseldict=['b0_';
    'b1c';
    'b1e';
    'b2a';
    'b2c';
    'b3i';
    'b2e';
    'b3a';
    'b2k';
    'b3n';
    'b3j';
    'b4a';
    's0_';
    's1c';
    's1e';
    's2a';
    's2c';
    's3i';
    's2e';
    's3a';
    's2k';
    's3n';
    's3j';
    's4a';
    'b2i';
    'b3r';
    'b3e';
    'b4r';
    'b4i';
    'b5i';
    's2i';
    's3r';
    's3e';
    's4r';
    's4i';
    's5i';
    'b2n';
    'b3c';
    'b3q';
    'b4n';
    'b4w';
    'b5a';
    's2n';
    's3c';
    's3q';
    's4n';
    's4w';
    's5a';
    'b3y';
    'b3k';
    'b4k';
    'b4y';
    'b4q';
    'b5j';
    'b4t';
    'b4j';
    'b5n';
    'b4z';
    'b5r';
    'b5q';
    'b6a';
    's3y';
    's3k';
    's4k';
    's4y';
    's4q';
    's5j';
    's4t';
    's4j';
    's5n';
    's4z';
    's5r';
    's5q';
    's6a';
    'b4e';
    'b5c';
    'b5y';
    'b6c';
    's4e';
    's5c';
    's5y';
    's6c';
    'b5k';
    'b6k';
    'b6n';
    'b7c';
    's5k';
    's6k';
    's6n';
    's7c';
    'b4c';
    'b5e';
    'b6e';
    's4c';
    's5e';
    's6e';
    'b6i';
    'b7e';
    's6i';
    's7e';
    'b8_';
    's8_';    
];


%%
hfir=cat(3,[0 0 0; 0 0 0; 0 0 0],...
            [1 0 0;0 0 0; 0 0 0],...
             [0 1 0; 0 0 0; 0 0 0],...
             [1 0 1; 0 0 0; 0 0 0],...
             [0 1 0; 1 0 0; 0 0 0],...
             [1 0 0; 0 0 1; 0 0 0],...
             [1 1 0;0 0 0 ; 0 0 0],...
             [0 1 0; 0 0 0; 0 1 0],...
             [1 0 0; 0 0 0; 0 0 1],...
             [1 0 1; 0 0 0; 1 0 0],...
             [0 1 0; 1 0 1; 0 0 0],...
             [1 0 0; 0 0 1; 0 1 0],...
             [ 1 1 0;1 0 0; 0 0 0],...
             [1 1 1; 0 0 0; 0 0 0],...
             [1 0 1; 0 0 1; 0 0 0],...
             [1 0 1; 0 0 0; 0 1 0],...
             [1 1 0; 0 0 0; 0 0 1],...
             [1 1 0; 0 0 1; 0 0 0],...
             [1 1 0; 0 0 0; 0 1 0],...
             [1 0 1; 0 0 0; 0 1 0],...
             [0 1 0; 0 0 0; 1 0 1],...
             [1 0 1; 1 0 0; 0 1 0],...
             [1 1 1; 0 0 1; 0 0 0],...
             [1 0 1; 1 0 1; 0 0 0],...
             [1 1 1; 0 0 0; 1 0 0],...
             [1 0 1; 0 0 1; 1 0 0],...
             [1 1 0; 1 0 0; 0 0 1],...
             [1 1 0; 0 0 0; 0 1 1]);
hfir=cat(3,hfir,1-hfir);
hfir(2,2,:)=0;
rvct=reshape(2.^(0:8),3,3);
eigen=sum(sum(hfir.*rvct,1),2);

a=squeeze(eigen);
% indices to unique values in column 3
[~, ind] = unique(a);
% duplicate indices
duplicate_ind = setdiff(1:max(size(a)), ind);
% duplicate values
duplicate_value = a(duplicate_ind);
         
hfir=hfir(:,:,ind);
hfir1=hfir;
hfir1(2,2,:)=1;
hfir=cat(3,hfir,hfir1);

eigen=sum(sum(hfir.*rvct,1),2);
eigen=squeeze(eigen);
eind=eigen+1;


configs=reshape((dec2base(0:2^9-1,2,9)-'0')',3,3,[]);
compress=@(a)sum(sum(a,1),2);

%%
firs=[];
rvctx=flip(rvct,1);
rvcty=flip(rvct,2);
% rvct=padarray(rvct,[1 1],0,'post');
% rvctx=padarray(rvctx,[1 1],0,'post');
% rvcty=padarray(rvcty,[1 1],0,'post');
for i=1:4;
%     firs=cat(3,firs,rot90(rvct,i),rot90(rvctx,i),rot90(rvcty,i));
    firs=cat(4,firs,rot90(rvct,i),rot90(rvctx,i));
end

%%


eigen0=squeeze(compress(configs.*rvct));
% [~,ind0]=unique(eigen0);
% size(ind0);
[seigen0,sidx]=sort(eigen0,'ascend');
eigen=squeeze(min(compress(configs.*firs),[],4));
[ueigen, ind] = unique(eigen);
% uind=
ueigen2idx=sum((1:512==(ueigen+1)).*(1:102)',1);


hfir=configs(:,:,ueigen+1);
perhfir=permute(hfir,[1 3 2]);
phfir=padarray(perhfir,[1 0 1],-1,'both');
% phfir(5,:,5)=ueigen+1;
im=(reshape(phfir,[],5));

% imagesc(im)
% set(X,Tick)
% size(im)

imagesc(im')
ax=gca;
tklabels=ueigen2idx(ueigen+1);
tks=(0:101)*5+3;
set(ax,'XTick',tks);
set(ax,'XTickLabels',tklabels)
%%
rule=zeros(512,1);
ind0=find(hfir(2,2,:)==0);
ind1=find(hfir(2,2,:)==1);
hfir0=hfir(:,:,ind0);
hfir1=hfir(:,:,ind1);
b3=ind0((squeeze(compress(hfir0))==3));
s2=ind1((squeeze(compress(hfir1))==(2+1)));
s3=ind1((squeeze(compress(hfir1))==(3+1)));
rpre=[b3;s2;s3];
ntrule=zeros(102,1);
ntrule(rpre)=1;
% ntrule=flip(ntrule);
ntnum=char(flip(ntrule')+'0');
ntnumhex=bin2hex(ntnum,'post');


% size(eigen)
proj=eigen(sidx);
proj=proj+1;
[a,i]=unique(proj);
[~,dict]=sort(a);
% sum((proj==a').*dict',2);
env.rca2ntca=sum((proj==a').*dict',2);;


% uproj=ind;
% % ntnum=sum(ntrule.*2.^(0:101)');
% rule(uproj(ntrule==1))=1;
% rnum=char(rule'+'0');
%%
%  figure



% proj=sum((eigen==ueigen').*ind',2);
%%
% k0=28;
% % k=[0,16,32,64]
% k=[0,k0];
% k=2.^(k);
% solution=[];
% for j=1:size(k,2)-1;
% a=shiftdim(k(j):k(j+1)-1,-2);
% b=2^98-a;
% fir=[a b a; b a b; a b a];     
% eigen=squeeze(sum(sum(fir.*hfir,1),2));
% siz=size(eigen,2);
% for i=1:siz;
%     [~,ind]=unique(eigen(:,i));
%     if size(ind)==siz;
%         solution=[solution; i];
%     end
% end
% end
% size(solution)
% %     size()
% 
%              
%              
