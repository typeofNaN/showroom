const githubRoute: AuthRoute.Route = {
  name: 'github',
  path: '/github',
  component: 'basic',
  meta: {
    title: 'Github',
    i18nTitle: 'routes.github._value',
    keepAlive: false,
    icon: 'carbon:logo-github',
    order: 4
  },
  children: [
    {
      name: 'github_emojis',
      path: '/github/emojis',
      component: 'self',
      meta: {
        title: 'Github表情',
        i18nTitle: 'routes.github.emojis',
        keepAlive: false,
        icon: 'mingcute:emoji-line'
      }
    },
    {
      name: 'github_code-analysis',
      path: '/github/code-analysis',
      component: 'self',
      meta: {
        title: '代码分析',
        i18nTitle: 'routes.github.codeAnalysis',
        keepAlive: false,
        icon: 'material-symbols:energy-program-time-used-outline-rounded'
      }
    }
  ]
}

export default githubRoute