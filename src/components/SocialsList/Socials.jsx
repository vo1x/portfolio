import { Github } from 'lucide-react';
import Tooltip from '../UI/Tooltip';
import { LiaTelegramPlane } from 'react-icons/lia';
import SocialsIcon from './SocialsIcon';
function Socials() {
  return (
    <div className="flex items-center gap-6 text-slate-400">
      <Tooltip tooltip={'@vo1x'} >
        <SocialsIcon
          url={'https://github.com/vo1x'}
          icon={<Github size={30}></Github>}
        ></SocialsIcon>
      </Tooltip>

      <Tooltip tooltip={'@volx999'}>
        <SocialsIcon
          url={'https://t.me/volx999'}
          icon={<LiaTelegramPlane className="text-3xl" />}
        ></SocialsIcon>
      </Tooltip>
      {/* <SocialsIcon url={''} icon={<LinkedinIcon size={30}></LinkedinIcon>}></SocialsIcon> */}
    </div>
  );
}

export default Socials;
