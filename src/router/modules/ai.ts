const ai: AuthRoute.Route = {
  name: 'ai',
  path: '/ai',
  component: 'basic',
  meta: {
    title: 'AI',
    i18nTitle: 'routes.ai._value',
    keepAlive: false,
    icon: 'hugeicons:artificial-intelligence-02',
    order: 4,
  },
  children: [
    {
      name: 'ai_image-classification',
      path: '/ai/image-classification',
      component: 'self',
      meta: {
        title: '图像分类',
        i18nTitle: 'routes.ai.imageClassification',
        keepAlive: false,
        icon: 'solar:gallery-wide-bold-duotone',
      },
    },
    {
      name: 'ai_text-recognition',
      path: '/ai/text-recognition',
      component: 'self',
      meta: {
        title: '文字识别',
        i18nTitle: 'routes.ai.textRecognition',
        keepAlive: false,
        icon: 'solar:text-square-bold-duotone',
      },
    },
    {
      name: 'ai_hand-landmarks',
      path: '/ai/hand-landmarks',
      component: 'self',
      meta: {
        title: '手部关键点',
        i18nTitle: 'routes.ai.handLandmarks',
        keepAlive: false,
        icon: 'solar:hand-stars-bold-duotone',
      },
    },
    {
      name: 'ai_facial-recognition',
      path: '/ai/facial-recognition',
      component: 'self',
      meta: {
        title: '人脸识别',
        i18nTitle: 'routes.ai.facialRecognition',
        keepAlive: false,
        icon: 'tabler:face-id',
      },
    },
  ],
}

export default ai
