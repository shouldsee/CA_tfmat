

henseldict=['b0_','b1c','b1e','b2a','b2c','b3i','b2e','b3a','b2k','b3n','b3j','b4a','s0_','s1c','s1e','s2a','s2c','s3i','s2e','s3a','s2k','s3n','s3j','s4a','b2i','b3r','b3e','b4r','b4i','b5i','s2i','s3r','s3e','s4r','s4i','s5i','b2n','b3c','b3q','b4n','b4w','b5a','s2n','s3c','s3q','s4n','s4w','s5a','b3y','b3k','b4k','b4y','b4q','b5j','b4t','b4j','b5n','b4z','b5r','b5q','b6a','s3y','s3k','s4k','s4y','s4q','s5j','s4t','s4j','s5n','s4z','s5r','s5q','s6a','b4e','b5c','b5y','b6c','s4e','s5c','s5y','s6c','b5k','b6k','b6n','b7c','s5k','s6k','s6n','s7c','b4c','b5e','b6e','s4c','s5e','s6e','b6i','b7e','s6i','s7e','b8_','s8_',];
henselidx={k: v for v, k in enumerate(henseldict)};
subconf='_cekainyqjrtwz';

def add_all(s,prime,sold,neg=0):
	for c in subconf:
		conf=prime+sold+c;
		try:
			s[henselidx[conf]]=str(1-neg);
		except KeyError:
			pass	
class rule():
	def __init__(self,dgt):
		self.s=list('0'*dgt);
	def add(self,ali):
		ali=ali.replace('/','').lower();
		if len(self.s)==102:
			while True:
				prime=ali[0];

				ali=ali[1:];
				sold=[];
				# sold=ali[0];
				# nold=
				neg=0;
				for i,s in enumerate(ali):
					if s.isdigit():	
						neg=0;		
						if sold==[]:
							pass
						elif sold.isdigit():
							add_all(self.s,prime,sold);
							# golly.note('added all of '+prime+sold)
						nold=s;
						
					elif s in ['b','s']:
						ali=ali[i:];
						break
					elif s=='-':
						neg=1;
						add_all(self.s,prime,nold);
						# golly.note('added all of '+prime+sold)
					else:
						conf=prime+nold+s;
						self.s[henselidx[conf]]=str(1-neg);
						# golly.note('added '+conf)
					alii=ali[i+1:];
					sold=s;
					# golly.note(alii)	
				if sold.isdigit():
					add_all(self.s,prime,sold);
					# golly.note('added all of '+prime+s)
				if i+1==len(ali):
					break
			self.rstr=''.join(self.s[::-1]);
			self.rnum=hex(int(self.rstr,2)).lstrip('0x').rstrip('L').zfill(26);
		



# # asc=ord(rnum)
# lst=list([x=='-' for x in  rnum]);
# # golly.note(str(lst))
# # golly.note(rnum)
# # golly.note(str(~sum(lst)));
# if sum(lst)==0:
# 	pass
# else:
# 	rnum=rnum.split('/')[-1].split('-')[1]
# 	# golly.note(str(lst2))
# r0=bin(int(rnum,16))[2:].zfill(102);
# # golly.note(str(len(r0)));
# # golly.setclipstr((r0));
# # golly.note('copied')
# r=r0[::-1];


# rule=[i for x,i in zip(r,range(len(r))) if x=='1'];

# rs=[];

# alias='';

# others=[];
# # ps=1;
# primed=0;
# for i in rule:
# 	s=henseldict[i];
# 	alias=alias.rstrip('_');

# 	if primed:
# 		if s[0]==sold[0]:
# 			if s[1]==sold[1]:
# 				alias+=s[2]
# 			else:
# 				alias+=s[1:];
# 				primed=1;
# 		else:
# 			others.append(s);
# 			# pass
# 			# break
# 			continue
# 	else:
# 		alias+=s;
# 		primed=1;
# 	sold=s;
# alias=alias.rstrip('_');

# primed=0;
# for s in others:
# 	alias=alias.rstrip('_');
# 	if primed:
# 		if s[0]==sold[0]:
# 			if s[1]==sold[1]:
# 				alias+=s[2]
# 			else:
# 				alias+=s[1:];
# 				primed=1;
# 		else:
# 			others.append(s);
# 			# pass
# 			# break
# 			continue
# 	else:
# 		alias+=s;
# 		primed=1;
# 	sold=s;
# alias=alias.rstrip('_');
	
# 	# alias+=str((a)%9)
# # if ps==1:
# # 	alias+='s';


# golly.setalgo("QuickLife")
# # golly.note(alias)
# golly.setrule(alias);
# golly.setclipstr('\n'+alias);