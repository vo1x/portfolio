import { Github, LinkedinIcon, MailIcon } from 'lucide-react';
import { LiaTelegramPlane } from 'react-icons/lia';
function Socials() {
  return (
    
    <div className='flex items-center gap-6 text-slate-400'>
      <div className='hover:text-white transition-all ease-in-out duration-200 cursor-pointer'>
        <Github size={30} ></Github>
      </div>
      <div className='hover:text-white transition-all ease-in-out duration-200 cursor-pointer'>
        <LiaTelegramPlane className='text-3xl'/>
      </div>
      <div className='hover:text-white transition-all ease-in-out duration-200 cursor-pointer'><LinkedinIcon size={30}></LinkedinIcon></div>
      
    </div>
  );
}

export default Socials;
