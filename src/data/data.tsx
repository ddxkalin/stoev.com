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
      href: '../assets/resume.pdf',
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
    date: 'Dec 2023 - Jun 2025',
    location: 'Inetum (ex.DoITWise)',
    title: 'Senior IT Consultant',
    content: (
      <p>
        Seatbells on, new challange accepted.
        SAP and ServiceNow Process Optimisation: Streamlined ITSM processes
by integrating SAP modules with ServiceNow workflows, reducing ticket
resolution times and enhancing cross-platform visibility.
Workshops and Training: Conducted workshops with clients and
colleagues to share knowledge on best practices for ServiceNow
implementation, process optimization, and Agile development methodologies.
These sessions aimed to equip participants with the skills needed to drive
digital transformation in their organizations.
Collaboration: Worked closely with developers, architects, and
business stakeholders to deliver high-quality solutions aligned with
customer requirements and industry best practices.
Development Practices: Introduced automation and best practices to
streamline development workflows, reducing deployment times and improving
overall team productivity.
Technical Leadership: Provided technical guidance and mentorship to
junior engineers, fostering a culture of innovation and continuous
improvement.
      </p>
    ),
  },
  {
    date: 'Aug 2023 - Present',
    location: 'BalchikCon',
    title: 'Co-Founder & Speaker',
    content: (
      <p>
        Creating something unique for young IT enthusiasts and overcoming the fear of speaking in front of people. Smooth Operator...
        Event Creation and Coordination: Co-led the organization of
BalchikCon, an innovative event designed to equip attendees with the
skills and knowledge needed to succeed in the IT industry. Collaborated
with a dedicated team to plan, structure, and execute the event, ensuring
a seamless and engaging experience for over 300 participants.
Inspiring and Guiding: Delivered presentations and workshops on
topics such as career development, emerging technologies, and best
practices for breaking into the industry. Inspired and mentored attendees,
helping them gain clarity and confidence in pursuing IT careers.
Speaker and Mentor Recruitment: Identified and onboarded experienced
industry professionals as speakers and mentors, ensuring a diverse and
high-quality lineup of sessions tailored to the needs of beginners.
Community Building: Fostered a welcoming and inclusive environment
for attendees, encouraging networking, knowledge sharing, and
collaboration among participants.
Event Promotion and Outreach: Contributed to marketing efforts,
increasing event visibility and resulting in 300+ attendees and 85% growth
in participation year-over-year.
Continuous Improvement: Gathered feedback from attendees and
speakers to refine the event format, content, and organization, ensuring
each iteration of BalchikCon is more impactful than the last.
      </p>
    ),
  },
  {
    date: 'Sep 2022 - Present',
    location: 'BrainTech ltd',
    title: 'CEO & Founder',
    content: (
      <p>
        I'm on an ongoing rollercoaster journey as we develop ERP systems. This thrilling ride features a dynamic technology stack, including .NET Core, EF Core, Dapper, SQL, JS, React, Angular, DevExtreme & ServiceNow. This experience allows me to continually adapt and deliver top-quality results in the ever-evolving ERP landscape, looking only forward!
        A boutique technology consultancy delivering sophisticated software solutions across B2B, B2C, and B2B2C domains. As Founder, I architect and implement tailored technology ecosystems that drive business transformation through innovative AI-native applications, intelligent system design, and custom development workflows.
Core Capabilities
Advanced Technology Integration

Develop bespoke enterprise software solutions leveraging diverse technological stacks
Design and implement AI-native applications with custom agent workflows
Lead cutting-edge R&D initiatives to solve complex business challenges

Technical Expertise

Full-stack development: ASP.NET Core, Python, C#, JavaScript, TypeScript
Frontend frameworks: Angular, React, DevExpress
Low-code automation: Flowise
Project management: Jira, Agile methodologies

Enterprise Solutions

Streamlined ITSM processes through SAP-ServiceNow integration, reducing resolution times
Designed custom CI/CD pipelines for ServiceNow implementations supporting SAFe and Agile frameworks
Architected Flowlink, a sophisticated data pipeline application utilizing ServiceNow IRE for hierarchical data management

Leadership & Collaboration

Facilitate technical workshops and training sessions on ServiceNow implementation best practices
Partner with stakeholders across development, architecture, and business domains
Provide technical mentorship while cultivating innovation cultures
Implement automation and development best practices to enhance productivity and delivery quality

BrainTech delivers not just technology solutions, but true transformation partnerships that propel businesses forward through thoughtful architecture, skilled implementation, and dedicated support.
      </p>
    ),
  },
  {
    date: 'Feb 2023 - Nov 2023',
    location: 'PSIT No Software',
    title: 'FullStack Software Engineer',
    content: (
      <p>
        Developing ERP systems. Riding with .NET Core, EF Core, Dapper, SQL, TypeScript, React, Angular, DevExtreme
        Technical Expertise: Utilized a range of programming languages,
including ASP.NET Core, TypeScript, C#, and JavaScript, as well as
frameworks like Angular, React, and DevExpress.
ERP System Development: Collaborated on the development of PSIT's
ERP system, ensuring seamless integration with Microsoft SQL Server and
other databases.
Frontend and Backend Development: Designed and implemented frontend
and backend solutions using Angular, React, and ASP.NET Core, leveraging
expertise in HTML5, CSS, and JavaScript.
Agile Methodologies: Worked in an Agile environment, utilizing Jira
for project management and version control with Git.
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
        Technical Expertise: Leveraged expertise in ASP.NET Core,
TypeScript, C#, and JavaScript, as well as frameworks like React and Go
(Programming Language), to drive solution development.
Gaming Technology Development: Collaborated on the creation of
cutting-edge gaming technologies for bet365, utilizing skills in HTML5,
CSS, and JavaScript to craft engaging user experiences.
Agile Methodologies: Worked in an Agile environment, utilizing Jira
for project management and version control with Gitlab.
Data Integration: Designed and implemented data integrations using
stored procedures, SQL, and APIs to ensure seamless data flow between
systems.
API Development: Built RESTful APIs using ASP.NET Core and C# to
facilitate communication between applications.
Database Management: Managed databases using Microsoft SQL Server,
ensuring optimal performance and scalability.
Error Handling: Implemented robust error handling mechanisms to
minimize downtime and optimize user experience.
Code Optimization: Optimized code for improved performance,
security, and maintainability, utilizing tools like Visual Studio and
ReSharper.
Testing and Quality Assurance: Collaborated with QA teams to develop
comprehensive testing suites, ensuring high-quality software delivery.
Scalability and Performance Tuning: Analyzed system performance and
optimized application architecture for scalability and reliability.
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
  items: [
    {
      type: ContactType.Email,
      text: 'kalin@stoev.tech',
      href: 'mailto:kalin@stoev.tech',
    },
    {
      type: ContactType.Phone,
      text: '+35988228991'
    },
    {
      type: ContactType.Github,
      text: 'ddxkalin',
      href: 'https://github.com/ddxkalin',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Kalin Stoev',
      href: 'https://www.linkedin.com/in/kalinstoev9316/',
    },
    {
      type: ContactType.Twitter,
      text: 'stoev_io',
      href: 'https://x.com/stoev_io',
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
