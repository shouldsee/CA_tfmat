
sys0=sys00;
sys=change_adv(sys,'2dtca',{r2(6153),0.5},0);

finddst(sys0,sys)
%%
% samplesys
% [pdata,rec,tl,sys1]=sys_derrida(sys);
% figure(1);
% imagesc(pdata);
%%
%     torus2=@(a)[a(:,end,:),a,a(:,1,:)];
%     torus1=@(a)cat(3,a(:,:,end),a,a(:,:,1));
%     torus=@(a) torus1(torus2(a));
%     fir=shiftdim([1 1 1;1 9 1; 1 1 1],-1);
%     rule=zeros(1,18);
%     rule(4)=1;
%     rule([12 13])=1;
% 
%     ai=sys.rdf([sys.N sys.sizf(sys)]);
%     
%     as=ai;
% 
%     tic
%     for i=1:100
%     bs=torus(as);
%     as=rule(convn(bs,fir,'valid')+1);
%     end
%     toc
%     
%     a=ai;
%     tic
%     for i=1:100
%     a(:,1,:)=a(:,end-1,:);a(:,end,:)=a(:,2,:);
%     a(:,:,1)=a(:,:,end-1);a(:,:,end)=a(:,:,2);
%     a=rule(convn(a,fir,'same')+1);
%     end
%     toc