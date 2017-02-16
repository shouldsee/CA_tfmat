function[]=save2repo(figname)
saveas(gcf,sprintf('%s/gallery/%s.jpg',getenv('repos'),figname))
end