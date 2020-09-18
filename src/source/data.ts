import profilePicture from '../assets/profile.png';

import project1 from '../assets/project1.gif';
import project2 from '../assets/project2.gif';
import project3 from '../assets/project3.gif';
import project4 from '../assets/project4.gif';

export const colors = {
  first: '#232122',
  second: '#fd3c3c',
  third: '#138d90',
  fourth: '#dddede',
};

export const headData = {
  title: 'Gustavo Varallo | Software Engineer',
  description: `Welcome to Gustavo Varallo's website`,
};

export const mainData = {
  title: 'Hi, my name is ',
  name: 'Gustavo Varallo',
  subtitle: 'I am a software engineer',
  subtitle2: 'And many other things :)',
  cta: 'Know more',
};

export const aboutData = {
  sectionTitle: 'About',
  img: { src: profilePicture },
  p1: `I've always enjoyed computer science, and in 2013 I decided to dive into 
  this field, learning algorithms, data structures and many different programming
  tools. Started with Java back there, then learned some Ruby and RoR, and nowadays 
  I am focusing on Javascript, TypeScript, React/React Native, NodeJS, Docker, 
  Redis, AWS and so on, covering both front-end (mobile included) and back-end 
  development.`,
  p2: `Although my main goal today is to work as a software engineer, my professional 
  background is vastly in the commercial area, where I gained more than 10 years 
  of experience in sales, key account management, business development, teams 
  management, hiring and training. I started as an account executive, all the 
  way to my last role as a director of global account management at a german airline.`,
  p3: `Further down you can check some of the projects I've built lately, where
  it will cover my programming skills and knowledge as a software engineer. Don't
  forget to check my GitHub profile as well!`,
};

export const projectSectionTitle = 'Projects';

export const projectData = [
  {
    title: 'Selfolio',
    description1: `This very website you are right now was built entirely by me, 
    where I left as an open source project for others to use.`,
    description2: `Built with React, Typescript, and minimum dependecies.  
    All the responsive design was made in pure CSS with Styled Components.`,
    liveUrl: 'https://selfolio.netlify.app/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    img: { src: project1 },
  },
  {
    title: 'Face Recon',
    description1: `An app that recognizes faces in any picture URL which uses 
    Clarifai's API. I developed both the frontend and backend of this app.`,
    description2: `For the front-end I used React, and for the back-end I used 
    NodeJS, Express, PostgreSQL, bcrypt and Knex.js. Deployed on Heroku. For 
    more details, please click on the source code link below.`,
    liveUrl: 'https://face-recon-app.herokuapp.com/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/facerecognition',
    sourceText: 'Source Code',
    img: { src: project2 },
  },
  {
    title: 'Ravenous',
    description1: `An app to search for businesses in any location. For this 
    project I used React and the Yelp API.`,
    description2: `For more details, please click on the source code link below.`,
    liveUrl: 'https://ravenouscode-app.surge.sh/',
    liveButtonText: 'See it live',
    sourceUrl: 'https://github.com/guvarallo/ravenous',
    sourceText: 'Source Code',
    img: { src: project3 },
  },
  {
    title: 'GitHub Explorer',
    description1: `It uses GitHub's API to search for repos. Built with 
    TypeScript, React, Axios for API calls and Styled Components.`,
    description2: ``,
    liveUrl: '',
    liveButtonText: '',
    sourceUrl: 'https://github.com/guvarallo/selfolio',
    sourceText: 'Source Code',
    img: { src: project4 },
  },
];

export const contactData = {
  title: 'Contact',
  description: 'Send me an e-mail!',
  mailTo: 'mailto:gustavo@varallo.me',
};

export const FooterData = {
  githubUrl: 'https://github.com/guvarallo',
  linkedinUrl: 'https://www.linkedin.com/in/gustavovarallo/',
};
