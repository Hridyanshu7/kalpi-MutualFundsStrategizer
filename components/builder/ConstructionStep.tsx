'use client'
import { useEffect, useState } from 'react'
import { useStore } from '@/lib/store'
import { formatINR } from '@/lib/compute'
import { AlertTriangle } from 'lucide-react'

const MIN_INVESTMENT_PER_FUND = 500 // ₹

export function ConstructionStep() {
  const { builder, setCapital, setTopN, computeFilteredFunds, computeRankedFunds, computePortfolio } = useStore()
  const [capital, setLocalCapital] = useState(builder.capital)
  const [topN, setLocalTopN] = useState(builder.topN)

  // Compute on mount
  useEffect(() => {
    computeFilteredFunds()
    computeRankedFunds()
  }, [])

  useEffect(() => {
    computePortfolio()
  }, [builder.rankedFunds])

  const rankedFunds = builder.rankedFunds
  const maxN = Math.max(rankedFunds.length, 3)
  const effectiveN = Math.min(topN, rankedFunds.length)
  const previewFunds = rankedFunds.slice(0, effectiveN)

  const minRequired = effectiveN * MIN_INVESTMENT_PER_FUND
  const isCapitalLow = capital < minRequired

  const weightingLabel: Record<string, string> = {
    equal: 'Equal', score: 'Score-Based', risk: 'Risk-Based', category: 'Category-Based'
  }

  // Compute preview weights
  function getWeight(i: number) {
    const method = builder.weighting.method
    if (method === 'equal') return (100 / effectiveN).toFixed(1)
    if (method === 'score' || method === 'risk') {
      const scores = previewFunds.map(f => f.score ?? 50)
      const expScores = scores.map(s => Math.exp(s / 20))
      const total = expScores.reduce((a, b) => a + b, 0)
      return ((expScores[i] / total) * 100).toFixed(1)
    }
    return (100 / effectiveN).toFixed(1)
  }

  function handleCapitalChange(val: number) {
    setLocalCapital(val)
    setCapital(val)
    computePortfolio()
  }

  function handleTopNChange(val: number) {
    setLocalTopN(val)
    setTopN(val)
    computePortfolio()
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#f0f0f0] mb-1">Portfolio Construction</h2>
        <p className="text-[13px] text-[#555]">Set your investment capital and choose how many top-ranked funds to carry into the portfolio.</p>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111]">
          <label className="text-[11px] text-[#555] uppercase tracking-wider mb-2 block">Investment Capital</label>
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#555]">₹</span>
            <input
              type="number"
              value={capital}
              onChange={e => handleCapitalChange(+e.target.value)}
              className="flex-1 bg-transparent text-[20px] font-semibold text-[#f0f0f0] outline-none"
            />
          </div>
          <p className="text-[11px] text-[#444] mt-1">Lumpsum, one-time investment</p>
        </div>

        <div className="p-4 rounded-xl border border-[#2a2a2a] bg-[#111]">
          <label className="text-[11px] text-[#555] uppercase tracking-wider mb-2 block">
            Top N Funds — carry {effectiveN} of {rankedFunds.length} into portfolio
          </label>
          <div className="flex items-center gap-3 mt-2">
            <input
              type="range"
              min={3}
              max={Math.max(maxN, 3)}
              value={topN}
              onChange={e => handleTopNChange(+e.target.value)}
              className="flex-1 h-1 accent-[#22c55e] cursor-pointer"
            />
            <span className="text-[20px] font-semibold text-[#22c55e] w-8 text-center">{effectiveN}</span>
          </div>
          <p className="text-[11px] text-[#444] mt-1">Min 3 · Max {rankedFunds.length} (filtered pool)</p>
        </div>
      </div>

      {/* Warnings */}
      {isCapitalLow && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#451a03] border border-[#92400e] mb-4">
          <AlertTriangle size={14} className="text-[#f59e0b] shrink-0" />
          <p className="text-[12px] text-[#f59e0b]">
            Capital below minimum required. At least ₹{minRequired.toLocaleString('en-IN')} needed for {effectiveN} funds (₹{MIN_INVESTMENT_PER_FUND} min per fund).
          </p>
        </div>
      )}

      {rankedFunds.length === 0 && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#450a0a] border border-[#7f1d1d] mb-4">
          <AlertTriangle size={14} className="text-[#ef4444] shrink-0" />
          <p className="text-[12px] text-[#ef4444]">No funds passed your filters. Go back and loosen filter conditions.</p>
        </div>
      )}

      {/* Preview table */}
      {previewFunds.length > 0 && (
        <div className="rounded-xl border border-[#2a2a2a] bg-[#111] overflow-hidden">
          <div className="px-4 py-3 border-b border-[#1f1f1f] flex items-center justify-between">
            <p className="text-[12px] text-[#555]">Preview · {weightingLabel[builder.weighting.method]} weight</p>
            <div className="flex gap-4 text-[11px] text-[#444]">
              <span>Capital: {formatINR(capital)}</span>
              <span>Min required: {formatINR(minRequired)}</span>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1a1a1a]">
                {['#', 'Fund', 'Category', 'Score', 'Weight', 'Allocation (₹)', '3Y CAGR'].map(h => (
                  <th key={h} className="px-4 py-2.5 text-left text-[10px] text-[#444] uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {previewFunds.map((fund, i) => {
                const wt = parseFloat(getWeight(i))
                const alloc = Math.round((wt / 100) * capital)
                return (
                  <tr key={fund.schemeCode} className="border-b border-[#0f0f0f] hover:bg-[#131313] transition-colors">
                    <td className="px-4 py-3 text-[12px] text-[#555]">{i + 1}</td>
                    <td className="px-4 py-3">
                      <p className="text-[12px] text-[#f0f0f0] font-medium">{fund.shortName}</p>
                      <p className="text-[10px] text-[#444]">{fund.fundHouse}</p>
                    </td>
                    <td className="px-4 py-3 text-[11px] text-[#555]">{fund.subCategory}</td>
                    <td className="px-4 py-3">
                      <span className="text-[12px] text-[#22c55e] font-semibold">{fund.score?.toFixed(0)}</span>
                    </td>
                    <td className="px-4 py-3 text-[12px] text-[#f0f0f0]">{wt}%</td>
                    <td className="px-4 py-3 text-[12px] text-[#f0f0f0] font-medium">
                      {formatINR(alloc)}
                      {alloc < MIN_INVESTMENT_PER_FUND && (
                        <span className="ml-1 text-[10px] text-[#f59e0b]">⚠</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-[12px] text-[#22c55e]">{fund.return3y.toFixed(1)}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div className="px-4 py-3 border-t border-[#1a1a1a] flex items-center justify-between">
            <span className="text-[11px] text-[#444]">Remaining uninvested cash</span>
            <span className="text-[12px] text-[#888]">
              {formatINR(capital - previewFunds.reduce((acc, _, i) => acc + Math.round((parseFloat(getWeight(i)) / 100) * capital), 0))}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
