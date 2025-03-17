import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

/**
 * This example shows best practice for lazy loading to not delay LCP
 *
 * この例は、LCPを遅くしないためのlazy loadingのベストプラクティスを示しています
 */

function ExampleLazyLoadingVersusLCP() {
  const imageIds = Array.from({ length: 50 }, (_, i) => i + 1)

  // Set up a PerformanceObserver to monitor LCP
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const latestEntry = entries[entries.length - 1] as LargestContentfulPaint

      if (latestEntry?.element?.getAttribute('loading') === 'lazy') {
        console.warn('Warning: LCP element was lazy loaded', latestEntry)
      }
    })

    observer.observe({ type: 'largest-contentful-paint', buffered: true })

    // Clean up the observer on component unmount
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Example: Lazy loading vs LCP</h2>
      <p>
        <strong>Your Mission:</strong>
      </p>
      <ol>
        <li>Confirm that all the images are loaded initially</li>
        <li>Lazy load the images</li>
        <li>Confirm that only images near the viewport are loaded</li>
      </ol>

      <ul className="image-list">
        {imageIds.map((id) => (
          <li key={id}>
            <img
              src={`https://picsum.photos/600/400.webp?random=${id}`}
              className="full-width-image landscape-ratio-image"
              alt={`Random image ${id}`}
              loading={id < 4 ? 'eager' : 'lazy'}
              fetchPriority={id < 4 ? 'high' : 'auto'}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ExampleLazyLoadingVersusLCP
