export type FundSection = 'EQUITY' | 'DEBT' | 'HYBRID'
export type FundStatus = 'draft' | 'invested'

export type Universe = {
  id: string
  section: FundSection
  label: string
  description: string
}

export type FilterOperator = 'gte' | 'lte' | 'between' | 'eq' | 'in'

export type FilterCondition = {
  id: string
  metricId: string
  metricLabel: string
  operator: FilterOperator
  value: number | number[] | string[]
  unit: string
}

export type RankingFactor = {
  metricId: string
  metricLabel: string
  direction: 'higher_better' | 'lower_better'
  weight: number // 0-100, sum across all factors = 100
}

export type WeightingMethod = 'equal' | 'score' | 'risk' | 'category'

export type WeightingConfig = {
  method: WeightingMethod
  riskMetric?: 'std_dev_3y' | 'max_drawdown_3y' | 'downside_deviation'
  scoreDistribution?: 'softmax' | 'linear'
  categoryWeights?: Record<string, number> // section -> %
  maxFundWeight?: number   // optional, user-set
  minFundWeight?: number   // optional, user-set
}

export type RebalanceTrigger = 'time' | 'drift' | 'manual'
export type RebalanceCadence = 'monthly' | 'quarterly' | 'semi_annual' | 'annual'

export type RebalancingConfig = {
  trigger: RebalanceTrigger
  cadence?: RebalanceCadence
  driftThreshold?: number // percentage
}

export type StrategyConfig = {
  universes: Universe[]
  filters: FilterCondition[]
  rankingFactors: RankingFactor[]
  weighting: WeightingConfig
  rebalancing: RebalancingConfig
}

export type Fund = {
  schemeCode: string
  name: string
  shortName: string
  section: FundSection
  subCategory: string
  fundHouse: string
  nav: number
  navDate: string
  aum: number            // ₹ Cr
  expenseRatio: number   // %
  fundAge: number        // years
  risk: string
  // Returns
  return1y: number
  return3y: number
  return5y: number
  returnInception: number
  // Risk metrics
  stdDev1y: number
  stdDev3y: number
  maxDrawdown1y: number
  maxDrawdown3y: number
  beta: number
  downsideDeviation: number
  // Risk-adjusted
  sharpe1y: number
  sharpe3y: number
  sortino1y: number
  sortino3y: number
  alpha1y: number
  alpha3y: number
  calmar3y: number
  informationRatio3y: number
  // Portfolio quality
  top10Concentration: number
  numHoldings: number
  largeCap: number
  midCap: number
  smallCap: number
  portfolioPE: number
  portfolioPB: number
  // Consistency
  battingAverage: number
  upCapture: number
  downCapture: number
  positiveRollingPct: number
  // Manager
  managerTenure: number
  managerName: string
  // Debt-specific
  avgMaturity?: number
  modifiedDuration?: number
  aaaPercent?: number
  aaPercent?: number
  belowAaPercent?: number
  sovereignPercent?: number
  ytm?: number
  // Hybrid-specific
  equityAlloc?: number
  debtAlloc?: number
  otherAlloc?: number
  // Rolling returns
  rolling1y3y: number
  rolling1y5y: number
  rolling3y5y: number
  // Excess return vs benchmark
  excessReturn1y: number
  excessReturn3y: number
  // Turnover
  turnoverRatio: number
  // Score computed at runtime
  score?: number
  rank?: number
  targetWeight?: number
  allocation?: number
}

export type PortfolioFund = Fund & {
  score: number
  rank: number
  targetWeight: number   // %
  allocation: number     // ₹
  units: number
}

export type Strategy = {
  id: string
  name: string
  status: FundStatus
  config: StrategyConfig
  lastRunAt: string
  createdAt: string
  // Portfolio output
  capital?: number
  topN?: number
  funds?: PortfolioFund[]
  // Aggregated metrics
  weightedCAGR3y?: number
  weightedSharpe3y?: number
  weightedExpenseRatio?: number
  weightedMaxDrawdown?: number
  portfolioAlpha?: number
  remainingCash?: number
}

export type BuilderStep = 'universe' | 'filter' | 'ranking' | 'weighting' | 'construction' | 'rebalancing'

export const BUILDER_STEPS: { id: BuilderStep; label: string }[] = [
  { id: 'universe', label: 'Universe' },
  { id: 'filter', label: 'Filter' },
  { id: 'ranking', label: 'Rank & Score' },
  { id: 'weighting', label: 'Weighting' },
  { id: 'construction', label: 'Construction' },
  { id: 'rebalancing', label: 'Rebalancing' },
]

