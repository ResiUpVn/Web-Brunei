export type PreloadOptions = {
  onProgress?: (loaded: number, total: number) => void
}

export function preloadImages(urls: string[], options: PreloadOptions = {}) {
  const { onProgress } = options
  let canceled = false
  let loaded = 0
  const total = urls.length

  const handlers: Array<() => void> = []

  urls.forEach((u) => {
    const img = new Image()
    const handler = () => {
      if (canceled) return
      loaded += 1
      if (onProgress) onProgress(loaded, total)
    }
    img.onload = handler
    img.onerror = handler
    img.src = u
    handlers.push(() => {
      img.onload = null
      img.onerror = null
    })
  })

  return () => {
    canceled = true
    handlers.forEach((h) => h())
  }
}

export default preloadImages
