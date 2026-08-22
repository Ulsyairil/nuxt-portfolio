export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    portfolioPdf: {
      siteUrl: "",
      vercelBypassSecret: "",
    },
  },
  nitro: {
    vercel: {
      functions: {
        runtime: "nodejs22.x",
        memory: 2048,
        maxDuration: 60,
      },
    },
  },
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  app: {
    head: {
      title: "Ulsyairil Portfolio",
      meta: [
        {
          name: "description",
          content: "Portfolio website of Ulsyairil, a full stack web developer.",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: "og:title", content: "Portfolio" },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
        { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" },
        { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" },
      ],
      script: [
        { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/js/all.min.js", defer: true },
      ]
    },
  },
  typescript: { 
    strict: false,
    typeCheck: false
  },
});
