import profilePicture from '../assets/profile.png';

import cleanReact from '../assets/clean-react.jpg';
import selfolio from '../assets/selfolio.mp4';
import facerecon from '../assets/facerecon.mp4';
import extractify from '../assets/extractify.mp4';
import weather from '../assets/weather.mp4';

export const colors = {
  background: '#F0EFEA',
  first: '#000B29',
  second: '#1E656D',
  third: '#f22f46',
  fourth: '#F0EFEA',
};

export const headData = {
  title: 'Gustavo Varallo | Solutions Architect',
  description: `Welcome to Gustavo Varallo's website`,
};

export const mainData = {
  title: `Hey there, I'm`,
  name: ' Gustavo Varallo',
  subtitle: 'A Solutions Architect',
  subtitle2: 'Currently at ',
  cta: 'Know more',
};

export const aboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `My professional background includes many years in the commercial
  area, where I gained experience with customer relationship building, account 
  management, teams management, hiring and training. Passed through technology 
  companies like Booking.com, Hostelworld.com, where I started as an account 
  executive, all the way to my last role as a director of global account 
  management at a technology SaaS german airline.`,
  p2: `On the technical side, I have knowledge in Design Patterns, 
  Clean Architecture, SOLID, DRY, KISS, YAGNI & TDD. Passionate about computer 
  science, in 2013 I started to learn Java, then jumped to Ruby and RoR, and 
  nowadays loving to work with JavaScript/TypeScript and its libraries/runtime 
  (React, Vue.js, Node.js).`,
  p3: `Here are some tools I enjoy using: Linux, Git, React, Redux, Vue.js, 
  Webpack, Babel, Node.js, Express, SQL/NoSQL, Jest, VS Code, among others.`,
};

export const projectSectionTitle = 'Personal Projects';

export const projectData = [
  {
    title: 'Clean React (4Devs - Survey for Devs)',
    description1: `An online survey app to solidify and apply advanced knowledge 
    in Design Patterns, Clean Architecture, SOLID principles & TDD/DDD on projects 
    using React and TypeScript.`,
    description2: `Please follow the source code link below to see all the
    principles, design patters, methodologies, libraries and tools I used for it.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/clean-react',
    sourceText: 'Source Code',
    pic: { src: cleanReact },
  },
  {
    title: 'Selfolio',
    description1: `This very website you are right now. I made it available as 
    an open source project so others can benefit from it.`,
    description2: `I built it from scratch with React, Typescript, and minimum 
    dependencies. All the responsive design was made in pure CSS with Styled 
    Components.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    video: { src: selfolio },
  },
  {
    title: 'Weather App',
    description1: `A Vue.js weather forecast app using OpenWeather, LocationIQ and
    Google APIs`,
    description2: `I used v3.x of Vue.js and Tailwind CSS for styles.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/weather',
    sourceText: 'Source Code',
    video: { src: weather },
  },
  {
    title: 'Face Recon',
    description1: `An app that recognizes faces in any picture URL which uses 
    Clarifai's API. I developed both the front-end and back-end of this app.`,
    description2: `For the front I used React, and for the back I used 
    NodeJS, Express, PostgreSQL, bcrypt and Knex.js. Deployed on Heroku. For 
    more details, please click on the source code link below.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/facerecognition',
    sourceText: 'Source Code',
    video: { src: facerecon },
  },
  {
    title: 'Extractify',
    description1: `An app that parses PDF to Text in seconds!`,
    description2: `I built this project with the following tools: In the backend, 
    I used Firebase, Node/Express and the pdf-parse package. In the frontend, I 
    used React and React Bootstrap. Finally I used Firebase Hosting to deploy.`,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/extractify',
    sourceText: 'Source Code',
    video: { src: extractify },
  },
];

export const contactData = {
  title: 'Drop me a line',
  description: `Your e-mail won't be lost in a pile of junk, trust me!`,
  mailTo: 'mailto:gustavo@varallo.me',
};

export const FooterData = {
  linkedinUrl: 'https://www.linkedin.com/in/gustavovarallo/',
  githubUrl: 'https://github.com/guvarallo',
};