export const UNIVERSES: Universe[] = [
  { id: 'large_cap', section: 'EQUITY', label: 'Large Cap', description: 'Top 100 companies by market cap. Stable, blue-chip equity exposure.' },
  { id: 'flexi_cap', section: 'EQUITY', label: 'Flexi Cap', description: 'No mandate caps — manager shifts freely across market caps.' },
  { id: 'multi_cap', section: 'EQUITY', label: 'Multi Cap', description: 'Minimum 25% each across large, mid, and small cap.' },
  { id: 'corporate_bond', section: 'DEBT', label: 'Corporate Bond', description: 'Min 80% in AA+ and above corporate bonds. Higher yield, low credit risk.' },
  { id: 'short_duration', section: 'DEBT', label: 'Short Duration', description: 'Portfolio duration of 1–3 years. Balanced yield and rate risk.' },
  { id: 'dynamic_bond', section: 'DEBT', label: 'Dynamic Bond', description: 'Actively shifts duration based on interest rate outlook.' },
  { id: 'aggressive_hybrid', section: 'HYBRID', label: 'Aggressive Hybrid', description: '65–80% equity, 20–35% debt. Near-equity growth with a debt cushion.' },
  { id: 'balanced_advantage', section: 'HYBRID', label: 'Balanced Advantage', description: 'Dynamically shifts equity-debt allocation based on market valuations.' },
  { id: 'multi_asset', section: 'HYBRID', label: 'Multi Asset', description: 'Invests across 3+ asset classes (equity, debt, gold).' },
]

export type MetricDefinition = {
  id: string
  label: string
  l1: string
  unit: string
  direction: 'higher_better' | 'lower_better'
  appliesTo: FundSection[]
  supportsFilter: boolean
  supportsRank: boolean
  supportsWeight: boolean
  description: string
}

