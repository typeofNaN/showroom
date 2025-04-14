import type { RouteComponent } from 'vue-router';

export const views: Record<
  PageRoute.LastDegreeRouteKey,
  RouteComponent | (() => Promise<{ default: RouteComponent }>)
> = {
  403: () => import('./_builtin/403/index.vue'),
  404: () => import('./_builtin/404/index.vue'),
  500: () => import('./_builtin/500/index.vue'),
  'constant-page': () => import('./_builtin/constant-page/index.vue'),
  login: () => import('./_builtin/login/index.vue'),
  'not-found': () => import('./_builtin/not-found/index.vue'),
  'ai_facial-recognition': () => import('./ai/facial-recognition/index.vue'),
  'canvas_code-rain': () => import('./canvas/code-rain/index.vue'),
  'canvas_draw-official-seal': () => import('./canvas/draw-official-seal/index.vue'),
  'canvas_draw-tree': () => import('./canvas/draw-tree/index.vue'),
  'canvas_dynamic-clock': () => import('./canvas/dynamic-clock/index.vue'),
  canvas_gobang: () => import('./canvas/gobang/index.vue'),
  dashboard: () => import('./dashboard/index.vue'),
  'github_code-analysis': () => import('./github/code-analysis/index.vue'),
  github_emojis: () => import('./github/emojis/index.vue'),
  plugin_ppt: () => import('./plugin/ppt/index.vue'),
  plugin_typewriter: () => import('./plugin/typewriter/index.vue')
};
