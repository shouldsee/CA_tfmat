function [ alias ] = nthex2alias( s )
%UNTITLED8 Summary of this function goes here
%   Detailed explanation goes here

    ntnum1=(hex2bin(s));
    ntnumt=ntnum1(end-101:end);
    rule=flip(ntnumt-'0');
    alias=ntrule2alias(rule);
end
