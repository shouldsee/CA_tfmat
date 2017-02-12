function[phtaux]=initaux(itnum);
phtaux=[];
init=1;
for rnum=[15,240];
    rule=str2num(dec2base(rnum,2,8)')';    
    [ph1,ph0p,ph0]=init_P(rule);
    phm=ph1;
    for i=1:itnum;
        phm=mergeblock(phm,ph1,ph0p,@plus);
    end
    phmt=(merge2torus(phm,ph0,@plus));
    if init;
        phtaux=0.*phmt;
        init=0;
    end
    phtaux=phtaux+phmt;
end
phtaux=phmt/2;

end