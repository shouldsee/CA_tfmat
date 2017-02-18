
def tca2ps(rnum):
	r=bin(int(rnum));
	r=r[:1:-1];
	r+='0'*(18-len(r));

	rule=[i for x,i in zip(r,range(len(r))) if x=='1'];

	alias='b';

	ps=1;
	for a in rule:
		if a>8 and ps:
			alias+='s';
			ps=0;
		alias+=str((a)%9)
	if ps==1:
		alias+='s';
	return(alias)