const locale: I18nType.Schema = {
  system: {
    title: 'Showroom',
    updateTitle: 'System Version Update Notification',
    updateContent: 'A new version of the system has been detected. Do you want to refresh the page immediately?',
    updateConfirm: 'Refresh immediately',
    updateCancel: 'Later'
  },
  common: {
    success: 'Success',
    add: 'Add',
    addSuccess: 'Add Success',
    edit: 'Edit',
    editSuccess: 'Edit Success',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    batchDelete: 'Batch Delete',
    synchronizedCache: 'Synchronized Cache',
    synchronizedCacheSuccess: 'Synchronized Cache Success',
    save: 'Save',
    saveSuccess: 'Save Success',
    execute: 'Execute',
    executeSuccess: 'Execute Success',
    confirm: 'Confirm',
    cancel: 'Cancel',
    switch: 'Switch',
    open: 'Open',
    close: 'Close',
    keywordSearch: 'Please enter the keyword search',
    pleaseCheckValue: 'Please check the value is valid',
    action: 'Action',
    search: 'Search',
    reset: 'Reset',
    refresh: 'Refresh',
    pleaseInputSearchValue: 'Please enter the search value',
    noData: 'Data is Empty',
    copy: {
      browserNotSupportedCopy: 'Your browser not support copy, please change browser and try again!',
      copySuccess: 'Copy success!',
      copyFail: 'Copy fail!'
    },
    download: {
      success: 'Download Success!',
      fail: 'Download fail!'
    },
    yes: 'Yes',
    no: 'No',
    fullScreen: 'Full Screen',
    exitFullScreen: 'Exit Full Screen',
    themeMode: 'Theme Mode',
    themeConfig: 'Theme Config'
  },
  routes: {
    dashboard: {
      _value: 'Dashboard'
    },
    visualEffects: {
      _value: 'Visual Effects'
    },
    canvas: {
      _value: 'Canvas',
      drawTree: 'Draw Tree',
      codeRain: 'Code Rain',
      dynamicClock: 'Dynamic Clock',
      drawOfficialSeal: 'Draw official Seal',
      gobang: 'Gobang',
      scratchCard: 'Scratch Card'
    },
    github: {
      _value: 'Github',
      emojis: 'Github Emojis',
      codeAnalysis: 'Code Analysis'
    },
    ai: {
      _value: 'AI',
      facialRecognition: 'Facial Recognition'
    },
    plugin: {
      _value: 'Plugin',
      ppt: 'PPT',
      typewriter: 'Typewriter',
      pinyin: 'Pin Yin'
    },
    exception: {
      _value: 'Exception',
      403: '403',
      404: '404',
      500: '500'
    }
  },
  layout: {
    settingDrawer: {
      title: 'Theme configuration',
      themeModeTitle: 'Theme mode',
      darkMode: 'Dark mode',
      layoutModelTitle: 'Layout mode',
      systemThemeTitle: 'System theme',
      pageFunctionsTitle: 'Page functions',
      pageViewTitle: 'Page view',
      followSystemTheme: 'Follow the system',
      isCustomizeDarkModeTransition: 'Custom dark theme animation transition',
      scrollMode: 'scrollMode',
      scrollModeList: {
        wrapper: 'Outer layer scroll',
        content: 'Main body scroll'
      },
      fixedHeaderAndTab: 'Fixed header and multiple tabs',
      header: {
        inverted: 'darkHead',
        height: 'Head Height',
        crumb: {
          visible: 'Crumb',
          icon: 'Crumb icon'
        }
      },
      tab: {
        visible: 'Multi-page tab',
        height: 'Multiple tab height',
        modeList: {
          mode: 'Multi-tab style',
          chrome: 'Google style',
          button: 'Button style'
        },
        isCache: 'Multiple tab caching'
      },
      sider: {
        inverted: 'Dark sidebar',
        width: 'Sidebar expanded width',
        mixWidth: 'Left hybrid sidebar expanded width'
      },
      menu: {
        horizontalPosition: 'Top menu position',
        horizontalPositionList: {
          flexStart: 'Right',
          center: 'center',
          flexEnd: 'Left'
        }
      },
      footer: {
        inverted: 'Dark bottom',
        visible: 'Show bottom',
        fixed: 'Fixed bottom',
        right: 'Bottom to the right'
      },
      page: {
        animate: 'switch animation',
        animateMode: 'switch animation type',
        animateModeList: {
          zoomFade: 'Gradual change',
          zoomOut: 'Flash',
          fadeSlide: 'Slide',
          fade: 'Fade away',
          fadeBottom: 'Bottom fade',
          fadeScale: 'Resizing fade away'
        }
      },
      systemTheme: {
        moreColors: 'More colors'
      },
      themeConfiguration: {
        title: 'Theme configuration',
        copy: 'Copy the current configuration',
        reset: 'Reset the current configuration',
        resetSuccess: 'The configuration has been reset, please copy it again!',
        operateSuccess: 'Successful operation',
        copySuccess: 'Copy success, please replace the content of src/settings/theme.json!',
        confirmCopy: 'Confirm'
      }
    }
  },
  page: {
    dashboard: {
      hitokoto: 'Hitokoto'
    },
    visualEffects: {
      honeycombLayout: 'Honeycomb Layout'
    },
    canvas: {
      drawOfficialSeal: {
        companyNameLabel: 'Company Name:',
        companyNamePlaceholder: 'Please Input Company Name',
        companyNameValidTip: 'Please Input Company Name',
        sealNameLabel: 'Seal Name:',
        sealNamePlaceholder: 'Please Input Seal Name',
        sealNameValidTip: 'Please Input Seal Name',
        createSeal: 'Create Seal',
        downloadSeal: 'Download Seal'
      }
    },
    login: {
      common: {
        userNamePlaceholder: 'Please enter user name',
        phonePlaceholder: 'Please enter phone number',
        codePlaceholder: 'Please enter verification code',
        passwordPlaceholder: 'Please enter password',
        confirmPasswordPlaceholder: 'Please enter password again',
        codeLogin: 'Verification code login',
        confirm: 'Confirm',
        back: 'Back',
        validateSuccess: 'Verification passed',
        loginSuccess: 'Login success',
        welcomeBack: 'Welcome back, {userName}!'
      },
      pwdLogin: {
        title: 'Password Login',
        rememberMe: 'Remember me',
        forgetPassword: 'Forget password?',
        register: 'Register account',
        otherAccountLogin: 'Other Account Login',
        otherLoginMode: 'Other Login Mode',
        superAdmin: 'Super Administrator',
        admin: 'Administrator',
        user: 'Ordinary User'
      },
      codeLogin: {
        title: 'Verification Code Login',
        getCode: 'Get verification code',
        imageCodePlaceholder: 'Please enter image verification code'
      },
      register: {
        title: 'Register Account',
        agreement: 'I have read and agree to',
        protocol: '《User Agreement》',
        policy: '《Privacy Policy》'
      },
      resetPwd: {
        title: 'Reset Password'
      },
      bindWeChat: {
        title: 'Bind WeChat'
      }
    }
  }
}

export default locale
