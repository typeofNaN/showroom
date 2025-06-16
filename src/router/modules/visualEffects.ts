const visualEffectsRoute: AuthRoute.Route = {
  name: 'visual-effects',
  path: '/visual-effects',
  component: 'self',
  meta: {
    title: '视觉特效',
    i18nTitle: 'routes.visualEffects._value',
    keepAlive: true,
    singleLayout: 'basic',
    icon: 'icon-park-outline:effects',
    order: 2
  }
}

export default visualEffectsRoute