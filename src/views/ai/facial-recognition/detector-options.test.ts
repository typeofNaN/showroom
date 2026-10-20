import { describe, expect, it } from 'vitest'
import { FACE_DETECTOR_OPTIONS } from './detector-options'

describe('face detector options', () => {
  it('keeps the original 416 input size for reliable face detection', () => {
    expect(FACE_DETECTOR_OPTIONS).toEqual({
      inputSize: 416,
      scoreThreshold: 0.5
    })
  })
})
