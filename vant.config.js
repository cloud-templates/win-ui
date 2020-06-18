module.exports = {
  name: 'win-ui',
  build: {
    skipInstall: ['lazyload'],
    site: {
      publicPath: 'https://fulldev.winner123.cn/h5-win-ui/',
    },
    vetur: {
      tagPrefix: 'win-',
    },
  },
  site: {
    defaultLang: 'en-US',
    versions: [],
    // 百度分析
    baiduAnalytics: {
      seed: '',
    },
    locales: {
      'zh-CN': {
        title: 'Win',
        description: '轻量、可靠的移动端 Vue 组件库',
        langLabel: '中文',
        links: [
          {
            logo: '',
            url: 'https://github.com/cloud-templates/win-ui',
          },
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'win-ui',
          placeholder: '搜索文档...',
        },
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍',
              },
              {
                path: 'quickstart',
                title: '快速上手',
              },
              {
                path: 'changelog',
                title: '更新日志',
              },
              {
                path: 'theme',
                title: '定制主题',
              },
              {
                path: 'contribution',
                title: '开发指南',
              },
              {
                path: 'style-guide',
                title: '风格指南',
              },
              {
                path: 'locale',
                title: '国际化',
              },
            ],
          },
          {
            title: '基础组件',
            items: [
              {
                path: 'button',
                title: 'Button 按钮',
              },
            ],
          },
        ],
      },
      'en-US': {
        title: 'Win',
        description: 'Mobile UI Components built on Vue',
        langLabel: 'En',
        links: [
          {
            logo: '',
            url: 'https://github.com/cloud-templates/win-ui',
          },
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'win-ui',
          placeholder: 'Search...',
        },
        nav: [
          {
            title: 'Essentials',
            items: [
              {
                path: 'home',
                title: 'Introduction',
              },
              {
                path: 'quickstart',
                title: 'Quickstart',
              },
              {
                path: 'changelog',
                title: 'Changelog',
              },
              {
                path: 'theme',
                title: 'Custom Theme',
              },
              {
                path: 'locale',
                title: 'Internationalization',
              },
            ],
          },
          {
            title: 'Basic Components',
            items: [
              {
                path: 'button',
                title: 'Button',
              },
            ],
          },
        ],
      },
    },
  },
};
