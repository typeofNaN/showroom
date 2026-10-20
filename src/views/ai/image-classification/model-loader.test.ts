import { describe, expect, it, vi } from 'vitest'
import { loadWithCpuFallback } from './model-loader'

describe('loadWithCpuFallback', () => {
  it('keeps the current backend when the model loads successfully', async () => {
    const model = { name: 'mobilenet' }
    const load = vi.fn().mockResolvedValue(model)
    const setBackend = vi.fn()

    await expect(loadWithCpuFallback(load, () => 'webgl', setBackend)).resolves.toBe(model)
    expect(load).toHaveBeenCalledTimes(1)
    expect(setBackend).not.toHaveBeenCalled()
  })

  it('retries with the cpu backend when the preferred backend fails', async () => {
    const model = { name: 'mobilenet' }
    const load = vi.fn().mockRejectedValueOnce(new Error('WebGL is not supported')).mockResolvedValueOnce(model)
    let backend = 'webgl'
    const setBackend = vi.fn().mockImplementation(async value => {
      backend = value
      return true
    })

    await expect(loadWithCpuFallback(load, () => backend, setBackend)).resolves.toBe(model)
    expect(setBackend).toHaveBeenCalledWith('cpu')
    expect(load).toHaveBeenCalledTimes(2)
  })

  it('does not repeat a failed load when cpu is already active', async () => {
    const error = new Error('model.json returned 404')
    const load = vi.fn().mockRejectedValue(error)
    const setBackend = vi.fn()

    await expect(loadWithCpuFallback(load, () => 'cpu', setBackend)).rejects.toBe(error)
    expect(load).toHaveBeenCalledTimes(1)
    expect(setBackend).not.toHaveBeenCalled()
  })

  it('reports an unavailable cpu backend without retrying the model', async () => {
    const load = vi.fn().mockRejectedValue(new Error('WebGL is not supported'))
    const setBackend = vi.fn().mockResolvedValue(false)

    await expect(loadWithCpuFallback(load, () => 'webgl', setBackend)).rejects.toThrow(
      'TensorFlow.js CPU backend is unavailable'
    )
    expect(load).toHaveBeenCalledTimes(1)
  })

  it('passes through an error from the cpu retry', async () => {
    const retryError = new Error('model.json returned 404')
    const load = vi.fn().mockRejectedValueOnce(new Error('WebGL is not supported')).mockRejectedValueOnce(retryError)
    let backend = 'webgl'
    const setBackend = vi.fn().mockImplementation(async value => {
      backend = value
      return true
    })

    await expect(loadWithCpuFallback(load, () => backend, setBackend)).rejects.toBe(retryError)
    expect(load).toHaveBeenCalledTimes(2)
  })
})
