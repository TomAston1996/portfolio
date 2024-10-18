import {  DiTerminal, DiJava, DiHtml5, DiPython, DiJavascript } from "react-icons/di";
import { SiGit, SiCss3, SiMysql, SiAmazonaws, SiPostgresql, SiSpringboot, SiReact, SiPowerapps } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export const Skills = [
  {
    slug: "python",
    Component: DiPython,
    title: "Python",
    Description: () => <>Desktop applications, backend, data science, scripting, NLP</>,
  },
  {
    slug: "javascript",
    Component: DiJavascript,
    title: "JavaScript",
    Description: () => <>Web app development</>,
  },
  {
    slug: "react",
    Component: SiReact,
    title: "React",
    Description: () => <>Frontend web development</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS",
    Description: () => <>Lambda Functions, S3, DynamoDB, CloudFront, CloudFormation, API Gateway, Route53, Certificates Manager</>,
  },
  {
    slug: "cpp",
    Component: TbBrandCpp,
    title: "C++",
    Description: () => <>Cybersecurity app development</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Backend web development</>,
  },
  {
    slug: "springboot",
    Component: SiSpringboot,
    title: "SpringBoot",
    Description: () => <>Building web APIs!</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "postgres",
    Component: SiPostgresql,
    title: "PostgresSQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Terminal",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
  {
    slug: "powerapps",
    Component: SiPowerapps,
    title: "MS Power Apps",
    Description: () => <>Low code platform inc. PowerBI, PowerApps & PowerAutomated</>,
  },
];
