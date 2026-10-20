import { describe, expect, it } from 'vitest'

import { getModelPath } from './model-path'

describe('getModelPath', () => {
  it('keeps model assets under the configured deployment base path', () => {
    expect(getModelPath('models/mobilenet/model.json', '/showroom/')).toBe('/showroom/models/mobilenet/model.json')
    expect(getModelPath('/models/mediapipe/wasm', '/')).toBe('/models/mediapipe/wasm')
  })
})
