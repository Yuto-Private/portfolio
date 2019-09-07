const pkg = require('./package')
const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])

const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

module.exports = {
  mode: 'spa',
  generate: {
    routes() {
      return cdaClient
        .getEntries(ctfConfig.CTF_BLOG_POST_TYPE_ID)
        .then(entries => {
          return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)]
        })
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'YutoTakahashi Portforio' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'YutoTakahashi Portforio 制作実績とプロフィールを掲載。' },
      { hid: 'og:title', property: 'og:title', content: 'YutoTakahashi Portforio' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'YutoTakahashi Portforio' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://tkhsyt.me/' },
      { hid: 'og:description', property: 'og:description', content: 'YutoTakahashi Portforio 制作実績とプロフィールを掲載。' },
      { hid: 'og:image', property: 'og:image', content: '/images/ogImage-min.jpg' },
    ],
    script: [ 
      { src: '//polyfill.io/v2/polyfill.min.js?features=IntersectionObserver' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fjalla+One&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/particles',
    '~/plugins/common'
  ],

  router: {
    middleware: 'stats'
  },

  watchQuery: true,

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg-loader'
  ],

  styleResources: {
    scss: [
      '~/assets/sass/reset.scss',
      '~/assets/sass/font.scss',
      '~/assets/sass/animetion.scss',
      '~/assets/sass/variable.scss',
      '~/assets/sass/mixin.scss',
      '~/assets/sass/common.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
