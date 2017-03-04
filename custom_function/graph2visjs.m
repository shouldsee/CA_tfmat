function [status] = graph2visjs( G,filename )
fid=fopen(filename,'w');
[d,f,e]=fileparts(filename);
numedge=size(G.Edges,1);
numnode=size(G.Nodes,1);
nodeSet=G.Nodes{:,1};
idxSet=1:size(nodeSet,1);
lbl2idx = containers.Map(nodeSet,idxSet);
% dict=zeros(1,numnode);
% str2num(cell2mat(G.Nodes{:,1}))
fprintf(fid,'var nodes=[ \n');
for i=1:numnode
    node=G.Nodes{i,1};
    
    if str2num(node{1})==6152;
    fprintf(fid,'{id:%d, value:%d, label:''%s'',color:''orange''}, \n',i,G.degree(i)+100,G.Nodes{i,1}{1});
    
    else
    fprintf(fid,'{id:%d, value:%d, label:''%s''}, \n',i,G.degree(i),G.Nodes{i,1}{1});
    end
end
fprintf(fid,'];\n');


fprintf(fid,'var edges=[ \n');
for i=1:numedge
    nodeLbl=G.Edges.EndNodes(i,:);
    fprintf(fid,'{from:%d, to:%d, value:%6.3f, title :''%6.3f''}, \n',...
    lbl2idx(nodeLbl{1}),...
    lbl2idx(nodeLbl{2}),...
    G.Edges.LWidths(i),...
    G.Edges.Weight(i) );
end
fprintf(fid,'];\n');
fprintf(fid,['var %s = { nodes:nodes,edges:edges};'],f);

% return true
status=1;
fprintf('exported to %s \n',filename);
%UNTITLED Summary of this function goes here
%   Detailed explanation goes here


end

