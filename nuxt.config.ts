export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./assets/style.css'],
  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://edouard-herrengt.com',
  },

  nitro: {
    compressPublicAssets: true,
  },

  vite: {
    build: {
      cssMinify: true,
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [{ name: 'theme-color', content: '#0f172a' }],
    },
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  sitemap: {
    urls: [
      '/portfolio/bookmark-manager',
      '/portfolio/finance-app',
      '/portfolio/weather-app',
      '/portfolio/vermintide-2',
      '/portfolio/myteam',
      '/portfolio/ip-address-tracker',
      '/portfolio/audiophile',
      '/portfolio/photosnap',
      '/portfolio/designo',
    ],
  },
})
