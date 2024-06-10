import StackCard from './StackCard';
import { FaPython } from 'react-icons/fa6';
import { BiLogoJavascript } from 'react-icons/bi';
import { FaHtml5 } from 'react-icons/fa6';
import { BiLogoTailwindCss } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa6';
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
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-semibold text-slate-300">Stack</div>
      <div className='flex flex-wrap gap-8'>
        {devLangs.map((item, i) => (
          <StackCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Stack;
