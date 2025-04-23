import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { onCLS, onINP, onLCP } from 'web-vitals'
import './index.css'
import App from './App.tsx'

/**
 * Note:
 * Google Analytics 4 (GA4) is the latest version. Universal Analytics (UA) is deprecated.
 * 
 * Steps to set up Google Analytics:
 * 1. Go to https://analytics.google.com/
 * 2. Create a new property
 * 3. Add a data stream
 * 4. Set up data collection by adding a tag in index.html.
 * 
 * 注意:
 * Google Analytics 4 (GA4) は最新バージョンです。Universal Analytics (UA) はdeprecatedです。
 * 
 * Google Analytics の設定方法:
 * 1. https://analytics.google.com/ にアクセス
 * 2. 新しいプロパティを作成
 * 3. データストリームを追加
 * 4. index.html にタグを追加してデータ収集を設定
 */ 

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

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
onLCP((metric) => {
  console.log(metric)
  window.gtag('event', 'largest_contentful_paint', {
    value: metric.value,
    event_category: 'Web Vitals',
    event_label: location.pathname,
  })
})
