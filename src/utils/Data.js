import { FaReact, FaNode,} from 'react-icons/fa';
import { SiExpress, SiMongodb, } from 'react-icons/si';
import Desktop2 from '../assets/desktop2.png';
import Desktop from '../assets/desktop.png';

export const Skills = [
  {
    id: 0,
    tech: 'React JS',
    icon: <FaReact />

  },
  {
    id: 1,
    tech: 'Node JS',
    icon: <FaNode />

  },
  {
    id: 2,
    tech: 'Express',
    icon: <SiExpress />

  },
  {
    id: 3,
    tech: 'MongoDB',
    icon: <SiMongodb />

  },

];

export const projectDetails = [
  {
    id: 0,
    project_name: 'Weather Desktop Application',
    project_desc: 'This is a weather API utilizer that transforms API data from open-metio.com into readable responsive webpage.',
    tech_stack: ['Vite', 'Javascript', 'Tailwind' ],
    project_img: Desktop2,
    project_url: 'https://magical-concha-6ccb16.netlify.app',
    reverse: false,
  },
  {
    id: 1,
    project_name: 'Admin Dashboard Application',
    project_desc: 'Front-End sales dashboart utilizing recharts into responsive webpage. No server side, demo version only.',
    tech_stack: ['Vite', 'TypeScript', 'SASS', 'React' ],
    project_img: Desktop,
    project_url: 'https://incandescent-vacherin-43b64e.netlify.app',
    reverse: false,
  },

]