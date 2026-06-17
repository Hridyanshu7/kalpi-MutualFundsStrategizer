# Kalpi — MF Strategy Builder: Research & Product Thinking

**Author:** Hridyanshu Singhal  
**Role:** PM Candidate  
**Date:** June 2026

---

## Table of Contents

1. [Competitor Analysis](#1-competitor-analysis)
2. [Mutual Fund Framework](#2-mutual-fund-framework)
3. [Key Challenges & Corner Cases](#3-key-challenges--corner-cases)
4. [Execution Design](#4-execution-design)

---

## 1. Competitor Analysis

The landscape splits into three broad archetypes: **transaction platforms** (Groww, Coin, ET Money), **research tools** (Value Research, Morningstar), and **robo-advisors** (Wealthfront, Betterment, M1 Finance). No Indian platform meaningfully occupies the fourth archetype — **systematic strategy builder** — which is exactly where Kalpi sits.

---

### 1.1 ET Money

**What works well**
- Best-in-class mobile UX in the Indian market; onboarding under 3 minutes
- Tax P&L statement is genuinely useful at tax season — consolidated across brokers and MF platforms
- Smart Deposit (liquid fund parking of idle savings) is a sticky, differentiated feature
- Insurance integration gives it a "financial OS" feel for retail users

**What is missing**
- Fund discovery is entirely recommendation-driven; users cannot build custom rules
- Analytics stop at 1Y/3Y/5Y absolute return; no risk-adjusted metrics visible to users
- No portfolio overlap detection across funds the user holds
- The "expert-recommended" tag is opaque — no methodology exposed

**What Kalpi can do differently**
- Replace opaque recommendations with user-defined, auditable rules
- Show risk-adjusted metrics (Sharpe, Sortino, Alpha) as first-class selection criteria, not footnotes
- Let users save strategies and re-run them — ET Money offers no such concept

---

### 1.2 Groww

**What works well**
- Largest MF platform by user count in India; trust from scale
- Investing friction is near-zero: 2 taps from fund page to investment confirmed
- SIP management UX is clean; pause/resume is intuitive
- Cross-asset (MF + stocks + US stocks + FD) on one platform reduces switching costs

**What is missing**
- MF discovery is browse-by-category, sorted by 1Y return — a notoriously misleading metric
- Zero fund analytics: no volatility, no drawdown, no Sharpe ratio visible anywhere
- No ability to compare funds on custom metrics or build rule-based filters
- No portfolio construction tools — the user is entirely on their own

**What Kalpi can do differently**
- Target the analytically-inclined investor segment that Groww explicitly ignores
- Offer systematic ranking to counteract the "1Y return chasing" behaviour Groww incentivises
- Provide a repeatable process: same strategy, re-run next year, with drift detection

---

### 1.3 INDmoney

**What works well**
- Aggregation is the killer feature: EPF, NPS, US stocks, Indian equity, FDs — single net worth view
- The "US investing" angle (fractional S&P 500 stocks) is unique among Indian platforms
- Wealth tracking over time with actual P&L per asset class is useful for high-net-worth users

**What is missing**
- MF selection remains recommendation-based, typically by AMC partnerships
- No transparency into fund selection methodology
- Analytics depth is shallow compared to a pure MF product
- Portfolio construction is goal-bucket style, not rule-based

**What Kalpi can do differently**
- Be the expert layer for MF within a user's aggregated view — Kalpi generates the basket, execution happens anywhere
- Transparency as a feature: every fund in the basket has a traceable score and rank

---

### 1.4 Kuvera

**What works well**
- Longest-running free direct-plan platform; strong credibility with DIY investors
- Portfolio overlap tool is one of the few genuinely analytical features in Indian MF apps
- Family account management and NPS integration
- Goal tracking with SIP simulation is useful for long-horizon planners

**What is missing**
- Fund discovery is still SEBI-category browse + star-rating sort; no custom quantitative screening
- The overlap tool is reactive (shows existing overlap) rather than proactive (prevents it during construction)
- No strategy builder, no composite scoring, no rule-based portfolio construction
- Kuvera's "recommended funds" list is static and non-customisable

**What Kalpi can do differently**
- Make overlap detection proactive: flag at construction time, not after
- Let users define what "quality" means to them through ranked, weighted metrics — not accept Kuvera's definition

---

### 1.5 Coin (Zerodha)

**What works well**
- Best suited for users already on Zerodha for equity — single broker, consolidated holdings
- Clean, clutter-free interface consistent with Zerodha's product philosophy
- Direct plans, no commission, backed by an institution users already trust for stocks
- Holdings visible alongside equity portfolio — unified view matters to traders-turned-investors

**What is missing**
- MF is clearly a secondary product for Zerodha; feature development lags equity significantly
- No fund analytics whatsoever — not even basic 5Y CAGR comparisons
- No strategy building, no systematic ranking, no basket construction
- Fund comparison requires leaving the platform

**What Kalpi can do differently**
- Make MF the primary, analytical first-class product — not an afterthought
- For equity-literate users (Zerodha's core audience), analytical depth is a feature, not a complexity barrier

---

### 1.6 Value Research

**What works well**
- The gold standard for Indian MF research since 1996; trusted brand
- Comprehensive metric coverage: trailing returns, rolling returns, risk measures, portfolio holdings, manager details
- Fund comparison tool allows side-by-side metric comparison of up to 4 funds
- Star ratings are widely cited and understood as a quality proxy in India

**What is missing**
- Not a transaction platform; research and execution are disconnected (user finds fund on VR, invests on Groww)
- Rating methodology (5-star) is fixed — users cannot customise weights
- No concept of a "strategy" or "basket" — analysis is fund-by-fund
- Rolling return charts are illustrative, not screen-able (can't filter "funds with >80% positive rolling 1Y")
- UI is dated; information density is high but comprehension is low

**What Kalpi can do differently**
- Let users build their own "Value Research rating" — their weightings, their metrics, their rules
- Integrate research directly into portfolio construction: rank → weight → invest in one flow
- Make rolling return analysis actionable: filter and rank by it, don't just display it

---

### 1.7 Morningstar

**What works well**
- Global benchmark for fund analysis; Morningstar Rating and Analyst Rating are industry standards
- Style box (equity: value/blend/growth × large/mid/small) is an elegant, widely-adopted classification
- Factor exposure analysis, fee benchmarking, manager tenure tracking are sophisticated
- Category peer comparison is rigorous and methodology-documented

**What is missing**
- India coverage is meaningful but incomplete; many Indian category nuances (Balanced Advantage dynamic allocation, Multi Asset with gold) are not deeply modeled
- Premium data is expensive; the research is for advisors and institutions, not retail
- No execution capability in India
- The product is research-report oriented, not portfolio-construction oriented

**What Kalpi can do differently**
- Democratise Morningstar-grade quantitative analysis for Indian retail investors at zero cost
- Apply style-box thinking to Indian SEBI categories (the universe design in this prototype is a step in that direction)
- Make it actionable: analysis flows directly into a portfolio, not just a PDF

---

### 1.8 Wealthfront

**What works well**
- Best-in-class US robo-advisor; automated tax-loss harvesting is a genuine moat
- Risk tolerance questionnaire → automated asset allocation → automatic rebalancing: fully managed
- Direct indexing (buy individual stocks instead of ETF) for high-net-worth users
- Cash account with competitive yield is a sticky "whole-wallet" feature

**What is missing**
- Not India-focused; ETF-centric (not applicable to India's active MF universe)
- Black box: users cannot inspect or override the fund selection logic
- No concept of user-defined strategy — the model portfolio is fixed by Wealthfront's view

**What Kalpi can do differently**
- Apply Wealthfront's systematic, rules-driven philosophy to India's active MF market
- Give users the same outcome (systematic, rebalanced portfolio) but with full transparency and control
- India's active fund landscape justifies a human-legible scoring approach over passive allocation

---

### 1.9 Betterment

**What works well**
- Goal-bucket UX is intuitive: "retirement", "house down payment", "emergency fund" — each with its own allocation
- Tax-coordinated portfolio (asset location across taxable and tax-advantaged accounts) is sophisticated
- Socially responsible investing option without extra friction
- Excellent behavioural nudges: "you're on track" or "increase by ₹X" messaging

**What is missing**
- Not India-focused
- No user control over fund selection — Betterment chooses; user adjusts only risk tolerance
- Opaque methodology: no transparency into why a particular ETF is chosen over alternatives
- Single portfolio model per goal, no ability to build and compare strategies

**What Kalpi can do differently**
- Combine Betterment's goal-clarity UX with full strategy transparency
- Allow multiple strategies per goal — "compare my aggressive vs moderate strategy for retirement"
- In India, the tax implications of fund choices are more complex; surface this explicitly

---

### 1.10 M1 Finance

**What works well**
- "Pie" portfolio concept is the closest conceptual analogue to Kalpi in the market
- Users build portfolios with target weight slices, then invest a single dollar amount that auto-distributes
- Auto-invest fills underweight slices first — elegant dynamic rebalancing
- Users can share "Expert Pies" publicly — community strategy library is a compelling network effect

**What is missing**
- US-only; focused on stocks and ETFs, not active mutual funds
- Pies are allocation tools, not selection tools — M1 does not help users pick which funds to include
- No systematic screening, ranking, or composite scoring to determine what goes into a pie
- No backtesting or strategy diagnostics

**What Kalpi can do differently**
- Combine M1's portfolio construction UX (target weights, auto-distribution) with a systematic upstream selection layer (filter → rank → score)
- Apply to India's active MF universe where fund selection genuinely matters (alpha dispersion is wide)
- Add a strategy library / public sharing layer as a future network effect (similar to M1 Expert Pies)

---

### Competitive Summary

| Platform | Research Depth | Transaction | Strategy Builder | India-Focused |
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

**The white space:** No Indian platform combines analytical depth + transparent strategy building + execution. Kalpi owns this position.

---

## 2. Mutual Fund Framework

### 2.1 Filtering: Building the Eligible Universe

Filtering is not about finding good funds — it is about eliminating funds that should not be considered at all. Filters define the floor; ranking finds the ceiling.

**Design principle:** AND-only logic. Every filter is a hard gate. A fund that fails any single condition is excluded regardless of how well it scores on others.

#### Minimum Viability Filters (always applied)
These are not optional. No strategy should proceed without them.

| Filter | Threshold | Rationale |
|---|---|---|
| AUM | ≥ ₹500 Cr | Below this, redemption risk increases; large redemptions move the NAV |
| Fund Age | ≥ 3 years | Minimum for meaningful 3Y metrics; NFO track records are unreliable |
| Direct Plan | Must exist | Regular plans penalise returns by 0.5–1.5% annually for no added value |
| SEBI Compliance | Must match declared category | Post-rationalisation (2018), most funds comply; verify sub-category |

#### Qualitative Category Filters
- **Expense Ratio cap:** Strategy-dependent. Equity funds >1.2% are expensive; debt funds >0.5% are expensive. Exposing this as a user-defined filter (with a default suggested maximum) is the right design.
- **Risk label alignment:** SEBI's riskometer (Low / Moderate / High / Very High) should be filterable; users with low risk tolerance should not accidentally hold Very High risk funds.
- **Manager tenure floor:** Funds where the current manager has <1 year tenure have an unverified track record under the new regime.

#### Domain-Specific Filters
Different metrics are relevant across sections:

- **Equity:** Beta, Top-10 concentration, Large/Mid/Small Cap %, Portfolio P/E
- **Debt:** Modified Duration, Average Maturity, Credit Quality (AAA %, Sovereign %), YTM
- **Hybrid:** Equity allocation %, Debt allocation % (to verify the fund is actually where the user thinks it is)

#### What makes a good filter UX
1. **Live count feedback** — Users need to see the impact of each filter immediately (we implemented this in the prototype)
2. **Default suggestions** — Pre-populate sensible defaults; don't make users start from scratch
3. **Warn, don't block** — If fewer than 5 funds pass, surface a warning and suggest which filter to loosen. Do not prevent the user from proceeding.
4. **Filter ordering matters** — UI should suggest applying broad filters (AUM, age) before narrow ones (expense ratio range)

---

### 2.2 Ranking: Ordering Funds Within the Eligible Universe

Once filtering establishes which funds are eligible, ranking establishes which ones are better. Ranking answers: "given these funds all pass the quality bar, who ranks first?"

#### The Percentile Rank Approach

Raw metric values are not comparable across metrics with different scales and directions. The solution: convert every metric to a 0–100 percentile rank within the filtered fund pool.

```
percentile_score(fund, metric) = 
  (rank of fund by metric / total funds) × 100
  
  For higher_better metrics: rank 1 = best (highest value)
  For lower_better metrics: rank 1 = best (lowest value)
```

This approach has several advantages:
- **Scale-invariant:** A Sharpe ratio of 1.2 and a 3Y CAGR of 14% are now both on a 0–100 scale
- **Pool-relative:** A fund with 12% 3Y CAGR scores differently depending on what else is in the pool
- **Direction-aware:** Lower expense ratio automatically scores higher; the user doesn't need to invert it

#### Composite Score

```
composite_score = Σ (percentile_score(metric_i) × weight_i) / Σ weight_i
```

Where weights are user-defined per ranking factor (e.g., 3Y CAGR: 40%, Sharpe 3Y: 30%, Expense Ratio: 30%).

#### Metric Selection Guidance

Not all metrics should be given equal weight by default. Some principles:

| Priority | Metric Category | Rationale |
|---|---|---|
| High | Risk-adjusted returns (Sharpe, Sortino, Alpha) | Captures return efficiency, not just magnitude |
| High | Rolling returns | More reliable than trailing (avoids start-date sensitivity) |
| Medium | Trailing returns (3Y, 5Y) | Widely understood; include as a sanity check |
| Medium | Expense Ratio | Directly reduces investor returns; always include |
| Low | Batting Average, Consistency metrics | Useful signal but correlated with Sharpe |
| Caution | 1Y Return | Highly start-date sensitive; use only if a user specifically wants recent momentum |
| Caution | AUM | As a ranking factor (vs a filter), AUM can penalise genuinely good small funds |

#### Multi-Period Return Philosophy
A fund that consistently delivers 11% annually beats one that delivered 2% last year and 22% this year, even if their 2Y average is identical. Rolling return metrics (% of rolling 1Y periods positive, average rolling 3Y return) capture consistency better than trailing returns.

---

### 2.3 Scoring: Turning Rank into a Number

The composite score (0–100) serves three purposes:
1. **Ranking:** Higher score → higher rank
2. **Score-Based Weighting:** Score determines capital allocation
3. **Threshold decisions:** "Only include funds scoring above 50"

#### Score-Based Weighting

When using Score-Based weighting, the composite score drives capital allocation. Two distribution options:

**Softmax (compressed):**
```
weight_i = exp(score_i / T) / Σ exp(score_j / T)
```
Temperature `T` compresses the distribution — the top fund doesn't dominate. Default T=20 works well across most strategy types.

**Linear (proportional):**
```
weight_i = score_i / Σ score_j
```
More aggressive differentiation. A fund scoring 80 gets 2× the weight of one scoring 40. Use when the user wants the scoring to directly drive allocation.

#### When scoring breaks down

- **Thin pools:** With <5 funds, percentile ranks become coarse (20% increments). The score loses discriminatory power.
- **Missing metrics:** If a fund lacks data for a ranked metric, exclude it from the percentile computation for that metric and weight the remaining metrics proportionally. Do not impute 0 (that would penalise the fund unfairly).
- **Correlated metrics:** If the user adds both "3Y CAGR" and "5Y CAGR" at equal weight, they're effectively double-counting long-run returns. Future UX improvement: surface correlation warnings.

---

### 2.4 Portfolio Construction: Assembling the Final Basket

#### Weighting Methods

| Method | Mechanism | Best suited for |
|---|---|---|
| Equal Weight | 1/N per fund | Users who want diversification without bias; baseline |
| Score-Based | Proportional to composite score (softmax or linear) | Conviction-weighted; high-quality funds get more capital |
| Risk-Based | Inverse volatility (1/σ); lower-risk funds get more | Risk-conscious users; debt-heavy strategies |
| Category-Based | User sets section % first, then distributes equally within | Multi-section strategies where user wants explicit Equity/Debt/Hybrid split |

#### Capital Allocation

After weights are determined:
```
allocation_i (₹) = target_weight_i × total_capital
units_i = allocation_i / current_NAV_i
```

Units are fractional to 3 decimal places (standard for MF). Residual from rounding is left as uninvested cash and surfaced to the user.

#### Minimum Investment Constraints

Most direct plans have a minimum investment of ₹100–₹500. If a fund's computed allocation falls below ₹500, the system should:
1. Warn the user (not block)
2. Suggest increasing capital or reducing Top N

#### Concentration Limits

User-configurable guardrails (not system-enforced):
- **Max weight per fund:** Caps the largest allocation (e.g., 30%) — prevents a single fund from dominating
- **Min weight per fund:** Prevents trivial allocations (e.g., 2%) that add complexity without meaningful exposure

If a weight allocation violates the max, the excess is redistributed proportionally to uncapped funds.

#### Top N Selection

Selecting fewer funds than the filtered pool creates a more concentrated, higher-conviction basket. The Top N selection happens after scoring and weighting — the user sees the computed weights before deciding how many to carry forward.

Trade-off: Fewer funds → higher alpha potential, higher concentration risk. More funds → closer to an index, lower tracking error vs benchmark.

---

## 3. Key Challenges & Corner Cases

### 3.1 Fund Overlap

**The problem:** Two funds in the basket hold many of the same stocks. A user thinks they own 8 different funds; they actually own 200 variations of the same 50 stocks.

**Detection:**
```
jaccard_similarity(fund_A, fund_B) = 
  |holdings_A ∩ holdings_B| / |holdings_A ∪ holdings_B|
```
Similarity >60% between any two funds indicates meaningful overlap.

**Kalpi's response:**
- Flag at construction time: "Fund A and Fund B have 68% overlap in holdings"
- Surface the top overlapping stocks (e.g., "HDFC Bank appears in 6 of 8 funds at >5% weight")
- Do not block — a user may knowingly choose overlapping funds — but inform clearly

**Data requirement:** Holdings data (top 25 stocks per fund, with weights) updated monthly. Available from AMC disclosures and AMFI.

---

### 3.2 AMC Concentration

**The problem:** A strategy selects 4 of 8 funds from the same AMC (e.g., HDFC AMC or SBI Funds). This creates correlated operational risk — regulatory action, fund manager exodus, or AMC-level controversy affects a disproportionate share of the portfolio.

**Detection:** Count funds per AMC; flag if any single AMC contributes >25% of basket allocation.

**Kalpi's response:**
- Warning card: "3 of 8 funds are from HDFC AMC (42% of portfolio). Consider diversifying across fund houses."
- Allow user to add AMC-diversity as a soft constraint: "Maximum 2 funds per AMC"
- Do not auto-exclude: a user with a strong conviction on one AMC's quality should be able to override

---

### 3.3 Category Concentration

**The problem:** Even when a user selects multiple universes (e.g., Large Cap + Flexi Cap + Multi Cap), the ranking algorithm may score all top-N funds from one sub-category because that category happened to perform best in the metric window used.

**Example:** In 2021, all equity categories ran up but Small Cap funds showed the highest 3Y CAGR. A return-heavy scoring model would fill a 10-fund basket with Small Cap funds even if the user also selected Large Cap.

**Kalpi's response:**
- Warn when Top N selection over-represents one sub-category (e.g., >50% from one sub-universe)
- Future feature: universe-proportionate allocation — guarantee at least 1 fund per selected universe in the final basket

---

### 3.4 Style Drift

**The problem:** A Flexi Cap fund, over time, starts behaving like a Large Cap fund — its actual portfolio composition shifts toward large-cap stocks without a mandate change. The user selected the fund expecting Flexi Cap exposure; they're getting Large Cap exposure.

**Detection:** Monitor `largeCap%`, `midCap%`, `smallCap%` over time. A Flexi Cap fund with consistently >80% large cap is effectively a Large Cap fund.

**Kalpi's response:**
- Flag in portfolio diagnostics: "Fund X (Flexi Cap) has 82% large-cap allocation over the past 6 months — effectively behaving as a Large Cap fund"
- Re-running the strategy on latest data naturally catches this if `largeCap%` is a filter
- A quarterly re-run of the strategy is partly motivated by detecting style drift

---

### 3.5 Survivorship Bias

**The problem:** Any historical analysis of MF performance only sees funds that survived. Funds that were wound up or merged — often because of poor performance — are invisible. This makes historical fund selection look better than it actually was.

**Impact:** A backtest that shows "this strategy returned 15% annually" is almost certainly overstated because it only considered funds that survived to be evaluated.

**Kalpi's response:**
- Acknowledge explicitly in the backtest UI (when implemented): "This analysis does not include funds that were merged or wound up during the period. Historical performance is likely overstated."
- Tag funds in the dataset with merger history (whether they absorbed another fund)
- For live strategies, this is less of an issue — the strategy re-runs on surviving funds

---

### 3.6 Fund Mergers

**The problem:** SEBI's 2018 mutual fund rationalisation directive forced AMCs to merge funds within the same category. Many funds today carry track records that are actually stitched from two or more different funds. The "3Y return" may include a period when the fund had a different mandate, manager, or name.

**Specific risk:** A fund shows a 5Y track record, but the current mandate has only existed for 3 years post-merger. The 5Y number is not apples-to-apples.

**Kalpi's response:**
- Flag funds that underwent a merger in the last 5 years with a tag: "Post-merger track record"
- For these funds, weight more recent metrics (1Y, 3Y) rather than inception-to-date returns
- Treat pre-merger data as less reliable for ranking purposes

---

### 3.7 New Funds with Limited History

**The problem:** Funds with <3 years of history cannot produce meaningful 3Y or 5Y metrics. Applying the same ranking formula produces either errors (division by zero) or random scores (based on insufficient data).

**Situations where this matters:**
- NFOs: Brand new funds, often from established AMCs, with no track record
- Post-merger newly-classified funds: A fund that changed category post-SEBI rationalisation may only have 2 years of data under the new mandate
- Passively managed ETFs launched recently (not in scope for this prototype)

**Kalpi's response:**
- Default minimum fund age filter (3 years) eliminates most of these
- If a user removes the age filter: surface a warning "X funds in your pool have <3 years of data; 3Y/5Y metrics for these funds are unreliable"
- Exclude funds with missing required metric data from percentile ranking (not from pool)
- Future: offer separate ranking for "new fund watch list" using only available short-term metrics

---

### 3.8 Missing Data

**The problem:** Not every metric is available for every fund. Debt-specific metrics (YTM, Modified Duration, Credit Quality) don't apply to equity funds. Hybrid-specific metrics (equity allocation %) may not be updated monthly. Some smaller AMCs have poor data disclosure practices.

**Null handling in ranking:**
```
For metric M with missing value for fund F:
  Exclude F from percentile computation for M
  Adjust composite score: weight of M is redistributed to other metrics
  Result: F gets a valid composite score based on available metrics only
```

**Do not impute with 0 or mean:** Imputing 0 for a missing `aaaPercent` (AAA bond allocation %) would score the fund as having 0% AAA — unfairly penalising it. Mean imputation makes the fund average; it should simply be scored on fewer metrics.

**Kalpi's response:**
- Surface data quality in the UI: "3 funds are missing Sharpe 3Y data and were scored on remaining metrics"
- If >30% of the pool is missing a ranked metric, warn the user that the metric's discriminatory power is low
- In mock data (current prototype): all funds have complete data; real API integration must handle nulls explicitly

---

### 3.9 Exit Loads

**The problem:** Most equity mutual funds charge an exit load of 1% if redeemed within 12 months of purchase. Some debt funds charge 0.5% within 3–6 months. Frequent rebalancing without accounting for exit loads can silently erode returns.

**Impact calculation:**
```
Exit load cost = allocation × load_rate

Example: ₹10,000 in a fund rebalanced within 6 months
Exit load = ₹10,000 × 1% = ₹100
If rebalancing freed up ₹80 from drift correction, the user lost money rebalancing
```

**Variation across fund types:**
| Fund Type | Typical Exit Load | Window |
|---|---|---|
| Equity (Large/Flexi/Multi Cap) | 1% | Within 12 months |
| Aggressive Hybrid | 1% | Within 12 months |
| Balanced Advantage | 1% | Within 12 months |
| Corporate Bond | 0–0.5% | Within 3–6 months |
| Short Duration | 0% | Most have no load |
| Dynamic Bond | 0–1% | Varies |
| Liquid / Ultra Short | 0% | Typically no load |

**Kalpi's response:**
- Surface exit load data per fund in the portfolio view
- Before rebalancing, show estimated exit load cost for each fund to be sold
- Rebalancing cadence recommendation: quarterly or wider for equity funds, monthly acceptable only for no-load debt funds
- Future: "smart rebalancing" that skips selling funds with active exit load windows if the drift is below a tolerance

---

### 3.10 Tax Implications

**The problem:** Buying and selling mutual fund units has tax consequences in India. These change based on how long the fund is held (short-term vs long-term), the type of fund (equity vs debt vs hybrid), and the investor's tax slab.

#### Current Tax Regime (post-Union Budget 2024)

| Fund Type | Holding Period | Tax Rate |
|---|---|---|
| Equity (>65% equity) | <12 months (STCG) | 20% flat |
| Equity (>65% equity) | ≥12 months (LTCG) | 12.5% on gains >₹1.25L per FY |
| Debt (<35% equity) | Any | Slab rate (30% max for highest bracket) |
| Hybrid (35–65% equity) | <36 months | Slab rate |
| Hybrid (35–65% equity) | ≥36 months | 20% with indexation (check latest budget) |

Key changes to note:
- **Indexation benefit removed for debt funds** (Finance Act 2023): debt LTCG is now taxed at slab rate, making debt MFs equivalent to FDs from a tax perspective for high-bracket investors
- **LTCG threshold ₹1.25L:** First ₹1.25L of equity LTCG in a financial year is exempt; relevant for portfolio sizing decisions
- **No wash-sale rule in India:** Unlike the US, India doesn't prohibit selling at a loss and repurchasing. This enables tax-loss harvesting without a 30-day wait.

#### Tax-Optimal Rebalancing

1. **Avoid STCG triggers:** Don't rebalance equity holdings within 12 months — 20% STCG vs 12.5% LTCG is a meaningful difference
2. **LTCG harvesting:** Near the ₹1.25L threshold per FY, book gains on appreciated funds to reset the cost basis, immediately repurchase — effectively harvesting the tax-free limit
3. **Loss harvesting:** Sell underperforming funds at a loss to offset capital gains elsewhere in the portfolio (or carry forward 8 years)
4. **Debt tax-efficiency note:** For investors in the 30% tax slab, debt MFs now offer no tax advantage over FDs. An arbitrage fund (equity-taxed, but ~FD-like returns) may be preferable for the ≥12 month horizon.

**Kalpi's response:**
- Surface estimated tax impact before rebalancing: show STCG vs LTCG split per fund being sold
- Flag funds approaching 12-month anniversary: "Hold for X more days to qualify for LTCG"
- For debt fund users in high tax brackets: contextual note about tax equivalence with FDs
- Future: tax-optimised rebalancing mode that sequences sells to minimise current-year tax outflow

---

## 4. Execution Design

### 4.1 Initial Allocation

#### Flow
```
Strategy finalised → Capital confirmed → Order generation → Settlement → Holdings confirmed
```

#### Order Generation
For each fund in the basket:
```
order_amount_i = floor(target_weight_i × capital / NAV_i) × NAV_i
```
Amounts are floored to the nearest NAV unit (3 decimal precision). Residual cash = capital - Σ order_amounts.

**NAV cut-off timing:**
| Fund Type | Cut-off for Same-Day NAV |
|---|---|
| Equity, Hybrid (equity-oriented) | 3:00 PM |
| Debt (amount <₹2 Cr) | 3:00 PM (effective from 2021 SEBI circular) |
| Debt (amount ≥₹2 Cr) | 1:00 PM |
| Liquid / Overnight | 1:30 PM (for same-day NAV) |

Orders placed after cut-off receive the next business day's NAV. For large lumpsum investments (>₹2 Cr in debt), timing matters for same-day vs next-day NAV.

#### Settlement
- **Equity MFs:** T+2 for allotment; T+1 for redemption (effective since SEBI's 2023 circular for equity)
- **Debt MFs:** T+1 for allotment and redemption
- **Liquid/Overnight:** T+0 for redemption (within cut-off), T+1 for investment

#### Practical Constraints — Initial Allocation
- **Minimum investment:** Most direct plans: ₹100–₹500. If any fund's allocation < minimum, warn user and suggest options (remove that fund, or increase capital).
- **KYC:** CKYC must be complete and PAN verified before any investment can be placed.
- **Folio creation:** First investment in any fund from an AMC creates a folio. Multiple investments from the same AMC consolidate into one folio (folio number is the identifier for future transactions).
- **Bank mandate:** NACH mandate must be registered for autopay-based instruments. For lumpsum, net banking / UPI suffice up to ₹2L per transaction on most platforms. Above this, RTGS.

---

### 4.2 Rebalancing

Rebalancing restores the portfolio to its target weights after market movements cause drift.

#### Trigger Types

**Time-Based:**
- Execute on a fixed calendar date (e.g., first business day of each quarter)
- Predictable, easy to communicate to users
- Tax-optimal if the interval is ≥12 months for equity

**Drift-Based:**
- Monitor actual weight vs target weight for each fund, daily
- Trigger when any fund's weight deviates by more than the threshold (e.g., 10%)
- More responsive but potentially more frequent (especially in volatile markets)
- Implementation: requires daily NAV updates and weight recalculation

**Manual:**
- No automatic trigger
- User initiates from Portfolio screen when they choose
- Suitable for tax-conscious users who want full control over timing

#### Rebalancing Execution Sequence

Order matters to avoid over-invested or under-invested states:

```
1. Calculate current weights (NAV × units / total portfolio value)
2. Identify overweight funds (sell candidates) and underweight funds (buy candidates)
3. Generate sell orders for overweight funds — sell only the excess above target
4. Wait for sell settlement (T+1 for equity, T+1 for debt)
5. Use proceeds + any additional capital to generate buy orders for underweight funds
6. Confirm all orders; update holdings
```

**Why sell first:** Buying before selling would require bridging capital the user may not have. It also creates temporary overexposure.

#### Rebalancing Optimisations

1. **Exit load check (pre-order):** Query each fund's exit load applicability based on purchase date. If exit load applies and the drift being corrected is small, skip and note.

2. **Tax-lot awareness:** If the user holds multiple lots at different cost bases (multiple SIP entries), sell the highest-cost lots first (HIFO — Highest In, First Out) to minimise taxable gains. Note: Indian MF taxation defaults to FIFO (first-in first-out); HIFO requires conscious selection at the AMC or depository level.

3. **Threshold-based filtering:** Only rebalance if the cost (exit load + estimated tax) is less than the expected benefit from drift correction. A fund 2% overweight rarely justifies a rebalancing trade.

4. **Dividend vs Growth option:** Only Growth (formerly Growth option) should be used in Kalpi strategies. IDCW (Income Distribution cum Capital Withdrawal, formerly Dividend) distributions change NAV erratically and complicate weight calculations.

---

### 4.3 SIPs (Systematic Investment Plans)

*Not in scope for v1 (lumpsum only). Documented here for future reference.*

#### SIP Architecture for a Strategy-Based Product

In a traditional SIP, a fixed amount goes into a fixed fund on a fixed date. For a strategy-based product, SIPs are more complex:

**Strategy SIP:** A fixed monthly amount (e.g., ₹10,000) is deployed across the basket proportionally to current target weights.

```
SIP amount per fund_i = SIP_total × target_weight_i / 100
```

**Minimum SIP constraints:** Most funds have ₹100–₹500 minimum SIP. If a fund's share of the SIP amount falls below this, the SIP for that fund should be skipped (or the overall SIP amount should be increased to meet minimums for all funds).

**SIP modification:** Per SEBI regulations, increasing or decreasing an existing SIP mandate requires AMC notification. Changing the fund allocation within a strategy SIP (e.g., after re-running the strategy and getting a different basket) requires cancelling old mandates and creating new ones — a non-trivial operational task.

**SIP cessation:** 30-day notice period is standard at most AMCs. The mandate remains active until the AMC confirms cancellation.

**SIP pause:** Available at most AMCs for 1–3 months without full cessation. Useful for users facing short-term cash flow constraints.

---

### 4.4 Redemptions

#### Partial Redemption

When a user wants to withdraw a portion of their portfolio without exiting fully:

**Option A — Proportional:** Sell the same % from all funds, maintaining relative weights.
```
units_to_sell_i = (withdrawal_amount / portfolio_value) × units_held_i
```

**Option B — Overweight-first:** Sell from the most overweight funds first. This simultaneously rebalances and raises cash — tax-efficient if the overweight fund has a higher cost basis.

**Option C — User-specified:** Allow the user to select which fund(s) to redeem from. Maximum flexibility, requires user to understand the implications.

#### Full Redemption

- Exit all positions simultaneously
- Cancel any active SIPs before submitting redemption orders (SIP continuation on a fully-redeemed folio is a common error)
- Settlement: T+1 (equity), T+1 (debt) for cash back to bank account
- Note: Redemption of large amounts (>₹2 Cr) from debt funds may face daily redemption limits set by AMCs

#### Redemption Sequence for Tax Optimisation

If the user holds multiple lots (from multiple investment dates):
- **FIFO (Indian default):** Oldest units sold first — often advantageous if older lots qualify for LTCG rate
- **Highest-cost lot first (HIFO):** Minimises taxable gain — requires explicit selection. Not the default in India; user must specify this to the AMC.

---

### 4.5 Practical Constraints

#### Data Freshness
- NAV is published once daily after market close (by 9 PM, per SEBI mandate)
- Strategy scoring requires current NAV (for allocation calculation) and monthly metric updates (for ranking)
- Real-time NAV during market hours is not available for MFs (unlike stocks) — this is a fundamental characteristic of the product

#### Order Routing
- **BSE Star MF:** Most common order routing network; supports all major AMCs
- **NSE NMF-II:** Alternative routing; fewer AMCs
- **AMC Direct:** Some platforms (Kuvera, Coin) route directly to AMC APIs — lower latency, but requires separate integrations per AMC
- For Kalpi: BSE Star MF integration is the recommended starting point (broadest coverage, single API)

#### Corporate Actions
- **Dividend declarations (IDCW):** Reduce NAV by the dividend amount. Kalpi strategies use Growth option only — not affected.
- **Fund splits / bonus units:** Rare, but must be handled — unit count changes without cash flow
- **Scheme name changes:** Post-SEBI rationalisation, many funds were renamed. Historical data linkage must account for old and new scheme codes (ISIN is stable across renames).

#### Regulatory Constraints
- **PAN mandatory:** All MF investments require a PAN; Aadhaar-PAN linking must be complete
- **Maximum investment:** No cap on MF investment amount, but UPI and net banking have per-transaction limits. For large lumpsum, RTGS is the only option (minimum ₹2L, bank processing times apply).
- **Nomination:** SEBI mandates nomination or declaration to opt-out for all MF folios from 2022 onwards
- **Non-individual investors (HUF, corporate, trust):** Require additional KYC documents and may have different tax treatment. V1 scope: individual investors only.

#### Operational Edge Cases

| Scenario | Impact | Handling |
|---|---|---|
| Market holiday | No NAV; orders held overnight | Queue orders, execute next business day |
| Fund closure / wind-up | Existing units must be redeemed | Alert user immediately; provide guided exit |
| AMC system downtime | Orders may not reach AMC | Retry with exponential backoff; surface status to user |
| Failed payment | Order not placed; SIP skipped | Notify user; do not silently skip |
| Name mismatch (folio vs bank) | Redemption may be rejected | Validate name match at onboarding, not at redemption time |
| Exceeding daily redemption limit (debt funds) | Only partial order processed | Split order across days; inform user of timeline |

---

*This document covers the core product thinking for Kalpi's Mutual Fund Strategy Builder. It is intended to guide product and engineering decisions as the platform evolves from prototype to production.*
