import ProjectCard from './ProjectCard';
function Projects() {
  const projList = [
    {
      name: 'UHD Posters',
      url: 'uhdposters.vercel.app',
      preview: 'https://iili.io/JyECX9V.md.png',
      description:
        'Web App that allows searching for information on a user specified movie or TV Show. The info fetched includes, posters [downloadable], trailers and other specifics about the searched movie or TV show.',
      tags: ['ReactJs', 'TailwindCSS']
    }
  ];
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="text-lg font-semibold text-slate-300">Projects</div>
      <div className="flex flex-col gap-20 ">
        {projList.map((project, i) => (
          <ProjectCard
            key={i}
            url={project.url}
            preview={project.preview}
            projName={project.name}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
