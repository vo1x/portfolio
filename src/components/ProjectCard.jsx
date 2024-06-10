import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ url, preview, projName, description, tags }) {
  return (
    <div className="flex flex-col justify-start  gap-4 ">
      <img
        className="ml-0 h-auto max-w-72 rounded-md border-4 border-slate-600"
        src={preview}
        alt="Project preview"
      />
      <div className="flex flex-col gap-1">
        <a href={`https://${url}`} target="_blank">
          <div className="flex items-center gap-2 text-xl font-semibold ">
            <span>{projName}</span>
            <ArrowUpRight className="place-self-start" size={20} />
          </div>
        </a>
        <div className="text-slate-400">{description}</div>
      </div>
      <div className="flex items-center gap-4">
        {tags?.map((tag, i) => (
          <div
            key={i}
            className="w-max rounded-md border-teal-300 bg-teal-400/10  p-2 text-center text-sm font-semibold text-teal-300"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
