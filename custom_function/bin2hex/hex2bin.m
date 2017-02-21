function binv=hex2bin(x)
hex=x;
binv=[];
for i=1:length(hex)
    if hex(i)=='f'
        binv((i*4):-1:i*4-3)=[1 1 1 1];
    elseif hex(i)=='e'
        binv((i*4):-1:i*4-3)=[1 1 1 0];
    elseif hex(i)=='d'
        binv((i*4):-1:i*4-3)=[1 1 0 1];
    elseif hex(i)=='c'
        binv((i*4):-1:i*4-3)=[1 1 0 0];
    elseif hex(i)=='b'
        binv((i*4):-1:i*4-3)=[1 0 1 1];
    elseif hex(i)=='a'
        binv((i*4):-1:i*4-3)=[1 0 1 0];
    elseif hex(i)=='9'
        binv((i*4):-1:i*4-3)=[1 0 0 1];
    elseif hex(i)=='8'
        binv((i*4):-1:i*4-3)=[1 0 0 0];
    elseif hex(i)=='7'
        binv((i*4):-1:i*4-3)=[0 1 1 1];
    elseif hex(i)=='6'
        binv((i*4):-1:i*4-3)=[0 1 1 0];
    elseif hex(i)=='5'
        binv((i*4):-1:i*4-3)=[0 1 0 1];
    elseif hex(i)=='4'
        binv((i*4):-1:i*4-3)=[0 1 0 0];
    elseif hex(i)=='3'
        binv((i*4):-1:i*4-3)=[0 0 1 1];
    elseif hex(i)=='2'
        binv((i*4):-1:i*4-3)=[0 0 1 0];
    elseif hex(i)=='1'
        binv((i*4):-1:i*4-3)=[0 0 0 1];
    elseif hex(i)=='0'
        binv((i*4):-1:i*4-3)=[0 0 0 0];
    end

   
end  
binv=char(binv+'0');