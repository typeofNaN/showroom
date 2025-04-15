const locale: I18nType.Schema = {
  system: {
    title: 'Showroom',
    updateTitle: '系统版本更新通知',
    updateContent: '检测到系统有新版本发布，是否立即刷新页面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍后再说'
  },
  common: {
    success: '成功',
    add: '添加',
    addSuccess: '添加成功',
    edit: '编辑',
    editSuccess: '编辑成功',
    delete: '删除',
    deleteSuccess: '删除成功',
    batchDelete: '批量删除',
    synchronizedCache: '同步缓存',
    synchronizedCacheSuccess: '同步缓存成功',
    save: '保存',
    saveSuccess: '保存成功',
    execute: '执行',
    executeSuccess: '执行成功',
    confirm: '确认',
    cancel: '取消',
    switch: '切换',
    open: '开启',
    close: '关闭',
    keywordSearch: '请输入关键词搜索',
    pleaseCheckValue: '请检查输入的值是否合法',
    action: '操作',
    search: '搜索',
    reset: '重置',
    refresh: '刷新',
    pleaseInputSearchValue: '请输入搜索值',
    noData: '无数据',
    copy: {
      browserNotSupportedCopy: '您的浏览器不支持复制功能，请更换浏览器后重试！',
      copySuccess: '复制成功！',
      copyFail: '复制失败！'
    },
    download: {
      success: '下载成功！',
      fail: '下载失败！'
    },
    yes: '是',
    no: '否'
  },
  routes: {
    dashboard: {
      _value: '仪表盘'
    },
    canvas: {
      _value: 'Canvas',
      drawTree: '画一棵树',
      codeRain: '代码雨',
      dynamicClock: '动态时钟',
      drawOfficialSeal: '画公章',
      gobang: '五子棋'
    },
    github: {
      _value: 'Github',
      emojis: 'Github表情',
      codeAnalysis: '代码分析'
    },
    ai: {
      _value: 'AI',
      facialRecognition: '人脸识别'
    },
    plugin: {
      _value: '插件',
      ppt: '幻灯片',
      typewriter: '打字机',
      pinyin: '拼音'
    },
    exception: {
      _value: '异常页',
      403: '403',
      404: '404',
      500: '500'
    }
  },
  layout: {
    settingDrawer: {
      title: '主题配置',
      themeModeTitle: '主题模式',
      darkMode: '深色主题',
      layoutModelTitle: '布局模式',
      systemThemeTitle: '系统主题',
      pageFunctionsTitle: '界面功能',
      pageViewTitle: '界面显示',
      followSystemTheme: '跟随系统',
      isCustomizeDarkModeTransition: '自定义暗黑主题动画过渡',
      scrollMode: '滚动模式',
      scrollModeList: {
        wrapper: '外层滚动',
        content: '主体滚动'
      },
      fixedHeaderAndTab: '固定头部和多页签',
      header: {
        inverted: '头部深色',
        height: '头部高度',
        crumb: {
          visible: '面包屑',
          icon: '面包屑图标'
        }
      },
      tab: {
        visible: '多页签',
        height: '多页签高度',
        modeList: {
          mode: '多页签风格',
          chrome: '谷歌风格',
          button: '按钮风格'
        },
        isCache: '多页签缓存'
      },
      sider: {
        inverted: '侧边栏深色',
        width: '侧边栏展开宽度',
        mixWidth: '左侧混合侧边栏展开宽度'
      },
      menu: {
        horizontalPosition: '顶部菜单位置',
        horizontalPositionList: {
          flexStart: '居左',
          center: '居中',
          flexEnd: '居右'
        }
      },
      footer: {
        inverted: '底部深色',
        visible: '显示底部',
        fixed: '固定底部',
        right: '底部居右'
      },
      page: {
        animate: '页面切换动画',
        animateMode: '页面切换动画类型',
        animateModeList: {
          zoomFade: '渐变',
          zoomOut: '闪现',
          fadeSlide: '滑动',
          fade: '消退',
          fadeBottom: '底部消退',
          fadeScale: '缩放消退'
        }
      },
      systemTheme: {
        moreColors: '更多颜色'
      },
      themeConfiguration: {
        title: '主题配置',
        copy: '拷贝当前配置',
        reset: '重置当前配置',
        resetSuccess: '已重置配置，请重新拷贝！',
        operateSuccess: '操作成功',
        copySuccess: '复制成功,请替换 src/settings/theme.json的内容！',
        confirmCopy: '确认'
      }
    }
  },
  page: {
    dashboard: {
      hitokoto: '每日一言'
    },
    canvas: {
      drawOfficialSeal: {
        companyNameLabel: '单位名：',
        companyNamePlaceholder: '请输入单位名',
        companyNameValidTip: '请输入单位名',
        sealNameLabel: '公章名：',
        sealNamePlaceholder: '请输入公章名',
        sealNameValidTip: '请输入公章名',
        createSeal: '生成公章',
        downloadSeal: '下载公章'
      }
    },
    login: {
      common: {
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName}!'
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户'
      },
      codeLogin: {
        title: '验证码登录',
        getCode: '获取验证码',
        imageCodePlaceholder: '请输入图片验证码'
      },
      register: {
        title: '注册账号',
        agreement: '我已经仔细阅读并接受',
        protocol: '《用户协议》',
        policy: '《隐私权政策》'
      },
      resetPwd: {
        title: '重置密码'
      },
      bindWeChat: {
        title: '绑定微信'
      }
    }
  }
}

export default locale
