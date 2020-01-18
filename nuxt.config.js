import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    // '@/assets/style/index.scss'
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/vuetify',
    '@/plugins/mixins/pluralize',
    '@/plugins/mixins/user.js',
    '@/plugins/mixins/validation.js',
    '@/plugins/axios.js',
    {src: '@/plugins/chartist', mode: 'client'}
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://backpizza.test/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/sign-in', method: 'post', propertyName: 'meta.token'
          },
          user: {
            url: 'auth/me', method: 'get', propertyName: 'data'
          },
          logout: {
            url: 'auth/sign-out', method: 'post'
          } //
        }
      }
    },
    redirect: {
      login: '/auth/signin',
      home: '/'
    }
  },
  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['@mdi/font/css/materialdesignicons.css', '~/assets/scss/variables.scss',],
    iconfont: 'mdi',
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    css: [
      '@/assets/scss/app.scss'
    ],
    vendor: [
      'axios'
    ],
  }
}
