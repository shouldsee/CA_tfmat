function[COV]=wisecov(A,B);
s=size(A,1);
C=A.*B;
c=mean(reshape(C,s,[]),2);
a=mean(reshape(A,s,[]),2);
b=mean(reshape(B,s,[]),2);
COV=c-a.*b;
end