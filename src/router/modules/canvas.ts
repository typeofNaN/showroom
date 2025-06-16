const canvasRoute: AuthRoute.Route = {
  name: 'canvas',
  path: '/canvas',
  component: 'basic',
  meta: {
    title: 'Canvas',
    i18nTitle: 'routes.canvas._value',
    keepAlive: false,
    icon: 'hugeicons:canvas',
    order: 3
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
        icon: 'meteor-icons:tree-deciduous'
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
        icon: 'carbon:rain-heavy'
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
        icon: 'material-symbols:alarm-outline'
      }
    },
    {
      name: 'canvas_draw-official-seal',
      path: '/canvas/draw-official-seal',
      component: 'self',
      meta: {
        title: '画公章',
        i18nTitle: 'routes.canvas.drawOfficialSeal',
        keepAlive: false,
        icon: 'mingcute:seal-line'
      }
    },
    {
      name: 'canvas_gobang',
      path: '/canvas/gobang',
      component: 'self',
      meta: {
        title: '五子棋',
        i18nTitle: 'routes.canvas.gobang',
        keepAlive: false,
        icon: 'icon-park-solid:checkerboard'
      }
    },
    {
      name: 'canvas_scratch-card',
      path: '/canvas/scratch-card',
      component: 'self',
      meta: {
        title: '刮刮乐',
        i18nTitle: 'routes.canvas.scratchCard',
        keepAlive: false,
        icon: 'game-icons:triple-scratches'
      }
    }
  ]
}

export default canvasRoute