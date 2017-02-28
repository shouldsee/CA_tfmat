sys0=change_adv(sys,'2dtca',{6152,0.5},0);


nodes{1}=sys0.alias;
rnums(1)=sys0.od;
dict(sys0.od+1)=1;
% any(cellfun(@(x) isequal(x, 6152), nodes))
for i=1:10;
    rule=sys0.rule;flpidx=randi([1,18]);rule(flpidx)=~rule(flpidx);
    newrnum=base2dec(char(flip(rule)+'0'),2);
    sys=change_adv(sys0,'2dtca',{newrnum,0.5},0);
    d=finddst(sys,sys0)
    
    if ~ismember(sys.od,rnums);
    nodes{end+1}=sys.alias;
    rnums(end+1)=sys.od;
    dict(sys.od+1)=size(rnums,2);
    end
    dmat(dict(sys0.od+1),dict(sys.od+1))=d;
    
    if d<10;
        sys0=sys;
    end 
end
%%
dmat=padarray(dmat,max(size(dmat))-size(dmat),0,'post');
dmat=(dmat+dmat')/2;
G=graph(dmat,nodes);
plot(G);