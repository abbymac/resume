import { ExperienceItem } from "../types/experience";

export const experienceList: ExperienceItem[] = [
  {
    companyName: "Aspire General Insurance",
    title: "Senior Software Developer",
    startDate: new Date("2024-03-01"),
    endDate: null,
    bullets: [
      {
        indent1: [
          `Designed, engineered, and implemented a fully functional React/Typescript/Next project tracker to manage Time Limit Demands (TLDs).`,
        ],
        indent2: [
          `Developed a system to automatically scrape company emails, leveraging LLM to identify and classify TLD-related content, extracting claim numbers and mapping emails to specific demands.`,
          `Built an intuitive UI for users to view, track, and manage TLDs, including status updates and email notifications for overdue demands.`,
          `Analyzed PDF content by leveraging OCR to extract text.`,
          `Created a manager dashboard to view adjusters' progress and hangups using TLD data.`,
        ],
      },
      {
        indent1: [
          `Developed a system that processes PDF files by splitting lines, extracting relevant data, and feeding it to a Microsoft SQL Server database, reducing audit time by 50% and saving the mail team 3 hours/day.`,
        ],
        indent2: [
          `Built an application in React/NextJS with a UI that allows the mail team to audit batch files efficiently by identifying alarming discrepancies.`,
          `Designed a tracker to manage potential lawsuits, pulling data from a third-party software and normalizing for our use.`,
          `Built an automation program to process daily data file drops into a database and display in a UI.`,
        ],
      },
      {
        indent1: [
          `Managed a team of offshore developers, working closely with our product team to determine project requirements and timelines.`,
        ],
      },
    ],
  },
  {
    companyName: "Goodway Group",
    title: "Software Engineer",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2024-01-02"),
    bullets: [
      {
        indent1: [
          `Key contributor to the development of a new, multi-platform ad data visualization product, with a focus on both front-end and back-end technologies.`,
          `Engaged in back-end development, leveraging GraphQL for API services, Kubernetes for container orchestration, and Sequelize as the ORM for efficient database management.`,
          `Utilized Rust for the implementation of custom "rules" to organize and transform data, ensuring tailored data processing and optimization.`,
          `Facilitated scalable and efficient data access and analytics through the management of data storage in an Amazon Redshift database.`,
          `Directed front-end development using React, with MaterialUI for the construction of user interface components, ensuring a seamless and intuitive user experience.`,
          `Incorporated Apollo for streamlined data fetching from the back end, enhancing the application's dynamic content delivery.`,
          `Employed Auth0 for robust user authentication and authorization, guaranteeing secure and customized access to the application.`,
          `Independently designed and developed a comprehensive activity mapping feature to augment reporting metrics, utilizing a full spectrum of development tools.`,
        ],
      },
    ],
  },
  {
    companyName: "Goodway Group",
    title: "Associate Software Engineer",
    startDate: new Date("2021-12-01"),
    endDate: new Date("2023-04-01"),
    bullets: [
      {
        indent1: [
          `Implemented a Slack integration with existing products to refine error reporting and amplify user feedback.`,
          `Crafted a Figma component library to streamline mockups and led the adoption of company branding across tech products, ensuring consistent brand identity.`,
          `Rewrote and reconfigured DAGs from Apache Airflow to Amazon Managed Workflows for Apache Airflow.`,
        ],
      },
    ],
  },
  {
    companyName: "Goodway Group",
    title: "Tech Operations Engineer",
    startDate: new Date("2021-04-01"),
    endDate: new Date("2021-12-01"),
    bullets: [
      {
        indent1: [
          `Successfully addressed over 50 client support tickets, encompassing data discrepancy resolutions, ETL modifications, and implementation of feature enhancements.`,
          `Primary liaison for software support, resolving internal and external user issues.`,
        ],
      },
    ],
  },
  {
    companyName: "Knotel",
    title: "Full Stack Engineer",
    startDate: new Date("2019-11-01"),
    endDate: new Date("2020-02-01"),
    bullets: [
      {
        indent1: [
          `Managed and developed the company’s website built with React, Typescript, and Express with Contentful integrations.`,
        ],
      },
    ],
  },
  {
    companyName: "Knotel",
    title: "Marketing Analyst",
    startDate: new Date("2018-09-01"),
    endDate: new Date("2019-11-01"),
    bullets: [
      {
        indent1: [
          `Developed a React Native app for implementation managers to track the buildout progress of properties.`,
        ],
      },
    ],
  },
];