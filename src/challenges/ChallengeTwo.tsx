import '../App.css'
import { Link } from 'react-router-dom'

/**
 * Your mission:
 * 1. Confirm that the image started loading after JavaScript finished loading
 * 2. Code the image preloading in the `index.html` file
 * 3. Confirm the image started loading immediately
 *
 * Solution available in the `solution/challenge-2` branch
 *
 * ミッション:
 * 1. 画像がJavaScriptの読み込みが終わった後に読み込まれたことを確認する
 * 2. `index.html` ファイルへ画像のpreloadを実装する
 * 3. 画像がすぐに読み込まれたことを確認する
 *
 * 解答は `solution/challenge-2` ブランチを参照
 */

function ChallengeTwo() {
  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Challenge 2: Preloading</h2>
      <img
        src={`https://picsum.photos/id/1060/1200/800.webp`}
        fetchPriority="high"
        className="full-width-image"
        alt={`Random image`}
      />
      <p>
        <strong>Your Mission:</strong>
      </p>
      <ol>
        <li>
          Confirm that the image started loading after JavaScript finished
          loading loading
        </li>
        <li>Code the image preloading</li>
        <li>Confirm the image started loading immediately</li>
      </ol>
    </>
  )
}

export default ChallengeTwo
