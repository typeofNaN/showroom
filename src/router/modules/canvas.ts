const canvasRoute: AuthRoute.Route = {
  name: 'canvas',
  path: '/canvas',
  component: 'basic',
  meta: {
    title: 'Canvas',
    i18nTitle: 'routes.canvas._value',
    keepAlive: true,
    localIcon: 'canvas',
    order: 2
  },
  children: [
    {
      name: 'canvas_draw-tree',
      path: '/canvas/draw-tree',
      component: 'self',
      meta: {
        title: '画一颗树',
        keepAlive: true,
        localIcon: 'tree'
      }
    }
  ]
}

export default canvasRoute