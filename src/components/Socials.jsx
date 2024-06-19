import { Github, LinkedinIcon, MailIcon } from 'lucide-react';
import { LiaTelegramPlane } from 'react-icons/lia';
function Socials() {
  return (
    <div className="flex items-center gap-6 text-slate-400">
      <a
        href="https://github.com/vo1x"
        target="_blank"
        className="cursor-pointer transition-all duration-200 ease-in-out hover:text-white"
      >
        <Github size={30}></Github>
      </a>
      <a
        href="https://t.me/volx999"
        target="_blank"
        className="cursor-pointer transition-all duration-200 ease-in-out hover:text-white"
      >
        <LiaTelegramPlane className="text-3xl" />
      </a>
      <a
        href=""
        // target="_blank"
        className="cursor-pointer transition-all duration-200 ease-in-out hover:text-white"
      >
        <LinkedinIcon size={30}></LinkedinIcon>
      </a>
    </div>
  );
}

export default Socials;
