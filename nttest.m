q=@(hnot)find(ismember(henseldict,hnot,'rows'));
b=q(['b3a';'b3i';'b2c';'b2e']);
s2=ind1((squeeze(compress(hfir1))==(2+1)));
s3=ind1((squeeze(compress(hfir1))==(3+1)));

ntidx=[b;s2;s3];
ntrule=zeros(102,1);
ntrule(ntidx)=1;
% ntrule=flip(ntrule);
ntnum=char(flip(ntrule')+'0');
ntnumhex=bin2hex(ntnum,'pre');
atab=henseldict(ntrule==1,:);
[atabs,ind]=sortrows(atab);
alias=char();
primed=0;
for i=1:size(atabs,1);
    s=atabs(i,:);    
    
    if primed;
        if s(1)==sold(1)
            if s(2)==sold(2);
            alias=[alias s(3)];
            else
            alias=[alias s(2:3)];
            primed=1;
            end
        else
            alias=[alias s(1:3)];
        end
    else
            alias=[alias s(1:3)];
    primed=1;
    end    
    sold=s;
end
% alias=atab(:)'
