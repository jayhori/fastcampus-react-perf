import '../App.css'
import { Link } from 'react-router-dom'

/**
 * Your mission:
 * 1. Confirm that all the images are loaded initially
 * 2. Lazy load the images
 * 3. Confirm that only images near the viewport are loaded
 *
 * Solution available in the `solution/challenge-3` branch
 *
 * ミッション:
 * 1. すべての画像が最初に読み込まれていることを確認する
 * 2. 画像をlazy loading (遅延読み込み) する
 * 3. Viewportに近い画像のみが読み込まれていることを確認する
 *
 * 解答は `solution/challenge-3` ブランチを参照
 */

function ChallengeThree() {
  const imageIds = Array.from({ length: 50 }, (_, i) => i + 1)

  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Challenge 3: Lazy loading</h2>
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
              className="full-width-image"
              alt={`Random image ${id}`}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ChallengeThree
