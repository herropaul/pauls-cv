import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Paul Nguon",
  location: "Cerritos, CA",
  locationLink: "https://www.google.com/maps/place/Cerritos,+CA",
  about:
    "Business Systems Analyst with a developer background building web-apps and mobile applications",
  summary:
    "As a Business Systems Analyst, I currently help oversee project deadlines and technical implementations. With a tech background, I find it useful to translate business needs into technological needs, enabling a smooth transition to completed implementations.",
  avatarUrl: "https://avatars.githubusercontent.com/herropaul",
  initials: "PN",
  personalWebsiteUrl: "https://www.pnguon.com/",
  contact: {
    email: "paulnguon562@gmail.com",
    tel: "562 822 0496",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/herropaul",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/paul-nguon/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "California State University, Long Beach",
      degree: "Bachelor of Science in Computer Science (BS)",
      start: "Aug 2019",
      end: "May 2022",
    },
  ],
  work: [
    {
      company: "Starlife Holding (Affiliated Partners IPA)",
      title: "Business System Analyst",
      start: "Jun 2022",
      end: "Present",
      description: [
        "Collaborated with teams and stakeholders to streamline QuickCap's software requirements, boosting efficiency by 20%.",
        "Utilized Jira for effective project management, shortening project timelines by two weeks on average.",
        "Led software training for 15 users, ensuring smooth transitions and successful software rollouts.",
        "Conducted user testing and managed data analysis for over 20 medical professionals, enhancing data clarity and decision-making.",
      ],
    },
    {
      company: "Seal Beach Police Department",
      title: "Freelance Software Engineer",
      start: "Jan 2022",
      end: "May 2022",
      description: [
        "Developed a dual-application graffiti tracker system in React Native, significantly reducing police department call volume by 50% in the first month.",
        "Led UI design and development, implementing a gallery layout with JavaScript and CSS to cut photo review time by 30% and accelerate graffiti removal.",
      ],
    },
    {
      company: "Beautycounter",
      title: "Frontend Engineer Intern",
      start: "June 2021",
      end: "Aug 2021",
      description: [
        "Enhanced SEO for the Ecommerce platform by fixing status codes for non-existent pages, boosting organic traffic by 25% in two months.",
        "Implemented 10+ unit tests using Jest, reducing post-deployment bugs by 40%.",
        "Authored extensive documentation for frontend components, facilitating smoother onboarding and team comprehension.",
      ],
    },
  ],
  achievements: [
    {
      title:
        "Winner, Global Power Rankings Hackathon Hosted By Riot Games & AWS",
      period: "Sep 2023 - Nov 2023",
      description:
        "Developed “Heimer’s Hackers Power Ranking”, a web application that provides insights and predictions for League of Legends Esports on a global scale with a team of 6. Implemented front-end design for improved UX on the home page by using React and Typescript, resulting in a 15% increase in session duration from users. Handled hosting and build issues with AWS Amplify, reducing deployment time by 50%.",
    },
  ],
  certifications: [
    {
      title: "Foundations of Project Management",
      provider: "Coursera",
      date: "Jun 2023",
    },
  ],
  projects: [
    {
      title: "Heimer's Hackers Power Ranking",
      description:
        "A web application providing insights and predictions for League of Legends Esports on a global scale.",
      techStack: [
        "Hackathon Winner",
        "React",
        "Nextjs",
        "Typescript",
        "Tailwind",
        "AWS",
      ],
      link: {
        href: "https://github.com/herropaul/globalpowerranking",
        label: "GitHub",
      },
    },
    {
      title: "Discoverify",
      description:
        "A music discovery platform that integrates with Spotify to enhance the music exploration experience.",
      techStack: ["React", "Nextjs", "Javascript", "Tailwind"],
      link: {
        href: "https://github.com/herropaul/discoverify",
        label: "GitHub",
      },
    },
    // ... add more projects if needed
  ],
  skills: [
    "JavaScript(ES6)",
    "Node.js",
    "Typescript",
    "Python 3",
    "C#",
    "HTML5",
    "CSS3",
    "Tailwind",
    "SQL",
  ],
  toolsFrameworks: [
    "Git",
    "React",
    "Redux",
    "React Native",
    "Jest",
    "Selenium",
    "Jira",
    "Postman",
    "Docker",
    "AWS",
    "Excel",
  ],
} as const;
