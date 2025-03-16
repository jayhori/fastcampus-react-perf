import './App.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Web Performance with React</h1>

      <h2>Challenges</h2>
      <ul>
        <li>
          <Link to="/challenge-1">1: Utilizing the right image format</Link>
        </li>
        <li>
          <Link to="/challenge-2">2: Preloading crutial images</Link>
        </li>
        <li>
          <Link to="/challenge-3">3</Link>
        </li>
        <li>
          <Link to="/challenge-4">4</Link>
        </li>
        <li>
          <Link to="/challenge-5">5</Link>
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Each challenge page is intentionally slow and/or
        inefficient. Your task is to identify and fix performance issues.
      </p>

      <h2>Final Project</h2>
      <p>
        <Link to="/final-project">Build a fully optimized web page</Link>
      </p>

      <h2>Solutions</h2>
      <p>
        Solutions are available in the solution git branches. For example, the
        solution for Challenge 1 is available in the{' '}
        <em>solution/challenge-1</em> branch.
      </p>

      <h2>Examples</h2>
      <ul>
        <li>
          <Link to="/example-fetch-priority">Fetch priority</Link>
        </li>
      </ul>

      <h2>About</h2>
      <p>
        This course helps you learn how to optimize React applications for web
        performance through practical challenges.
      </p>
    </>
  )
}

export default Home
