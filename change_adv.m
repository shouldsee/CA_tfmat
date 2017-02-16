
function[sys,funcs]=change_adv(sys0,familyname,params);
% struct('adv','rdf','sizf', 'crit',...
% {@, @, @, @,});
% coder.extrinsic('sprintf');
% sys.alias=sprintf('%d',params(1));
sys=sys0;
sys.od=params(1);
covmd='same';
usegpu=0;
    
%% set array size
if strncmp(familyname,'2d',2)    
    sys.dd=floor(sqrt(sys.k));
    sys.sizf=@(sys)[sys.dd sys.dd];

    if strcmp(covmd,'valid');
    torus2=@(a)[a(:,end,:),a,a(:,1,:)];
    torus1=@(a)cat(3,a(:,:,end),a,a(:,:,1));
    torus=@(a) torus1(torus2(a));
    end
    if strcmp(covmd,'same');torus=@torus2d;end
end

if strncmp(familyname,'1d',2)    
    sys.dd=floor((sys.k));   
    sys.sizf=@(sys)[sys.dd];
if strcmp(covmd,'valid')
torus=@(a)[a(:,end),a,a(:,1)];
end
if strcmp(covmd,'same')    ;
torus=@torus1d;
end
end


if strncmp(familyname,'2dMlog',6) | strncmp(familyname,'2dVlog',6);

if strncmp(familyname,'2dMlog',6);
fir=(ones(3,3));
elseif strncmp(familyname,'2dVlog',6);
fir=[0 1 0; 1 1 1; 0 1 0;];
end
fir=shiftdim(fir,-1);

if usegpu;
    fir=gpuArray(fir);
end


convopt=@(a) convn(a,fir/sum(fir(:)),covmd);
logistic=@(x)phi.*x.*(1-x);
sys.adv=@(a,horizon)logistic(convopt(torus(a)));
end
    
if strncmp(familyname,'1dlog',5);
    sys.adv=adv_log1d_torus(params(1));
end


if strncmp(familyname,'1deca',5);
    rnum=params(1);
    fir=2.^(2:-1:0);
    fir=2.^(0:2);
    if usegpu;
        fir=gpuArray(fir);
    end
    rule=flip(dec2base(rnum,2,8)-'0');
%     sys.adv=@(a,horizon)rule(convn(torus(a),fir,'valid')+1);
    sys.adv=@(a,horizon)rule(convn(torus(a),fir,covmd)+1);
end


if strncmp(familyname,'2dtca',5);
    rnum=params(1);
    fir=shiftdim([1 1 1;
                  1 9 1;
                  1 1 1],-1);
    if usegpu;
        fir=gpuArray(fir);
    end
  
    rule=flip(dec2base(rnum,2,18)-'0');
    sys.adv=@(a,horizon)rule(convn(round(torus(a)),fir,covmd)+1);
    alias='b';
    ps=1;
    for i=find(rule);
        if i>=10 & ps;
            alias=[alias,'s'];
            ps=0;
        end
        alias=[alias,num2str(mod(i-1,9))];
    end
        
    sys.alias=alias;
end

%% set randomization and distance functions

if strcmp(familyname(end-2:end),'log');
dsta=@(a,b)(abs(a-b));
dstb=@(c)mean(mean(min(c,1-c),2),3);
sys.dst=@(a,b) dstb(dsta(a,b));
sys.rdf=@rand;
end

if strcmp(familyname(end-1:end),'ca');
 sys.dst=@(a,b) mean(mean(xor(a,b),2),3);
 sys.rdf=@(siz)randi([0 1],siz);
   
end


end

%%
function[a]=torus1d(a);
a(:,1,:)=a(:,end-1,:);a(:,end,:)=a(:,2,:);
end

function[a]=torus2d(a);
a(:,1,:)=a(:,end-1,:);a(:,end,:)=a(:,2,:);
a(:,:,1)=a(:,:,end-1);a(:,:,end)=a(:,:,2);   
end
%% coupled logistic torus
% sys.rdf=@(x) (rand(x));
% avi=sys.rdf([N sys.k]);
% bvi=sys.rdf([N sys.k]);
% phi=od;
% torus=@(a)[a(:,end),a,a(:,1)];
% convopt=@(a) convn(phi.*a.*(1-a),[1 1 1]/3,'valid');
% adv=@(a)convopt(torus(a));
function[adv]=adv_log1d_torus(phi)
torus=@(a)[a(:,end),a,a(:,1)];
convopt=@(a) convn(a,[1 1 1]/3,'valid');
logistic=@(x)phi.*x.*(1-x);
adv=@(a,horizon)logistic(convopt(torus(a)));
end

function[adv]=adv_log2d_torus(phi,fir);
torus2=@(a)[a(:,end,:),a,a(:,1,:)];
torus1=@(a)cat(3,a(:,:,end),a,a(:,:,1));
torus=@(a) torus1(torus2(a));
fir=shiftdim(fir,-1);
convopt=@(a) convn(a,fir/sum(fir(:)),covmd);
logistic=@(x)phi.*x.*(1-x);
adv=@(a,horizon)logistic(convopt(torus(a)));
end
% linopt=@(a,W,horizon) permute(sum(a.*W(horizon,:,:),2),[1 3 2]);
% adv=@(a,horizon)min(max(0,linopt(a,Wnew,horizon)),1);
% convopt=@(a) convn(phi.*a.*(1-a),[1 1 1]/3,'same');
% adv=@(a)convopt(a);

%% ANN funcs
% Wnew=W+(rand(size(W))-0.5)/50;
% Wnew=0.6*(rand(size(W))-0.5);
% Wnew=1*(rand(size(W))-0.5);
% Wnew=squeeze(Ws(od,:,:,:));