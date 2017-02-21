function [ alias ] = ntrule2alias( ntrule,env )
% global env
%UNTITLED6 Summary of this function goes here
%   Detailed explanation goes here
henseldict=['b0_';
    'b1c';
    'b1e';
    'b2a';
    'b2c';
    'b3i';
    'b2e';
    'b3a';
    'b2k';
    'b3n';
    'b3j';
    'b4a';
    's0_';
    's1c';
    's1e';
    's2a';
    's2c';
    's3i';
    's2e';
    's3a';
    's2k';
    's3n';
    's3j';
    's4a';
    'b2i';
    'b3r';
    'b3e';
    'b4r';
    'b4i';
    'b5i';
    's2i';
    's3r';
    's3e';
    's4r';
    's4i';
    's5i';
    'b2n';
    'b3c';
    'b3q';
    'b4n';
    'b4w';
    'b5a';
    's2n';
    's3c';
    's3q';
    's4n';
    's4w';
    's5a';
    'b3y';
    'b3k';
    'b4k';
    'b4y';
    'b4q';
    'b5j';
    'b4t';
    'b4j';
    'b5n';
    'b4z';
    'b5r';
    'b5q';
    'b6a';
    's3y';
    's3k';
    's4k';
    's4y';
    's4q';
    's5j';
    's4t';
    's4j';
    's5n';
    's4z';
    's5r';
    's5q';
    's6a';
    'b4e';
    'b5c';
    'b5y';
    'b6c';
    's4e';
    's5c';
    's5y';
    's6c';
    'b5k';
    'b6k';
    'b6n';
    'b7c';
    's5k';
    's6k';
    's6n';
    's7c';
    'b4c';
    'b5e';
    'b6e';
    's4c';
    's5e';
    's6e';
    'b6i';
    'b7e';
    's6i';
    's7e';
    'b8_';
    's8_';    
];
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
    
    if alias(end)=='_';
        alias(end)=[];
    end
    sold=s;
end

end

