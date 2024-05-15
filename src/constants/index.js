import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  docker,
  monocept,
  addicor,
  ps,
  logrelic,
  netflix,
  worldwise,
  youtube,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "FrontEnd Developer",
    icon: backend,
  },
  {
    title: "NextJS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: creator,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Addicor Technologies Pvt. Ltd.",
    icon: addicor,
    iconBg: "#383E56",
    date: "Nov 2019 - March 2021",
    points: [
      "Collaborated with back-end developers to integrate RESTful APIs, ensuring efficient data flow and functionality.",
      "Utilized Redux for state management, improving application scalability and maintainability,reducing state-related bugs by 40%.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Conducted performance optimization,reducing load times by 30% through code splitting and lazy loading techniques.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Monocept Consulting Pvt. Ltd.",
    icon: monocept,
    iconBg: "#E6DEDD",
    date: "March 2021 - Jan 2022",
    points: [
      "Developed and maintained a web application with over 100,000 active users using React.js,resulting in a 30% increase in user engagement.",
      "Took part in the team’s agile software development process, developed unit tests and functional/integration tests, supported production deployments of developed solutions",
      "Developed front-end end-to-end where customers can buy insurance without help of any agent",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Technology (FrontEnd)",
    company_name: "Publicis Sapient",
    icon: ps,
    iconBg: "#383E56",
    date: "Jan 2022 - April 2023",
    points: [
      "Assisted in determining operational feasibility through analysis, problem definition,requirement analysis, and proposing solutions",
      "Mentored a team of 3 junior developers on React best practices, leading to a 15% improvement in team productivity.",
      "Managed the maintenance of program modules including operational support, problem resolution, preventative and corrective maintenance and enhancements",
      "Documented software solutions through flowcharts, layouts, diagrams, charts, code comments and clear code",
    ],
  },
  {
    title: "Freelancer FrontEnd Developer",
    company_name: "LogRelic",
    icon: logrelic,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "working on Next JS, Tailwind Css, TypeScript",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working alongside Ashish in the same team during our time at our previous company, and I can confidently say that he was an invaluable asset to our team. Ashish consistently impressed with his strong work ethic, dedication, and attention to detail.",
    name: "Ankur Kumar Rai",
    designation: "Associate Solution Leader",
    company: "Brane Enterprises Pvt. Ltd.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Ashish is unmatched at React skill. He is ordered, meticulous, and a swift learner. All these The a fore mentioned qualities were significant when trying to implement project requirements . Being a quick at learning let him comprehend the market fit and wisely choose the optimum path to success",
    name: "Robin Kumar Gupta",
    designation: "Deputy Manager",
    company: "Jio",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have worked with Ashish for over 1 year. I was impressed by his React JS and JavaScript. Anyone would be lucky to have Ashish as a colleague. He is always available to help us when needed, He strives for excellence and is a valuable team player",
    name: "Gaurav Garg",
    designation: "Associate Technology L2",
    company: "Publicis Sapient",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Web-based platform in which we can see trailers of webseries from netflix",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/ashurbz/netflix-clone-react-app",
  },
  {
    name: "WorldWise",
    description:
      "Web App to keep track of all cities or countries we have travelled and add notes about them. We can get location by clicking on the map.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "module css",
        color: "green-text-gradient",
      },
      {
        name: "context",
        color: "pink-text-gradient",
      },
    ],
    image: worldwise,
    source_code_link: "https://github.com/ashurbz/worldwise",
  },
  {
    name: "Youtube Clone",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/ashurbz/Youtube",
  },
];

export { services, technologies, experiences, testimonials, projects };
