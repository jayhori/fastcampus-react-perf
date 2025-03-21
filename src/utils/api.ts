// api.ts
export type Score = {
  home: number
  away: number
  timeRemaining: string
  latency: number
}

export const fetchScore = (): Promise<Score> => {
  return new Promise((resolve) => {
    const latency = Math.random() * 2000 + 500 // Random between 500ms - 2500ms
    setTimeout(() => {
      resolve({
        home: 89,
        away: 94,
        timeRemaining: '1:24 left in Q4',
        latency,
      })
    }, latency)
  })
}
