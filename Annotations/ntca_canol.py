from get_NTCArnum import *
import re
import sys

args=sys.argv;
global normalise,gs
# f='apgsearchable_rules';
f=args[1];
normalise='-n' in args;
gs='-g' in args;
outf=f.rstrip('.csv')+'_std.csv';


def form(line):

	it=line.split(' ');
	r=rule(102);
	r.add(it[0]);
	if len(it)==1:
		coms='na';
	else:
		coms=it[1];
	fline="{}\t{}\t{}\n".format(str(r.rnum),coms,it[0])
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
