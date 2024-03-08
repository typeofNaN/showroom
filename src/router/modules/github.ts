const githubRoute: AuthRoute.Route = {
  name: 'github',
  path: '/github',
  component: 'basic',
  meta: {
    title: 'Github',
    i18nTitle: 'routes.github._value',
    keepAlive: false,
    localIcon: 'github',
    order: 3
  },
  children: [
    {
      name: 'github_emojis',
      path: '/github/emojis',
      component: 'self',
      meta: {
        title: 'Github Emojis',
        i18nTitle: 'routes.github.emojis',
        keepAlive: false,
        localIcon: 'emojis'
      }
    }
  ]
}

export default githubRoute