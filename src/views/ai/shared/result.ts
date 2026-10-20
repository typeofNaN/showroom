export type Prediction = {
  className: string
  probability: number
}

export type OcrProgress = {
  status: string
  progress: number
}

export type HandednessCategory = {
  categoryName?: string
  displayName?: string
  score?: number
}

export function topPredictions(
  predictions: Prediction[],
  limit = 3,
): Prediction[] {
  return predictions
    .filter(
      (item) => Number.isFinite(item.probability) && item.probability >= 0,
    )
    .map((item) => ({ ...item, probability: Math.min(1, item.probability) }))
    .sort((a, b) => b.probability - a.probability)
    .slice(0, Math.max(0, limit))
}

export function formatConfidence(value: number): string {
  const normalized = Number.isFinite(value)
    ? Math.min(1, Math.max(0, value))
    : 0
  return `${(normalized * 100).toFixed(1)}%`
}

export function summarizeOcrProgress(progress: OcrProgress): {
  label: string
  percentage: number
} {
  const labels: Record<string, string> = {
    'loading tesseract core': 'loadingEngine',
    'initializing tesseract': 'initializingEngine',
    'loading language traineddata': 'loadingLanguage',
    'initializing api': 'initializingLanguage',
    'recognizing text': 'recognizing',
  }

  return {
    label: labels[progress.status] || 'preparing',
    percentage: Math.round(
      Math.min(1, Math.max(0, progress.progress || 0)) * 100,
    ),
  }
}

export function toHandLabel(category?: HandednessCategory): {
  label: string
  confidence: string
} {
  const name = category?.categoryName || category?.displayName
  let label = 'unknownHand'
  if (name === 'Left') label = 'leftHand'
  if (name === 'Right') label = 'rightHand'

  return {
    label,
    confidence: formatConfidence(category?.score || 0),
  }
}
