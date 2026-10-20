import * as mobilenet from '@tensorflow-models/mobilenet'
import * as tf from '@tensorflow/tfjs'
import { getModelPath } from '../shared/model-path'
import { loadWithCpuFallback } from './model-loader'

let modelPromise: Promise<mobilenet.MobileNet> | null = null

export function getMobileNetModel() {
  if (modelPromise) return modelPromise

  const pendingModel = loadWithCpuFallback(
    () =>
      mobilenet.load({
        version: 2,
        alpha: 1,
        modelUrl: getModelPath('models/mobilenet/model.json'),
        inputRange: [0, 1]
      }),
    () => tf.getBackend(),
    backend => tf.setBackend(backend)
  )
  modelPromise = pendingModel
  pendingModel.catch(() => {
    if (modelPromise === pendingModel) modelPromise = null
  })
  return pendingModel
}
