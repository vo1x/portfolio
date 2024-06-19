import StackCard from './StackCard';
import { FaPython, FaHtml5, FaNodeJs, FaReact, FaFigma, FaCode, FaGithub, } from 'react-icons/fa6';
import { SiVercel, SiCloudinary, SiMongodb } from 'react-icons/si';
import { BiLogoJavascript, BiLogoTailwindCss } from 'react-icons/bi';
import { Figma, Github } from 'lucide-react';
import { VscVscode } from 'react-icons/vsc';
import StackSection from './StackSection';
function Stack() {
  const devLangs = [
    {
      icon: <BiLogoJavascript />,
      name: 'Javascript'
    },
    {
      icon: <FaPython />,
      name: 'Python'
    },
    {
      icon: <FaReact />,

      name: 'React.js'
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5'
    },
    {
      icon: <BiLogoTailwindCss />,
      name: 'Tailwind'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    }
  ];

  const apps = [
    {
      icon: <VscVscode />,
      name: 'VS Code'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    },
    {
      icon: '',
      name: 'Arc Browser'
    }
  ];

  const services = [
    {
      icon: <FaGithub />,
      name: 'GitHub'
    },
    {
      icon: <SiVercel />,
      name: 'Vercel'
    },

    {
      icon: <SiCloudinary />,
      name: 'Cloudinary'
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB'
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="mb-2 text-lg font-semibold text-slate-300">Stack</div>
      <div className="flex flex-col gap-8">
        <StackSection title={'Development'} items={devLangs}></StackSection>
        <StackSection title={'Apps'} items={apps}></StackSection>
        <StackSection title={'Services'} items={services}></StackSection>
      </div>
    </div>
  );
}

export default Stack;
