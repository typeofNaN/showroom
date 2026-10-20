export async function loadWithCpuFallback<T>(
  load: () => Promise<T>,
  getBackend: () => string,
  setBackend: (backend: string) => Promise<boolean>
) {
  try {
    return await load()
  } catch (error) {
    if (getBackend() === 'cpu') throw error

    const backendChanged = await setBackend('cpu')
    if (!backendChanged || getBackend() !== 'cpu') {
      throw new Error('TensorFlow.js CPU backend is unavailable', {
        cause: error
      })
    }
    return load()
  }
}
