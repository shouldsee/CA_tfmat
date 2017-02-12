K=0.44;
ss=[-1 1]
mmax=20;
global oper opts m oper1
opt.renorm=0;
opt.decomp='eig';
corrf=1;
err=1;
ra=1;

    opts.disp = 0;   % disable diagnostic information in eigs
    opts.issym = 1;
    opts.real = 1;
%     [Psi Energy] = eigs(H_super,1,'SA', opts);


oddfirst=reshape(reshape(1:8,2,4)',1,[]);
[msh1p msh1 msh2p msh2]=ndgrid(ss,ss,ss,ss);
logW=-0.5*K*(msh1.*msh2+msh1p.*msh2p+msh1.*msh1p+msh2.*msh2p);
% W=exp(-0.5*K*(msh1.*msh2+msh1p.*msh2p+msh1.*msh1p+msh2.*msh2p));
% W=exp(logW);
% oper=@times;%     corrf_pre=mean(squeeze(phi).*squeeze(psi),3);
%     corrf=mean(corrf_pre(:));

W=logW;
oper1=@plus;
oper1=@times;
oper=@times;
T_ml=W;
figure(2)
fi=imagesc(zeros(2*mmax,2*mmax));
corrs=[];
% for i=1:1024;
% Ts=1:0.2:5;
Ts=linspace(1,5,50);
Ks=1./Ts;
% Ks=-0.6:0.5:0.6;
% Ts=1./Ks;
% Ks=-0.20;
countmax=10;
% count=0;
corrs=0.*Ks;
mags=0*Ks;
Kps=0.*Ks;
idx=0;
for K=Ks;
idx=idx+1; 
T=1/K;
err=1;

logW=-0.5*K*(msh1.*msh2+msh1p.*msh2p+msh1.*msh1p+msh2.*msh2p);
W=exp(logW);
% W=logW;
T_ml=W;
count=0;

while ((err> 1e-15|2*m<mmax )&count<countmax);
    m=size(T_ml,1);
    try
        %% get phi and psi, and calculate observables.
        [phi,psi]=superblock(T_ml,W);
        rhoL=squeeze(sum(sum(oper(phi, psi),3),4));
%         [corrfnew,mag]=NNcorr(phi,psi,ss);
        p=reshape(oper(squeeze(phi),squeeze(psi)),[m 2 m 2]);    
        pmag=squeeze(sum(sum(p,1),3));
        Kp=log(pmag(2)/pmag(1))/2;
        ssj=shiftdim(ss,-2);        
%         corrf_pre2=p.*(ss.*ssj);....*shiftdim(ss,-2);
        corrf_pre2=pmag.*ss.*(ss');
        msite=ss+ssj;
%         mag_pre=p.*msite;
        mag_pre=-p.*log(p);
        mag=sum(mag_pre(:));
        corrfnew=sum(corrf_pre2(:));
        corrf=corrfnew;
    catch ERR
        ERR
        fprintf('errored at rho \n')
    end
        %% construct bigger transfer matrix
    if 4*m<=2*mmax
        % tp=bsxfun(@times,T_ml,shiftdim(W,-2));
        tp=bsxfun(oper1,T_ml,shiftdim(W,-2));
        tp=permute(tp,[1 3 2 4 5 6]);
        T_mplr=reshape(tp,2*m,2*m,2,2);
        T_mprr=T_mplr;
    
    elseif opt.renorm;
%             D=rot90(D,2);
        count=count+1;
        if strcmp(opt.decomp,'svd');

            [T,S,U]=svds(rhoL,mmax);
            Ol=reshape(T(:,1:mmax)',[mmax,m,2]);
            Ql=shiftdim(reshape(U(:,1:mmax),[m 2 mmax]),-3);
            ra=sum(diag(S))/trace(abs(rhoL));
        elseif strcmp(opt.decomp,'eig');
            [V, S] = eigs(balance(rhoL),mmax,'LM');
            pV=pinv(V);
            ra=sum(diag(S))/trace(abs(rhoL));
            Ol=reshape(pV,[mmax m 2]);
            Ql=shiftdim(reshape(V,[m 2 mmax]),-3);
        end
        
        T_mlo=(shiftdim(permute(T_ml,[1 3 2 4]),-1));
        Wo=(W);
        T_mpl=oper1(...
                    oper(...
                    oper(Ol,...
                        T_mlo),...
                        Ql ),...
                        permute(Wo,[5,6,1,7,2,8,3,4])...
                        );
        T_mpl=(squeeze(sum(reshape((T_mpl),mmax,[],mmax,2,2),2)));
        T_mpl=0.5*(T_mpl+permute(T_mpl,[2 1 4 3]));
%         T_mplr=T_mpl/sum(T_mpl(:));
        T_mplr=T_mpl;
        
    else 
        err=0;
    end

    err=abs(mean(T_mplr(:))/mean(T_ml(:))-1);
    T_ml=T_mplr;
    T_mr=T_mprr;
%     fprintf('error is %.4d ,corrf is %.4f, ratio is %.4f \n ',err,corrf,ra);    
    fprintf('%.4f\t%.4f\t%.4f\t%.4f\t%.4d\n',K,1/K,corrf,corrf*2*K,err)
    vsa=reshape(permute(T_ml,[1 3 2 4]),numel(T_ml)^0.5,[]);
    siz=size(vsa);
%     vs=padarray(vsa,[2*mmax 2*mmax]-siz,0,'post');
%     set(fi,'CData',real(vs));
    drawnow
%     pause(0.5)
    end% T_ml=
    corrs(idx)=corrf;
    mags(idx)=mag;
    Kps(idx)=Kp;
end
%%
% plot(Ks,[0 diff(2*corrs)]);
% plot(1./Ks,Ks.*corrs)
figure(3)
hold off
Tsp=Ts;
plot(Ts,2*corrs)
% plot(Ks,Kps)
% plot(Ts,corrs)
%%
bkup.corr{mmax}=corrs;
bkup.mag{mmax}=mags;
bkup.Ts{mmax}=Ts;
%%
% clf  
hold on
plot(Ts,mags);
for i=[1,2,16,30,32,40,42,128]      
    try
    plot(bkup.Ts{i},2*bkup.corr{i});
    end
end
% imagesc(reshape(T_ml,numel(T_ml)^0.5,[]))
%%
% hold off
% plot(Ts,2*Ks.*bkp{32});

% imagesc(reshape(T_mpl,numel(T_ml)^0.5,[]))