export const METRICS: MetricDefinition[] = [
  // Returns
  { id: 'return1y', label: '1Y Return', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return over the last 1 year' },
  { id: 'return3y', label: '3Y CAGR', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Compounded annual growth rate over 3 years' },
  { id: 'return5y', label: '5Y CAGR', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Compounded annual growth rate over 5 years' },
  { id: 'rolling1y3y', label: 'Rolling 1Y (3Y window)', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Average 1Y rolling return across 3-year window' },
  { id: 'rolling1y5y', label: 'Rolling 1Y (5Y window)', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Average 1Y rolling return across 5-year window' },
  { id: 'rolling3y5y', label: 'Rolling 3Y (5Y window)', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Average 3Y rolling return across 5-year window' },
  { id: 'excessReturn1y', label: 'Excess Return vs Benchmark 1Y', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return above benchmark over 1 year' },
  { id: 'excessReturn3y', label: 'Excess Return vs Benchmark 3Y', l1: 'Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return above benchmark over 3 years' },
  // Risk
  { id: 'stdDev1y', label: 'Std Deviation 1Y', l1: 'Risk', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Annualised volatility over 1 year' },
  { id: 'stdDev3y', label: 'Std Deviation 3Y', l1: 'Risk', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Annualised volatility over 3 years' },
  { id: 'maxDrawdown1y', label: 'Max Drawdown 1Y', l1: 'Risk', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Worst peak-to-trough decline over 1 year' },
  { id: 'maxDrawdown3y', label: 'Max Drawdown 3Y', l1: 'Risk', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Worst peak-to-trough decline over 3 years' },
  { id: 'beta', label: 'Beta', l1: 'Risk', unit: 'x', direction: 'lower_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Market sensitivity vs Nifty 50' },
  { id: 'downsideDeviation', label: 'Downside Deviation', l1: 'Risk', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Volatility of negative returns only' },
  // Risk-Adjusted
  { id: 'sharpe1y', label: 'Sharpe Ratio 1Y', l1: 'Risk-Adjusted Returns', unit: 'x', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return per unit of total risk over 1 year' },
  { id: 'sharpe3y', label: 'Sharpe Ratio 3Y', l1: 'Risk-Adjusted Returns', unit: 'x', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return per unit of total risk over 3 years' },
  { id: 'sortino1y', label: 'Sortino Ratio 1Y', l1: 'Risk-Adjusted Returns', unit: 'x', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return per unit of downside risk over 1 year' },
  { id: 'sortino3y', label: 'Sortino Ratio 3Y', l1: 'Risk-Adjusted Returns', unit: 'x', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Return per unit of downside risk over 3 years' },
  { id: 'alpha1y', label: 'Alpha 1Y', l1: 'Risk-Adjusted Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Excess return over benchmark after beta adjustment, 1 year' },
  { id: 'alpha3y', label: 'Alpha 3Y', l1: 'Risk-Adjusted Returns', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Excess return over benchmark after beta adjustment, 3 years' },
  { id: 'calmar3y', label: 'Calmar Ratio 3Y', l1: 'Risk-Adjusted Returns', unit: 'x', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: '3Y CAGR divided by max drawdown' },
  { id: 'informationRatio3y', label: 'Information Ratio 3Y', l1: 'Risk-Adjusted Returns', unit: 'x', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Active return per unit of tracking error' },
  // Fund Characteristics
  { id: 'aum', label: 'AUM', l1: 'Fund Characteristics', unit: '₹Cr', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Assets under management in ₹ Crore' },
  { id: 'expenseRatio', label: 'Expense Ratio', l1: 'Fund Characteristics', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Annual fee as % of AUM' },
  { id: 'fundAge', label: 'Fund Age', l1: 'Fund Characteristics', unit: 'yrs', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Years since fund inception' },
  { id: 'turnoverRatio', label: 'Turnover Ratio', l1: 'Fund Characteristics', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Portfolio churn rate — higher = more transaction costs' },
  // Portfolio Quality
  { id: 'top10Concentration', label: 'Top 10 Concentration', l1: 'Portfolio Quality', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Weight of top 10 holdings in fund portfolio' },
  { id: 'numHoldings', label: 'Number of Holdings', l1: 'Portfolio Quality', unit: '#', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Total number of securities in the fund' },
  { id: 'largeCap', label: 'Large Cap %', l1: 'Portfolio Quality', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Allocation to large cap stocks' },
  { id: 'midCap', label: 'Mid Cap %', l1: 'Portfolio Quality', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Allocation to mid cap stocks' },
  { id: 'smallCap', label: 'Small Cap %', l1: 'Portfolio Quality', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Allocation to small cap stocks' },
  { id: 'portfolioPE', label: 'Portfolio P/E', l1: 'Portfolio Quality', unit: 'x', direction: 'lower_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Weighted average P/E of fund holdings' },
  { id: 'portfolioPB', label: 'Portfolio P/B', l1: 'Portfolio Quality', unit: 'x', direction: 'lower_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Weighted average P/B of fund holdings' },
  // Consistency
  { id: 'battingAverage', label: 'Batting Average', l1: 'Consistency', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: '% of periods the fund outperformed its benchmark' },
  { id: 'upCapture', label: 'Up Capture Ratio', l1: 'Consistency', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: '% of market upside captured; >100% = outperforms in bull markets' },
  { id: 'downCapture', label: 'Down Capture Ratio', l1: 'Consistency', unit: '%', direction: 'lower_better', appliesTo: ['EQUITY','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: '% of market downside absorbed; <100% = better protection' },
  { id: 'positiveRollingPct', label: '% Positive Rolling 1Y', l1: 'Consistency', unit: '%', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Share of 1Y rolling windows with positive return' },
  // Manager
  { id: 'managerTenure', label: 'Manager Tenure', l1: 'Manager', unit: 'yrs', direction: 'higher_better', appliesTo: ['EQUITY','DEBT','HYBRID'], supportsFilter: true, supportsRank: true, supportsWeight: false, description: 'Years the current manager has run this fund' },
  // Debt-specific
  { id: 'avgMaturity', label: 'Average Maturity', l1: 'Duration & Rate Sensitivity', unit: 'yrs', direction: 'lower_better', appliesTo: ['DEBT'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Average time to maturity of portfolio bonds' },
  { id: 'modifiedDuration', label: 'Modified Duration', l1: 'Duration & Rate Sensitivity', unit: 'yrs', direction: 'lower_better', appliesTo: ['DEBT'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Interest rate sensitivity: 1% rate rise → duration % NAV fall' },
  { id: 'aaaPercent', label: 'AAA %', l1: 'Credit Quality', unit: '%', direction: 'higher_better', appliesTo: ['DEBT'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Allocation to highest-rated bonds' },
  { id: 'sovereignPercent', label: 'Sovereign / Gilt %', l1: 'Credit Quality', unit: '%', direction: 'higher_better', appliesTo: ['DEBT'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Allocation to government securities — zero credit risk' },
  { id: 'ytm', label: 'Yield to Maturity', l1: 'Yield', unit: '%', direction: 'higher_better', appliesTo: ['DEBT'], supportsFilter: true, supportsRank: true, supportsWeight: true, description: 'Expected return if portfolio held to maturity' },
  // Hybrid-specific
  { id: 'equityAlloc', label: 'Equity Allocation %', l1: 'Portfolio Composition', unit: '%', direction: 'higher_better', appliesTo: ['HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Current equity exposure — use to verify fund meets risk profile' },
  { id: 'debtAlloc', label: 'Debt Allocation %', l1: 'Portfolio Composition', unit: '%', direction: 'higher_better', appliesTo: ['HYBRID'], supportsFilter: true, supportsRank: false, supportsWeight: false, description: 'Current debt exposure — ensure sufficient defensive allocation' },
]
