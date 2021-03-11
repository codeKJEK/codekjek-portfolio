import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kurtis Kovel | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kurtis Kovel',
  subtitle: 'Web Designer & Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'kurtiskovel.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sws-project.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://safe-beyond-09344.herokuapp.com/',
    repo: 'https://github.com/jethan16/SneakersWithStories', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quiz-project.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://morning-dusk-12730.herokuapp.com/',
    repo: 'https://github.com/codeKJEK/flash-card-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'homepage-project.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://jethan16.github.io/HomePage/',
    repo: 'https://github.com/jethan16/HomePage', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
