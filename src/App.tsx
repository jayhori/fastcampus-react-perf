import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'
import ChallengeOne from './ChallengeOne'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge-1" element={<ChallengeOne />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
