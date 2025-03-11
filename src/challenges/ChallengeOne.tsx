import '../App.css'
import { Link } from 'react-router-dom'

/**
 * Your mission:
 * 1. Record the current LCP measurement
 * 2. Confirm the problem: The images are not optimized for the web
 * 3. Replace the images with WebP images
 * 4. Confirm LCP improvement
 *
 * Solution available in the `solution/challenge-1` branch
 *
 * ミッション:
 * 1. 現在のLCP数値を記録する
 * 2. 問題を確認する: 画像がWebに最適化されていない
 * 3. 画像をWebPフォーマットに置き換える
 * 4. LCPの改善を確認する
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
      <h2>Challenge 1: Image format</h2>
      <p>
        <strong>Your Mission:</strong>
      </p>
      <ol>
        <li>Record the current LCP</li>
        <li>Confirm that the images are not optimized for the web</li>
        <li>Replace the images with WebP images</li>
        <li>Confirm LCP improvement</li>
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
