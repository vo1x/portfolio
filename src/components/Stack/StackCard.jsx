import { useEffect } from 'react';

function ProjectCard({ item }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName('card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cardContentStyle = {
    height: `calc(100% - 2px)`,
    width: `calc(100% - 2px)`
  };

  const cardBorderStyle = {
    background: `radial-gradient(
      96px circle at var(--mouse-x) var(--mouse-y),
      rgba(45, 212, 191, 1),
      transparent 50%
    )`
  };

  return (
    <div className="card relative z-30 flex h-14 w-40 cursor-pointer items-center justify-center rounded-lg  backdrop-blur-sm transition ease-in">
      <div
        style={cardBorderStyle}
        className="rounded-inherit absolute left-0 top-0 z-10 h-full w-full cursor-none transition-opacity duration-300 content-none"
      ></div>
      <div
        style={cardContentStyle}
        className="z-20 flex items-center gap-2 rounded-lg   bg-slate-800 p-2 shadow-md"
      >
        <div className="text-4xl text-teal-400">{item.icon}</div>
        <div className="text-slate-400">{item.name}</div>
      </div>
    </div>
  );
}

export default ProjectCard;
