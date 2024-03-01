
import lth from "../assets/img/lth.png";
import pickit from "../assets/img/pickit.svg";
import filt from "../assets/img/filt.png";

const experiences = [
    {
      title: "Teaching Assistant",
      company_name: "Lunds Tekniska Högskola - Lund",
      icon: lth,
      iconBg: "#fff",
      date: "Jan 2024 - Current",
      description: `I am currently serving as a Teaching Assistant for the course computer organization, a mandatory course for the second-year students in computer science at LTH. The course delves into fundamental concepts surrounding the inner workings of computers. In my role, I lead on-site laboratory sessions, guiding students through hands-on exercises that explore crucial computer principles, including registers, memory, compilers, and more. My responsibilities extend to aiding students in comprehending simulations, particularly in Assembly and C programming.`,
      tags: [
        "Assembly",
        " C ",
        " Teaching "
      ]
    },
    {
      title: "Software Engineer",
      company_name: "Pickit - Visby",
      icon: pickit,
      iconBg: "#f7f7f780",
      date: "Jun 2023 - Aug 2023",
      description: `I undertook the responsibility of developing a plugin enabling seamless integration of Pickit within the WordPress native environment, in response to client demands from businesses utilizing WordPress in their operations. The goal was to streamline the development process. Through utilization of multiple APIs, I successfully developed a plugin that not only provided Pickit accessibility within WordPress but also facilitated direct image imports from Pickit to the WordPress platform. This plugin is set to be release on the official plugin store for Wordpress.`,
      tags: [
        "php",
        "Javascript",
        "Docker",
        "Github",
        "Wordpress",
        "API",
        "Plugin"
      ]
    },
    {
      title: "Email and Data Migration",
      company_name: "Filt - Stockholm",
      icon: filt,
      iconBg: "#1c1c1c",
      date: "Apr 2023 - May 2023",
      description: `I was approached to assist a Stockholm-based podcast production company in migrating their entire email infrastructure and digital assets to Google Workspace. Taking on the challenge, I successfully orchestrated the setup of Google Workspace from the ground up and seamlessly migrated all company emails and data. This process required extensive communication with the CTO and founder to ensure a smooth transition. In total, I managed the migration of over 50 emails, encompassing more than 500,000 individual emails, ensuring a comprehensive and successful transition for the company.`,
      tags: [
        "Google Workspace",
        "Simply",
        "DNS",
        "Communication",
        "Client Relationship"
      ]
    },
    {
        title: "Software Engineer",
        company_name: "Pickit - Visby",
        icon: pickit,
        iconBg: "#f7f7f780",
        date: "Jun 2022 - Aug 2022",
        description: `As a motivated first-year student, I enthusiastically took on several projects designed for bachelor students. The collective goal of these projects was to develop an application capable of retrieving user data from Azure and visualizing it using React. Over the course of the summer, I successfully completed all the projects to such a high standard that the organization chose to integrate my work into their codebase. The data visualization tool I created continues to be utilized by their sales force, providing valuable insights into product usage to this day.`,
        tags: [
          "Javascript",
          "CSS",
          "React",
          "KQL",
          "Material UI",
          "ReCharts.js",
          "Azure",
          "Github",
        ]
      },
  ];

const frameworkIconUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg",
]

const languageIconUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",        
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/clojure/clojure-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg",  
]

const softwareIconUrls = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg",       
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
]

export {experiences, frameworkIconUrls, languageIconUrls, softwareIconUrls};