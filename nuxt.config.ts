// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },
  css: ['./assets/style.css'],

  modules: ['@nuxtjs/i18n'],
})