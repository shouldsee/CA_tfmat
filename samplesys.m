sys.N=1000;
sys.hmax=200;
sys.k=200;
sys.familyname='2dtca';
sys.fnum=1;
sys.od=6152;
% sys.crit{1}=@(odr) odr>0.4 && odr<0.8; 
sys.cbound=[0.4 0.8];
sys.critname='0.5<odr<0.8';
% sys.adv=[];
% sys.rdf=[];
% sys.dd=[];
% sys.sizf=[];
% sys=change_adv(sys,'2dtca',sys.od);

N=sys.N;
hmax=sys.hmax;
k=sys.k;
familyname=sys.familyname;
fnum=sys.fnum;
% crit=sys.crit{1};
% critname=sys.crit{2};
od=sys.od;