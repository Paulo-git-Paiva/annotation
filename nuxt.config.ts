// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  route: {
    routes: [
      { name: 'home', path: '/', component: 'pages/homeApp.vue' },
      { name: 'createAnnotation', path: '/createAnnotation', component: 'pages/createAnnotation.vue' },
      { name: 'listApp', path: '/listApp', component: 'pages/listApp.vue' },
    ],
  },
}) as any;
