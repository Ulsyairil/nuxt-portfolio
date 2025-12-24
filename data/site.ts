export type Project = {
  title: string
  description: string
  stack: string[]
  links: {
    label: string
    href: string
  }[]
  image?: string
}

export type Experience = {
  company: string
  location: string
  type: string
  period: string
  summary: string
  roles: {
    title: string
    period: string
    duration?: string
    description: string
    sections?: {
      title: string
      items: {
        text: string
        sub?: string[]
      }[]
    }[]
  }[]
}

export type Certificate = {
  title: string
  issuer: string
  proof?: string
  image?: string
  imageAlt?: string
}

export const site = {
  siteTitle: "Ulsyairil's Portfolio",
  name: "Ulsyairil",
  title: "Full Stack Web Developer",
  location: "Balikpapan, Indonesia",
  email: "ulsyairil@outlook.co.id",
  phone: "+62 821-9899-1068",
  links: [
    {
      label: "GitHub",
      icon: "devicon-github-original",
      href: "https://github.com/Ulsyairil",
    },
    {
      label: "LinkedIn",
      icon: "devicon-linkedin-plain",
      href: "https://www.linkedin.com/in/ulsyairil-oktorio-fadillah-70a88617b/",
    },
  ],
  summary:
    "Full Stack Web Developer with experience delivering end-to-end web applications using HTML, CSS, JavaScript, PHP, Node.js, and Vue. I enjoy turning requirements into clean UI, solid APIs, and maintainable code, with clear communication and strong problem-solving.",
  avatar: "/avatar.jpg",
  skills: [
    { name: "Nuxt", icon: "devicon-nuxtjs-plain", level: "Intermediate" },
    { name: "Vue", icon: "devicon-vuejs-plain", level: "Intermediate" },
    {
      name: "Tailwind CSS",
      icon: "devicon-tailwindcss-plain",
      level: "Amateur",
    },
    { name: "Node", icon: "devicon-nodejs-plain", level: "Intermediate" },
    { name: "MySQL", icon: "devicon-mysql-plain", level: "Advanced" },
    { name: "Docker", icon: "devicon-docker-plain", level: "Beginner" },
    { name: "Laravel", icon: "devicon-laravel-plain", level: "Advanced" },
    { name: "PHP", icon: "devicon-php-plain", level: "Advanced" },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: "Advanced" },
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain",
      level: "Intermediate",
    },
    { name: "HTML", icon: "devicon-html5-plain", level: "Advanced" },
    { name: "CSS", icon: "devicon-css3-plain", level: "Advanced" },
    {
      name: "Bootstrap",
      icon: "devicon-bootstrap-plain",
      level: "Intermediate",
    },
    {
      name: "React",
      icon: "devicon-react-original-wordmark colored",
      level: "Amateur",
    },
    {
      name: "React Native",
      icon: "devicon-reactnative-original-wordmark colored",
      level: "Amateur",
    },
  ],
  experience: [
    {
      company: "TIF Regional 6 Kalimantan",
      location: "Balikpapan · Indonesia",
      type: "Full time",
      period: "Jun 2025 - Present",
      summary:
        "Worked as a web developer, developing and maintaining multiple internal systems including field data management systems using Laravel framework. Also responsible for deploying and managing applications using Docker containers. And implementing Machine Learning solutions for data analysis and prediction ticketing system.",
      roles: [
        {
          title: "Web Developer",
          period: "Jun 2025 - Present",
          description:
            "Developed and maintained multiple internal management systems using Laravel framework. Collaborated with cross-functional teams to gather requirements, design solutions, and implement features that improved operational efficiency. Deployed and managed applications using Docker containers. Implemented Machine Learning solutions for data analysis and prediction ticketing system.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "DALAPA (Data Lapangan Pelanggan) Management System for Telkom TIF Regional 6 Kalimantan",
                  sub: ["Built with Laravel 9, Bootstrap 3, jQuery, and MySQL"],
                },
                {
                  text: "Machine Learning Ticketing Prediction System and Image Classification for Telkom TIF Regional 6 Kalimantan",
                  sub: [
                    "Built with Node.js, TensorFlow.js, Express.js, and Docker",
                  ],
                },
                {
                  text: "Database Replication and Backup System using Docker for Telkom TIF Regional 6 Kalimantan",
                  sub: [
                    "Implemented using Docker, Bash scripting, and Cron jobs to automate database replication and backup processes, ensuring data integrity and availability.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      company: "CV. Digital Teknologi Persada",
      location: "Tangerang · Indonesia",
      type: "Full time",
      period: "Mar 2024 - Jun 2025",
      summary:
        "Worked as a full stack web developer, developing and maintaining multiple internal systems including hospital, and clinic management systems using Laravel",
      roles: [
        {
          title: "Full Stack Developer (Remote)",
          period: "Mar 2024 - Jun 2025",
          duration: "1 yr 4 mos",
          description:
            "Developed and maintained multiple internal management systems using Laravel framework. Collaborated with cross-functional teams to gather requirements, design solutions, and implement features that improved operational efficiency.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "Hospital and Clinic Management System at Singapore Hospital",
                  sub: [
                    "Built with Laravel 10, Bootstrap 4, jQuery, MySQL, and Docker.",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      company: "PT. Global Jet Express",
      location: "Balikpapan · Indonesia",
      type: "Full time",
      period: "Jan 2024 - Feb 2024",
      summary:
        "Worked as a warehouse admin, responsible for managing inventory, coordinating shipments, and ensuring accurate record-keeping of goods received and dispatched.",
      roles: [
        {
          title: "Warehouse Admin",
          period: "Jan 2024 - Feb 2024",
          duration: "1 month",
          description:
            "Managed inventory, coordinated shipments, and ensured accurate record-keeping of goods received and dispatched. Collaborated with logistics teams to streamline warehouse operations and improve efficiency.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "Inbound and Outbound Shipment Management",
                },
                {
                  text: "Sorting and Organizing Inventory",
                },
                {
                  text: "Temporary Storage Management",
                },
                {
                  text: "Administration and Reporting",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      company: "Telkom Ignite Regional 6 Kalimantan",
      location: "Balikpapan · Indonesia",
      type: "Full time",
      period: "Oct 2020 - Dec 2023",
      summary:
        "Worked as a full stack developer, developing and maintaining multiple internal systems including contract management, customer service portals, and addon management systems using PHP Native, Codeigniter 3, and Laravel frameworks.",
      roles: [
        {
          title: "Full Stack Developer",
          period: "Oct 2020 - Dec 2023",
          duration: "2 yrs 3 mos",
          description:
            "Developed and maintained multiple internal management systems using PHP Native, Codeigniter 3 frameworks, and Laravel. Collaborated with cross-functional teams to gather requirements, design solutions, and implement features that improved operational efficiency.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "Online Contract Management System for Telkom Indonesia Regional 6 Kalimantan",
                  sub: ["Built with CI3, MySQL, Bootstrap 4, jQuery"],
                },
                {
                  text: "Developed Virtual Plasa For CSR and Indihome Customers",
                  sub: ["Built with PHP Native, MySQL, Bootstrap, jQuery"],
                },
                {
                  text: "Developed System Digital Addon for Indihome Addon Management System",
                  sub: [
                    "Built with Laravel 10, Bootstrap 4, jQuery, PostgreSQL",
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ] as Experience[],

  projects: [
    {
      title: "DALAPA (Data Lapangan Pelanggan) Management System",
      description:
        "A web application to manage field customer data for Telkom TIF Regional 6 Kalimantan, improving data accuracy and accessibility.",
      stack: ["Laravel 10", "Bootstrap 3", "jQuery", "MySQL"],
      links: [],
      image: "/projects/dalapa.png",
    },
    {
      title: "Stratlaunch Booking Property Platform",
      description:
        "A property booking platform that allows users to browse, search, and book properties online with ease.",
      stack: [
        "Laravel 12",
        "Bootstrap 4",
        "jQuery",
        "MySQL",
        "Redis",
        "Webpack",
        "Docker",
      ],
      links: [],
      image: "/projects/stratlaunch.png",
    },
    {
      title: "FORKOHAT (Freelance Project)",
      description:
        "A healthy city forum platform for the people of Balikpapan and its surroundings, which provides information about health and well-being as well as programs and the order of activities carried out.",
      stack: ["Node.js", "Adonis.js", "Vue.js", "Nuxt.js", "MySQL", "Redis"],
      links: [],
      image: "/projects/forkohat.png",
    },
    {
      title:
        "Pengkolan (Pengelolaan Kontrak Online) is an Online Contract Management System for Telkom Indonesia Regional 6 Kalimantan",
      description:
        "A web application that streamlines contract management processes, improves accessibility, and enhances collaboration among stakeholders.",
      stack: ["Codeigniter 3", "Bootstrap 4", "jQuery", "MySQL"],
      links: [],
      image: "/projects/pengkolan.png",
    },
  ] as Project[],

  certificates: [
    {
      title: "Javascript Intermediate",
      issuer: "Hackerrank",
      proof: "https://www.hackerrank.com/certificates/db7803f5d587",
      image: '/certificate/hackerrank-logo.png',
    },
    {
      title: "Javascript Basic",
      issuer: "Hackerrank",
      proof: "https://www.hackerrank.com/certificates/7e08f79e86b3",
      image: '/certificate/hackerrank-logo.png',
    },
    {
      title: "IT Support Google",
      issuer: "Coursera",
      proof: "https://coursera.org/verify/professional-cert/SUXT8JXNYL3T",
      image: '/certificate/coursera-logo.png',
    },
    {
      title: "Introduction to Financial Literacy",
      issuer: "Dicoding",
      proof: "https://www.dicoding.com/certificates/1RXYQ3LJKZVM",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding",
      proof: "https://www.dicoding.com/certificates/N9ZO2OY4RPG5",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Javascript Intermediate Courses",
      issuer: "Sololearn",
      proof: "https://www.sololearn.com/en/certificates/CC-O14Q3OPC",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "Javascript Courses",
      issuer: "Sololearn",
      proof: "https://www.sololearn.com/en/certificates/CT-Y3RA5E3I",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "SQL Courses",
      issuer: "Sololearn",
      proof: "https://www.sololearn.com/en/certificates/CT-YO0FE8F6",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "Golang Courses",
      issuer: "Sololearn",
      proof: "https://www.sololearn.com/en/certificates/CT-JMVCABGO",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "React + Redux Courses",
      issuer: "Sololearn",
      proof: "https://www.sololearn.com/en/certificates/CT-HHO8UPVI",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "PHP Courses",
      issuer: "Sololearn",
      proof: "https://www.sololearn.com/en/certificates/CT-FPR4YPA2",
      image: '/certificate/sololearn-logo.png',
    },
  ] as Certificate[],
};
