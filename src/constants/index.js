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
    nodejs,
    mongodb,
    git,
    byui,
    threejs,
    studioghibli,
    hashclothing,
    jslogo,
    dalle,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "VoIP Engineering Assistant",
      company_name: "Brigham Young University - Idaho",
      icon: byui,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Configuring and maintaining various components of the VoIP system, including IP phones, gateways, and switches.",
        "Designing and optimizing network infrastructure to ensure efficient and reliable transmission of VoIP calls and multimedia communication services.",
        "Troubleshooting and resolving issues with the VoIP system, using tools such as call detail record systems, and log files.",
      ],
    },
    {
      title: "Student Relations Processor / Process Support Specialist",
      company_name: "Brigham Young University - Idaho",
      icon: byui,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Assisted students with various administrative tasks, such as course registration, graduation applications, and credit transfers in a timely and professional manner.",
        "Maintained accurate and up-to-date records of student information in the student database.",
        "Contributed to process improvement initiatives to streamline and enhance student support processes.",
      ],
    },
    {
      title: "Maintenance Crew",
      company_name: "Brigham Young University - Idaho",
      icon: byui,
      iconBg: "#383E56",
      date: "Mar 2019 - Sep 2021",
      points: [
        "Collaborated with other members of the maintenance crew to complete projects and assignments efficiently.",
        "Used problem-solving skills to alleviate issues efficiently with minimal supervision.",
        "Access control jobs like installing door locks and enabling key card access.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hash Clothing",
      description:
        "E-commerce web application that allows users to view, add, and manage their cart, providing a clean and user-friendly UI for a clothing store.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: hashclothing,
      source_code_link: "https://github.com/aj-et/capstone",
      live_demo_link: "https://hash-clothing.netlify.app/"
    },
    {
      name: "Studio Ghibli",
      description:
        "Web application that contains all of the studio ghibli movies, their description, and updates that studio ghibli is planning in the future.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: studioghibli,
      source_code_link: "https://github.com/aj-et/studio-ghibli",
      live_demo_link: "https://studio-ghibli.aarontumbokon.com"
    },
    {
      name: "Vanilla Javascript",
      description:
        "A compilation of javascript projects that do not use and library or dependencies. It shows my understanding of using pure javascript language.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jslogo,
      source_code_link: "https://github.com/aj-et/vanilla-javaScript-projects",
      live_demo_link: "https://vanilla-javascript.aarontumbokon.com"
    },
    {
      name: "DALL-E 2.1",
      description:
        "A web application that uses OpenAI api to generate images based on the text entered. This app lets you create and showcase images you generate.",
      tags: [
        {
          name: "vite",
          color: "blue-text-gradient",
        },
        {
          name: "Open AI",
          color: "green-text-gradient",
        },
        {
          name: "MERN stack",
          color: "pink-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/aj-et/dalle_clone",
      live_demo_link: "https://dall-e.hash-brown.dev/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };