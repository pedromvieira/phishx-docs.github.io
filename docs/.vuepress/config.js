const { description } = require('../../package')

module.exports = {
  title: 'Documentation',
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
  locales: {
    '/': {
      lang: 'English',
      label: 'English',
      selectText: 'Languages',
      ariaLabel: 'Documentation',
      title: 'Documentation',
      description: 'PhishX Documentation',
    },
    '/pt/': {
      lang: 'Português',
      label: 'Português',
      selectText: 'Idiomas',
      ariaLabel: 'Idiomas',
      title: 'Documentação',
      description: 'Documentação da PhishX',
    }
  },
  themeConfig: {
    repo: '',
    activeHeaderLinks: true,
    editLinks: false,
    displayAllHeaders: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: 'https://cdn.phishx.io/img/phishx/phishx_logo_gray.png',
    locales: {
      '/': {
        lang: 'English',
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Documentation',
        title: 'Documentation',
        description: 'PhishX Documentation',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/'
          }
        ]
      },
      '/pt/': {
        lang: 'Português',
        label: 'Português',
        selectText: 'Idiomas',
        ariaLabel: 'Idiomas',
        title: 'Documentação',
        description: 'Documentação da PhishX',
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
    '@vuepress/plugin-medium-zoom',
  ]
}
