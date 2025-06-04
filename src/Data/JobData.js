const Jobs = [
  {
    company: "Ministry of Health",
    title: "Software Developer Intern",
    date: "July 2022 - Sept. 2022",
    desc: [
      "Optimized handling of budget proposals by creating a streamlined data processing pipeline using TypeScript and React. Enhanced financial accuracy and decision-making for 100+ health institutions across Ontario.",
      "Accelerated Excel sheet data processing by 30% by building 7+ backend REST APIs using Node.js, Express and MongoDB.",
      "Utilized Azure DevOps for Agile processes including project planning, version control, and CI/CD pipeline execution.",
    ],
  },
  {
    company: "Bank of Canada",
    title: "Systems Developer Intern",
    date: "Sept. 2022 - Apr. 2023",
    desc: [
      "Configured API Gateways within an internal multi-system architecture using Broadcom Enterprise Software, providing secure access to regulatory reporting systems for 30,000+ financial services firms throughout Canada",
      "Leveraged IAM systems (CyberArk, SailPoint, ServiceNow) to configure reverse web proxies, firewalls, and external user whitelisting, and conducted smoke testing to validate system stability.",
      "Organized and performed a large-scale SQL dump to migrate extensive data and code between 2 data centers.",
    ],
  },
  {
    company: "Kumon",
    title: "Software Developer Intern",
    date: "May 2023 - Aug. 2023",
    desc: [
      "Spearheaded the development of a student progress monitoring web application using Django and MS SQL, eliminating manual administrative processes and handwritten notes, improving average data entry speed by 250%.",
    ],
  },
  {
    company: "Toronto Metropolitan University",
    title: "Undergraduate Research Assistant",
    date: "Oct. 2023 - Aug. 2025",
    desc: [
      "Utilized React to maintain and develop key features for SimSnap, a multi-device educational biological simulation platform, by implementing HCI research and designs into 20+ scalable front-end components.",
      "Resolved system architecture errors such as data duplication and synchronization inconsistencies using Node.js, Socket.io, and MongoDB, optimizing real-time collaboration by reducing delays by 30ms and ensuring accurate data logging.",
      "Automated deployment to AWS EC2 by developing a Powershell pipeline, reducing manual efforts by 85% and enabling real-time student data collection for research partners at UW-Madison and UIUC.",
    ],
  },
  {
    company: "AMD",
    title: "Software Engineer Intern",
    date: "Sept. 2024 - Apr. 2025",
    desc: [
      "Developed new features for two internal web applications: a KPI Report Dashboard and an Automated Benchmark Tool using Vite, React, Redux, and ChakraUI, providing performance data to accelerate QA and UAT processes by 48 hours a week.",
      "Constructed a unified backend by migrating legacy REST API architecture from .NET and MS SQL to Express and Snowflake, improving scalability and maintainability while supporting 4 critical applications.",
      "Leveraged Chart.js to visualize and dynamically render testing results and KPI reports for stakeholders, generating insights to improve upcoming AMD GPU and Adrenalin releases.",
      "Created a chatbot using OpenAI API to generate custom charts and deliver analysis and insights on raw performance data",
    ],
  },
  {
    company: "AMD",
    title: "Software Systems Engineer 2",
    date: "June 2025 - Present",
    desc: ["Incoming Full Time"],
  },
];

export default Jobs.reverse();
