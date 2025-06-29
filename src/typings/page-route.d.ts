declare namespace PageRoute {
  /**
   * the root route key
   * @translate 根路由
   */
  type RootRouteKey = 'root';

  /**
   * the not found route, which catch the invalid route path
   * @translate 未找到路由(捕获无效路径的路由)
   */
  type NotFoundRouteKey = 'not-found';

  /**
   * the route key
   * @translate 页面路由
   */
  type RouteKey =
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'login'
    | 'not-found'
    | 'ai'
    | 'ai_facial-recognition'
    | 'canvas'
    | 'canvas_code-rain'
    | 'canvas_draw-official-seal'
    | 'canvas_draw-tree'
    | 'canvas_dynamic-clock'
    | 'canvas_gobang'
    | 'canvas_scratch-card'
    | 'dashboard'
    | 'github'
    | 'github_code-analysis'
    | 'github_emojis'
    | 'plugin'
    | 'plugin_pinyin'
    | 'plugin_ppt'
    | 'plugin_typewriter'
    | 'visual-effects';

  /**
   * last degree route key, which has the page file
   * @translate 最后一级路由(该级路有对应的页面文件)
   */
  type LastDegreeRouteKey = Extract<
    RouteKey,
    | '403'
    | '404'
    | '500'
    | 'constant-page'
    | 'login'
    | 'not-found'
    | 'ai_facial-recognition'
    | 'canvas_code-rain'
    | 'canvas_draw-official-seal'
    | 'canvas_draw-tree'
    | 'canvas_dynamic-clock'
    | 'canvas_gobang'
    | 'canvas_scratch-card'
    | 'dashboard'
    | 'github_code-analysis'
    | 'github_emojis'
    | 'plugin_pinyin'
    | 'plugin_ppt'
    | 'plugin_typewriter'
    | 'visual-effects'
  >;
}
