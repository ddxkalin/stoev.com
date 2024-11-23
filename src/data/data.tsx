import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Stoev',
  description: "Example site built with Kalin Stoev's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Kalin Stoev.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Inetum</strong> ex.DoITWise <strong className="text-stone-100">& BrainTech ltd</strong> helping build a modern, mobile-first, domain
        registrar and site builder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me riding <strong className="text-stone-100">Motorbikes</strong>,
        chilling at the <strong className="text-stone-100">beach</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">places on mother earth</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As an IT Consultant at Inetum (ex DoITWise), a ServiceNow Elite Partner, I have expanded my expertise to encompass the dynamic field of IT service management and digital workflows. 
  Leveraging my strong background in Full Stack Development, I am now applying my skills in a consultative role to help organizations optimize their IT processes and implements effective ServiceNow solutions. 
  My passion for technology and commitment to delivering high-quality results are now focused on guiding clients through digital transformations, ensuring they achieve maximum value from their IT investments.
   I am excited to bring my problem-solving skills and technical acumen to this new challenge, contributing to the success of projects in a more strategic and impactful way.`,
  aboutItems: [
    {label: 'Location', text: 'Anywhere', Icon: MapIcon},
    {label: 'Age', text: '27', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Bulgarian', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Crypto, Technologies, Travelling', Icon: SparklesIcon},
    {label: 'Study', text: 'New Bulgarian University & SoftUni', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Inetum & BrainTech ltd', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'Bulgarian',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: '.Net',
        level: 9,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Angular',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 8,
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MSSQL',
        level: 8,
      },
      {
        name: 'PostgreSQL',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 7,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
//  {
//    title: 'Project title 1',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage1,
//  },
//  {
//    title: 'Project title 2',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage2,
//  },
//  {
//    title: 'Project title 3',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage3,
//  },
//  {
//    title: 'Project title 4',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage4,
//  },
//  {
//    title: 'Project title 5',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage5,
//  },
//  {
//    title: 'Project title 6',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage6,
//  },
//  {
//    title: 'Project title 7',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage7,
//  },
//  {
//    title: 'Project title 8',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage8,
//  },
//  {
//    title: 'Project title 9',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage9,
//  },
//  {
//    title: 'Project title 10',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage10,
//  },
//  {
//    title: 'Project title 11',
//    description: 'Give a short description of your project here.',
//    url: 'https://reactresume.com',
//    image: porfolioImage11,
//  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2016 - Present',
    location: 'New Bulgarian University',
    title: 'Bachelors in IT',
    content: <p>Activities and societies: Software Development, OOP, Design Patterns, SQL, Relational Databases, Data Structures, C#, Java, HTML, CSS, Operating Systems, Cloud Technologies, Mathematics, Linux, Algorithms, Java, C++, PHP</p>,
  },
  {
    date: '2016 - 2018',
    location: 'SoftUni',
    title: 'Software Engineering',
    content: <p>Activities and societies: Software Development, OOP, SOLID, Design Patterns, Algorithms, SQL, C#, ASP.Net, HTML, CSS, JavaScript</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Dec 2023 - Present',
    location: 'Inetum (ex.DoITWise)',
    title: 'IT Consultant',
    content: (
      <p>
        Seatbells on, new challange accepted.
      </p>
    ),
  },
  {
    date: 'Aug 2023 - Present',
    location: 'BalchikCon',
    title: 'Speaker & Co-Organizer',
    content: (
      <p>
        Creating something unique for young IT enthusiasts and overcoming the fear of speaking in front of people. Smooth Operator...
      </p>
    ),
  },
  {
    date: 'Feb 2023 - Nov 2023',
    location: 'PSIT No Software',
    title: 'FullStack Software Engineer Consultant',
    content: (
      <p>
        Developing ERP systems. Riding with .NET Core, EF Core, Dapper, SQL, TypeScript, React, Angular, DevExtreme
      </p>
    ),
  },
  {
    date: 'Sep 2022 - Present',
    location: 'BrainTech ltd',
    title: 'Full Stack Software Engineering Consultant',
    content: (
      <p>
        I'm on an ongoing rollercoaster journey as we develop ERP systems. This thrilling ride features a dynamic technology stack, including .NET Core, EF Core, Dapper, SQL, JS, React, Angular, DevExtreme & ServiceNow. This experience allows me to continually adapt and deliver top-quality results in the ever-evolving ERP landscape, looking only forward!
      </p>
    ),
  },
  {
    date: 'Mar 2022 - Sep 2022',
    location: 'bet365',
    title: 'FullStack Software Engineer',
    content: (
      <p>
        I navigated a challenging transition from backend to frontend. This rollercoaster journey of shifting technologies became my favorite thrill, highlighting my adaptability and passion for end-to-end solutions in software engineering
      </p>
    ),
  },
  {
    date: 'Dec 2020 - Mar 2022',
    location: 'Sensata Technologies',
    title: 'Software Engineer',
    content: (
      <p>
        Developing internal applications using ASP.NET Core, REST APIs, jQuery, HTML/CSS, and Bootstrap. This marked the starting point of my rollercoaster ride through the entire software development lifecycle.
      </p>
    ),
  },
  {
    date: 'Apr 2018 - Dec 2018',
    location: 'Embassy of the United States in Bulgaria',
    title: 'Software Engineer Intern',
    content: (
      <p>
        Developed Management Control System with ASP.NET MVC and EF ORM, complemented by a responsive front-end dynamic JavaScript components. It was here that my passion for software engineering took off.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'kalin@stoev.tech',
      href: 'mailto:kalin@stoev.tech',
    },
    {
      type: ContactType.Location,
      text: 'Remote',
    },
    {
      type: ContactType.Github,
      text: 'ddxkalin',
      href: 'https://github.com/ddxkalin',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ddxkalin'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kalinstoev9316/'},
  {label: 'X', Icon: TwitterIcon, href: 'https://x.com/stoev_io'},
];
