import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "MD Abu",
  lastName: "Rayhan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/gallery/Avatar.Jpeg", // 1:1 aspect ratio

  location: "Australia/Melbourne", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Send me a email for exiting oppotunity and collabration</>,
  description: (
    <>

    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AbuRayhan71",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/md-abu-rayhan-854b3b1a9/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "cont.rayhan@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Welcome to Rayhan's Portfolio Website</>,
  subline: (
    <>
  I'm Rayhan, an AI Engineer and a current Master's student in Data Science at <InlineCode>University of New South Wales</InlineCode> in Sydney.
  <br /> I love working with data and software to create innovative solutions.
</>

  ),
};

const about = {
  label: "",
  title: "Go to My Resume",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/rayhan7",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Rayhan, a Master's of Data Science student at UNSW and a Software Engineer based in Melbourne, 
        with a strong focus on AI and Machine Learning.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Headstarter",
        timeframe: "Dec,2024  - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Built 14+ machine learning, ai-engineering and full-stack projects in fast-paced software team environments
           
          </>,
          <>
            Implemented llm-chaning, hyperparameter tuning, fine tuning on 10+ LLM models controlling for latency & accuracy.,
          <> Coached by Google Machine Learning, Google Kubernetes, Two Sigma, Tesla, Figma and Citadel Engineers</>
          
          <> Developed 5+ neural networks in Python, 11 apps in Typescript on AWS/Vercel with dev and production environments</>
          

         
            Created 321+ commits on github with 7-day deadlines, getting a Career Capital increase of 40% from start date
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ECAL",
        timeframe: "Dec 2023 - Feb 2024",
        role: "Software Engineer",
        achievements: [
          <>
             Contributed to the development of AI-driven tools like Smart Events by leveraging Azure AI and OpenAI, streamlining
              workflow automation. Achieved a 25% reduction in development cycles by automating repetitive tasks such as data
              validation and content generation for fixtures.
              <br></br>
             Designed and implemented a Golang-based API integrated with Azure AI-Language Translate, enabling real-time
              multi-language support for event fixtures, which boosted global user engagement by making content accessible in over
              10 languages.
           <></>   
            
            Collaborated with a team of 8 engineers, participating in Agile ceremonies to align on project milestones and
              deliverables.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of New South Wales",
        description: <>Masters of Data Science</>,
      },
      {
        name: "Swinburne University of Technology",
        description: <> Bachelors of Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "AI Anwer Engine",
        description: <>
        <br></br>• Developed Gobeshona.io an AI answer engine using Next.js, TypeScript, and Puppeteer.
        <br></br>• Enabled users to get context-rich answers with cited sources from URLs.
        <br></br>• Used Cheerio, Redis caching, and Tailwind CSS, deployed on Vercel.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
      {
        title: "CustomTranslator",
        description: <>
        <br></br>• Developed an API using Golang and Azure AI to translate event fixture details into 21+ languages, including for clients like the
        English Premier League, driving global audience engagement.
        <br></br>• Integrated the solution seamlessly within ECAL’s event management platform as part of a newly formed AI team.</>,
        // optional: leave the array empty if you don't want to display images
        
      },
    ],
  },
};



const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};



export { person, social, newsletter, about };
