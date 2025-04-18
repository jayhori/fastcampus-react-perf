import { lazy, createContext } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import ChallengeOne from './challenges/ChallengeOne'
import ChallengeTwo from './challenges/ChallengeTwo'
import ChallengeThree from './challenges/ChallengeThree'
import ChallengeFour from './challenges/ChallengeFour'
const ChallengeFive = lazy(() => import('./challenges/ChallengeFive'))
import ExampleFetchPriority from './examples/ExampleFetchPriority'
import ExampleLazyLoadingVersusLCP from './examples/ExampleLazyLoadingVersusLCP'
import Scoreboard from './examples/Scoreboard'
import FinalProjectBefore from './projects/FinalProjectBefore'
import FinalProjectAfter from './projects/FinalProjectAfter'

// This would typically be fetched from a server or a config file
const featureFlags = {
  ENABLE_LAZY_LOADING: true,
}

// Use the defined object as the default context value
export const FeatureFlagContext = createContext(featureFlags)

function App() {
  return (
    <>
      <Router>
        <FeatureFlagContext.Provider value={featureFlags}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge-1" element={<ChallengeOne />} />
            <Route path="/challenge-2" element={<ChallengeTwo />} />
            <Route path="/challenge-3" element={<ChallengeThree />} />
            <Route path="/challenge-4" element={<ChallengeFour />} />
            <Route path="/challenge-5" element={<ChallengeFive />} />
            <Route
              path="/example-fetch-priority"
              element={<ExampleFetchPriority />}
            />
            <Route
              path="/example-lazy-loading-vs-lcp"
              element={<ExampleLazyLoadingVersusLCP />}
            />
            <Route path="/example-scoreboard" element={<Scoreboard />} />
            <Route
              path="/final-project-before"
              element={<FinalProjectBefore />}
            />
            <Route
              path="/final-project-after"
              element={<FinalProjectAfter />}
            />
          </Routes>
        </FeatureFlagContext.Provider>
      </Router>
    </>
  )
}

export default App
