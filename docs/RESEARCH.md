---
layout: default
title: Kalpi — Research & Product Thinking
---

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
**The problem:** A user selects 8 funds believing they are well-diversified. In reality, every fund in the basket holds HDFC Bank, Reliance, and Infosys at >5% weight — they have effectively bought the same 30 stocks eight times over. Diversification across fund names provides no actual risk reduction.

**Why it happens:** Return-chasing selection naturally converges on the same high-performing large-caps. Flexi Cap, Large Cap, and Aggressive Hybrid funds in particular overlap heavily during bull markets.

**Kalpi's response:**
- Detect overlap at construction time by comparing top holdings across selected funds
- Flag pairs with >60% holdings overlap: "Fund A and Fund B share 68% of their top holdings"
- Surface the most repeated underlying stocks: "HDFC Bank appears in 6 of your 8 funds"
- Warn, don't block — a user may intentionally concentrate; inform them clearly and let them proceed
- Future: show a portfolio-level stock heatmap so users can visually see the true underlying diversification

---

### AMC Concentration
**The problem:** A scoring model that rewards consistent performance may end up selecting 4–5 funds from a single fund house — say, HDFC AMC or SBI Funds. The user believes they have a diversified basket; they actually have a concentrated bet on one AMC's operational health, leadership, and compliance culture.

**Why it matters:** AMC-level risk is distinct from fund-level risk. A regulatory sanction, a key fund manager exodus, or a compliance failure at the AMC level can affect all its funds simultaneously.

**Kalpi's response:**
- Flag when any single AMC represents >25% of the basket's total allocation
- Surface as a diagnostic: "3 of your 8 funds are from HDFC AMC, representing 42% of capital"
- Allow a soft constraint at construction time: "max 2 funds per AMC" — applies before final selection
- Do not enforce automatically; a user with strong conviction on an AMC's quality should be able to override with explicit acknowledgement

---

### Category Concentration
**The problem:** Even when a user selects multiple universes (e.g., Large Cap + Flexi Cap + Multi Cap), the composite score may rank all top-N funds from one sub-category — because that category happened to perform best during the metric window being used.

**Real example:** In 2021, Small Cap funds dominated 3Y CAGR rankings. A return-heavy scoring model applied to a basket that also includes Large Cap would fill most slots with Small Cap funds, defeating the intent of the multi-universe selection.

**Kalpi's response:**
- Warn when >50% of the selected Top N funds come from a single sub-universe
- Make the imbalance visible before the user carries funds to the portfolio: "7 of 10 selected funds are Flexi Cap"
- Future: offer a "universe-proportionate" mode that guarantees at least one fund per selected universe in the final basket
- Let the user manually pin a fund from an underrepresented universe if they want explicit coverage

---

### Style Drift
**The problem:** Fund mandates are declared; actual portfolio behaviour can diverge over time. A Flexi Cap fund manager who gradually shifts toward large-caps is not violating any rule — but the user who selected the fund for mid/small-cap exposure is getting something different from what they intended.

**Real example:** Several Flexi Cap funds post-2020 maintained 80%+ large-cap allocation for extended periods, effectively behaving as Large Cap funds without re-classifying. Users holding these in a "diversified" basket had duplicate large-cap exposure.

**Kalpi's response:**
- Monitor actual portfolio composition metrics (large cap %, mid cap %, small cap %) per fund over rolling 6-month windows
- Flag in portfolio diagnostics: "Fund X is classified as Flexi Cap but has held >80% large-cap allocation for the last 6 months"
- Quarterly strategy re-runs naturally surface this — if the user has a "large cap %" filter or ranking factor, a drifted fund will score differently on the latest data
- In a future state: automated drift alerts triggered by composition thresholds, not just periodic re-runs

---

### Survivorship Bias
**The problem:** Any analysis of historical MF performance — including backtests — only evaluates funds that exist today. Funds that were wound up or merged, typically because of poor performance or mismanagement, are invisible. This systematically inflates the apparent historical returns of any strategy.

**Why it's insidious:** A backtest showing "this strategy returned 15% CAGR over 10 years" is likely overstated because it never encountered any of the funds that were shut down during that period. The strategy looks better than it would have performed in practice.

**Kalpi's response:**
- Acknowledge this limitation explicitly wherever historical performance is shown: "Backtest results exclude funds that were wound up or merged during the period; actual returns may be lower"
- Tag funds in the data layer that have absorbed a merger — the track record pre-merger belongs to a different entity
- For live strategies, survivorship bias is less relevant — the strategy runs on currently existing funds; but any "strategy comparison" over historical periods must carry this caveat prominently

---

### Fund Mergers
**The problem:** SEBI's 2018 mutual fund rationalisation directive forced AMCs to merge overlapping funds within the same category. As a result, many funds today carry a track record that is stitched together from two or more different entities — with different mandates, managers, AUM profiles, and investment styles. A "5Y return" on such a fund is not a continuous, comparable number.

**Real example:** Several Corporate Bond funds today absorbed Short Duration funds in 2018. Their 5Y return includes a period when the fund had a shorter duration mandate and a different manager — the comparison to a peer with a clean 5Y history is misleading.

**Kalpi's response:**
- Tag funds that underwent a merger in the last 5 years with a visible label: "Post-merger track record"
- For these funds, downweight or exclude long-term trailing metrics (5Y CAGR, inception-to-date return) from ranking; rely on shorter windows where the current mandate is intact
- Surface this in the fund detail view so users understand the data context before assigning high ranking weight to long-term metrics

---

### New Funds with Limited History
**The problem:** NFOs and funds that were recently reclassified under SEBI's categories have fewer than 3 years of data. Applying the standard percentile ranking formula to these funds produces unreliable or misleading scores — they rank either artificially high (on limited strong recent data) or low (due to gaps in multi-year metrics).

