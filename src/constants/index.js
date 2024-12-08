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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import mockmasterui from "../assets/mock-master-ui.png";
import budgetbuddy from "../assets/budgetbuddy.png";
import talencrafter from "../assets/talencrafter.png";
import picportal from "../assets/picportal.png";
import aigen from "../assets/aigen.png";
import Weather from "../assets/weather.png";
import Notes from "../assets/notes.png";
import landing from "../assets/restaurant.png";
import simon from "../assets/simon.png";
import quiz from "../assets/quiz.png";
import tictactoe from "../assets/tictactoe.png";
import drum from "../assets/drum.png";

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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Mock Master",
    description:
      "MockMaster is an AI-driven mock interview tool that tailors questions, evaluates responses, and offers feedback with ratings. Built with Next.js, Tailwind CSS, and MongoDB",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: mockmasterui,
    source_code_link:
      "https://github.com/aravindkk004/MockMaster-Ai-Mock-Interviewer-",
  },
  {
    name: "Budget Buddy",
    description:
      "BudgetBuddy is a smart expense tracker that simplifies budgeting, monitors spending, and provides insights. Built with Next.js, Tailwind CSS, and MongoDB.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
    ],
    image: budgetbuddy,
    source_code_link: "https://github.com/aravindkk004/BudgetBuddy",
  },
  {
    name: "TalenCrafter",
    description:
      "TalenCrafter is a job platform built with EJS, Express.js, and PostgreSQL, connecting candidates and employers with resume-based hiring and real-time notifications",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      { name: "Express JS", color: "green-text-gradient" },
      { name: "PostgreSQL", color: "pink-text-gradient" },
    ],
    image: talencrafter,
    source_code_link: "https://github.com/aravindkk004/TalenCrafter",
  },
  {
    name: "PicPortal",
    description:
      "PicPortal is a social platform like Instagram, where users can post, follow, bookmark, and interact with profiles. Built with Next.js and MongoDB..",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: picportal,
    source_code_link: "https://github.com/aravindkk004/PicPortal",
  },
  {
    name: "Weather App",
    description:
      "The Weather App, built with Next.js and Tailwind CSS, provides real-time weather updates, forecasts, and location-based insights in a sleek, user-friendly interface.",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: Weather,
    source_code_link: "https://github.com/aravindkk004/weather_app",
  },
  {
    name: "AiGen-SaaS",
    description:
      "AiGen-SaaS is an AI-powered platform offering background removal, code generation, and voice generation tools. Built with Next.js and Flask.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aigen,
    source_code_link: "https://github.com/aravindkk004/AiGen-SaaS",
  },
  {
    name: "Notes App",
    description:
      "The Notes App, built with Next.js, Tailwind CSS, and MongoDB, allows users to create, manage, and organize notes efficiently with a clean, intuitive interface.",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Notes,
    source_code_link: "https://github.com/aravindkk004/Notes-app",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "The Restaurant Landing Page, built with HTML, CSS, and JavaScript, features a sleek design to showcase menus, services, and promotions with smooth user interactions.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://github.com/aravindkk004/Restaurant-Landing-Page",
  },
  {
    name: "Simon Game",
    description:
      "The Simon Game, built with HTML, CSS, and JavaScript, is an interactive memory game that challenges players to replicate sequences of colors and sounds.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: simon,
    source_code_link: "https://github.com/aravindkk004/Simon-Game",
  },
  {
    name: "Quiz App",
    description:
      "The Quiz App, built with HTML, CSS, and JavaScript, is a simple platform allowing users to answer predefined questions in an interactive format.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/aravindkk004/Quiz-App",
  },
  {
    name: "Tic Tac Toe Game",
    description:
      "The Tic-Tac-Toe Game, built with HTML, CSS, and JavaScript, offers a simple and interactive way to play the classic two-player game.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/aravindkk004/Tic-Tac-Toe",
  },
  {
    name: "Drum - kit",
    description:
      "The Drum Kit, built with HTML, CSS, and JavaScript, is a fun and interactive platform to play drum sounds using clicks or keyboard keys.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: drum,
    source_code_link: "https://github.com/aravindkk004/Drum-Kit",
  },
];

export { services, technologies, experiences, testimonials, projects };
