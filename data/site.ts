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

const englishSite = {
  siteTitle: "Ulsyairil's Portfolio",
  name: "Ulsyairil Oktorio Fadillah",
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
      href: "https://www.linkedin.com/in/ulsyairil",
    },
  ],
  summary:
    "Full Stack Developer with 3+ years of experience building end-to-end web applications, from intuitive frontends and robust backends to reliable deployments. Focused on Laravel, Node.js, and Vue/Nuxt to create scalable, maintainable systems that grow with business needs.",
  avatar: "/images/avatar.png",
  images: {
    about: "/images/workspace.jpg",
    experience: {
      "Infranexia by Telkom Indonesia": "/experience/experience_1.jpg",
      "Infranexia oleh Telkom Indonesia": "/experience/experience_1.jpg",
      "CV. Digital Teknologi Persada": "/experience/experience_2.jpg",
      "Telkom Ignite Regional 6 Kalimantan": "/experience/experience_3.jpg",
    } as Record<string, string>,
    collaboration: [
      "/images/teamwork_1.jpg", 
      "/images/teamwork_2.jpg", 
      "/images/teamwork_3.jpg"
    ],
    contact: "/images/contact.jpg",
  },
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
      company: "Infranexia by Telkom Indonesia",
      location: "Balikpapan · Indonesia",
      type: "Full time",
      period: "Jun 2025 - Dec 2026",
      summary:
        "Worked as a programmer, developing and maintaining multiple internal systems including field data management systems using Laravel framework. Also responsible for deploying and managing applications using Docker containers. And implementing Machine Learning solutions for data analysis and prediction ticketing system.",
      roles: [
        {
          title: "Programmer",
          period: "Jun 2025 - Dec 2026",
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
                  text: "Route Optimization System for field operations",
                  sub: [
                    "Implemented with OSRM and Valhalla to improve travel-time and operational efficiency.",
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

const indonesianSite = {
  ...englishSite,
  siteTitle: "Portfolio Ulsyairil",
  title: "Full Stack Web Developer",
  location: "Balikpapan, Kalimantan Timur, Indonesia",
  summary:
    "Full Stack Developer dengan pengalaman 3+ tahun membangun aplikasi web end-to-end, dari frontend yang intuitif dan backend yang kuat hingga deployment yang andal. Berfokus pada Laravel, Node.js, dan Vue/Nuxt untuk menciptakan sistem yang scalable, mudah dipelihara, dan siap tumbuh bersama kebutuhan bisnis.",
  experience: [
    {
      company: "Infranexia oleh Telkom Indonesia",
      location: "Balikpapan · Indonesia",
      type: "Purnawaktu",
      period: "Jun 2025 - Des 2026",
      summary:
        "Memimpin inisiatif digitalisasi dan peningkatan performa sistem infrastruktur regional dengan fokus pada efisiensi operasional, otomatisasi proses, dan keandalan aplikasi jangka panjang.",
      roles: [
        {
          title: "Programmer",
          period: "Jun 2025 - Des 2026",
          description:
            "Mengembangkan dan memelihara berbagai sistem manajemen internal menggunakan Laravel, mengelola deployment dengan Docker, serta menerapkan solusi Machine Learning untuk analisis data dan prediksi tiket.",
          sections: [
            {
              title: "Proyek dan tanggung jawab utama",
              items: [
                {
                  text: "DALAPA (Data Lapangan Pelanggan) untuk Infranexia oleh Telkom Indonesia",
                  sub: ["Dibangun dengan Laravel 9, Bootstrap 3, jQuery, dan MySQL"],
                },
                {
                  text: "Sistem prediksi tiket dan klasifikasi gambar berbasis Machine Learning",
                  sub: ["Dibangun dengan Node.js, TensorFlow.js, Express.js, dan Docker"],
                },
                {
                  text: "Sistem optimasi rute untuk operasional lapangan",
                  sub: ["Menggunakan OSRM dan Valhalla untuk meningkatkan efisiensi waktu perjalanan dan operasional"],
                },
                {
                  text: "Replikasi dan backup basis data menggunakan Docker",
                  sub: ["Otomatisasi menggunakan Docker, Bash, dan Cron untuk menjaga integritas serta ketersediaan data"],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      company: "CV. Digital Teknologi Persada",
      location: "Remote · Indonesia",
      type: "Purnawaktu",
      period: "Mar 2024 - Jun 2025",
      summary:
        "Mengembangkan dan memelihara sistem informasi rumah sakit serta klinik berbasis Laravel untuk lingkungan produksi.",
      roles: [
        {
          title: "Full Stack Developer (Remote)",
          period: "Mar 2024 - Jun 2025",
          duration: "1 tahun 4 bulan",
          description:
            "Merancang, mengembangkan, dan memelihara sistem manajemen internal. Berkolaborasi lintas fungsi untuk menerjemahkan kebutuhan menjadi solusi yang meningkatkan efisiensi operasional.",
          sections: [
            {
              title: "Proyek dan tanggung jawab utama",
              items: [
                {
                  text: "Sistem Manajemen Rumah Sakit dan Klinik di Singapura",
                  sub: ["Dibangun dengan Laravel 10, Bootstrap 4, jQuery, MySQL, dan Docker"],
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
      type: "Purnawaktu",
      period: "Okt 2020 - Des 2023",
      summary:
        "Mengembangkan aplikasi internal dan platform operasional untuk digitalisasi proses bisnis, percepatan penanganan layanan, dan peningkatan keandalan sistem.",
      roles: [
        {
          title: "Full Stack Web Developer",
          period: "Okt 2020 - Des 2023",
          duration: "3 tahun 3 bulan",
          description:
            "Mengembangkan dan memelihara sistem menggunakan PHP Native, CodeIgniter 3, dan Laravel serta berkolaborasi lintas fungsi dalam perancangan dan implementasi fitur.",
          sections: [
            {
              title: "Proyek dan tanggung jawab utama",
              items: [
                {
                  text: "PENGKOLAN - sistem manajemen kontrak online untuk Telkom Regional 6 Kalimantan",
                  sub: ["Dibangun dengan CodeIgniter 3, MySQL, Bootstrap 4, dan jQuery"],
                },
                {
                  text: "Virtual Plasa untuk CSR dan pelanggan IndiHome",
                  sub: ["Dibangun dengan PHP Native, MySQL, Bootstrap, dan jQuery"],
                },
                {
                  text: "SIDION - sistem manajemen layanan add-on IndiHome",
                  sub: ["Dibangun dengan Laravel 10, Bootstrap 4, jQuery, dan PostgreSQL"],
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
      ...englishSite.projects[0],
      description:
        "Aplikasi web untuk mendigitalisasi pengelolaan data lapangan pelanggan Infranexia oleh Telkom Indonesia sehingga data lebih akurat dan mudah diakses.",
    },
    {
      ...englishSite.projects[1],
      description:
        "Platform pemesanan properti yang membantu pengguna menelusuri, mencari, dan memesan properti secara daring dengan alur yang lebih jelas dan efisien.",
    },
    {
      ...englishSite.projects[2],
      description:
        "Platform forum kota sehat untuk Balikpapan dan sekitarnya yang menyajikan informasi kesehatan, program, serta agenda kegiatan.",
    },
    {
      ...englishSite.projects[3],
      title: "PENGKOLAN - Sistem Manajemen Kontrak Online Telkom Regional 6 Kalimantan",
      description:
        "Aplikasi web yang menyederhanakan proses manajemen kontrak, meningkatkan aksesibilitas, dan memperkuat kolaborasi antarpemangku kepentingan.",
    },
  ] as Project[],
}

export const site = englishSite

export const getSite = (locale: 'en' | 'id') =>
  locale === 'id' ? indonesianSite : englishSite
