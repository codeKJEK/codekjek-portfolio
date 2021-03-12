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
  paragraphOne: '1989 Born in Charlotte North Carolina',
  paragraphTwo: 'In 2008 I attended ITT Technical Institute where I learned basic HTML, CSS and JavaScript. In 2012 I used that knowledge to freelance until I obtained a position in Belk’s eCommerce department editing landing pages using HTML.',
  paragraphThree: 'By 2016 I had parted ways with Belk to do more freelance work before picking up steady work from Caring For Healthcare. There I expanded my knowledge of HTML and CSS before attending UNCC’s Full-Stack Development Bootcamp in 2020.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sws-project.jpg',
    title: 'Sneakers With Stories',
    info: 'Our team created a React app displaying Daniel Brenneman custom shoes and their inspirational stories.  I setup the project, worked with mongoose and reviewed many pull requests.',
    info2: 'What is next? Rebuild in Next.js, remove unneeded database (project requirement)',
    url: 'https://safe-beyond-09344.herokuapp.com/',
    repo: 'https://github.com/jethan16/SneakersWithStories', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quiz-project.jpg',
    title: 'Javascript Quiz',
    info: 'Our team wanted to create a JavaScript quiz to help our classmates learn JavaScript.  I worked with Sequelize, Passport User Authentication and launched to project to Heroku.',
    info2: 'What is next? Add content for HTML5 and CSS3 quiz.',
    url: 'https://morning-dusk-12730.herokuapp.com/',
    repo: 'https://github.com/codeKJEK/flash-card-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'homepage-project.jpg',
    title: 'Custom Homepage',
    info: 'Our team created a custom homepage for your browser.  I designed the mobile first layout, created simple buttons and integrated the rotating background JavaScript and API.',
    info2: 'What is next? Update UI/UX and find a new random fact API.',
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
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kurtis-kovel-10329b24',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'http://github.com/codeKJEK',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
