const AiRoute: AuthRoute.Route = {
  name: 'ai',
  path: '/ai',
  component: 'basic',
  meta: {
    title: 'AI',
    i18nTitle: 'routes.ai._value',
    keepAlive: false,
    localIcon: 'ai',
    order: 4
  },
  children: [
    {
      name: 'ai_facial-recognition',
      path: '/ai/facial-recognition',
      component: 'self',
      meta: {
        title: '人脸识别',
        i18nTitle: 'routes.ai.facialRecognition',
        keepAlive: false,
        localIcon: 'facial-recognition'
      }
    }
  ]
}

export default AiRoute