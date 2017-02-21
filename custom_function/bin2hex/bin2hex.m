function x = bin2hex(bin,orient);


len=size(bin,2);
hexlen=ceil(len/4);

binv=(bin-'0');
binv=padarray(binv,[0 (hexlen)*4-len],0,orient);
dict='0123456789abcdef';
hex=char(zeros(size(bin,1),hexlen));

for i=1:hexlen;
    hex(:,i)= (dict(sum(binv(:,i*4-3:i*4).*[8 4 2 1],2)+1));   
end

x = hex;
