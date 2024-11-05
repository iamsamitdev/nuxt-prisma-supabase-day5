// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    githubToken: '123456',
    githubUsername: 'no_name',
    githubRepo: 'no_repo'
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
