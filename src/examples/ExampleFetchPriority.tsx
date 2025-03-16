import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

/**
 * Fetch priority example
 * The bottom line:</strong> Use fetchpriority="high" for one or a few key images. Let the browser do the rest.
 *
 * Fetch priorityの例
 * 結論: 1つまたは少数の重要な画像に対してfetchpriority="high"を使用します。他はブラウザに任せましょう。
 */

function ExampleFetchPriority() {
  const [showImages, setShowImages] = useState(false)

  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Fetch priority example</h2>
      <p>
        <strong>The bottom line:</strong> Use fetchpriority="high" for one or a
        few key images. Let the browser do the rest.
      </p>
      <div className="card">
        <h3>Hero image</h3>
        <img
          src="https://picsum.photos/id/106/1200/800.webp"
          fetchPriority="high"
          className="full-width-image landscape-ratio-image"
          alt="Hero image"
        />
      </div>
      {!showImages && (
        <button onClick={() => setShowImages(true)}>Show Images</button>
      )}
      {showImages && (
        <>
          <div className="card">
            <h3>Initially not even in the DOM</h3>
            <img
              src="https://picsum.photos/id/109/1200/800.webp"
              fetchPriority="high"
              className="full-width-image landscape-ratio-image"
              alt="Sample image 1"
            />
          </div>
          <div className="card">
            <h3>Initially not even in the DOM</h3>
            <img
              src="https://picsum.photos/id/110/1200/800.webp"
              fetchPriority="auto"
              className="full-width-image landscape-ratio-image"
              alt="Sample image 2"
            />
          </div>
        </>
      )}
      <div style={{ display: showImages ? 'block' : 'none' }}>
        <div className="card">
          <h3>In the DOM. Priority: high.</h3>
          <img
            src="https://picsum.photos/id/111/1200/800.webp"
            fetchPriority="high"
            className="full-width-image landscape-ratio-image"
            alt="Sample image 3"
          />
        </div>
        <div className="card">
          <h3>In the DOM. Priority is not set.</h3>
          <img
            src="https://picsum.photos/id/112/1200/800.webp"
            className="full-width-image landscape-ratio-image"
            alt="Auto Priority"
          />
        </div>
        <div className="card">
          <h3>In the DOM. Priority: auto.</h3>
          <img
            src="https://picsum.photos/id/113/1200/800.webp"
            fetchPriority="auto"
            className="full-width-image landscape-ratio-image"
            alt="Sample image 4"
          />
        </div>
        <div className="card">
          <h3>In the DOM. Priority: low.</h3>
          <img
            src="https://picsum.photos/id/114/1200/800.webp"
            fetchPriority="low"
            className="full-width-image landscape-ratio-image"
            alt="Sample image 5"
          />
        </div>
      </div>
    </>
  )
}

export default ExampleFetchPriority
