import { Github, LinkedinIcon, MailIcon } from 'lucide-react';
import { LiaTelegramPlane } from 'react-icons/lia';
function Socials() {
  return (
    
    <div className='flex items-center gap-6 text-slate-400'>
      <div>
        <Github size={30} ></Github>
      </div>
      <div>
        <LiaTelegramPlane className='text-3xl'/>
      </div>
      <div><LinkedinIcon size={30}></LinkedinIcon></div>
      
    </div>
  );
}

export default Socials;
