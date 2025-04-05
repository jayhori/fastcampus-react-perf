import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import ChallengeOne from './challenges/ChallengeOne'
import ChallengeTwo from './challenges/ChallengeTwo'
import ChallengeThree from './challenges/ChallengeThree'
import ChallengeFour from './challenges/ChallengeFour'
import ExampleFetchPriority from './examples/ExampleFetchPriority'
import ExampleLazyLoadingVersusLCP from './examples/ExampleLazyLoadingVersusLCP'
import Scoreboard from './examples/Scoreboard'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge-1" element={<ChallengeOne />} />
          <Route path="/challenge-2" element={<ChallengeTwo />} />
          <Route path="/challenge-3" element={<ChallengeThree />} />
          <Route path="/challenge-4" element={<ChallengeFour />} />
          <Route path="/example-fetch-priority" element={<ExampleFetchPriority />} />
          <Route path="/example-lazy-loading-vs-lcp" element={<ExampleLazyLoadingVersusLCP />} />
          <Route path="/example-scoreboard" element={<Scoreboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
