import { describe, expect, it } from 'vitest'
import {
  formatConfidence,
  summarizeOcrProgress,
  toHandLabel,
  topPredictions,
} from './result'

describe('topPredictions', () => {
  it('sorts the model output and removes invalid confidence values', () => {
    expect(
      topPredictions(
        [
          { className: 'cat', probability: 0.42 },
          { className: 'overconfident', probability: 1.4 },
          { className: 'broken', probability: Number.NaN },
          { className: 'dog', probability: 0.91 },
          { className: 'bird', probability: -1 },
        ],
        2,
      ),
    ).toEqual([
      { className: 'overconfident', probability: 1 },
      { className: 'dog', probability: 0.91 },
    ])
  })
})

describe('formatConfidence', () => {
  it('clamps probabilities before converting them to percentages', () => {
    expect(formatConfidence(0.876)).toBe('87.6%')
    expect(formatConfidence(2)).toBe('100.0%')
    expect(formatConfidence(-1)).toBe('0.0%')
  })
})

describe('summarizeOcrProgress', () => {
  it('maps worker stages to readable Chinese progress', () => {
    expect(
      summarizeOcrProgress({ status: 'recognizing text', progress: 0.456 }),
    ).toEqual({
      label: 'recognizing',
      percentage: 46,
    })
    expect(
      summarizeOcrProgress({
        status: 'loading language traineddata',
        progress: 0.2,
      }),
    ).toEqual({
      label: 'loadingLanguage',
      percentage: 20,
    })
  })
})

describe('toHandLabel', () => {
  it('normalizes MediaPipe handedness categories for the UI', () => {
    expect(toHandLabel({ categoryName: 'Left', score: 0.932 })).toEqual({
      label: 'leftHand',
      confidence: '93.2%',
    })
    expect(toHandLabel(undefined)).toEqual({
      label: 'unknownHand',
      confidence: '0.0%',
    })
  })
})
