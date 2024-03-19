// 后端接口返回的数据类型

/** 后端返回的用户权益相关类型 */
declare namespace ApiAuth {
  /** 返回的token和刷新token */
  interface Token {
    token: string
    refreshToken: string
  }
  /** 返回的用户信息 */
  type UserInfo = Auth.UserInfo
}

/** 后端返回的路由相关类型 */
declare namespace ApiRoute {
  /** 后端返回的路由数据类型 */
  interface Route {
    /** 动态路由 */
    routes: AuthRoute.Route[]
    /** 路由首页对应的key */
    home: AuthRoute.AllRouteKey
  }
}

/**
 * @description 每日一言返回值
 */
declare namespace ApiHitokoto {
  interface IGetHitokotoDataRes {
    id: number
    uuid: string
    hitokoto: string
    type: string
    from: string
    from_who: string
    creator: string
    creator_uid: number,
    reviewer: number,
    commit_from: string
    created_at: string
    length: number
  }
}