const pptRoute: AuthRoute.Route = {
  name: 'ppt',
  path: '/ppt',
  component: 'basic',
  meta: {
    title: 'PPT',
    i18nTitle: 'routes.ppt._value',
    keepAlive: false,
    icon: 'ri:file-ppt-2-line',
    order: 4
  },
  children: [
    {
      name: 'ppt_ppt',
      path: '/ppt/ppt',
      component: 'self',
      meta: {
        title: 'PPT',
        i18nTitle: 'routes.ppt.ppt',
        keepAlive: false,
        icon: 'ri:file-ppt-2-line'
      }
    }
  ]
}

export default pptRoute