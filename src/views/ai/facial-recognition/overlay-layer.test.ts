import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

describe('facial recognition overlay layers', () => {
  it('places the canvas explicitly above the video layer', () => {
    const source = readFileSync(new URL('./index.vue', import.meta.url), 'utf8')
    const videoTag = source.match(/<video[\s\S]*?\/>/)?.[0]
    const canvasTag = source.match(/<canvas[\s\S]*?\/>/)?.[0]

    expect(videoTag).toContain('z-0')
    expect(canvasTag).toContain('z-1')
  })
})
