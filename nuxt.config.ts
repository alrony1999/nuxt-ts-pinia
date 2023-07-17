// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore",
        ],
      },
    ],
    "@pinia-plugin-persistedstate/nuxt",
  ],
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
  app: {
    head: {
      title: 'Nuxt',
      meta: [
        {
          name: 'description',
          content: 'Everything about Nust 3'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ]
    }
  },
  ssr: false,
  runtimeConfig: {
    public: {
      APP_BASE_URL: process.env.APP_BASE_URL,
      ACTIVE_PING_INTERVAL: process.env.ACTIVE_PING_INTERVAL ?? "60",
    },
  },
})
