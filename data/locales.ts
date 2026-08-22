import type { Locale } from '~/composables/useLocale'

export const messages = {
  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', certificates: 'Certificates', education: 'Education', collaboration: 'Collaboration', resume: 'Resume', contact: 'Contact', menu: 'Open menu', closeMenu: 'Close menu' },
    hero: {
      role: 'Full Stack Developer',
      tagline: 'Building mature, scalable web experiences with clean architecture and modern product engineering.',
      linkedIn: 'LinkedIn', github: 'GitHub', resume: 'View Resume', avatarAlt: 'Portrait of Ulsyairil Oktorio Fadillah',
    },
    about: {
      title: 'About Me', subtitle: 'I turn complex requirements into reliable, maintainable digital products.',
      intro: 'Full Stack Developer with 3+ years of experience building end-to-end web applications, from architecture to deployment. I focus on clean code, simple solutions, and outcomes that genuinely matter to users.',
      cards: [
        { title: 'Full Stack Web', text: 'End-to-end delivery across responsive frontends, robust backends, and well-structured databases.' },
        { title: 'Production Ready', text: 'Hands-on experience with CI/CD, monitoring, debugging, incident response, reliability, and maintainability.' },
        { title: 'Web Optimization', text: 'Performance, user experience, and modern best practices for efficient applications with measurable value.' },
      ], imageLabel: 'Workspace image',
    },
    skills: {
      title: 'Technical Skills', subtitle: 'A comprehensive technology portfolio across modern software development.',
      groups: [
        { title: 'Backend & API', text: 'Laravel, Node.js, Express.js, REST API management, PHP development', icon: 'fa-solid fa-code' },
        { title: 'Frontend', text: 'Vue.js, Nuxt.js, JavaScript ecosystem, clean and responsive UI development', icon: 'fa-regular fa-window-maximize' },
        { title: 'Database & DevOps', text: 'Database solutions, Docker deployment, CI/CD pipelines, Git version control', icon: 'fa-solid fa-database' },
        { title: 'Architecture & Analysis', text: 'System architecture, debugging, data analysis, web server configuration', icon: 'fa-solid fa-sitemap' },
      ],
    },
    experience: { title: 'Work Experience', subtitle: 'A career focused on systems, automation, and application reliability.', overview: 'Career overview', details: 'Selected experience', responsibilities: 'Key projects and responsibilities', imageLabel: 'Experience image', technologies: 'Technologies', achievements: 'Key achievements' },
    projects: { title: 'Featured Projects', subtitle: 'Selected systems and digital products built for real operational needs.', zoom: 'Open preview', unavailable: 'Image coming soon', noLinks: 'Internal project', close: 'Close project preview', imageFallback: 'Project image', impact: 'Impact' },
    certificates: { title: 'Certifications', subtitle: 'Credentials from recognized platforms across web development, cloud, AI, and data.', featured: 'Selected credentials', others: 'Other platforms', viewProof: 'View credential', unavailable: 'Proof not available' },
    education: { title: 'Education & Languages', education: 'Education', degree: 'Associate Degree in Electronics Engineering', school: 'Balikpapan State Polytechnic', place: 'Balikpapan, East Kalimantan — 2019', languages: 'Languages', indonesian: 'Indonesian', indonesianLevel: 'Native / Bilingual', english: 'English', englishLevel: 'Intermediate' },
    summary: { title: 'Competency Summary', years: '3+', yearsLabel: 'Years of Experience', yearsText: 'End-to-end web application development', systemsLabel: 'Systems Developed', systemsText: 'DALAPA, SIDION, PENGKOLAN, Virtual Plasa', certificatesLabel: 'Certifications', certificatesText: 'Dicoding, Coursera, HackerRank, Sololearn', projectsLabel: 'Featured Projects', projectsText: 'Stratlaunch, Forkohat, Portfolio', note: 'Experienced in team collaboration, project accountability, and building scalable, maintainable systems.' },
    collaboration: { title: 'Collaboration & Teamwork', text: 'Teamwork is the foundation of every development project. Effective collaboration and a strong sense of togetherness accelerate delivery and lead to more thoughtful, high-quality solutions.', imageLabel: 'Team photo' },
    resume: { title: 'Resume', subtitle: 'A concise overview of my experience, skills, and education.', eyebrow: 'Professional profile', format: 'PDF document', language: 'English edition', view: 'View Resume', download: 'Download Resume' },
    contact: { title: 'Get in Touch', subtitle: 'Open to collaboration and Full Stack Developer opportunities.', description: 'Ready to contribute production experience and technology-driven solutions.', location: 'Location', phone: 'Phone', email: 'Email', linkedIn: 'LinkedIn Profile', exportPdf: 'Export Portfolio PDF', imageLabel: 'Contact image' },
    theme: { label: 'Theme', select: 'Select theme', system: 'System', light: 'Light', dark: 'Dark' },
    language: { label: 'Language', select: 'Select language' },
    footer: 'Built with care in Balikpapan.',
  },
  id: {
    nav: { home: 'Beranda', about: 'Tentang', experience: 'Pengalaman', skills: 'Keahlian', projects: 'Proyek', certificates: 'Sertifikasi', education: 'Pendidikan', collaboration: 'Kolaborasi', resume: 'Resume', contact: 'Kontak', menu: 'Buka menu', closeMenu: 'Tutup menu' },
    hero: {
      role: 'Full Stack Developer',
      tagline: 'Membangun pengalaman web yang matang dan scalable dengan arsitektur bersih serta rekayasa produk modern.',
      linkedIn: 'LinkedIn', github: 'GitHub', resume: 'Lihat Resume', avatarAlt: 'Foto Ulsyairil Oktorio Fadillah',
    },
    about: {
      title: 'Tentang Saya', subtitle: 'Mengubah kebutuhan kompleks menjadi produk digital yang andal dan mudah dipelihara.',
      intro: 'Full Stack Developer dengan pengalaman 3+ tahun membangun aplikasi web end-to-end, dari arsitektur hingga deployment. Saya fokus pada kode yang bersih, solusi sederhana, dan hasil yang benar-benar penting bagi pengguna.',
      cards: [
        { title: 'Full Stack Web', text: 'Pengembangan menyeluruh dari frontend responsif, backend yang robust, hingga basis data yang terstruktur.' },
        { title: 'Production Ready', text: 'Pengalaman menangani CI/CD, monitoring, debugging, respons insiden, keandalan, dan maintainability.' },
        { title: 'Web Optimization', text: 'Optimasi performa, user experience, dan best practices modern untuk aplikasi yang efisien dan bernilai.' },
      ], imageLabel: 'Gambar ruang kerja',
    },
    skills: {
      title: 'Keahlian Teknis', subtitle: 'Portfolio teknologi komprehensif untuk seluruh lapisan pengembangan perangkat lunak modern.',
      groups: [
        { title: 'Backend & API', text: 'Laravel, Node.js, Express.js, manajemen REST API, pengembangan PHP', icon: 'fa-solid fa-code' },
        { title: 'Frontend', text: 'Vue.js, Nuxt.js, ekosistem JavaScript, pengembangan UI yang rapi dan responsif', icon: 'fa-regular fa-window-maximize' },
        { title: 'Basis Data & DevOps', text: 'Solusi basis data, deployment Docker, pipeline CI/CD, kontrol versi Git', icon: 'fa-solid fa-database' },
        { title: 'Arsitektur & Analisis', text: 'Perancangan arsitektur sistem, debugging, analisis data, konfigurasi server web', icon: 'fa-solid fa-sitemap' },
      ],
    },
    experience: { title: 'Pengalaman Kerja', subtitle: 'Perjalanan karier yang berfokus pada pengembangan sistem, otomasi, dan peningkatan keandalan aplikasi.', overview: 'Ringkasan karier', details: 'Pengalaman terpilih', responsibilities: 'Proyek dan tanggung jawab utama', imageLabel: 'Gambar pengalaman', technologies: 'Teknologi', achievements: 'Pencapaian utama' },
    projects: { title: 'Proyek Unggulan', subtitle: 'Pilihan sistem dan produk digital untuk kebutuhan operasional nyata.', zoom: 'Buka pratinjau', unavailable: 'Gambar segera hadir', noLinks: 'Proyek internal', close: 'Tutup pratinjau proyek', imageFallback: 'Gambar proyek', impact: 'Dampak' },
    certificates: { title: 'Sertifikasi', subtitle: 'Kredensial dari platform terkemuka di bidang pengembangan web, cloud, AI, dan data.', featured: 'Kredensial pilihan', others: 'Platform lainnya', viewProof: 'Lihat bukti', unavailable: 'Bukti belum tersedia' },
    education: { title: 'Pendidikan & Bahasa', education: 'Pendidikan', degree: 'Ahli Madya Teknik Elektronika', school: 'Politeknik Negeri Balikpapan', place: 'Balikpapan, Kalimantan Timur — 2019', languages: 'Bahasa', indonesian: 'Indonesia', indonesianLevel: 'Asli / Bilingual', english: 'Inggris', englishLevel: 'Menengah' },
    summary: { title: 'Ringkasan Kompetensi', years: '3+', yearsLabel: 'Tahun Pengalaman', yearsText: 'Pengembangan aplikasi web end-to-end', systemsLabel: 'Sistem yang Dikembangkan', systemsText: 'DALAPA, SIDION, PENGKOLAN, Virtual Plasa', certificatesLabel: 'Sertifikasi', certificatesText: 'Dicoding, Coursera, HackerRank, Sololearn', projectsLabel: 'Proyek Unggulan', projectsText: 'Stratlaunch, Forkohat, Portfolio', note: 'Berpengalaman dalam kolaborasi tim, akuntabilitas proyek, dan pengembangan sistem yang scalable serta mudah dipelihara.' },
    collaboration: { title: 'Kolaborasi & Kebersamaan Tim', text: 'Kerja sama tim adalah fondasi utama dalam setiap proyek pengembangan. Kolaborasi yang efektif dan kebersamaan yang kuat mempercepat proses serta menghasilkan solusi yang lebih matang dan berkualitas.', imageLabel: 'Foto tim' },
    resume: { title: 'Resume', subtitle: 'Ringkasan pengalaman, keahlian, dan pendidikan saya.', eyebrow: 'Profil profesional', format: 'Dokumen PDF', language: 'Edisi bahasa Indonesia', view: 'Lihat Resume', download: 'Unduh Resume' },
    contact: { title: 'Hubungi Saya', subtitle: 'Terbuka untuk peluang kolaborasi dan posisi Full Stack Developer.', description: 'Siap berkontribusi dengan pengalaman pengembangan sistem produksi dan solusi berbasis teknologi.', location: 'Lokasi', phone: 'Telepon', email: 'Email', linkedIn: 'Profil LinkedIn', exportPdf: 'Ekspor Portfolio PDF', imageLabel: 'Gambar kontak' },
    theme: { label: 'Tema', select: 'Pilih tema', system: 'Sistem', light: 'Terang', dark: 'Gelap' },
    language: { label: 'Bahasa', select: 'Pilih bahasa' },
    footer: 'Dibuat dengan penuh perhatian di Balikpapan.',
  },
} as const

export const getMessages = (locale: Locale) => messages[locale]
