import { ProjectType } from "../types";

import crypto from "../assets/crypto1.jpg";
import crypto2 from "../assets/crypto2.jpg";
import filmoteka2 from "../assets/filmoteka2.jpg";
import filmoteka from "../assets/filmoteka.jpg";
import sprite from "../assets/icons.svg";
import jazzRender2 from "../assets/jazzRender2.png";
import jazzRender from "../assets/jazzRender.png";
import schoolHack2 from "../assets/schoolHack2.jpg";
import schoolHack from "../assets/schoolHack.jpg";
import wallet2 from "../assets/wallet2.png";
import wallet from "../assets/wallet.png";

export const DESKTOP = "desktop";
export const MOBILE = "mobile";

export const PROJECT_TITLES = [
  "SchoolHack AI",
  "Crypto",
  "Jazz Render",
  "Wallet",
  "Filmoteka",
] as const;

export const PROJECTS: ProjectType[] = [
  {
    title: PROJECT_TITLES[0],
    description:
      "is an innovative and AI-powered application designed to revolutionize learning for students aged 15+ and professionals from various industries with nearly <strong>2&nbsp;million&nbsp;users</strong>. Our app harnesses the power of artificial intelligence, including being among the first API apps to integrate ChatGPT-4, to provide a personalized learning experience with features such as plagiarism checks, paraphrasing, summarization, Answer this, and document analysis. The app&apos;s goal is to enable users to study more effectively, save time, and improve their overall learning outcomes.",
    mainImage: schoolHack,
    mobileImage: schoolHack2,
    githubLink: "",
    liveLink: "https://app.schoolhack.ai/",
    technologies: [
      "React",
      "Typescript",
      "Redux Toolkit",
      "Web3.js",
      "Pusher.js",
      "React-hook-form",
      "OneSignal",
      "React-voice-visualizer",
      "Jest",
      "Sentry",
    ],
  },
  {
    title: PROJECT_TITLES[1],
    description:
      "provides crowdsourced and professionally curated research, price analysis, arbitrage, cryptocurrency converter and crypto market-moving news to help market players make more informed trading decisions. If you’re looking for a set of practical and insightful crypto market information and data, we have the analytics tools to suit your business needs.",
    mainImage: crypto,
    mobileImage: crypto2,
    githubLink: "https://github.com/YZarytskyi/finance-crypto",
    liveLink: "https://yzarytskyi.github.io/finance-crypto/",
    technologies: [
      "React",
      "Redux Toolkit",
      "Typescript",
      "Firebase",
      "React-hook-form",
      "Apexcharts",
      "Binance API",
      "NYT API",
      "Jest",
    ],
  },
  {
    title: PROJECT_TITLES[2],
    description:
      "creates visualizations that help architects reveal their ideas and present them in the most appropriate atmosphere.",
    mainImage: jazzRender,
    mobileImage: jazzRender2,
    githubLink: "https://github.com/YZarytskyi/jazz-render",
    liveLink: "https://jazz-render-xl8t.vercel.app",
    technologies: [
      "Next.js",
      "GraphQL",
      "Tailwind",
      "DatoCMS",
      "Material UI",
      "React Hook Form",
    ],
  },
  {
    title: PROJECT_TITLES[3],
    description:
      "is a powerful finance manager that offer you a 360° view of your finances. We combine best-in-breed AI driven categorization and analytics with a deep set of features that are proven to work.",
    mainImage: wallet,
    mobileImage: wallet2,
    githubLink: "https://github.com/YZarytskyi/wallet",
    liveLink: "https://yzarytskyi.github.io/wallet/",
    technologies: ["React", "Redux Toolkit", "Chart.js", "Formik", "Axios"],
  },
  {
    title: PROJECT_TITLES[4],
    description:
      "you will find: information about your favorite movies, new movies in theaters, list of Top available movies, its rating. By creating an account with us, you will have the opportunity adding to &quot;Queue&quot; or &quot;Watched&quot; your favorite movies.",
    mainImage: filmoteka,
    mobileImage: filmoteka2,
    githubLink: "https://github.com/YZarytskyi/filmoteka",
    liveLink: "https://yzarytskyi.github.io/filmoteka/",
    technologies: ["Vanilla JS", "Firebase", "SASS"],
  },
];

export const TOOLS = [
  {
    name: "HTML 5",
    icon: "html",
  },
  {
    name: "CSS 3",
    icon: "css",
  },
  {
    name: "JavaScript",
    icon: "js",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Redux",
    icon: "redux",
  },
  {
    name: "Next.js",
    icon: "next",
  },
  {
    name: "Git",
    icon: "git",
  },
] as const;

export const LINKS = ["home", "about", "projects", "contact"];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yurii-zarytskyi/",
    icon: `${sprite}#icon-linkedIn`,
  },
  {
    name: "Telegram",
    link: "https://t.me/y_zrt",
    icon: `${sprite}#icon-telegram`,
  },
  {
    name: "GitHub",
    link: "https://github.com/YZarytskyi",
    icon: `${sprite}#icon-github`,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/y.zarytskyi/",
    icon: `${sprite}#icon-instagram`,
  },
];
