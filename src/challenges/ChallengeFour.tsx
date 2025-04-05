import '../App.css'
import { Link } from 'react-router-dom'

/**
 * Your mission:
 * 1. Record the CLS
 * 2. Specify the image height by using the aspect ratio
 * 3. Confirm that the CLS is reduced
 * 
 * * Solution available in the `solution/challenge-4` brancｈ
 *
 * ミッション:
 * 1. CLSを記録する
 * 2. 画像の高さをアスペクト比を使用して指定する
 * 3. CLSが減少していることを確認する
 *
 * 解答は `solution/challenge-4` ブランチを参照
 */

function ChallengeFour() {
  const imageIds = Array.from({ length: 3 }, (_, i) => i + 1)

  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Challenge 4: Minimizing layout shifts</h2>
      <p>
        <strong>Your Mission:</strong>
      </p>
      <ol>
        <li>Record the CLS</li>
        <li>Specify the image height by using the aspect ratio</li>
        <li>Confirm that the CLS is reduced</li>
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

export default ChallengeFour
