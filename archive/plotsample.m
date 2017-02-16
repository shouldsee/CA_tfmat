for phi=lst;
    sys.adv=adv_log_torus_phi(phi);
    imagesc(sample(sys)');
    tl=sprintf('%5.4d',phi);
    title(tl);

    tl={'$$f(x,t+1)= \phi(\frac{f(x-1,t)+f(x,t)+f(x+1,t)}{3})$$'....
         sprintf('$$\\phi(x)=k*x*(1-x),k=%5.4d$$',phi)};
    xlabel('t')
    ylabel('x')
    title(tl,'interpreter','latex');
    colorbar
    pause
end