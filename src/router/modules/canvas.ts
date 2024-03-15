const canvasRoute: AuthRoute.Route = {
  name: 'canvas',
  path: '/canvas',
  component: 'basic',
  meta: {
    title: 'Canvas',
    i18nTitle: 'routes.canvas._value',
    keepAlive: false,
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
        i18nTitle: 'routes.canvas.drawTree',
        keepAlive: false,
        localIcon: 'tree'
      }
    },
    {
      name: 'canvas_code-rain',
      path: '/canvas/code-rain',
      component: 'self',
      meta: {
        title: '代码雨',
        i18nTitle: 'routes.canvas.codeRain',
        keepAlive: false,
        localIcon: 'code-rain'
      }
    },
    {
      name: 'canvas_dynamic-clock',
      path: '/canvas/dynamic-clock',
      component: 'self',
      meta: {
        title: '动态时钟',
        i18nTitle: 'routes.canvas.dynamicClock',
        keepAlive: false,
        localIcon: 'clock'
      }
    }
  ]
}

export default canvasRoute