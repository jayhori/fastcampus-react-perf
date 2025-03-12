import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { onCLS, onINP, onLCP } from 'web-vitals'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log(
      `LCP candidate on '${location.pathname}' :`,
      entry.startTime,
      entry,
    )
  }
}).observe({ type: 'largest-contentful-paint', buffered: true })

onCLS(console.log)
onINP(console.log)
onLCP(console.log)
