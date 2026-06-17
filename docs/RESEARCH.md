# Kalpi — MF Strategy Builder: Research & Product Thinking

**Author:** Hridyanshu Singhal &nbsp;|&nbsp; **Role:** PM Candidate &nbsp;|&nbsp; **Date:** June 2026

---

## 1. Competitor Analysis

The market splits into three archetypes: **transaction platforms** (Groww, Coin, ET Money), **research tools** (Value Research, Morningstar), and **robo-advisors** (Wealthfront, Betterment, M1 Finance). No Indian platform meaningfully occupies the fourth — **systematic strategy builder** — which is where Kalpi sits.

---

### ET Money
- Strong mobile UX, tax P&L tracking, Smart Deposit for idle cash — genuinely useful for mass retail
- Fund discovery is fully recommendation-driven; no custom rules, no user-defined criteria
- Risk-adjusted metrics (Sharpe, Alpha) don't surface anywhere in the product
- **Kalpi's angle:** Replace opaque expert picks with user-defined, auditable rules. Let users save and re-run strategies over time — a concept ET Money has no equivalent for

### Groww
- Largest Indian MF platform by users; near-zero investment friction; clean SIP management
- Fund discovery sorts by 1Y return — arguably the worst metric to lead with
- Zero analytics depth: no volatility, drawdown, or Sharpe visible anywhere
- **Kalpi's angle:** Serve the analytically-inclined segment Groww ignores. Systematic ranking counteracts 1Y return-chasing behaviour

### INDmoney
- Aggregation across EPF, NPS, US stocks, MF — single net worth view is the core value prop
- MF selection is recommendation-based, typically shaped by AMC partnerships
- Analytics are shallow; portfolio construction is goal-bucket style, not rule-based
- **Kalpi's angle:** Be the expert selection layer — Kalpi generates the basket, execution can happen anywhere. Every fund has a traceable score

### Kuvera
- Longest-running free direct-plan platform; portfolio overlap tool is a genuinely rare feature
- Overlap detection is reactive (shows existing overlap) not proactive (prevents it during construction)
- No composite scoring, no custom screening, no strategy builder
- **Kalpi's angle:** Proactive overlap detection at construction time. Let users define what "quality" means — not accept Kuvera's static list

### Coin (Zerodha)
- Natural choice for existing Zerodha equity users — consolidated holdings, trusted brand, no commission
- MF is a secondary product; analytics are essentially absent, fund comparison requires leaving the app
- **Kalpi's angle:** Make MF the primary analytical product. For equity-literate users, analytical depth is a feature, not a complexity barrier

### Value Research
- Gold standard for Indian MF research; comprehensive metric coverage, trusted star ratings since 1996
- Research and execution are disconnected — users research on VR, invest elsewhere
- Star rating methodology is fixed; users cannot customise weights or build their own scoring model
- Rolling return charts are illustrative, not screen-able or actionable
- **Kalpi's angle:** Let users build their own rating — their metrics, their weights. Research flows directly into portfolio construction in one unbroken flow

### Morningstar
- Global benchmark; style box, analyst ratings, and factor analysis are genuinely sophisticated
- India coverage is incomplete; premium data is priced for advisors, not retail investors
- Research-report oriented — analysis does not connect to execution
- **Kalpi's angle:** Bring Morningstar-grade quantitative rigour to Indian retail at zero cost, and make it actionable — analysis flows directly into a portfolio

### Wealthfront
- Best US robo-advisor; automated tax-loss harvesting and direct indexing are genuine moats
- ETF-centric and US-only; fund selection logic is a black box users cannot inspect or override
- **Kalpi's angle:** Apply Wealthfront's systematic, rules-driven philosophy to India's active MF market — same outcome, full transparency

### Betterment
- Goal-bucket UX and behavioural nudges are best-in-class; tax-coordinated portfolios are sophisticated
- No user control over fund selection; opaque methodology; single model portfolio per goal
- **Kalpi's angle:** Combine Betterment's goal clarity with full strategy transparency. Allow multiple strategies per goal and surface India's complex tax implications explicitly

### M1 Finance
- "Pie" portfolio concept is the closest analogue to Kalpi — target weight slices, auto-distribution on invest
- Pies are allocation tools, not selection tools — M1 does not help users decide what goes in the pie
- US-only; stocks and ETFs, not active MFs; no systematic scoring or ranking upstream
- **Kalpi's angle:** Add the selection layer M1 is missing — filter → rank → score → then construct the pie. Apply this to India's active MF market where fund selection genuinely matters

---

### Competitive Summary

| Platform | Research Depth | Transaction | Strategy Builder | India |
|---|---|---|---|---|
| ET Money | Low | Yes | No | Yes |
| Groww | Minimal | Yes | No | Yes |
| INDmoney | Low | Yes | No | Yes |
| Kuvera | Medium | Yes | No | Yes |
| Coin | Minimal | Yes | No | Yes |
| Value Research | High | No | No | Yes |
| Morningstar | Very High | No | No | Partial |
| Wealthfront | Medium | Yes (US) | No (opaque) | No |
| Betterment | Medium | Yes (US) | No (opaque) | No |
| M1 Finance | Low | Yes (US) | Allocation only | No |
| **Kalpi** | **High** | **Yes** | **Yes (transparent)** | **Yes** |

