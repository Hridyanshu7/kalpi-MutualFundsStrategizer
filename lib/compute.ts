import { Fund, PortfolioFund, RankingFactor, WeightingConfig } from './types'

export function computeScores(funds: Fund[], factors: RankingFactor[]): Fund[] {
  if (funds.length === 0) return []
  if (factors.length === 0) {
    return funds.map((f, i) => ({ ...f, score: 100, rank: i + 1 }))
  }

  // Normalise each factor to 0-100 percentile rank
  const metricPercentiles: Record<string, number[]> = {}
  for (const factor of factors) {
    const values = funds.map(f => (f as Record<string, unknown>)[factor.metricId] as number ?? 0)
    const sorted = [...values].sort((a, b) => a - b)
    metricPercentiles[factor.metricId] = values.map(v => {
      const rank = sorted.filter(x => x < v).length
      const pct = funds.length > 1 ? (rank / (funds.length - 1)) * 100 : 50
      return factor.direction === 'higher_better' ? pct : 100 - pct
    })
  }

  // Total weight for normalisation
  const totalWeight = factors.reduce((s, f) => s + f.weight, 0) || 1

  const scored = funds.map((fund, i) => {
    const score = factors.reduce((acc, factor) => {
      const pct = metricPercentiles[factor.metricId][i]
      return acc + (pct * factor.weight) / totalWeight
    }, 0)
    return { ...fund, score: Math.round(score * 10) / 10 }
  })

  scored.sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
  return scored.map((f, i) => ({ ...f, rank: i + 1 }))
}

export function applyWeighting(
  funds: Fund[],
  config: WeightingConfig,
  capital: number
): PortfolioFund[] {
  if (funds.length === 0) return []

  let weights: number[] = []

  if (config.method === 'equal') {
    weights = funds.map(() => 100 / funds.length)
  } else if (config.method === 'score') {
    const scores = funds.map(f => f.score ?? 50)
    if (config.scoreDistribution === 'linear') {
      const total = scores.reduce((a, b) => a + b, 0) || 1
      weights = scores.map(s => (s / total) * 100)
    } else {
      // softmax
      const expScores = scores.map(s => Math.exp(s / 20))
      const total = expScores.reduce((a, b) => a + b, 0)
      weights = expScores.map(e => (e / total) * 100)
    }
  } else if (config.method === 'risk') {
    const metric = config.riskMetric ?? 'stdDev3y'
    const risks = funds.map(f => Math.abs((f as Record<string, unknown>)[metric] as number ?? 1) || 1)
    const invRisks = risks.map(r => 1 / r)
    const total = invRisks.reduce((a, b) => a + b, 0)
    weights = invRisks.map(r => (r / total) * 100)
  } else if (config.method === 'category') {
    const catWeights = config.categoryWeights ?? {}
    const countBySection: Record<string, number> = {}
    funds.forEach(f => { countBySection[f.section] = (countBySection[f.section] ?? 0) + 1 })
    weights = funds.map(f => {
      const sectionPct = catWeights[f.section] ?? (100 / Object.keys(countBySection).length)
      return sectionPct / countBySection[f.section]
    })
  }

  // Apply user-set concentration limits
  if (config.maxFundWeight) {
    const cap = config.maxFundWeight
    let overflow = 0
    let uncapped = 0
    weights = weights.map(w => {
      if (w > cap) { overflow += w - cap; return cap }
      uncapped += w; return w
    })
    // redistribute overflow proportionally to uncapped
    weights = weights.map(w => w < cap ? w + (overflow * w / uncapped) : w)
  }

  if (config.minFundWeight) {
    weights = weights.map(w => Math.max(w, config.minFundWeight!))
    const total = weights.reduce((a, b) => a + b, 0)
    weights = weights.map(w => (w / total) * 100)
  }

  // Normalise to 100
  const total = weights.reduce((a, b) => a + b, 0) || 1
  weights = weights.map(w => (w / total) * 100)

  return funds.map((f, i) => ({
    ...f,
    score: f.score ?? 50,
    rank: f.rank ?? i + 1,
    targetWeight: Math.round(weights[i] * 10) / 10,
    allocation: Math.round((weights[i] / 100) * capital),
    units: Math.round(((weights[i] / 100) * capital) / f.nav * 1000) / 1000,
  })) as PortfolioFund[]
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)}Cr`
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)}L`
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`
  return `₹${amount.toFixed(0)}`
}

export function formatAUM(crore: number): string {
  if (crore >= 100000) return `₹${(crore / 100000).toFixed(1)}L Cr`
  if (crore >= 1000) return `₹${(crore / 1000).toFixed(1)}K Cr`
  return `₹${crore.toFixed(0)} Cr`
}

export function colorForReturn(val: number): string {
  return val >= 0 ? 'var(--accent-green)' : 'var(--accent-red)'
}
