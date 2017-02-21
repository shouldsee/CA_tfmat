function [ alias ] = ntrule2alias( ntrule )
global env
%UNTITLED6 Summary of this function goes here
%   Detailed explanation goes here
atab=env.henseldict(ntrule==1,:);
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
    
    if alias(end)=='_';
        alias(end)=[];
    end
    sold=s;
end

end

