const { description } = require('../../package')

function config_base_locales(extra) {
  var config = {
    lang: extra.lang,
    description: extra.description,
    title: extra.title,
    serviceWorker: extra.serviceWorker
  }
  return config
}
function config_locales(locale, extra) {
  var dir_guide = 'guide'
  var dir_requirements = 'requirements'
  var dir_google_gsuite = 'google-gsuite'
  var config = {
    description: extra.description,
    title: extra.title,
    tagline: null,
    selectText: extra.lang_selectText,
    label: extra.lang_label,
    ariaLabel: extra.lang_selectText,
    lastUpdated: extra.lastUpdated,
    nav: [
      {
        text: extra.guide,
        link: `/${locale}/guide/`
      }
    ],
    sidebar: [
      `/${locale}/guide/`,
      {
        title: extra.requirements,
        collapsable: true,
        sidebarDepth: 0,
        children: [
          {
            title: extra.global,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_requirements}/`,
              `/${locale}/${dir_guide}/${dir_requirements}/domains`,
              `/${locale}/${dir_guide}/${dir_requirements}/ips`,
              `/${locale}/${dir_guide}/${dir_requirements}/communications`,
              `/${locale}/${dir_guide}/${dir_requirements}/certificates`,
            ]
          },
          {
            title: extra.google_gsuite,
            collapsable: true,
            sidebarDepth: 0,
            children: [
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/image_url`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/email_whitelist`,
              `/${locale}/${dir_guide}/${dir_requirements}/${dir_google_gsuite}/spam`,
            ]
          },
        ]
      },
    ],
  }
  return config
}
var config_locales_en = config_locales('en', {
  lang_selectText: 'Languages',
  lang_label: 'English',
  guide: 'Guide',
  lastUpdated: 'Last Updated',
  requirements: 'Requirements',
  global: 'Global',
  google_gsuite: 'Google G Suite'
})
var config_locales_pt = config_locales('pt', {
  lang_selectText: 'Idiomas',
  lang_label: 'Português',
  guide: 'Guia',
  lastUpdated: 'Última Atualização',
  requirements: 'Requisitos',
  global: 'Global',
  google_gsuite: 'Google G Suite'
})
var config_base_locales_en = config_base_locales({
  lang: 'English',
  description: 'PhishX - Documentation',
  title: 'Documentation',
  serviceWorker: {
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  }
})
var config_base_locales_pt = config_base_locales({
  lang: 'Português',
  description: 'Documentação da PhishX',
  title: 'Documentação',
  serviceWorker: {
    updatePopup: {
      message: "Novo conteúdo disponível.",
      buttonText: "Atualizar"
    }
  }
})

module.exports = {
  markdown: {
    lineNumbers: false
  },
  title: 'PhishX',
  description: description,
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://cdn.phishx.io/app/icons/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://cdn.phishx.io/app/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://cdn.phishx.io/app/icons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: 'https://cdn.phishx.io/app/icons/manifest.json' }],
    ['link', { rel: 'mask-icon', color: '#FFFFFF', href: 'https://cdn.phishx.io/app/icons/safari-pinned-tab.svg' }],
    ['link', { rel: 'shortcut icon', href: 'https://cdn.phishx.io/app/icons/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#008060' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-config', content: 'https://cdn.phishx.io/app/icons/browserconfig.xml' }]
  ],
  // base: '/',
  // algolia: {
  //   apiKey: '<API_KEY>',
  //   indexName: '<INDEX_NAME>'
  // },
  smoothScroll: true,
  locales: {
    '/': config_base_locales_en,
    '/pt/': config_base_locales_pt
  },
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  themeConfig: {
    repo: '',
    activeHeaderLinks: true,
    editLinks: false,
    displayAllHeaders: true,
    docsDir: '',
    editLinkText: '',
    logo: 'https://cdn.phishx.io/img/phishx/phishx_logo_gray.png',
    locales: {
      '/': config_locales_en,
      '/pt/': config_locales_pt
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-smooth-scroll',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-export',
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          var locale
          switch (lang) {
            case ("English"):
              locale = "en-US"
              break
            case ("Português"):
              locale = "pt-BR"
              break
            default:
              locale = "en-US"
              break
          }
          moment.locale(locale)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [
      'vuepress-plugin-code-copy',
      true
    ]
  ]
}
