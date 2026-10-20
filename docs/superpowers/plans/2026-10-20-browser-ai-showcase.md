# Browser AI Showcase Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add four polished, browser-only AI demos to the existing Vue showroom.

**Architecture:** Each AI feature is an independently lazy-loaded route and owns its model lifecycle. Shared pure helpers normalize results and file URLs, while the pages use the repository's Naive UI and UnoCSS conventions.

**Tech Stack:** Vue 3, TypeScript, Naive UI, UnoCSS, face-api.js, TensorFlow.js MobileNet, Tesseract.js, MediaPipe Tasks Vision, Vitest

**Spec:** `docs/superpowers/specs/2026-10-20-browser-ai-showcase-design.md`

## Global Constraints

- Inference stays in the browser with no private API key or backend.
- Heavy model libraries are imported only from their owning lazy-loaded page.
- Camera tracks and scheduled work are released on unmount.
- User-visible failures use page state and Naive UI feedback.

## Review Focus

- Replacing an uploaded image must revoke the previous object URL.
- Empty or malformed model results must normalize to a stable empty UI state.
- Camera denial must leave controls usable and show a readable error.
- Repeated start/stop actions must not create duplicate loops or streams.
- Production base paths must still resolve the existing face-api model assets.

---

### Task 1: Tested AI result helpers

**Files:**

- Create: `src/views/ai/shared/result.ts`
- Create: `src/views/ai/shared/result.test.ts`
- Modify: `package.json`

**Interfaces:**

- Produces: `topPredictions`, `formatConfidence`, `summarizeOcrProgress`, `toHandLabel`.

- [ ] Write failing Vitest cases for sorting/clamping predictions, OCR progress text, and handedness labels.
- [ ] Run the focused tests and verify failure because the helper module does not exist.
- [ ] Implement the minimal typed helpers.
- [ ] Run the focused tests and then the complete test script.

### Task 2: Image classification and OCR pages

**Files:**

- Create: `src/views/ai/image-classification/index.vue`
- Create: `src/views/ai/text-recognition/index.vue`

**Interfaces:**

- Consumes: Task 1 formatting helpers.
- Produces: two self-contained route components with upload, loading, results, and error states.

- [ ] Implement MobileNet model loading, image upload/preview, classification, and ranked results.
- [ ] Implement Tesseract image upload/preview, recognition progress, text result, and copy action.
- [ ] Verify with `pnpm typecheck`.

### Task 3: MediaPipe hand landmark page and face page hardening

**Files:**

- Create: `src/views/ai/hand-landmarks/index.vue`
- Modify: `src/views/ai/facial-recognition/index.vue`

**Interfaces:**

- Consumes: Task 1 label helper.
- Produces: two camera pages that own and release their streams and render overlays responsively.

- [ ] Implement MediaPipe model loading, camera controls, landmark overlay, FPS throttling, and teardown.
- [ ] Refactor face analysis to explicit loading/camera/error states, responsive overlay, safe polling, and teardown.
- [ ] Verify with `pnpm typecheck`.

### Task 4: Route, locale, and production integration

**Files:**

- Modify: `src/router/modules/ai.ts`
- Modify: `src/views/index.ts`
- Modify: `src/typings/page-route.d.ts`
- Modify: `src/typings/system.d.ts`
- Modify: `src/locales/lang/zh-CN.ts`
- Modify: `src/locales/lang/en.ts`

**Interfaces:**

- Consumes: Tasks 2 and 3 route components.
- Produces: typed AI menu entries and lazy route resolution.

- [ ] Register the three new child routes and localized menu titles.
- [ ] Run tests, typecheck, lint check, and production build.
- [ ] Review the final diff for accidental unrelated changes.
