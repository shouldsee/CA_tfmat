import re


def tca2bs(rnum):
	r=bin(int(rnum));
	r=r[:1:-1];
	r+='0'*(18-len(r));
	
	if  (r[0]=='1' or r[1]=='1' or r[2]=='1'):
		ra=r[9:0:-1];
		rb=r[18:10:-1];
		r=rb+ra;
		rule=[i for x,i in zip(r,range(len(r))) if x=='0'];
	else:
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

print(tca2bs(6152))



def form(line):
	s=line.rstrip('/n').replace('*','').replace('?','');
	match = re.match(r"([0-9]+)([a-zA-Z]+)", s, re.I)
	match2 = re.match(r"([0-9]+)", s, re.I)

	if match:
	    rnum,coms = match.groups()   	
	    # print(rnum)
	elif match2:
		rnum=s;
		coms='';
	else:
		print(s)

	rnum=int(rnum);
	bsrule=tca2bs(rnum);
	it=(rnum,bsrule,coms);
	fline="{:d}\t{}\t{}\n".format(rnum,bsrule,coms);
	return fline;
f='apgsearchable_rules'


outf=f.rstrip('.csv')+'_std.csv';
with open(f,'r') as fid:
	with open(outf,'w') as outfid:
		outfid.write('TCAid\tB_S_alias\tcomments\n');
		lines=fid.readlines()
		for line in lines:
			line=line.rstrip('\n');
			if line:
				if not (line.startswith("#") or line.startswith(">")):
					outfid.write(form(line));
