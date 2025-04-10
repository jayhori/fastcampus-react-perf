import './App.css'
import { Link } from 'react-router-dom'
import { useState, Suspense, lazy } from 'react'

const SuspenseDemo = lazy(
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        import('./shared/SuspenseDemo')
          .then((module) => {
            resolve({ default: module.default })
          })
          .catch(reject)
      }, 1500)
    }) as Promise<{ default: React.ComponentType<{}> }>,
)

function Home() {
  const [showDemo, setShowDemo] = useState(false)

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
          <Link to="/challenge-3">3: Lazy loading</Link>
        </li>
        <li>
          <Link to="/challenge-4">4: Minimizing layout shifts</Link>
        </li>
        <li>
          <Link to="/challenge-5">5: Code-splitting</Link>
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
        <li>
          <Link to="/example-lazy-loading-vs-lcp">Lazy loading vs LCP</Link>
        </li>
        <li>
          <Link to="/example-scoreboard">Time to Scoreboard</Link>
        </li>
      </ul>

      <button onClick={() => setShowDemo((prev) => !prev)}>
        {showDemo ? 'Hide Demo Component' : 'Show Demo Component'}
      </button>

      {showDemo && (
        <>
          <Suspense fallback={<div>Loading component...</div>}>
            <SuspenseDemo />
          </Suspense>
        </>
      )}

      <h2>About</h2>
      <p>
        This course helps you learn how to optimize React applications for web
        performance through practical challenges.
      </p>
    </>
  )
}

export default Home
