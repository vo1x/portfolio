import { useEffect, useRef } from 'react';

function ProjectCard({ item }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    let animationFrameId;

    const optimizedMouseMove = (e) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
    };

    document.addEventListener('mousemove', optimizedMouseMove);

    return () => {
      document.removeEventListener('mousemove', optimizedMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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
    <div
      ref={cardRef}
      className="relative z-30 flex h-14 w-40 cursor-pointer items-center justify-center rounded-lg  backdrop-blur-sm transition ease-in"
    >
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
