import '../App.css'
import { Link } from 'react-router-dom'

/**
 * Your mission:
 * 1. Run `npm run build` and check the bundles
 * 2. Import this component dynamically
 * 3. Run `npm run build` again and check the bundles again to see the difference
 *
 * * Solution available in the `solution/challenge-5` brancｈ
 *
 * ミッション:
 * 1. `npm run build` を実行してバンドルを確認する
 * 2. このコンポーネントを動的にインポートする
 * 3.  `npm run build` を再実行してバンドルを再チェックして違いを確認する
 *
 * 解答は `solution/challenge-5` ブランチを参照
 */

function ChallengeFive() {
  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Challenge 5: Code-splitting</h2>
      <p>
        <strong>Your Mission:</strong>
      </p>
      <ol>
        <li>Run `npm run build` and check the bundles</li>
        <li>Import this component dynamically</li>
        <li>Run `npm run build` again and check the bundles again to see the difference</li>
      </ol>
    </>
  )
}

export default ChallengeFive
