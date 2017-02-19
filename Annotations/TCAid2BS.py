import re
import sys

args=sys.argv;
global normalise,gs
# f='apgsearchable_rules';
f=args[1];
normalise='-n' in args;
gs='-g' in args;
outf=f.rstrip('.csv')+'_std.csv';


from tst import *
def tca2bs(rnum):
	dict={'0':'1','1':'0'};
	global normalise
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
	if normalise and not alias[:2]==('b3'):
		alias=invert(alias);
		r=list(r);
		tcaid=int(''.join([dict[x] for x in r]),2);
	else:
		# print(alias)
		tcaid=rnum;
		pass

	return(alias,tcaid)

print(tca2bs(6152))



def form(line):
	coms='';
	if '*' in line:
		coms+='*';
	if '?' in line:
		coms+='?';		
	if '-' in line:
		coms+='-';		

	s=line.rstrip('/n').replace('*','').replace('?','').replace('-','');
	match = re.match(r"([0-9]+)([a-zA-Z]+)", s, re.I)
	match2 = re.match(r"([0-9]+)", s, re.I)

	if match:
	    rnum,com = match.groups()   
	    # print(rnum)
	elif match2:
		rnum=s;
		com='';
	else:
		print(s)
	coms+=com;	

	rnum=int(rnum);
	(bsrule,rnum)=tca2bs(rnum);
	it=(rnum,bsrule,coms);
	if gs:
		gcoms='G*'
		if sum([1 for x in gcoms if x in  coms]) and not ('N' in coms):
			fline="{}\t{}\t{:d}\n".format(bsrule,coms,rnum);
		else:
			fline="";

	else:
		fline="{}\t{}\t{:d}\n".format(bsrule,coms,rnum);
	return fline;

with open(f,'r') as fid:
	with open(outf,'w') as outfid:
		outfid.write('B_S_alias\tcomments\tCAid\n');
		lines=fid.readlines()
		for line in lines:
			line=line.rstrip('\n');
			if line:
				if not sum([line.startswith(x) for x in ['#','>','/']]):
					fline=form(line);
					if not len(fline)==0:
						print(form(line).rstrip('\n'));
