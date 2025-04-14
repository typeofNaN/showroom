const dashboardRoute: AuthRoute.Route = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'self',
  meta: {
    title: '仪表盘',
    i18nTitle: 'routes.dashboard._value',
    keepAlive: true,
    singleLayout: 'basic',
    icon: 'carbon:home',
    order: 1
  }
}

export default dashboardRoute