**The white space:** No Indian platform combines analytical depth + transparent strategy building + execution in a single flow.

---

## 2. Mutual Fund Framework

### Filtering
Filters define the floor — they eliminate the ineligible, not identify the best. All filters use AND logic; a fund that fails any single condition is out.

- **Minimum viability gates** apply to every strategy without exception: AUM ≥ ₹500 Cr (below this, large redemptions can move the NAV), Fund Age ≥ 3 years (insufficient data before this), Direct plan must exist
- **Qualitative gates:** Expense ratio cap (>1.2% for equity is expensive), manager tenure floor, SEBI riskometer alignment with the user's declared risk tolerance
- **Section-specific gates:** For Debt — modified duration and credit quality (AAA %, Sovereign %) matter. For Hybrid — verify actual equity/debt allocation matches the mandate
- **UX principle:** Show live fund count as filters are added. Warn below 5 funds; never block. Pre-populate sensible defaults so users aren't starting from zero

### Ranking
Ranking orders eligible funds from best to worst. Raw metric values across different scales (Sharpe ratio vs AUM vs CAGR %) aren't directly comparable — the solution is percentile normalisation.

- Every metric is converted to a 0–100 percentile rank within the filtered pool. Direction is pre-set: lower expense ratio → higher rank
- User-defined weights are applied across selected metrics to produce a single composite score per fund
- **Metric priority:** Prefer risk-adjusted returns (Sharpe, Sortino, Alpha) and rolling returns over trailing returns. 1Y return is the least reliable signal — highly sensitive to the measurement start date
- **Pool-relative scoring:** A fund with 12% 3Y CAGR scores differently depending on what else is in the pool. This is intentional — ranking is always relative to the selected universe

### Scoring
The composite score (0–100) serves three roles: determines rank order, drives capital allocation in score-based weighting, and enables threshold decisions ("only carry funds scoring above 60").

- **Score-based weighting — two modes:** Softmax compresses the score distribution so the top fund doesn't dominate; Linear distributes capital directly proportional to score
- **Edge cases:** Pools with fewer than 5 funds produce coarse rankings. Funds with missing data for a ranked metric are excluded from that metric's computation — their score is based on remaining metrics only. Never impute zero or mean for missing values
- Adding both 3Y CAGR and 5Y CAGR at equal weight double-counts long-run returns — future UX should surface correlation warnings

### Portfolio Construction
Once funds are scored and ranked, the basket is assembled.

