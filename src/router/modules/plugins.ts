const pluginRoute: AuthRoute.Route = {
  name: 'plugin',
  path: '/plugin',
  component: 'basic',
  meta: {
    title: '插件',
    i18nTitle: 'routes.plugin._value',
    keepAlive: false,
    icon: 'clarity:plugin-line',
    order: 5
  },
  children: [
    {
      name: 'plugin_ppt',
      path: '/plugin/ppt',
      component: 'self',
      meta: {
        title: '幻灯片',
        i18nTitle: 'routes.plugin.ppt',
        keepAlive: false,
        icon: 'ri:file-ppt-2-line'
      }
    },
    {
      name: 'plugin_typewriter',
      path: '/plugin/typewriter',
      component: 'self',
      meta: {
        title: '打字机',
        i18nTitle: 'routes.plugin.typewriter',
        keepAlive: false,
        icon: 'streamline:interface-edit-typewriter-typewriter-company-office-supplies-work'
      }
    },
    {
      name: 'plugin_pinyin',
      path: '/plugin/pinyin',
      component: 'self',
      meta: {
        title: '拼音',
        i18nTitle: 'routes.plugin.pinyin',
        keepAlive: false,
        icon: 'ri:pinyin-input'
      }
    }
  ]
}

export default pluginRoute