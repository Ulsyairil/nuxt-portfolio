export type Project = {
  title: string
  description: string
  stack: string[]
  links: {
    label: string
    href: string
  }[]
  image?: string
  impact?: string
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
  titleId?: string
  issuer: string
  date?: string
  proof?: string
  image?: string
  imageAlt?: string
}

const englishSite = {
  siteTitle: "Ulsyairil's Portfolio",
  name: "Ulsyairil Oktorio Fadillah",
  title: "Full Stack Engineer | Junior DevOps Engineer",
  location: "Balikpapan, East Kalimantan, Indonesia",
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
  portfolioUrl: "https://ulsyairil-portfolio.vercel.app",
  resumeUrl: "https://drive.google.com/file/d/1_bTyeS8sa9rBvDJM4-QkvfpBT2DeiI4B/view?usp=sharing",
  summary:
    "A full-stack engineer with over four years of professional experience in full-stack application development, spanning frontend technologies (Vue.js, Nuxt.js) and backend frameworks (Node.js, Express.js, Laravel, Adonis.js). Skilled in building and managing RESTful APIs, optimizing system architecture, and implementing CI/CD pipelines and Linux server configurations. Currently focused on deepening expertise in DevOps and cloud infrastructure, with foundational knowledge of Docker, Nginx, and Vercel. Adds value through an understanding of data analysis and route optimization using OSRM and Valhalla to support the development of efficient, scalable technology solutions.",
  avatar: "/images/avatar.png",
  images: {
    about: "/images/workspace.jpg",
    experience: {
      "Infranexia": "/experience/experience_1.jpg",
      "CV. Digital Teknologi Persada": "/experience/experience_2.jpg",
      "PT. Telkom Indonesia / Telkom Ignite Regional 6 Kalimantan": "/experience/experience_3.jpg",
    } as Record<string, string>,
    collaboration: [
      "/images/teamwork_1.jpg", 
      "/images/teamwork_2.jpg", 
      "/images/teamwork_3.jpg"
    ],
    contact: "/images/contact.jpg",
  },
  skills: [
    { name: "Vue.js", icon: "devicon-vuejs-plain", level: "Intermediate" },
    { name: "Nuxt.js", icon: "devicon-nuxtjs-plain", level: "Intermediate" },
    { name: "HTML5", icon: "devicon-html5-plain", level: "Advanced" },
    { name: "CSS3", icon: "devicon-css3-plain", level: "Advanced" },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: "Advanced" },
    { name: "TypeScript", icon: "devicon-typescript-plain", level: "Intermediate" },
    { name: "Node.js", icon: "devicon-nodejs-plain", level: "Intermediate" },
    { name: "Express.js", icon: "devicon-express-original", level: "Intermediate" },
    { name: "Laravel", icon: "devicon-laravel-plain", level: "Advanced" },
    { name: "PHP", icon: "devicon-php-plain", level: "Advanced" },
    { name: "Adonis.js", level: "Intermediate" },
    { name: "Docker", icon: "devicon-docker-plain", level: "Intermediate" },
    { name: "Nginx", icon: "devicon-nginx-original", level: "Beginner" },
    { name: "CI/CD", icon: "fa-solid fa-arrows-rotate", level: "Intermediate" },
    { name: "Git", icon: "devicon-git-plain", level: "Intermediate" },
    { name: "MySQL", icon: "devicon-mysql-plain", level: "Advanced" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: "Intermediate" },
    { name: "OSRM", icon: "fa-solid fa-route", level: "Intermediate" },
    { name: "Valhalla", icon: "fa-solid fa-route", level: "Intermediate" },
  ],
  experience: [
    {
      company: "Infranexia",
      location: "Balikpapan · Indonesia",
      type: "Full time",
      period: "2025 - Present",
      summary:
        "Digitized staff workflows and built Machine Learning-driven ticketing triage plus route optimization for field operations across Infranexia by Telkom Indonesia.",
      roles: [
        {
          title: "Programmer",
          period: "2025 - Present",
          description:
            "Developed the DALAPA system to digitize staff workflows, reduce manual processes, and enhance operational efficiency. Implemented machine learning models for ticket classification, built routing systems with OSRM and Valhalla, and improved system performance through code refactoring.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "DALAPA system for staff workflow digitization",
                  sub: ["Reduced manual processes and enhanced operational efficiency for Infranexia by Telkom Indonesia."],
                },
                {
                  text: "Machine learning models for ticket classification",
                  sub: ["Accelerated triage and improved assignment accuracy."],
                },
                {
                  text: "Routing systems with OSRM and Valhalla",
                  sub: ["Optimized travel efficiency for field workers."],
                },
                {
                  text: "System performance and maintenance improvements",
                  sub: ["Code refactoring and synchronization processes."],
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
      period: "2024 - 2025",
      summary:
        "Built a production-grade hospital information system with Laravel, supporting healthcare operations and incident response.",
      roles: [
        {
          title: "Full Stack Developer",
          period: "2024 - 2025",
          duration: "1 yr",
          description:
            "Developed a web-based hospital information system for production use, managed production incidents through root cause analysis, and delivered full-stack features from development to production with zero downtime.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "Hospital and Clinic Management System",
                  sub: ["Built with Laravel 10, Bootstrap 4, jQuery, MySQL, and Docker for a Singapore hospital."],
                },
                {
                  text: "Production incident management",
                  sub: ["Root cause analysis for downtime and system overload, improving stability."],
                },
                {
                  text: "Responsive user interfaces with modern JavaScript frameworks",
                  sub: ["Enhanced overall user experience."],
                },
                {
                  text: "Scalable RESTful APIs",
                  sub: ["Seamless integration between frontend and third-party systems."],
                },
                {
                  text: "Full-stack deployment management",
                  sub: ["Zero downtime during release from development to production."],
                },
                {
                  text: "Cross-functional code reviews and technical documentation",
                  sub: ["Maintained high code quality standards."],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      company: "PT. Telkom Indonesia / Telkom Ignite Regional 6 Kalimantan",
      location: "Balikpapan · Indonesia",
      type: "Full time",
      period: "2020 - 2023",
      summary:
        "Built SIDION, PENGKOLAN, and Virtual Plasa platforms to digitalize ancillary services, contract management, and customer-complaint workflows across Telkom Indonesia Regional 6 Kalimantan.",
      roles: [
        {
          title: "Full Stack Web Developer",
          period: "2020 - 2023",
          duration: "3 yrs",
          description:
            "Developed the SIDION, PENGKOLAN, and Virtual Plasa platforms. Contributed to performance enhancements and feature development across internal applications, delivering end-to-end features through cross-functional collaboration.",
          sections: [
            {
              title: "Key projects and responsibilities",
              items: [
                {
                  text: "SIDION - ancillary services management",
                  sub: ["Enhanced operational efficiency and service control."],
                },
                {
                  text: "PENGKOLAN - centralized digital contract management",
                  sub: ["Streamlined document tracking and monitoring processes."],
                },
                {
                  text: "Virtual Plasa - customer complaint management platform",
                  sub: ["Improved issue logging and resolution."],
                },
                {
                  text: "Performance and feature development for internal applications",
                  sub: ["Boosted overall system functionality."],
                },
                {
                  text: "End-to-end feature delivery via cross-functional collaboration",
                  sub: ["Projects completed on time and within scope."],
                },
                {
                  text: "Responsive user interfaces with modern front-end frameworks",
                  sub: ["Increased user engagement and accessibility across devices."],
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
      impact:
        "Digitized field-data collection for Telkom TIF Regional 6, making customer records accurate, searchable, and instantly available to the team.",
      stack: ["Laravel 10", "Bootstrap 3", "jQuery", "MySQL"],
      links: [],
      image: "/projects/dalapa.png",
    },
    {
      title: "Stratlaunch Booking Property Platform",
      description:
        "A property booking platform that allows users to browse, search, and book properties online with ease.",
      impact:
        "Condensed the search-to-booking journey into one flow, making property discovery fast and friction-free for users.",
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
      impact:
        "Put health programs and activities where the Balikpapan community can see them, supporting better public health engagement.",
      stack: ["Node.js", "Adonis.js", "Vue.js", "Nuxt.js", "MySQL", "Redis"],
      links: [],
      image: "/projects/forkohat.png",
    },
    {
      title:
        "Pengkolan (Pengelolaan Kontrak Online) is an Online Contract Management System for Telkom Indonesia Regional 6 Kalimantan",
      description:
        "A web application that streamlines contract management processes, improves accessibility, and enhances collaboration among stakeholders.",
      impact:
        "Moved the whole contract lifecycle online, cutting turnaround and giving stakeholders real-time visibility and collaboration.",
      stack: ["Codeigniter 3", "Bootstrap 4", "jQuery", "MySQL"],
      links: [],
      image: "/projects/pengkolan.png",
    },
  ] as Project[],

  certificates: [
    {
      title: "JavaScript (Intermediate) Certificate",
      titleId: "Sertifikat JavaScript (Menengah)",
      issuer: "HackerRank",
      date: "2023-11",
      proof: "https://www.hackerrank.com/certificates/db7803f5d587",
      image: '/certificate/hackerrank-logo.png',
    },
    {
      title: "JavaScript (Basic) Certificate",
      titleId: "Sertifikat JavaScript (Dasar)",
      issuer: "HackerRank",
      date: "2023-11",
      proof: "https://www.hackerrank.com/certificates/7e08f79e86b3",
      image: '/certificate/hackerrank-logo.png',
    },
    {
      title: "IT Support Google",
      titleId: "Dukungan TI Google",
      issuer: "Coursera",
      date: "2023-08",
      proof: "https://coursera.org/verify/professional-cert/SUXT8JXNYL3T",
      image: '/certificate/coursera-logo.png',
    },
    {
      title: "Beginner Back-End Learning with JavaScript",
      titleId: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding",
      date: "2026-02",
      proof: "https://www.dicoding.com/certificates/81P25917NPOY",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Learn Data Science Implementation with Microsoft Fabric",
      titleId: "Belajar Penerapan Data Science dengan Microsoft Fabric",
      issuer: "Dicoding",
      date: "2026-02",
      proof: "https://www.dicoding.com/certificates/MEPJ28YRLP3V",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Building Generative AI Applications with Microsoft Azure",
      titleId: "Membangun Aplikasi Generative AI dengan Microsoft Azure",
      issuer: "Dicoding",
      date: "2026-02",
      proof: "https://www.dicoding.com/certificates/JLX1V36VNZ72",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Getting Started with Python Programming",
      titleId: "Memulai Pemrograman dengan Python",
      issuer: "Dicoding",
      date: "2026-02",
      proof: "https://www.dicoding.com/certificates/07Z67RVRJPQR",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Learning JavaScript Programming Basics",
      titleId: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "2026-01",
      proof: "https://www.dicoding.com/certificates/53XEK2M4VXRN",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Introduction to Financial Literacy",
      titleId: "Pengenalan Literasi Keuangan",
      issuer: "Dicoding",
      date: "2025-10",
      proof: "https://www.dicoding.com/certificates/1RXYQ3LJKZVM",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Learn Cloud and Gen AI Fundamentals on AWS",
      titleId: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Dicoding",
      date: "2025-10",
      proof: "https://www.dicoding.com/certificates/N9ZO2OY4RPG5",
      image: '/certificate/dicoding-logo.png',
    },
    {
      title: "Javascript Intermediate Course",
      titleId: "Kursus Javascript Menengah",
      issuer: "Sololearn",
      date: "2023-11",
      proof: "https://www.sololearn.com/en/certificates/CC-O14Q3OPC",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "Go Course",
      titleId: "Kursus Go",
      issuer: "Sololearn",
      date: "2022-05",
      proof: "https://www.sololearn.com/en/certificates/CT-JMVCABGO",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "SQL Course",
      titleId: "Kursus SQL",
      issuer: "Sololearn",
      date: "2022-05",
      proof: "https://www.sololearn.com/en/certificates/CT-YO0FE8F6",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "Javascript Course",
      titleId: "Kursus Javascript",
      issuer: "Sololearn",
      date: "2022-04",
      proof: "https://www.sololearn.com/en/certificates/CT-Y3RA5E3I",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "React + Redux Course",
      titleId: "Kursus React + Redux",
      issuer: "Sololearn",
      date: "2022-04",
      proof: "https://www.sololearn.com/en/certificates/CT-HHO8UPVI",
      image: '/certificate/sololearn-logo.png',
    },
    {
      title: "PHP Course",
      titleId: "Kursus PHP",
      issuer: "Sololearn",
      date: "2022-04",
      proof: "https://www.sololearn.com/en/certificates/CT-FPR4YPA2",
      image: '/certificate/sololearn-logo.png',
    },
  ] as Certificate[],
  education: [
    {
      school: "Balikpapan State of Polytechnic",
      schoolId: "Politeknik Negeri Balikpapan",
      degree: "Diploma III in Electronics Engineering",
      degreeId: "Diploma III Teknik Elektronika",
      studyProgram: "Informatics Engineering Study Program",
      studyProgramId: "Program Studi Teknik Informatika",
      gpa: "3.75/4.00",
      place: "Balikpapan, East Kalimantan, Indonesia",
      placeId: "Balikpapan, Kalimantan Timur, Indonesia",
      period: "2016 - 2019",
    },
    {
      school: "State Senior High School 2 Balikpapan",
      schoolId: "SMA Negeri 2 Balikpapan",
      degree: "Social science",
      degreeId: "Ilmu Pengetahuan Sosial",
      place: "Balikpapan, East Kalimantan, Indonesia",
      placeId: "Balikpapan, Kalimantan Timur, Indonesia",
      period: "2013 - 2016",
    },
  ],
};

const indonesianSite = {
  ...englishSite,
  siteTitle: "Portfolio Ulsyairil",
  title: "Full Stack Engineer | Junior DevOps Engineer",
  location: "Balikpapan, Kalimantan Timur, Indonesia",
  resumeUrl: "https://drive.google.com/file/d/1PvLeO2DYBGskpKoCuB-cVUVfSbQSZkPR/view?usp=sharing",
  summary:
    "Full-stack engineer dengan pengalaman profesional lebih dari empat tahun dalam pengembangan aplikasi, mencakup teknologi frontend (Vue.js, Nuxt.js) dan framework backend (Node.js, Express.js, Laravel, Adonis.js). Memiliki keahlian dalam membangun dan mengelola RESTful API, mengoptimalkan arsitektur sistem, serta mengimplementasikan pipeline CI/CD dan konfigurasi server Linux. Saat ini berfokus memperdalam keahlian di bidang DevOps dan infrastruktur cloud, dengan pengetahuan dasar mengenai Docker, Nginx, dan Vercel. Memberikan nilai tambah melalui pemahaman tentang analisis data dan optimasi rute menggunakan OSRM serta Valhalla untuk mendukung pengembangan solusi teknologi yang efisien dan scalable.",
  experience: [
    {
      company: "Infranexia",
      location: "Balikpapan · Indonesia",
      type: "Purnawaktu",
      period: "2025 - Saat ini",
      summary:
        "Mendigitalkan alur kerja staf dan membangun triase tiket berbasis Machine Learning serta optimasi rute untuk operasional lapangan Infranexia oleh Telkom Indonesia.",
      roles: [
        {
          title: "Programmer",
          period: "2025 - Saat ini",
          description:
            "Mengembangkan sistem DALAPA untuk mendigitalkan alur kerja staf, mengurangi proses manual, dan meningkatkan efisiensi operasional. Mengimplementasikan model machine learning untuk klasifikasi tiket, membangun sistem perutean dengan OSRM dan Valhalla, serta meningkatkan kinerja sistem melalui refactoring.",
          sections: [
            {
              title: "Proyek dan tanggung jawab utama",
              items: [
                {
                  text: "Sistem DALAPA untuk digitalisasi alur kerja staf",
                  sub: ["Mengurangi proses manual dan meningkatkan efisiensi operasional Infranexia oleh Telkom Indonesia."],
                },
                {
                  text: "Model machine learning untuk klasifikasi tiket",
                  sub: ["Mempercepat proses triase dan meningkatkan akurasi penugasan."],
                },
                {
                  text: "Sistem perutean dengan OSRM dan Valhalla",
                  sub: ["Mengoptimalkan efisiensi perjalanan bagi petugas lapangan."],
                },
                {
                  text: "Peningkatan kinerja dan pemeliharaan sistem",
                  sub: ["Melalui refactoring kode dan proses sinkronisasi."],
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
      type: "Purnawaktu",
      period: "2024 - 2025",
      summary:
        "Membangun sistem informasi rumah sakit berbasis Laravel untuk lingkungan produksi dan operasional layanan kesehatan.",
      roles: [
        {
          title: "Full Stack Developer",
          period: "2024 - 2025",
          duration: "1 tahun",
          description:
            "Mengembangkan sistem informasi rumah sakit untuk lingkungan produksi, mengelola insiden produksi, dan mengantarkan fitur full-stack dari pengembangan hingga produksi dengan zero downtime.",
          sections: [
            {
              title: "Proyek dan tanggung jawab utama",
              items: [
                {
                  text: "Sistem informasi rumah sakit berbasis web",
                  sub: ["Mendukung operasional layanan kesehatan untuk rumah sakit di Singapura."],
                },
                {
                  text: "Manajemen insiden produksi",
                  sub: ["Analisis akar masalah untuk downtime dan kelebihan beban sistem, meningkatkan stabilitas."],
                },
                {
                  text: "Kolaborasi tim untuk efisiensi rilis dan keandalan aplikasi",
                  sub: ["Meningkatkan keandalan aplikasi."],
                },
                {
                  text: "Antarmuka pengguna responsif dengan framework JavaScript modern",
                  sub: ["Meningkatkan pengalaman pengguna secara keseluruhan."],
                },
                {
                  text: "RESTful API yang skalabel",
                  sub: ["Memfasilitasi integrasi antara front-end dan sistem pihak ketiga."],
                },
                {
                  text: "Penerapan fitur full-stack dengan zero downtime",
                  sub: ["Pengelolaan deployment dari pengembangan hingga produksi."],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      company: "PT. Telkom Indonesia / Telkom Ignite Regional 6 Kalimantan",
      location: "Balikpapan · Indonesia",
      type: "Purnawaktu",
      period: "2020 - 2023",
      summary:
        "Membangun platform SIDION, PENGKOLAN, dan Virtual Plasa untuk digitalisasi layanan tambahan, manajemen kontrak, dan pengelolaan keluhan pelanggan di Telkom Indonesia Regional 6 Kalimantan.",
      roles: [
        {
          title: "Full Stack Web Developer",
          period: "2020 - 2023",
          duration: "3 tahun",
          description:
            "Mengembangkan platform SIDION, PENGKOLAN, dan Virtual Plasa. Berkontribusi pada peningkatan kinerja dan fitur di berbagai aplikasi internal, serta menghadirkan fitur end-to-end melalui kolaborasi lintas fungsi.",
          sections: [
            {
              title: "Proyek dan tanggung jawab utama",
              items: [
                {
                  text: "SIDION - pengelolaan layanan tambahan",
                  sub: ["Meningkatkan efisiensi operasional dan kendali layanan."],
                },
                {
                  text: "PENGKOLAN - manajemen kontrak digital terpusat",
                  sub: ["Menyederhanakan pelacakan dan pemantauan dokumen."],
                },
                {
                  text: "Virtual Plasa - platform pengelolaan keluhan pelanggan",
                  sub: ["Memperbaiki pencatatan dan penyelesaian masalah."],
                },
                {
                  text: "Peningkatan kinerja dan pengembangan fitur aplikasi internal",
                  sub: ["Meningkatkan fungsionalitas sistem secara keseluruhan."],
                },
                {
                  text: "Penghadiran fitur end-to-end melalui kolaborasi lintas fungsi",
                  sub: ["Proyek selesai tepat waktu dan sesuai ruang lingkup."],
                },
                {
                  text: "Antarmuka pengguna responsif dengan framework front-end modern",
                  sub: ["Meningkatkan keterlibatan pengguna dan aksesibilitas di berbagai perangkat."],
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
      impact:
        "Mendigitalkan pendataan lapangan untuk Telkom TIF Regional 6, membuat data pelanggan akurat, mudah dicari, dan langsung tersedia bagi tim.",
    },
    {
      ...englishSite.projects[1],
      description:
        "Platform pemesanan properti yang membantu pengguna menelusuri, mencari, dan memesan properti secara daring dengan alur yang lebih jelas dan efisien.",
      impact:
        "Menyederhanakan alur pencarian hingga pemesanan properti dalam satu proses, membuat penemuan properti cepat dan bebas hambatan.",
    },
    {
      ...englishSite.projects[2],
      description:
        "Platform forum kota sehat untuk Balikpapan dan sekitarnya yang menyajikan informasi kesehatan, program, serta agenda kegiatan.",
      impact:
        "Menghadirkan program dan kegiatan kesehatan di satu wadah yang mudah diakses masyarakat Balikpapan, mendukung keterlibatan publik yang lebih baik.",
    },
    {
      ...englishSite.projects[3],
      title: "PENGKOLAN - Sistem Manajemen Kontrak Online Telkom Regional 6 Kalimantan",
      description:
        "Aplikasi web yang menyederhanakan proses manajemen kontrak, meningkatkan aksesibilitas, dan memperkuat kolaborasi antarpemangku kepentingan.",
      impact:
        "Memindahkan seluruh siklus kontrak ke sistem daring, mempercepat proses dan memberi pemangku kepentingan visibilitas serta kolaborasi yang lebih baik.",
    },
  ] as Project[],
}

export const site = englishSite

export const getSite = (locale: 'en' | 'id') => {
  const base = locale === 'id' ? indonesianSite : englishSite

  if (locale === 'id') {
    return {
      ...base,
      certificates: base.certificates.map(certificate => ({
        ...certificate,
        title: certificate.titleId ?? certificate.title,
      })),
      education: base.education.map(entry => ({
        ...entry,
        degree: entry.degreeId ?? entry.degree,
        school: entry.schoolId ?? entry.school,
        studyProgram: entry.studyProgramId ?? entry.studyProgram,
        place: entry.placeId ?? entry.place,
      })),
    }
  }

  return base
}
