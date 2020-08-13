const { description } = require('../../package')

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
    '/': {
      // lang: 'en-US',
      lang: 'English',
      selectText: 'Languages',
      label: 'English',
      ariaLabel: 'Languages',
      //
      title: 'Documentation',
      description: 'PhishX - Documentation',
      tagline: null,
      //
      serviceWorker: {
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    },
    '/pt/': {
      // lang: 'pt-BR',
      lang: 'Português',
      selectText: 'Idiomas',
      label: 'Português',
      ariaLabel: 'Idiomas',
      //
      title: 'Documentação',
      description: 'PhishX - Documentação',
      tagline: null,
      //
      serviceWorker: {
        updatePopup: {
          message: "Novo conteúdo disponível.",
          buttonText: "Atualizar"
        }
      }
    }
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
      '/': {
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          }
        ],
        sidebar: [
          '/en/guide/',
          {
            title: 'Requirements',
            collapsable: true,
            sidebarDepth: 0,
            children: [
              {
                title: 'Global',
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  '/en/guide/requirements/',
                  '/en/guide/requirements/domains',
                  '/en/guide/requirements/ips',
                  '/en/guide/requirements/communications',
                  '/en/guide/requirements/certificates',
                ]
              },
              {
                title: 'Google G Suite',
                collapsable: true,
                sidebarDepth: 0,
                children: [
                  '/en/guide/requirements/google-gsuite/',
                  '/en/guide/requirements/google-gsuite/image_url',
                  '/en/guide/requirements/google-gsuite/email_whitelist',
                  '/en/guide/requirements/google-gsuite/spam',
                ]
              },
            ]
          },
        ],
      },
      '/pt/': {
        lastUpdated: 'Última Atualzação',
        nav: [
          {
            text: 'Guia',
            link: '/pt/guide/'
          }
        ]
      }
    },
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-smooth-scroll',
    '@vuepress/plugin-medium-zoom',
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
          moment.locale(lang)
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
