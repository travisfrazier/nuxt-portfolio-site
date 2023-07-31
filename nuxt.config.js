// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ["@storyblok/nuxt", { accessToken: "ncwzDdvOCQIvqtjIdTNr2gtt" }]
    // ...
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";',
        },
      },
    },
  },
  app: {
    head: {
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/TextPlugin.min.js' }
      ],
    }
  },
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
})
