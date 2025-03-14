import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import ChallengeOne from './challenges/ChallengeOne'
import ChallengeTwo from './challenges/ChallengeTwo'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge-1" element={<ChallengeOne />} />
          <Route path="/challenge-2" element={<ChallengeTwo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
