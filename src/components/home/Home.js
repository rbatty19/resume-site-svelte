﻿export let name = '123';
export let content_app = {
  main: {
    name: 'Roberto Batty',
    work_at: '...',
    occupation: 'Software Developer',
    description:
      'Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer',
    image: 'profilepic.jpg',
    bio:
      'Use this bio section as your way of describing yourself and saying what you do, what technologies you like to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing in.',
    contactmessage:
      'Here is where you should write your message to readers to have them get in contact with you.',
    email: 'roberbatty@gmail.com',
    phone: '555-555-5555',
    address: {
      street: '',
      city: 'Cartagena',
      state: 'Bolivar',
      country: 'Colombia',
      zip: '130014',
    },
    website: 'http://www.timbakerdev.com',
    resumedownload: null,
    social: [
      // {
      //   name: 'facebook',
      //   url: 'https://www.facebook.com/iaMuhammedErdem',
      //   className: 'profile-card-social__item facebook',
      //   icon: '#icon-facebook',
      // },
      {
        name: 'twitter',
        url: 'http://twitter.com',
        className: 'profile-card-social__item link',
        icon: '#icon-twitter',
      },
      // {
      //   name: 'behance',
      //   url: 'http://googleplus.com/tbakerx',
      //   className: 'profile-card-social__item behance',
      //   icon: '#icon-behance',
      // },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/tim-baker-8420009a/',
        className: 'profile-card-social__item facebook',
        icon: '#linkedin',
      },
      // {
      //   name: 'instagram',
      //   url: 'http://instagram.com/tbaker_x',
      //   className: 'profile-card-social__item instagram',
      //   icon: '#icon-instagram',
      // },
      {
        name: 'github',
        url: 'http://github.com/tbakerx',
        className: 'profile-card-social__item instagram',
        icon: '#icon-github',
      },
      // {
      //   name: 'codepen',
      //   url: 'http://skype.com',
      //   className: 'profile-card-social__item codepen',
      //   icon: '#icon-codepen',
      // },
      // {
      //   name: 'link',
      //   url: 'http://skype.com',
      //   className: 'profile-card-social__item link',
      //   icon: '#icon-link',
      // },
    ],
  },
  resume: {
    show_skills: 1, 
    show_skills_tags: 1,
    show_eduction: 1,
    show_work: 1,
    skillmessage: 'Here you can create a short write-up of your skills to show off to employers',
    education: [
      {
        school: 'Tecnologíco Comfenalco',
        degree: 'Tecnología en Desarrollo de Software',
        graduated: 'December 2019',
        description:
          'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
      },
      {
        school: 'School #1 Maybe College?',
        degree: 'What did you study 101',
        graduated: 'March 2003',
        description:
          'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
      },
    ],
    work: [
      {
        company: 'Awesome Design Studio',
        title: 'Senior UX God ',
        years: 'March 2010 - Present',
        description:
          'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
      },
      {
        company: 'Super Cool Studio',
        title: 'Junior bug fixer',
        years: 'March 2007 - February 2010',
        description:
          'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
      },
    ],
    skills: [
      {
        name: 'Git',
        level: '60%',
      },
      {
        name: 'Node.js',
        level: '55%',
      },
      {
        name: 'Typescript',
        level: '50%',
      },
      {
        name: 'Java',
        level: '90%',
      },
      {
        name: 'HTML5',
        level: '80%',
      },
      {
        name: 'Js',
        level: '50%',
      },
      {
        name: 'CSS',
        level: '80%',
      },
      {
        name: 'MongoDB',
        level: '50%',
      },
      {
        name: 'SQL',
        level: '40%',
      },
    ],
    skills_tags_titles: {
      title_1: 'Herramientas que he usado en mi vida',
      lvl_1: 'Avanzado',
      lvl_2: 'Intermedio',
      lvl_3: 'Afición',
    },
    skills_tags: {
      advanced: [
        {
          name: 'Node.js',
        },
      ],
      intermediate: [
        {
          name: 'TypeScript',
        },
        {
          name: 'Angular (and AngularJS)',
        },
        {
          name: 'React',
        },
        {
          name: 'Vue',
        },
        {
          name: 'PHP',
        },
        {
          name: 'Cpanel',
        },
        {
          name: 'Firebase (firestore)',
        },
        {
          name: 'Google Cloud (datastore)',
        },
        {
          name: 'SQL',
        },
        {
          name: 'DevOps',
        },
        {
          name: 'C#',
        },
        {
          name: 'Heroku',
        },
        {
          name: 'Java',
        },
      ],
      hobby: [
        {
          name: 'Shell',
        },
        {
          name: 'MS-DOS',
        },
        {
          name: 'Powershell',
        },
        {
          name: 'Travis CI',
        },
        {
          name: 'npm (own package)',
        },
        {
          name: 'Azure',
        },
        {
          name: 'DevOps',
        },
        {
          name: 'Visual Basic',
        },
        {
          name: 'Pixel Art',
        },
        {
          name: 'Game Maker',
        },
        {
          name: 'Adobe Premiere',
        },
        {
          name: 'Adobe Photoshop',
        },
        {
          name: 'Adobe Illustrator',
        },
        {
          name: 'Ionic',
        },
        {
          name: 'Vsce Market (own snippets)',
        },
        {
          name: 'Go',
        },
        {
          name: 'Svelte',
        },
        {
          name: 'Markdown',
        },
      ],
    },
  },
  portfolio: {
    projects: [
      {
        title: 'Canadian Wanderlust',
        category: 'My Travel Blog for my post-university travels',
        image: 'canadian-wanderlust.jpg',
        url: 'https://www.canadianwanderlust.com',
      },
      {
        title: 'Fury Fighting Gear',
        category: '(offline now) A fighting gear company I started',
        image: 'fury-fighting-gear.jpg',
        url: 'http://www.timbakerdev.com',
      },
      {
        title: 'Original Thai Food',
        category: 'Website I built for a restaurant I like in Thailand',
        image: 'original-thai-food.jpg',
        url: 'http://www.timbakerdev.com/originalthaifood.github.io',
      },
      {
        title: 'Resume Website',
        category: 'A React based resume website template',
        image: 'resume-website.jpg',
        url: 'http://www.timbakerdev.com',
      },
      {
        title: 'Smirkspace',
        category: '(MVP Only) A React and Meteor based chat University project.',
        image: 'smirkspace.jpg',
        url: 'http://www.smirkspace.com',
      },
    ],
  },
  testimonials: {
    testimonials: [
      {
        text:
          'Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.',
        user: 'Kareem Abdul Jabbar',
      },
      {
        text:
          "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
        user: 'Steve Wozniak... impersonator',
      },
    ],
  },
};