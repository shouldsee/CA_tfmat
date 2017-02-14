function [ rule] = eca_rule( rnum )
%UNTITLED7 Summary of this function goes here
%   Detailed explanation goes here
rule=flip(str2num(dec2base(rnum,2,8)')');
    

end

