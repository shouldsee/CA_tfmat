y0=[1,2];
%%
tspan=[4*linspace(-6,6)]
M=[1 0;0 1]
options = odeset('Mass',M,'RelTol',1e-4,'AbsTol',[1e-6 1e-6]);
[t,ys] = ode15s(@competitivepop,tspan,y0,options);

ysa=[ys arrayfun(E,ys(:,1),ys(:,2))];

hold on
scatter(ysa(:,1),ysa(:,2))

%% 
for i=1:length(ys)
    energy(i)=E(ys(i,1),ys(i,2))
end
%%

C=num2cell(ys,2);
energy=cellfun(E,C)
%%
C
C(1)
%%
xp=0:0.0025:3;
yp=0:0.0025:3;
[xm,ym]=meshgrid(xp,yp);
%%
fx=ddxt(0,xm,ym);
fy=ddyt(0,xm,ym);
tic,fhat1=intgrad2(fx,fy,.0025,.0025,1);toc

%%
f=E(0,xm,ym);
[fx fy]=gradient(f,.01);

tic,fhat2=intgrad2(fx,fy,.0025,.0025,1);toc


%%
figure
subplot(1,2,1)
tic
contour(xp,yp,fhat1,300)
toc
subplot(1,2,2)
contour(xp,yp,fhat2,300)

%%
hold on
scatter(ysa(:,1),ysa(:,2))

toc
%%
tic
figure

toc

%% Plot
plot(t,ysa)
%%

%%
G=a

%%
syms x y t

%e=4*(x^3+y^3)/3+x^2*y+2*x*y^2-4*x*y-6.5*x^2-4.5*y^2+9*x+4*y
e=0.5*x^4+x^2*y^2+8/3*x^3*y+5/3*x*y^3+0.5*y*4+...
    -3*x^3-3.5*x*y^2-2*y^3+...
    +4.5*x^2+2*y^2
%ddxt=4*x^2+4*y^2+10*x*y-13*x-12*y+9;
%ddyt=x^2+4*y^2+4*x*y-4*x-9*y+4;

subs(e,y(t),'y')
subs(ans,x(t),'x')
E=matlabFunction(ans)
%%
dxdt=diff(x,t)
dydt=diff(y,t)
dxt=x*(3-x-2*y)
dyt=y*(2-x-y)
%%


subs(gradient(dxt,t),dxdt,dxt)
subs(ans,dydt,dyt)
simplify(ans)
subs(ans,y(t),'y')
subs(ans,x(t),'x')
%%
ddxt=matlabFunction(ans)
ddxt=ddxt
%%
subs(gradient(dyt,t),dxdt,dxt)
subs(ans,dydt,dyt)
simplify(ans)
subs(ans=e,y(t),'y')
subs(ans,x(t),'x')
%%

dxt=matlabFunction(dxt)
dyt=matlabFunction(dyt)
%%
dxt(t)
%%
vars=[x(t) y(t) dxt dyt]
%%

[xm,ym]=meshgrid(-1:.05:3);
dx=dxt(xm,ym);
dy=dyt(xm,ym);
%%
f=@(t,y) [dxt(y(1),y(2));dyt(y(1),y(2))]
%%
hold on
[x0 y0]=meshgrid(-0.8:0.2:0.2);
m=length(x0);
for xt=x0(:)'
    for yt=y0(:)'
        [ts ys]=ode45(f,[0,50],[xt;yt]);
        plot(ys(:,1),ys(:,2))
        plot(ys(1,1),ys(1,2))
        plot(ys(end,1),ys(end,2))
    end
end
    hold off
%%
quiver(xm,ym,dx,dy,2.5,'linewidth',1)
xlabel('x')
ylabel('y')

