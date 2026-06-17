'use client'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/store'
import { StepIndicator } from '@/components/ui/StepIndicator'
import { Button } from '@/components/ui/Button'
import { BuilderStep, BUILDER_STEPS } from '@/lib/types'
import { UniverseStep } from '@/components/builder/UniverseStep'
import { FilterStep } from '@/components/builder/FilterStep'
import { RankingStep } from '@/components/builder/RankingStep'
import { WeightingStep } from '@/components/builder/WeightingStep'
import { ConstructionStep } from '@/components/builder/ConstructionStep'
import { RebalancingStep } from '@/components/builder/RebalancingStep'
import { BarChart2, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

const STEP_COMPONENTS: Record<BuilderStep, React.ComponentType> = {
  universe: UniverseStep,
  filter: FilterStep,
  ranking: RankingStep,
  weighting: WeightingStep,
  construction: ConstructionStep,
  rebalancing: RebalancingStep,
}

export default function NewStrategyPage() {
  const router = useRouter()
  const { builder, setBuilderStep, setBuilderName, saveStrategy, computeFilteredFunds, computeRankedFunds, computePortfolio } = useStore()
  const [completedSteps, setCompletedSteps] = useState<BuilderStep[]>([])

  const currentIndex = BUILDER_STEPS.findIndex(s => s.id === builder.currentStep)
  const StepComponent = STEP_COMPONENTS[builder.currentStep]

  function handleNext() {
    const current = builder.currentStep
    // Run computations on transitions
    if (current === 'filter') computeFilteredFunds()
    if (current === 'ranking') { computeFilteredFunds(); computeRankedFunds() }
    if (current === 'weighting') { computeFilteredFunds(); computeRankedFunds(); computePortfolio() }
    if (current === 'construction') computePortfolio()

    if (!completedSteps.includes(current)) {
      setCompletedSteps(prev => [...prev, current])
    }
    const nextStep = BUILDER_STEPS[currentIndex + 1]
    if (nextStep) setBuilderStep(nextStep.id)
  }

  function handleBack() {
    const prevStep = BUILDER_STEPS[currentIndex - 1]
    if (prevStep) setBuilderStep(prevStep.id)
    else router.push('/strategies')
  }

  function handleSave() {
    computeFilteredFunds()
    computeRankedFunds()
    computePortfolio()
    const id = saveStrategy()
    router.push(`/strategies/${id}`)
  }

  const isLastStep = currentIndex === BUILDER_STEPS.length - 1
  const canProceed = builder.currentStep === 'universe' ? builder.selectedUniverses.length > 0 : true

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--bg-base)' }}>
      {/* Top nav */}
      <div className="border-b border-[#1f1f1f] px-6 py-3.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button onClick={() => router.push('/strategies')} className="flex items-center gap-1.5 text-[13px] text-[#555] hover:text-[#888] transition-colors cursor-pointer">
            <ArrowLeft size={14} /> Strategies
          </button>
          <span className="text-[#2a2a2a]">/</span>
          <div className="flex items-center gap-2">
            <BarChart2 size={14} className="text-[#22c55e]" />
            <input
              value={builder.name}
              onChange={e => setBuilderName(e.target.value)}
              placeholder="Strategy name..."
              className="bg-transparent text-[13px] text-[#f0f0f0] placeholder:text-[#333] outline-none border-b border-transparent focus:border-[#2a2a2a] pb-0.5 w-48"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StepIndicator current={builder.currentStep} completed={completedSteps} />
        </div>
      </div>

      {/* Step content */}
      <div className="flex-1 overflow-auto">
        <StepComponent />
      </div>

      {/* Bottom action bar */}
      <div className="border-t border-[#1f1f1f] px-6 py-4 flex items-center justify-between shrink-0 bg-[#0a0a0a]">
        <Button variant="ghost" size="md" onClick={handleBack}>
          <ArrowLeft size={14} />
          {currentIndex === 0 ? 'Cancel' : 'Back'}
        </Button>
        <div className="flex items-center gap-2">
          {isLastStep ? (
            <Button variant="primary" size="lg" onClick={handleSave}>
              Save & View Portfolio
            </Button>
          ) : (
            <Button variant="primary" size="lg" onClick={handleNext} disabled={!canProceed}>
              Continue →
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
