// FIXME: Replace hardcoded routes with some auto-generated logic
//
// Unable to statically generate all dynamic paths as HTML files as Nuxt / Nitro
// is unable to do this. Need to add paths manually to generate properly. 
//
// Refer to --> https://github.com/nuxt/nuxt/issues/13949
const articlePaths = [
  "/articles/foo",
  "/articles/bar"
];

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/google-fonts"],
  ssr: true,
  hooks: {
    async "nitro:config" (nitroConfig) {
      if (nitroConfig.dev) { return }
      nitroConfig.prerender?.routes?.push(...articlePaths);
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap",
        },
      ],
    },
  },
  css: ['/assets/main.css']
})