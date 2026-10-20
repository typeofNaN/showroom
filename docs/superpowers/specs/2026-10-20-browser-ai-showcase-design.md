# Browser AI Showcase Design

## Intent

Expand the existing face-api.js demo into a small browser-side AI showcase that fits the current Vue 3 admin application and works without a private API key or backend service.

## Scope

- Keep and harden the existing live face analysis page.
- Add an image classification page powered by TensorFlow.js MobileNet.
- Add an OCR page powered by Tesseract.js.
- Add a hand landmark page powered by MediaPipe Tasks Vision.
- Register all pages in the AI route group, route typings, view map, and Chinese/English route labels.
- Use Naive UI, UnoCSS, Vue 3 Composition API, and TypeScript in the style already used by the repository.

## Experience

Each page uses a consistent card layout with a clear source area, model/loading state, primary action, and visual results. Image-based tools support click-to-upload and remove object URLs when replaced. Camera pages clearly report permission/model errors and stop media tracks when leaving the page.

## Constraints and calls

- All inference runs locally in the browser; model assets may be fetched by the upstream library at runtime.
- No persistence, identity enrollment, server upload, or biometric database is included.
- The four features remain separate routes so each can be loaded independently and heavy libraries stay lazy-loaded with their page chunk.
- Pure result-normalization helpers are tested with Vitest; browser model integration is verified by typecheck and production build.

## Success criteria

- All four AI routes appear under the AI menu and render without compile errors.
- Unsupported input, missing camera permission, model-loading failure, and empty results produce visible feedback rather than an uncaught error.
- Navigating away from a camera page releases the camera and animation/timer resources.
