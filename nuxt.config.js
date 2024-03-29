require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-target
  // The client-side rendered virtual DOM tree is not matching server-rendered
  target:'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'roopila',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/custom.css',
    '@mdi/font/css/materialdesignicons.css',
    '~/assets/css/style-rtl.css'
  ],

  bootstrapVue:{

  },


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    '~/plugins/mixins/validation.js',
    '~/plugins/mixins/helper.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/apollo',
    'nuxt-izitoast'
  ],

  router:{
    middleware:[
      'auth',
      'clearValidationErrors'
    ]
  },

  loading: '~/components/Loading.vue',

  auth: {
    resetOnError: true,
    defaultStrategy: 'express',
    scopeKey: 'roles',
    vuex: {
      namespace: 'auth', // Vuex store namespace for keeping state.
    },
    strategies: {
      express: {
        provider: 'laravel/jwt',
        url: process.env.API_BASE_URL,
        endpoints: {
          login: { url: '/login', method: 'post'},
          refresh: { url: '/refresh', method: 'get' },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/me', method: 'get' }
        },
        token: {
          property: 'token',
          maxAge: 60 * 60,
          type:false
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
        user: {
          property: 'data',
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    },
  },

  apollo:{
    clientConfigs:{
      default:{
        httpEndpoint: process.env.APOLLO_HTTP_ENDPOINT
      }
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
