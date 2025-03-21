import { useEffect, useState } from 'react'
import { fetchScore, Score } from '../utils/api'
import { Link } from 'react-router-dom'

function Scoreboard() {
  const [score, setScore] = useState<Score | null>(null)

  useEffect(() => {
    fetchScore().then(setScore)
  }, [])

  useEffect(() => {
    if (score) {
      console.log(`Scoreboard API latency: ${score.latency.toFixed(2)}ms`)

      performance.mark('scoreboard-rendered')

      const navEntry = performance.getEntriesByType('navigation')[0]

      performance.measure('time-to-score', {
        start: navEntry.startTime,
        end: 'scoreboard-rendered'
      })

      const measure = performance.getEntriesByName(
        'time-to-score',
      )[0] as PerformanceMeasure

      console.log(`Time to scoreboad: ${measure.duration.toFixed(2)}ms`)
    }
  }, [score])

  return (
    <>
      <nav>
        <Link to="/">Back to Home</Link>
      </nav>
      <h2>Example: Scoreboard</h2>
      <div className="card">
        <h3>{!score ? 'Loading...' : `${score.home} - ${score.away}`}</h3>
        <p>{!score ? 'Please wait' : score.timeRemaining}</p>
      </div>
      <img
        src="https://picsum.photos/id/786/1200/800.webp"
        alt="Stadium"
        style={{ width: '100%' }}
      />
    </>
  )
}

export default Scoreboard