- **Four weighting methods:** Equal (1/N, transparent baseline), Score-Based (conviction-weighted), Risk-Based (inverse volatility, lower-risk funds get more), Category-Based (user sets Equity/Debt/Hybrid split first, distributes equally within each)
- **Concentration limits** are user-configurable guardrails — max/min weight per fund. Informational only; the system warns, never blocks
- **Top N selection** happens after scoring and weighting so users see the computed allocations before deciding how many funds to carry forward
- **Capital allocation:** Residual from NAV-unit rounding is surfaced as uninvested cash. Warn (don't block) if any fund's allocation falls below the ₹500 minimum

---

## 3. Key Challenges & Corner Cases

### Fund Overlap
Multiple funds in a basket can hold the same underlying stocks — a user thinks they own 8 diversified funds but effectively hold the same 50 stocks repeated.
- Flag at construction time when two funds share >60% of holdings
- Surface the specific overlap ("HDFC Bank appears in 6 of 8 funds at >5% weight")
- Warn, don't block — a user may knowingly choose overlapping funds

### AMC Concentration
Selecting 4 of 8 funds from the same AMC creates correlated operational risk — regulatory action or a key-person event affects a disproportionate share of the portfolio.
- Flag when any single AMC represents >25% of basket allocation
- Allow a soft constraint: "maximum 2 funds per AMC"

### Category Concentration
When multiple universes are selected, the scoring model may surface all top-N funds from one sub-category if that category happened to perform best in the metric window. A user who selected Large Cap + Flexi Cap + Multi Cap may end up with an all-Flexi-Cap basket.
- Warn when >50% of selected funds come from one sub-universe
- Future: guarantee at least one fund per selected universe in the final basket

### Style Drift
A Flexi Cap fund gradually shifts toward large-cap stocks without a mandate change. The user is getting Large Cap exposure from a fund they selected for Flexi Cap diversification.
- Track actual portfolio composition (large/mid/small cap %) over time
- Flag in diagnostics: "Fund X (Flexi Cap) has maintained >80% large-cap allocation for 6 months"
- Quarterly strategy re-runs naturally catch this when composition filters are applied

### Survivorship Bias
Historical analysis only sees funds that survived. Merged or wound-up funds — often the worst performers — are invisible, making any historical strategy look better than it was.
- Acknowledge explicitly in backtest UI: "performance is likely overstated; wound-up funds are excluded"
- Tag funds in the dataset that absorbed a merger

### Fund Mergers
SEBI's 2018 rationalisation forced many fund mergers. A "5Y track record" may be stitched from two different funds with different mandates and managers — not an apples-to-apples number.
- Flag funds with a merger in the last 5 years
- Weight more recent metrics (1Y, 3Y) over inception-to-date returns for these funds

### New Funds / Limited History
NFOs and post-reclassification funds with <3 years of history cannot produce meaningful 3Y or 5Y metrics. Applying the standard ranking formula produces unreliable scores.
- Default age filter (≥3 years) eliminates most of these
- If the filter is removed: warn that long-term metrics for young funds are unreliable
- Exclude, don't impute — score these funds only on available metrics

### Missing Data
Not every metric applies to every fund type. Smaller AMCs have inconsistent disclosure practices.
- Exclude the fund from that metric's percentile computation; redistribute weight to remaining metrics
- Warn if >30% of the pool is missing a ranked metric — the signal is too weak to rely on

### Exit Loads
Most equity funds charge 1% if redeemed within 12 months. Rebalancing without accounting for exit loads can silently destroy returns — a drift correction that frees up ₹80 but triggers ₹100 in exit load is a net loss.
- Surface exit load per fund and estimated cost before any rebalancing order
- Recommend quarterly or wider rebalancing cadence for equity funds
- Future: skip rebalancing a fund if its exit load exceeds the gain from drift correction

### Tax Implications
India's MF tax regime materially affects the right rebalancing strategy, fund type choice, and redemption sequencing.

| Fund Type | Holding | Tax |
|---|---|---|
| Equity (>65% equity) | <12 months | 20% STCG |
| Equity (>65% equity) | ≥12 months | 12.5% LTCG on gains above ₹1.25L |
| Debt | Any period | Slab rate (up to 30%) |
| Hybrid (35–65% equity) | <36 months | Slab rate |

- Don't rebalance equity holdings within 12 months — 20% vs 12.5% is a meaningful gap
- Flag funds approaching the 12-month mark: "Hold X more days to qualify for LTCG"
- Debt MFs are now taxed at slab rate — no advantage over FDs for high-bracket investors; surface this contextually
- India has no wash-sale rule — loss harvesting is clean and doesn't require a 30-day wait

---

## 4. Execution Design

### Initial Allocation
- Each fund receives a rupee allocation = target weight × capital, floored to the nearest NAV unit. Residual becomes uninvested cash
- **NAV cut-off:** 3:00 PM for equity and most hybrid funds; 1:00 PM for large debt orders (≥₹2 Cr). Orders after cut-off get next business day's NAV
- **Settlement:** Equity T+1 redemption, T+2 allotment. Debt T+1 both ways. Liquid T+0 redemption
- **Practical gates:** KYC and PAN verification must be complete. UPI/net banking handles up to ₹2L per transaction; RTGS for large amounts. First investment with an AMC creates a folio

### Rebalancing
- **Sequence always: sell first, then buy.** Sell overweight positions → wait for settlement → use proceeds to buy underweight. Buying first creates temporary overexposure and may require bridging capital
- **Before executing:** Check exit load applicability per fund. If the cost of exit load + estimated tax exceeds the benefit of drift correction, skip and log
- **Tax-lot ordering:** Selling highest-cost lots first (HIFO) minimises taxable gains. Indian MF default is FIFO — HIFO requires explicit selection at the AMC level
- Use Growth option only — IDCW distributions move NAV unpredictably and complicate weight calculations

### SIPs *(v2 scope)*
- A strategy SIP distributes a fixed monthly amount across all basket funds proportional to target weights
- Changing the basket after a strategy re-run requires cancelling old SIP mandates and creating new ones — operationally non-trivial; design must account for this
- 30-day AMC notice period for SIP cancellation

### Redemptions
- **Partial — three modes:** Proportional (sell same % from all funds), Overweight-first (rebalances and raises cash simultaneously), or User-specified
- **Full exit:** Cancel active SIPs before submitting redemption orders — SIP continuation on a redeemed folio is a common operational error
- Large debt redemptions (>₹2 Cr) may hit daily AMC limits and require multi-day execution

### Practical Constraints
- NAV is published once daily after market close — no intra-day pricing for MFs
- **Order routing:** BSE Star MF is the recommended integration starting point (broadest AMC coverage, single API)
- **Scheme code stability:** Fund names change post-rationalisation; ISIN is stable across renames — use ISIN as the canonical identifier
- **Operational edge cases to handle:** Market holidays (queue orders), AMC downtime (retry with backoff), failed payments (notify user immediately, never silent-skip), folio-bank name mismatch (validate at onboarding, not at redemption)

---

*Kalpi PM Assignment — Hridyanshu Singhal, June 2026*
