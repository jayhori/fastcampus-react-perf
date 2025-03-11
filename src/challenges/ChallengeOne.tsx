import '../App.css'
import { Link } from 'react-router-dom'

/**
 * Your mission:
 * 1. Inspect the image format
 * 2. Replace the images with WebP format
 *
 * Solution available in the `solution/challenge-1` branch
 *
 * ミッション:
 * 1. 画像フォーマットをインスペクトする
 * 2. 画像をWebPフォーマットに置き換える
 *
 * 解答は `solution/challenge-1` ブランチを参照
 */

function ChallengeOne() {
  const imageIds = Array.from({ length: 30 }, (_, i) => i + 1)

  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Challenge 1: Image Format</h2>
      <p>
        <strong>Your Mission:</strong>
      </p>
      <ol>
        <li>Inspect the image format</li>
        <li>Replace the images with WebP images</li>
      </ol>

      <ul className="image-list">
        {imageIds.map((id) => (
          <li key={id}>
            <img
              src={`https://picsum.photos/500/300.jpg?random=${id}`}
              className="full-width-image"
              alt={`Random image ${id}`}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ChallengeOne