**Situations where this appears:**
- New fund launches (NFOs) from established AMCs trying to plug category gaps
- Funds reclassified post-2018 that effectively have a new mandate but partial historical data
- Passively managed ETFs and index funds launched in the last 2 years

**Kalpi's response:**
- The default Fund Age ≥ 3 years filter eliminates most of these from the eligible pool
- If a user removes the age filter, warn: "X funds in your pool have less than 3 years of data; their 3Y/5Y rankings are unreliable"
- Do not impute scores for missing long-term metrics — exclude the fund from those specific metric calculations and score it only on available data with a proportional weight adjustment
- Future: offer a dedicated "Emerging Funds" view where new funds are evaluated only on metrics they have sufficient data for (1Y rolling return, expense ratio, fund house track record)

---

### Missing Data
**The problem:** Not every metric is available for every fund, and the availability varies by fund type, AMC disclosure quality, and data provider. Debt-specific metrics (YTM, Modified Duration, Credit Quality breakdown) don't apply to equity funds. Some smaller AMCs update portfolio composition quarterly rather than monthly. Applying a ranking formula with missing inputs silently produces wrong scores.

**Why naive handling fails:**
- Imputing zero for a missing AAA% would score the fund as having zero AAA exposure — unfairly penalising it
- Imputing the pool mean makes the fund appear average when it's actually unknown — different problem
- Excluding the fund entirely from the pool wastes a potentially valid candidate

**Kalpi's response:**
- For any fund missing a specific ranked metric: exclude it from that metric's percentile computation only; redistribute that metric's weight proportionally to remaining metrics in the composite score
- Surface data gaps transparently: "3 funds were scored on 4 of 5 metrics — Sharpe 3Y data was unavailable for these funds"
- If >30% of the ranked pool is missing a metric, warn the user: "This metric has low coverage in your selected universe — consider removing it from ranking or choosing a better-covered alternative"
- Track data freshness per metric; flag when a fund's holdings data is more than 2 months stale

---

### Exit Loads
**The problem:** Most equity mutual funds charge a 1% exit load if redeemed within 12 months of purchase. Some debt funds charge 0.5% within 3–6 months. Rebalancing without accounting for these loads can silently erode returns — a drift correction that frees up ₹80 of value but triggers ₹100 in exit load is a net loss, not a gain.

**Fund-type reference:**

| Fund Type | Typical Exit Load | Window |
|---|---|---|
| Equity (Large/Flexi/Multi Cap) | 1% | Within 12 months |
| Aggressive Hybrid | 1% | Within 12 months |
| Balanced Advantage / DAA | 1% | Within 12 months |
| Corporate Bond | 0–0.5% | Within 3–6 months |
| Short Duration | 0% | Typically nil |
| Dynamic Bond | 0–1% | Varies by AMC |
| Liquid / Overnight | 0% | No load |

**Kalpi's response:**
- Surface exit load status per fund in the portfolio view — show which funds are within their load window and when they exit it
- Before any rebalancing order is confirmed, show the estimated exit load cost per fund being sold and the net benefit after load
- If exit load cost exceeds the value of drift correction for a fund, recommend skipping that specific trade: "Selling Fund X now incurs ₹420 in exit load; drift is within tolerance — skip for this cycle"
- Recommend quarterly or wider rebalancing cadence for equity-heavy strategies to avoid load windows
- Future: smart rebalancing that automatically excludes funds within their load window from sell candidates unless drift is severe

---

### Tax Implications
**The problem:** Every MF redemption in India has a tax consequence that depends on fund type, holding period, and the investor's income slab. Getting this wrong — especially the STCG vs LTCG threshold for equity — meaningfully reduces post-tax returns. The 2023 debt fund tax change and 2024 equity LTCG rate change have made this landscape more complex than most investors realise.

**Current tax regime (post-Budget 2024):**

| Fund Type | Holding Period | Tax Treatment |
|---|---|---|
| Equity (>65% equity) | < 12 months | 20% STCG (flat) |
| Equity (>65% equity) | ≥ 12 months | 12.5% LTCG on gains above ₹1.25L per FY |
| Debt (< 35% equity) | Any | Slab rate — up to 30% for highest bracket |
| Hybrid (35–65% equity) | < 36 months | Slab rate |
| Hybrid (35–65% equity) | ≥ 36 months | 20% (verify per latest budget) |

**Key nuances:**
- **Debt fund tax shift (2023):** Indexation benefit was removed. Debt MFs are now taxed at slab rate regardless of holding period — making them no more tax-efficient than fixed deposits for investors in the 30% bracket. Arbitrage funds (taxed as equity, FD-like returns) are often a better alternative
- **LTCG exemption:** First ₹1.25L of equity LTCG per financial year is exempt — relevant for portfolio sizing and staggered redemption planning
- **No wash-sale rule:** Unlike the US, India does not prohibit selling a fund at a loss and immediately repurchasing it. Tax-loss harvesting is clean — a loss can offset capital gains elsewhere or be carried forward for 8 years

**Kalpi's response:**
- Before any rebalancing, show estimated tax impact per fund: STCG or LTCG, estimated liability at the user's declared tax slab
- Flag funds approaching the 12-month mark: "Hold 23 more days to qualify for LTCG rate — saves an estimated ₹1,200"
- For debt fund holdings, surface the tax-equivalence note for high-bracket users: "At 30% slab, this Corporate Bond fund is taxed identically to an FD — consider an arbitrage fund for equivalent risk with equity taxation"
- Future: tax-optimised rebalancing mode that sequences sells to minimise current financial year tax outflow — selling LTCG-eligible lots first, harvesting available losses before year-end

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
