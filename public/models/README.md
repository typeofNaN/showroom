# Browser AI model assets

These files are served by this application so browser inference does not depend on Google Storage, TFHub, jsDelivr, or another overseas CDN at runtime.

| Directory | Upstream | Version/model | License |
| --- | --- | --- | --- |
| `faceapi/` | face-api.js model assets | Existing project assets | MIT |
| `mediapipe/wasm/` | `@mediapipe/tasks-vision` | 1.1.1 | Apache-2.0 |
| `mediapipe/hand_landmarker.task` | MediaPipe Hand Landmarker | float16/1 | Apache-2.0 |
| `mobilenet/` | TensorFlow Hub MobileNet | v2 1.0 classification/2 | Apache-2.0 |
| `tesseract/worker/` | `tesseract.js` | 7.0.0 | Apache-2.0 |
| `tesseract/core/` | `tesseract.js-core` | 7.0.0, LSTM core | Apache-2.0 |
| `tesseract/lang/` | `@tesseract.js-data` | 4.0.0_best_int, `chi_sim` and `eng` | Apache-2.0 |

All runtime URLs are built from Vite's `BASE_URL`, so the assets work both at the domain root and under a sub-path such as `/showroom/`.
