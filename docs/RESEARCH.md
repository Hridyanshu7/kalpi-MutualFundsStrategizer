---
layout: default
title: Kalpi — Research & Product Thinking
---

# Kalpi — MF Strategy Builder: Research & Product Thinking

**Author:** Hridyanshu Singhal &nbsp;|&nbsp; **Role:** PM Candidate &nbsp;|&nbsp; **Date:** June 2026

---

## 1. Competitor Analysis

The market splits into three archetypes: **transaction platforms** (Groww, Coin, ET Money), **research tools** (Value Research, Morningstar), and **robo-advisors** (Wealthfront, Betterment, M1 Finance). No Indian platform meaningfully occupies the fourth — **systematic strategy builder** — which is where Kalpi sits. Hover the <strong>ⓘ</strong> icon on any row to see its USP.

<div class="comp-matrix">

<div class="comp-filters">
<div class="filter-group">
<span class="fg-label">India</span>
<label class="chip active"><input type="checkbox" checked data-row="et-money"> ET Money</label>
<label class="chip active"><input type="checkbox" checked data-row="groww"> Groww</label>
<label class="chip active"><input type="checkbox" checked data-row="indmoney"> INDmoney</label>
<label class="chip active"><input type="checkbox" checked data-row="kuvera"> Kuvera</label>
<label class="chip active"><input type="checkbox" checked data-row="coin"> Coin</label>
<label class="chip active"><input type="checkbox" checked data-row="vr"> Value Research</label>
</div>
<div class="filter-group">
<span class="fg-label">Global</span>
<label class="chip"><input type="checkbox" data-row="morningstar"> Morningstar</label>
<label class="chip"><input type="checkbox" data-row="wealthfront"> Wealthfront</label>
<label class="chip"><input type="checkbox" data-row="betterment"> Betterment</label>
<label class="chip"><input type="checkbox" data-row="m1"> M1 Finance</label>
</div>
</div>

<div class="comp-table-scroll">
<table class="comp-table">
<thead>
<tr>
<th>Platform</th>
<th>Research Depth</th>
<th>Risk Analytics</th>
<th>Strategy Builder</th>
<th>Execution</th>
<th>India</th>
<th>Pricing</th>
</tr>
</thead>
<tbody>

<tr data-row="et-money">
<td><div class="pname">ET Money <span class="usp-tip" data-usp="USP: Tax P&L tracking and Smart Deposit for idle cash. Strong mobile UX built for mass retail. Gap: Fund discovery is fully recommendation-driven — no custom rules, no risk-adjusted metrics visible.">ⓘ</span></div></td>
<td><span class="r low">Low</span></td>
<td><span class="r none">None</span></td>
<td><span class="r none">None</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Free</span></td>
</tr>

<tr data-row="groww">
<td><div class="pname">Groww <span class="usp-tip" data-usp="USP: Largest Indian MF platform by users. Near-zero friction, clean SIP management. Gap: Sorts by 1Y return — the least reliable metric. Zero analytics depth, no Sharpe or drawdown anywhere.">ⓘ</span></div></td>
<td><span class="r none">Minimal</span></td>
<td><span class="r none">None</span></td>
<td><span class="r none">None</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Free</span></td>
</tr>

<tr data-row="indmoney">
<td><div class="pname">INDmoney <span class="usp-tip" data-usp="USP: Multi-asset aggregation — EPF, NPS, US stocks and MF in a single net worth view. Gap: MF selection shaped by AMC partnerships. Goal-bucket style, not rule-based.">ⓘ</span></div></td>
<td><span class="r low">Low</span></td>
<td><span class="r none">None</span></td>
<td><span class="r none">None</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Free</span></td>
</tr>

<tr data-row="kuvera">
<td><div class="pname">Kuvera <span class="usp-tip" data-usp="USP: Oldest free direct-plan platform. Unique portfolio overlap detection tool. Gap: Overlap detection is reactive (shows existing) not proactive (prevents at construction time). No custom scoring.">ⓘ</span></div></td>
<td><span class="r med">Medium</span></td>
<td><span class="r low">Basic</span></td>
<td><span class="r none">None</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Free</span></td>
</tr>

<tr data-row="coin">
<td><div class="pname">Coin <span class="usp-tip" data-usp="USP: Zerodha ecosystem, zero commission, trusted brand. Natural fit for equity-first investors. Gap: MF is a secondary product. Analytics absent — fund comparison requires leaving the app.">ⓘ</span></div></td>
<td><span class="r none">Minimal</span></td>
<td><span class="r none">None</span></td>
<td><span class="r none">None</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Free</span></td>
</tr>

<tr data-row="vr">
<td><div class="pname">Value Research <span class="usp-tip" data-usp="USP: Gold standard for India MF research since 1996. Comprehensive metric coverage and trusted star ratings. Gap: Fixed methodology — users cannot customise weights. Research and execution are fully disconnected.">ⓘ</span></div></td>
<td><span class="r high">High</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r none">None</span></td>
<td><span class="r none">None</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r med">Freemium</span></td>
</tr>

<tr data-row="morningstar" style="display:none">
<td><div class="pname">Morningstar <span class="usp-tip" data-usp="USP: Global benchmark — style box, analyst ratings, factor analysis. Genuinely sophisticated. Gap: India coverage incomplete and priced for advisors. Analysis does not connect to execution.">ⓘ</span></div></td>
<td><span class="r high">Very High</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r none">None</span></td>
<td><span class="r none">None</span></td>
<td><span class="r low">Partial</span></td>
<td><span class="r low">Paid</span></td>
</tr>

<tr data-row="wealthfront" style="display:none">
<td><div class="pname">Wealthfront <span class="usp-tip" data-usp="USP: Best US robo-advisor. Automated tax-loss harvesting and direct indexing are genuine moats. Gap: ETF-centric, US-only. Fund selection is a black box users cannot inspect or override.">ⓘ</span></div></td>
<td><span class="r med">Medium</span></td>
<td><span class="r med">Medium</span></td>
<td><span class="r low">Opaque auto</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r none">None</span></td>
<td><span class="r low">Paid</span></td>
</tr>

<tr data-row="betterment" style="display:none">
<td><div class="pname">Betterment <span class="usp-tip" data-usp="USP: Best-in-class goal-bucket UX and behavioural nudges. Tax-coordinated portfolios. Gap: No user control over fund selection. Single model portfolio per goal. US-only.">ⓘ</span></div></td>
<td><span class="r med">Medium</span></td>
<td><span class="r low">Basic</span></td>
<td><span class="r low">Goal-based</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r none">None</span></td>
<td><span class="r low">Paid</span></td>
</tr>

<tr data-row="m1" style="display:none">
<td><div class="pname">M1 Finance <span class="usp-tip" data-usp="USP: Pie portfolio concept — target weight slices with auto-distribution. Fractional shares. Gap: Pies are allocation tools, not selection tools. M1 doesn't help decide what goes in the pie. US-only.">ⓘ</span></div></td>
<td><span class="r low">Low</span></td>
<td><span class="r low">Basic</span></td>
<td><span class="r med">Alloc. only</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r none">None</span></td>
<td><span class="r med">Freemium</span></td>
</tr>

<tr class="kalpi-row">
<td><div class="pname">Kalpi <span class="usp-tip" data-usp="USP: Only platform combining deep risk analytics + transparent rule-based strategy builder + India MF execution in a single, unbroken flow. Users define their own filters, weights, and scoring models — every fund has a traceable score.">★</span></div></td>
<td><span class="r high">High</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Transparent</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r high">Full</span></td>
<td><span class="r med">TBD</span></td>
</tr>

</tbody>
</table>
</div>
</div>


### Competitive Summary

**The white space:** No Indian platform combines analytical depth + transparent strategy building + execution in a single flow. Kalpi is the only product where a user can define their own screening rules, assign weights, score funds, and invest — without leaving the platform or accepting someone else's methodology.

---

## 2. Mutual Fund Framework

<div class="fw-pipeline">
<div class="fw-node">
<div class="fw-node-step">Step 01</div>
<div class="fw-node-title">Filter</div>
<div class="fw-node-sub">87 → 42 funds pass all gates</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Step 02</div>
<div class="fw-node-title">Rank</div>
<div class="fw-node-sub">42 funds ordered 0–100 per metric</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Step 03</div>
<div class="fw-node-title">Score</div>
<div class="fw-node-sub">Single composite score per fund</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Step 04</div>
<div class="fw-node-title">Construct</div>
<div class="fw-node-sub">User picks Top N from ranked list</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Step 05</div>
<div class="fw-node-title">Allocate</div>
<div class="fw-node-sub">Rupee distribution by chosen method</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
</div>

### Filtering
Filters define the floor — they eliminate the ineligible, not identify the best. <span class="badge impl">Prototype</span> All filters use AND logic; a fund that fails any single condition is out.

<table class="gate-table">
<thead>
<tr><th>Filter Gate</th><th>Equity</th><th>Debt</th><th>Hybrid</th></tr>
</thead>
<tbody>
<tr>
<td><span class="gate-name">AUM floor</span><div class="gate-bgs"><span class="badge impl">Prototype</span><span class="badge assume">Assumption</span></div></td>
<td><span class="gc yes">≥ ₹500 Cr</span></td><td><span class="gc yes">≥ ₹500 Cr</span></td><td><span class="gc yes">≥ ₹500 Cr</span></td>
</tr>
<tr>
<td><span class="gate-name">Fund Age</span><div class="gate-bgs"><span class="badge impl">Prototype</span><span class="badge assume">Assumption</span></div></td>
<td><span class="gc yes">≥ 3 years</span></td><td><span class="gc yes">≥ 3 years</span></td><td><span class="gc yes">≥ 3 years</span></td>
</tr>
<tr>
<td><span class="gate-name">Direct Plan</span><div class="gate-bgs"><span class="badge impl">Prototype</span></div></td>
<td><span class="gc yes">Required</span></td><td><span class="gc yes">Required</span></td><td><span class="gc yes">Required</span></td>
</tr>
<tr>
<td><span class="gate-name">Expense Ratio cap</span><div class="gate-bgs"><span class="badge assume">Assumption</span></div></td>
<td><span class="gc mod">&gt; 1.2%</span></td><td><span class="gc mod">&gt; 0.5%</span></td><td><span class="gc mod">&gt; 1.0%</span></td>
</tr>
<tr>
<td><span class="gate-name">SEBI Riskometer</span><div class="gate-bgs"><span class="badge reg">Regulatory</span></div></td>
<td><span class="gc reg">Must match user risk</span></td><td><span class="gc reg">Must match user risk</span></td><td><span class="gc reg">Must match user risk</span></td>
</tr>
<tr>
<td><span class="gate-name">Manager Tenure</span><div class="gate-bgs"><span class="badge assume">Assumption</span></div></td>
<td><span class="gc mod">≥ 1 year</span></td><td><span class="gc mod">≥ 1 year</span></td><td><span class="gc mod">≥ 1 year</span></td>
</tr>
<tr>
<td><span class="gate-name">Modified Duration</span></td>
<td><span class="gc na">—</span></td><td><span class="gc mod">User-defined</span></td><td><span class="gc mod">Partial</span></td>
</tr>
<tr>
<td><span class="gate-name">Credit Quality (AAA%)</span></td>
<td><span class="gc na">—</span></td><td><span class="gc mod">User-defined</span></td><td><span class="gc mod">Partial</span></td>
</tr>
<tr>
<td><span class="gate-name">Equity mandate check</span><div class="gate-bgs"><span class="badge reg">Regulatory</span></div></td>
<td><span class="gc na">—</span></td><td><span class="gc na">—</span></td><td><span class="gc reg">≥ 65% equity</span></td>
</tr>
</tbody>
</table>

- <span class="badge impl">Prototype</span> **UX principle:** Show live fund count as filters are added. Warn below 5 funds; never block. Pre-populate sensible defaults so users aren't starting from zero

### Ranking
Ranking orders eligible funds from best to worst. Raw metric values across different scales (Sharpe ratio vs AUM vs CAGR %) aren't directly comparable — the solution is percentile normalisation.

- <span class="badge impl">Prototype</span> Every metric is converted to a 0–100 percentile rank within the filtered pool. Direction is pre-set: lower expense ratio → higher rank
- <span class="badge impl">Prototype</span> User-defined weights are applied across selected metrics to produce a single composite score per fund
- **Metric priority:** Prefer risk-adjusted returns (Sharpe, Sortino, Alpha) and rolling returns over trailing returns. 1Y return is the least reliable signal — highly sensitive to the measurement start date
- **Pool-relative scoring:** A fund with 12% 3Y CAGR scores differently depending on what else is in the pool. This is intentional — ranking is always relative to the selected universe

<div class="tbl-note">
<strong>Worked example</strong> — weights: Sharpe 40% · Expense Ratio 30% · 3Y CAGR 30%&nbsp;&nbsp;
<span class="badge impl">Prototype</span> percentile normalisation &nbsp;
<span class="badge assume">Assumption</span> metric &amp; weight choices are illustrative
</div>
<table class="rank-table">
<thead>
<tr>
<th>Fund</th>
<th>Sharpe 3Y<br>(wt: 40%)</th>
<th>Expense Ratio<br>(wt: 30%)</th>
<th>3Y CAGR<br>(wt: 30%)</th>
<th>Score</th>
<th>Rank</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mirae Asset Large Cap</td>
<td><span class="raw">1.42</span> <span class="arr">→</span> <span class="pct">100</span></td>
<td><span class="raw">0.54%</span> <span class="arr">→</span> <span class="pct">100</span></td>
<td><span class="raw">16.8%</span> <span class="arr">→</span> <span class="pct">67</span></td>
<td class="score-cell">90</td>
<td class="rank-cell">#1</td>
</tr>
<tr>
<td>Axis Bluechip</td>
<td><span class="raw">1.31</span> <span class="arr">→</span> <span class="pct">67</span></td>
<td><span class="raw">0.56%</span> <span class="arr">→</span> <span class="pct">67</span></td>
<td><span class="raw">15.2%</span> <span class="arr">→</span> <span class="pct">33</span></td>
<td class="score-cell">57</td>
<td class="rank-cell">#2</td>
</tr>
<tr>
<td>SBI Bluechip</td>
<td><span class="raw">0.98</span> <span class="arr">→</span> <span class="pct">0</span></td>
<td><span class="raw">0.84%</span> <span class="arr">→</span> <span class="pct">33</span></td>
<td><span class="raw">17.3%</span> <span class="arr">→</span> <span class="pct">100</span></td>
<td class="score-cell">40</td>
<td class="rank-cell">#3</td>
</tr>
<tr>
<td>HDFC Top 100</td>
<td><span class="raw">1.08</span> <span class="arr">→</span> <span class="pct">33</span></td>
<td><span class="raw">1.02%</span> <span class="arr">→</span> <span class="pct">0</span></td>
<td><span class="raw">13.6%</span> <span class="arr">→</span> <span class="pct">0</span></td>
<td class="score-cell">13</td>
<td class="rank-cell">#4</td>
</tr>
</tbody>
</table>
<p style="font-size:11px;color:#888;margin-top:4px;font-style:italic;">SBI Bluechip has the best 3Y CAGR (17.3%) but ranks #3 — high expense ratio (0.84%) and low Sharpe (0.98) drag its composite score to 40. Multi-factor ranking prevents return-chasing.</p>

### Scoring
<span class="badge impl">Prototype</span> The composite score (0–100) serves three roles: determines rank order, drives capital allocation in score-based weighting, and enables threshold decisions ("only carry funds scoring above 60").

- <span class="badge impl">Prototype</span> **Score-based weighting — two modes:** Softmax compresses the score distribution so the top fund doesn't dominate; Linear distributes capital directly proportional to score
- **Edge cases:** Pools with fewer than 5 funds produce coarse rankings. <span class="badge impl">Prototype</span> Funds with missing data for a ranked metric are excluded from that metric's computation — their score is based on remaining metrics only. Never impute zero or mean for missing values
- Adding both 3Y CAGR and 5Y CAGR at equal weight double-counts long-run returns — future UX should surface correlation warnings

### Portfolio Construction
Once funds are scored and ranked, the eligible pool is assembled into a basket.

- <span class="badge impl">Prototype</span> **Top N selection** happens after scoring and weighting — users see computed allocations before deciding how many funds to carry forward to the portfolio
- <span class="badge impl">Prototype</span> **Concentration limits** are user-configurable guardrails — max/min weight per fund. Informational only; the system warns, never blocks
- <span class="badge assume">Assumption</span> Warn if >50% of the selected Top N comes from a single sub-universe — category concentration check before the basket is finalised
- **Universe coverage principle:** a fund selected from a universe the user explicitly added should not be silently crowded out by a higher-scoring sub-universe

### Weighting & Capital Allocation
Target weights translate to rupee allocations. The weighting method is chosen independently of filtering and ranking — any ranked pool can use any method.

<div class="chart-note">
<span class="badge impl">Prototype</span> All four methods implemented &nbsp;
<span class="badge assume">Assumption</span> 40% single-fund concentration flag
</div>
<div class="css-chart">
<div class="css-chart-body">
<div class="css-y-axis"><span>40%</span><span>30%</span><span>20%</span><span>10%</span><span>0%</span></div>
<div class="css-chart-area">
<div class="css-gridlines"><div></div><div></div><div></div><div></div><div></div></div>
<div class="css-bar-groups">
<div class="css-bar-group">
<div class="css-bars">
<div class="css-bar b-eq"  style="height:100px" title="Equal: 20%"></div>
<div class="css-bar b-lin" style="height:161px" title="Score-Linear: 32.2%"></div>
<div class="css-bar b-sfx" style="height:139px" title="Score-Softmax: 27.7%"></div>
<div class="css-bar b-rsk" style="height: 56px" title="Risk-Based: 11.2%"></div>
</div>
<div class="css-bar-glabel">A<br><small>S:95 V:18%</small></div>
</div>
<div class="css-bar-group">
<div class="css-bars">
<div class="css-bar b-eq"  style="height:100px" title="Equal: 20%"></div>
<div class="css-bar b-lin" style="height:136px" title="Score-Linear: 27.1%"></div>
<div class="css-bar b-sfx" style="height:119px" title="Score-Softmax: 23.8%"></div>
<div class="css-bar b-rsk" style="height: 72px" title="Risk-Based: 14.4%"></div>
</div>
<div class="css-bar-glabel">B<br><small>S:80 V:14%</small></div>
</div>
<div class="css-bar-group">
<div class="css-bars">
<div class="css-bar b-eq"  style="height:100px" title="Equal: 20%"></div>
<div class="css-bar b-lin" style="height:102px" title="Score-Linear: 20.3%"></div>
<div class="css-bar b-sfx" style="height: 98px" title="Score-Softmax: 19.5%"></div>
<div class="css-bar b-rsk" style="height: 92px" title="Risk-Based: 18.3%"></div>
</div>
<div class="css-bar-glabel">C<br><small>S:60 V:11%</small></div>
</div>
<div class="css-bar-group">
<div class="css-bars">
<div class="css-bar b-eq"  style="height:100px" title="Equal: 20%"></div>
<div class="css-bar b-lin" style="height: 68px" title="Score-Linear: 13.6%"></div>
<div class="css-bar b-sfx" style="height: 80px" title="Score-Softmax: 16.0%"></div>
<div class="css-bar b-rsk" style="height:112px" title="Risk-Based: 22.4%"></div>
</div>
<div class="css-bar-glabel">D<br><small>S:40 V:9%</small></div>
</div>
<div class="css-bar-group">
<div class="css-bars">
<div class="css-bar b-eq"  style="height:100px" title="Equal: 20%"></div>
<div class="css-bar b-lin" style="height: 34px" title="Score-Linear: 6.8%"></div>
<div class="css-bar b-sfx" style="height: 66px" title="Score-Softmax: 13.1%"></div>
<div class="css-bar b-rsk" style="height:168px" title="Risk-Based: 33.6%"></div>
</div>
<div class="css-bar-glabel">E<br><small>S:20 V:6%</small></div>
</div>
</div>
</div>
</div>
<div class="css-legend">
<span><i class="css-ld" style="background:#6366f1"></i> Equal</span>
<span><i class="css-ld" style="background:#c0392b"></i> Score — Linear</span>
<span><i class="css-ld" style="background:#ea580c"></i> Score — Softmax</span>
<span><i class="css-ld" style="background:#15803d"></i> Risk-Based</span>
</div>
</div>
<p class="chart-caption">Same 5 funds, 4 different allocation methods. Fund E (lowest score 20, lowest volatility 6%) gets 6.8% under Score-Linear but 33.6% under Risk-Based. Softmax sits between Linear and Equal — it compresses without flattening.<br>Scores: A=95 · B=80 · C=60 · D=40 · E=20 &nbsp;|&nbsp; Volatility: A=18% · B=14% · C=11% · D=9% · E=6%</p>


- <span class="badge impl">Prototype</span> **Equal (1/N):** Every fund receives the same allocation. Transparent baseline — no assumptions about relative quality
- <span class="badge impl">Prototype</span> **Score-Based:** Capital proportional to composite score. Two modes: *Softmax* compresses the distribution so the top fund doesn't dominate; *Linear* distributes directly proportional to score
- <span class="badge impl">Prototype</span> **Risk-Based (Inverse Volatility):** Lower-volatility funds receive more capital. Defensive by default — useful for capital-preservation mandates
- <span class="badge impl">Prototype</span> **Category-Based:** User sets Equity / Debt / Hybrid split first, then distributes equally within each category. Asset allocation decision is made upstream of fund selection
- <span class="badge impl">Prototype</span> **Rupee allocation:** Each fund's amount = target weight × capital, floored to the nearest NAV unit. Residual from rounding surfaces as uninvested cash
- <span class="badge impl">Prototype</span> Warn (don't block) if any fund's allocation falls below the ₹500 minimum lumpsum threshold
- <span class="badge assume">Assumption</span> Flag if a single fund exceeds 40% of portfolio weight after allocation — concentration risk alert before the user proceeds to rebalancing setup

---

## 3. Key Challenges & Corner Cases

<div class="cc-container">
<div class="cc-tabs">
<button class="cc-tab active" data-case="overlap">Fund Overlap</button>
<button class="cc-tab" data-case="amc">AMC Concentration</button>
<button class="cc-tab" data-case="cat">Category Concentration</button>
<button class="cc-tab" data-case="drift">Style Drift</button>
<button class="cc-tab" data-case="survivor">Survivorship Bias</button>
<button class="cc-tab" data-case="merger">Fund Mergers</button>
<button class="cc-tab" data-case="nfund">New Funds / NFOs</button>
<button class="cc-tab" data-case="missing">Missing Data</button>
<button class="cc-tab" data-case="exit">Exit Loads</button>
<button class="cc-tab" data-case="tax">Tax Implications</button>
</div>

<div class="cc-panel active" id="cc-overlap">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat conc">Concentration</span><span class="cc-title">Fund Overlap</span><span class="cc-impact high">High Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">8 funds, same 30 stocks — Flexi Cap, Large Cap, and Hybrid funds all converge on HDFC Bank, Reliance, and Infosys at &gt;5% weight. Diversification across fund <em>names</em> provides no actual risk reduction.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Any 2 funds in basket share <strong>&gt;60% of their top holdings</strong></div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Warn, don't block — user may intentionally concentrate; surface the data and let them proceed</li>
<li><span class="badge assume">Assumption</span> Flag overlapping pair: <em>"Fund A &amp; Fund B share 68% of their top holdings"</em></li>
<li><span class="badge impl">Prototype</span> Surface repeated stocks: <em>"HDFC Bank appears in 6 of your 8 funds"</em></li>
<li>Future: portfolio-level stock heatmap showing true underlying exposure</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Holdings Overlap Matrix — hypothetical 5-fund basket</div>
<table class="ov-matrix">
<thead><tr><th></th><th>Fund A</th><th>Fund B</th><th>Fund C</th><th>Fund D</th><th>Fund E</th></tr></thead>
<tbody>
<tr><td><strong>Fund A</strong></td><td class="ov-na">—</td><td class="ov-high">72%</td><td class="ov-med">45%</td><td class="ov-low">20%</td><td class="ov-low">12%</td></tr>
<tr><td><strong>Fund B</strong></td><td class="ov-high">72%</td><td class="ov-na">—</td><td class="ov-high">68%</td><td class="ov-med">35%</td><td class="ov-low">18%</td></tr>
<tr><td><strong>Fund C</strong></td><td class="ov-med">45%</td><td class="ov-high">68%</td><td class="ov-na">—</td><td class="ov-med">52%</td><td class="ov-low">28%</td></tr>
<tr><td><strong>Fund D</strong></td><td class="ov-low">20%</td><td class="ov-med">35%</td><td class="ov-med">52%</td><td class="ov-na">—</td><td class="ov-med">41%</td></tr>
<tr><td><strong>Fund E</strong></td><td class="ov-low">12%</td><td class="ov-low">18%</td><td class="ov-low">28%</td><td class="ov-med">41%</td><td class="ov-na">—</td></tr>
</tbody>
</table>
<div style="display:flex;gap:14px;margin-top:8px;flex-wrap:wrap;font-size:10px;color:#aaa;">
<span><span style="background:#fee2e2;color:#991b1b;padding:1px 6px;border-radius:2px;font-weight:700;font-size:9.5px;">&gt;60%</span> Flagged</span>
<span><span style="background:#fef9c3;color:#854d0e;padding:1px 6px;border-radius:2px;font-weight:700;font-size:9.5px;">30–60%</span> Watch</span>
<span><span style="background:#dcfce7;color:#15803d;padding:1px 6px;border-radius:2px;font-weight:700;font-size:9.5px;">&lt;30%</span> OK</span>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-amc">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat conc">Concentration</span><span class="cc-title">AMC Concentration</span><span class="cc-impact high">High Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">Scoring rewards consistent performers — model may pick 4–5 funds from a single AMC. AMC-level risk (regulatory sanction, fund manager exodus, compliance failure) hits <em>all</em> of that house's funds simultaneously.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Single AMC represents <strong>&gt;25% of basket's total allocation</strong></div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge assume">Assumption</span> Flag: <em>"3 of your 8 funds are from HDFC AMC, representing 42% of capital"</em></li>
<li><span class="badge assume">Assumption</span> Offer soft construction constraint: max 2 funds per AMC applied at build time</li>
<li>User can override with explicit acknowledgement — strong AMC conviction is a valid reason</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">AMC Distribution — hypothetical 8-fund basket</div>
<div class="amc-bars">
<div class="amc-row"><div class="amc-label">HDFC AMC</div><div class="amc-bar-wrap"><div class="amc-bar-fill" style="width:42%;background:#c0392b;">42%</div></div><span class="amc-flag">⚑ &gt;25% flagged</span></div>
<div class="amc-row"><div class="amc-label">SBI MF</div><div class="amc-bar-wrap"><div class="amc-bar-fill" style="width:28%;background:#c0392b;">28%</div></div><span class="amc-flag">⚑ &gt;25% flagged</span></div>
<div class="amc-row"><div class="amc-label">Axis MF</div><div class="amc-bar-wrap"><div class="amc-bar-fill" style="width:14%;background:#6366f1;">14%</div></div><span style="font-size:9px;color:#aaa;">OK</span></div>
<div class="amc-row"><div class="amc-label">Kotak MF</div><div class="amc-bar-wrap"><div class="amc-bar-fill" style="width:10%;background:#888;">10%</div></div><span style="font-size:9px;color:#aaa;">OK</span></div>
<div class="amc-row"><div class="amc-label">UTI MF</div><div class="amc-bar-wrap"><div class="amc-bar-fill" style="width:6%;background:#aaa;">6%</div></div><span style="font-size:9px;color:#aaa;">OK</span></div>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-cat">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat conc">Concentration</span><span class="cc-title">Category Concentration</span><span class="cc-impact med">Med Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">In 2021, Small Cap funds dominated 3Y CAGR rankings. A return-heavy scoring model applied to a multi-universe basket fills most Top-N slots from one sub-category — defeating the intent of selecting multiple universes.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body"><strong>&gt;50% of Top-N funds</strong> come from a single sub-universe</div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge assume">Assumption</span> Warn before carrying to portfolio: <em>"7 of 10 selected funds are Flexi Cap"</em></li>
<li>Allow manual pinning of a fund from any underrepresented universe</li>
<li>Future: universe-proportionate mode — guarantees ≥1 fund per selected sub-category in final basket</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Top-10 selection — sub-universe distribution (7/10 Flexi Cap, flagged)</div>
<div class="universe-strip">
<div class="us-block" style="flex:7;background:#c0392b;">Flexi Cap — 7</div>
<div class="us-block" style="flex:2;background:#6366f1;">Large Cap — 2</div>
<div class="us-block" style="flex:1;background:#888;font-size:8.5px;">SC — 1</div>
</div>
<div class="us-legend">
<span><i class="us-dot" style="background:#c0392b;"></i> Flexi Cap — 7 funds <strong style="color:#991b1b;">(⚑ flagged: &gt;50%)</strong></span>
<span><i class="us-dot" style="background:#6366f1;"></i> Large Cap — 2 funds</span>
<span><i class="us-dot" style="background:#888;"></i> Small Cap — 1 fund</span>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-drift">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat data">Data Quality</span><span class="cc-title">Style Drift</span><span class="cc-impact med">Med Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">Fund mandates are declared; actual behaviour diverges. Several Flexi Cap funds post-2020 held &gt;80% large-cap for extended periods — users got duplicate large-cap exposure inside a "diversified" basket without being warned.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Fund's actual large-cap % exceeds <strong>80% for any rolling 6-month window</strong></div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li>Monitor actual large/mid/small cap % per fund over rolling 6M windows</li>
<li><span class="badge assume">Assumption</span> Flag in diagnostics: <em>"Fund X is Flexi Cap but held &gt;80% large-cap for 6 months"</em></li>
<li>Quarterly strategy re-runs surface this naturally — a drifted fund scores differently on composition-aware metrics</li>
<li>Future: automated drift alerts triggered by composition thresholds between scheduled re-runs</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Flexi Cap Fund — rolling large-cap allocation (6M window)</div>
<div style="position:relative;height:80px;display:flex;gap:6px;align-items:flex-end;border-bottom:1px solid #e5e5e5;margin-bottom:4px;">
<div style="flex:1;height:52px;background:#6366f1;border-radius:2px 2px 0 0;opacity:.75;" title="Jan: 65%"></div>
<div style="flex:1;height:57px;background:#6366f1;border-radius:2px 2px 0 0;opacity:.85;" title="Feb: 71%"></div>
<div style="flex:1;height:61px;background:#ea580c;border-radius:2px 2px 0 0;" title="Mar: 76%"></div>
<div style="flex:1;height:66px;background:#c0392b;border-radius:2px 2px 0 0;" title="Apr: 82%"></div>
<div style="flex:1;height:68px;background:#c0392b;border-radius:2px 2px 0 0;" title="May: 85%"></div>
<div style="flex:1;height:70px;background:#c0392b;border-radius:2px 2px 0 0;" title="Jun: 88%"></div>
<div style="position:absolute;left:0;right:0;bottom:64px;border-top:1.5px dashed #c0392b;pointer-events:none;z-index:1;"><span style="position:absolute;right:0;bottom:2px;font-size:9px;color:#c0392b;font-weight:700;white-space:nowrap;">← 80% mandate boundary</span></div>
</div>
<div style="display:flex;gap:6px;margin-bottom:8px;">
<div style="flex:1;text-align:center;font-size:9.5px;color:#6366f1;font-weight:700;">Jan<br>65%</div>
<div style="flex:1;text-align:center;font-size:9.5px;color:#6366f1;font-weight:700;">Feb<br>71%</div>
<div style="flex:1;text-align:center;font-size:9.5px;color:#ea580c;font-weight:700;">Mar<br>76%</div>
<div style="flex:1;text-align:center;font-size:9.5px;color:#c0392b;font-weight:700;">Apr<br>82%</div>
<div style="flex:1;text-align:center;font-size:9.5px;color:#c0392b;font-weight:700;">May<br>85%</div>
<div style="flex:1;text-align:center;font-size:9.5px;color:#c0392b;font-weight:700;">Jun<br>88%</div>
</div>
<div style="font-size:10px;color:#c0392b;font-weight:600;">⚑ Flagged: large-cap % crossed 80% for 3 consecutive months — fund is Flexi Cap by mandate, Large Cap by behaviour</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-survivor">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat data">Data Quality</span><span class="cc-title">Survivorship Bias</span><span class="cc-impact med">Med Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">Any backtest only evaluates funds that exist today. Wound-up funds — typically poor performers or mismanaged — are invisible. A "15% CAGR strategy" is measured against survivors only; it never faced funds that got shut down during the period.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Any historical performance display, backtest, or strategy comparison across a time period</div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Explicit disclaimer on all historical views: <em>"Excludes wound-up/merged funds; actual returns may be lower"</em></li>
<li>Tag funds in the data layer that absorbed a merger — pre-merger track record belongs to a different entity</li>
<li>For live strategies, less relevant — strategy runs on currently-existing funds; disclaimer still shown on any historical comparison</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Illustrative: Indian MF universe tracked from 2019</div>
<div style="display:flex;height:28px;border-radius:4px;overflow:hidden;margin-bottom:8px;">
<div style="flex:72;background:#15803d;display:flex;align-items:center;padding-left:10px;font-size:9.5px;font-weight:700;color:white;">Surviving today — 612 funds (72.3%)</div>
<div style="flex:28;background:#fee2e2;border-left:2px solid #c0392b;display:flex;align-items:center;justify-content:center;font-size:9.5px;font-weight:700;color:#991b1b;">Wound up — 235 (27.8%)</div>
</div>
<div style="font-size:10.5px;color:#777;line-height:1.6;">Starting pool: <strong>847 funds</strong> tracked from 2019. Backtests only see the <span style="color:#15803d;font-weight:700;">612 survivors</span> — the <span style="color:#991b1b;font-weight:700;">235 wound-up funds</span> are invisible, systematically inflating apparent strategy returns.</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-merger">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat reg">Regulatory</span><span class="cc-title">Fund Mergers</span><span class="cc-impact med">Med Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body"><span class="badge reg">Regulatory</span> SEBI's 2018 rationalisation directive forced AMCs to merge overlapping funds. Many "5Y returns" today are stitched from two entities with different mandates, managers, and AUM profiles — not a continuous comparable number.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Fund underwent a merger or reclassification in the <strong>last 5 years</strong></div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Tag fund with "Post-merger track record" label wherever historical metrics are shown</li>
<li><span class="badge assume">Assumption</span> Downweight or exclude 5Y CAGR and inception return for merged funds — rely on shorter windows where current mandate is intact</li>
<li>Surface merger context in fund detail view before user assigns high weight to long-term metrics</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Example: Corporate Bond Fund — stitched track record</div>
<div class="mt-strip">
<div class="mt-box mt-before"><div style="font-size:9px;font-weight:800;text-transform:uppercase;color:#1d4ed8;letter-spacing:.08em;margin-bottom:4px;">2015 → 2018</div><div style="font-size:12px;font-weight:700;">Short Duration Fund</div><div style="font-size:10px;color:#888;margin-top:3px;">Different mandate · Different manager · Shorter duration target</div></div>
<div class="mt-arrow">→</div>
<div class="mt-box mt-event"><div style="font-size:9px;font-weight:800;text-transform:uppercase;color:#c2410c;letter-spacing:.08em;margin-bottom:4px;">SEBI 2018</div><div style="font-size:11px;font-weight:700;">Rationalisation<br>Directive</div><div style="font-size:10px;color:#888;margin-top:3px;">Forced merger</div></div>
<div class="mt-arrow">→</div>
<div class="mt-box mt-after"><div style="font-size:9px;font-weight:800;text-transform:uppercase;color:#15803d;letter-spacing:.08em;margin-bottom:4px;">2018 → Today</div><div style="font-size:12px;font-weight:700;">Corporate Bond Fund</div><div style="font-size:10px;color:#888;margin-top:3px;">Current mandate · New manager · Longer duration</div></div>
</div>
<div style="margin-top:8px;font-size:10.5px;color:#c0392b;font-weight:600;">⚑ The 5Y return includes the Short Duration period — comparing it to a pure-play Corporate Bond fund with a clean 5Y history is misleading</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-nfund">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat data">Data Quality</span><span class="cc-title">New Funds / NFOs</span><span class="cc-impact low">Low Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">NFOs and post-2018 reclassified funds have &lt;3Y of data. Percentile ranking on partial data is unreliable — funds score artificially high (strong recent data, small sample) or low (gaps in multi-year metrics).</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Fund age <strong>&lt; 3 years</strong> when any multi-year metric is included in ranking</div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Default Fund Age ≥ 3Y filter eliminates most NFOs from the eligible pool</li>
<li><span class="badge impl">Prototype</span> If filter is removed: warn <em>"X funds have &lt;3Y data; their 3Y/5Y rankings are unreliable"</em></li>
<li><span class="badge impl">Prototype</span> Never impute missing long-term metrics — exclude fund from that metric's percentile computation and proportionally reweight remaining metrics</li>
<li>Future: dedicated "Emerging Funds" view evaluating NFOs only on metrics they have sufficient data for</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Metric availability by fund age</div>
<table class="cov-matrix">
<thead><tr><th>Fund age</th><th>1Y CAGR</th><th>3Y CAGR</th><th>5Y CAGR</th><th>Sharpe 3Y</th><th>Alpha 5Y</th><th>Expense R.</th><th>AUM</th></tr></thead>
<tbody>
<tr><td>&lt; 1 year</td><td><span class="cov-p">Partial</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td></tr>
<tr><td>1 – 2 years</td><td><span class="cov-y">✓</span></td><td><span class="cov-p">Partial</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td></tr>
<tr><td>2 – 3 years</td><td><span class="cov-y">✓</span></td><td><span class="cov-p">Partial</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-p">Partial</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td></tr>
<tr><td>3 – 5 years</td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-p">Partial</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-n">Missing</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td></tr>
<tr><td>&gt; 5 years</td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td><td><span class="cov-y">✓</span></td></tr>
</tbody>
</table>
<div style="display:flex;gap:14px;margin-top:8px;font-size:10px;color:#aaa;flex-wrap:wrap;">
<span><span class="cov-y">✓</span> Full data</span>
<span><span class="cov-p">Partial</span> Incomplete window</span>
<span><span class="cov-n">Missing</span> Excluded from ranking</span>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-missing">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat data">Data Quality</span><span class="cc-title">Missing Data</span><span class="cc-impact med">Med Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">Imputing zero → unfair penalty. Imputing pool mean → masks unknown quality. Excluding the fund entirely → wastes a valid candidate. All three naive approaches fail differently depending on the metric and fund type.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Any metric value is <strong>null, stale (&gt;2 months old), or not applicable</strong> for a fund in the ranked pool</div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Exclude fund from that metric's percentile computation only; redistribute weight proportionally to remaining metrics</li>
<li><span class="badge impl">Prototype</span> Surface gaps: <em>"3 funds scored on 4 of 5 metrics — Sharpe 3Y unavailable for these funds"</em></li>
<li><span class="badge assume">Assumption</span> Warn if &gt;30% of pool is missing a metric: <em>"This metric has low coverage — consider removing it"</em></li>
<li><span class="badge assume">Assumption</span> Flag data older than 2 months as stale in all fund detail views</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Data coverage — 5-fund sample pool across 7 metrics</div>
<table class="data-grid">
<thead><tr><th>Fund</th><th>3Y CAGR</th><th>5Y CAGR</th><th>Sharpe</th><th>Alpha</th><th>YTM</th><th>Mod Dur</th><th>AAA%</th></tr></thead>
<tbody>
<tr><td>Fund A (Equity)</td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-stale">⚠ stale</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-na">—</span></td><td><span class="dg-na">—</span></td><td><span class="dg-na">—</span></td></tr>
<tr><td>Fund B (Equity)</td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-miss">✗</span></td><td><span class="dg-na">—</span></td><td><span class="dg-na">—</span></td><td><span class="dg-na">—</span></td></tr>
<tr><td>Fund C (Debt)</td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td></tr>
<tr><td>Fund D (Hybrid)</td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-miss">✗</span></td></tr>
<tr><td>Fund E (Debt)</td><td><span class="dg-ok">✓</span></td><td><span class="dg-miss">✗</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td><td><span class="dg-ok">✓</span></td></tr>
</tbody>
</table>
<div style="display:flex;gap:14px;margin-top:8px;font-size:10px;color:#aaa;flex-wrap:wrap;">
<span><span class="dg-ok">✓</span> Available</span>
<span><span class="dg-stale">⚠ stale</span> &gt;2 months</span>
<span><span class="dg-miss">✗</span> Missing</span>
<span><span class="dg-na" style="color:#bbb;font-size:10px;">—</span> Not applicable</span>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-exit">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat reg">Regulatory</span><span class="cc-title">Exit Loads</span><span class="cc-impact high">High Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body"><span class="badge reg">Regulatory</span> Rebalancing sell triggers a 1% exit load if the fund is within its 12-month window. A drift correction that frees ₹80 of value but triggers ₹100 in exit load is a net loss — not a gain.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Fund is a sell candidate during rebalancing and is <strong>within its exit load window</strong> at time of order</div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Show exit load status per fund in portfolio view — load %, rupee amount, and days until window closes</li>
<li><span class="badge impl">Prototype</span> Before rebalancing confirmation: show exit load cost per sell and net benefit after load</li>
<li><span class="badge impl">Prototype</span> If load cost &gt; drift benefit: <em>"Selling Fund X now costs ₹420 in exit load; drift within tolerance — skip this cycle"</em></li>
<li><span class="badge assume">Assumption</span> Recommend quarterly+ rebalancing cadence for equity-heavy strategies to stay clear of load windows</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Exit load window by fund type (bar width = load-active period; scale = 12 months)</div>
<div class="el-timeline">
<div class="el-row"><div class="el-fund">Equity<br>(Large/Flexi/Multi)</div><div class="el-track"><div class="el-load" style="width:100%;background:#c0392b;">1% · 12 months</div></div><div class="el-rate">1%</div></div>
<div class="el-row"><div class="el-fund">Aggressive Hybrid</div><div class="el-track"><div class="el-load" style="width:100%;background:#c0392b;">1% · 12 months</div></div><div class="el-rate">1%</div></div>
<div class="el-row"><div class="el-fund">Bal. Adv. / DAA</div><div class="el-track"><div class="el-load" style="width:100%;background:#c0392b;">1% · 12 months</div></div><div class="el-rate">1%</div></div>
<div class="el-row"><div class="el-fund">Corporate Bond</div><div class="el-track"><div class="el-load" style="width:50%;background:#ea580c;">0.5% · up to 6M</div></div><div class="el-rate">0.5%</div></div>
<div class="el-row"><div class="el-fund">Short Duration</div><div class="el-track"><div style="height:100%;background:#dcfce7;display:flex;align-items:center;padding-left:8px;font-size:9.5px;color:#15803d;font-weight:700;">No load</div></div><div class="el-rate" style="color:#15803d;">0%</div></div>
<div class="el-row"><div class="el-fund">Liquid / Overnight</div><div class="el-track"><div style="height:100%;background:#dcfce7;display:flex;align-items:center;padding-left:8px;font-size:9.5px;color:#15803d;font-weight:700;">No load</div></div><div class="el-rate" style="color:#15803d;">0%</div></div>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-tax">
<div class="cc-card">
<div class="cc-card-header"><span class="cc-cat reg">Regulatory</span><span class="cc-title">Tax Implications</span><span class="cc-impact high">High Impact</span></div>
<div class="cc-rows">
<div class="cc-row"><div class="cc-row-label">Problem</div><div class="cc-row-body">Selling 1 day early (day 364 vs. day 366) costs 7.5 percentage points of tax on the gain. Post-Budget 2024: equity STCG 20%, LTCG 12.5% on gains above ₹1.25L. Post-2023: debt MFs taxed at slab rate regardless of holding period — no longer tax-efficient for 30% bracket investors.</div></div>
<div class="cc-row"><div class="cc-row-label">Trigger</div><div class="cc-row-body">Any sell order — <strong>every MF redemption has a tax consequence</strong> determined by fund type, holding period, and user's income slab</div></div>
<div class="cc-row"><div class="cc-row-label">Response</div><div class="cc-row-body"><ul>
<li><span class="badge impl">Prototype</span> Show STCG / LTCG estimate per fund before any rebalancing order is confirmed</li>
<li><span class="badge impl">Prototype</span> Flag funds approaching the 12-month mark: <em>"Hold 23 more days for LTCG rate — saves an estimated ₹1,200"</em></li>
<li><span class="badge impl">Prototype</span> For debt holdings at 30% slab: <em>"This fund is taxed identically to an FD — consider an arbitrage fund"</em></li>
<li><span class="badge reg">Regulatory</span> No wash-sale rule in India — selling at a loss and immediately repurchasing is legal. Tax-loss harvesting is clean; losses carry forward 8 years</li>
<li>Future: tax-optimised rebalancing mode — sequences sells to minimise current FY tax outflow (LTCG lots first, harvest losses before March)</li>
</ul></div></div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Worked example — same ₹2,00,000 gain, 3 scenarios (post-Budget 2024)</div>
<table style="border-collapse:collapse;font-size:12px;width:100%;margin-bottom:14px;">
<thead>
<tr>
<th style="padding:7px 10px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#888;background:#f9f9f9;border-bottom:2px solid #e5e5e5;text-align:left;"></th>
<th style="padding:7px 10px;font-size:10px;font-weight:700;color:#c2410c;background:#fff7ed;border-bottom:2px solid #fcd8b0;text-align:center;">Equity STCG<br><span style="font-weight:400;color:#bbb;font-size:9px;">Sold at 11 months</span></th>
<th style="padding:7px 10px;font-size:10px;font-weight:700;color:#15803d;background:#f0fdf4;border-bottom:2px solid #bbf7d0;text-align:center;">Equity LTCG<br><span style="font-weight:400;color:#bbb;font-size:9px;">Sold at 13 months</span></th>
<th style="padding:7px 10px;font-size:10px;font-weight:700;color:#991b1b;background:#fff1f2;border-bottom:2px solid #fecdd3;text-align:center;">Debt Fund<br><span style="font-weight:400;color:#bbb;font-size:9px;">Any holding period</span></th>
</tr>
</thead>
<tbody>
<tr><td style="padding:7px 10px;color:#555;border-bottom:1px solid #f5f5f5;font-weight:600;">Capital gain</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;">₹2,00,000</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;background:#f0fdf4;">₹2,00,000</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;">₹2,00,000</td></tr>
<tr><td style="padding:7px 10px;color:#555;border-bottom:1px solid #f5f5f5;font-weight:600;">LTCG exempt</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#bbb;">—</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;background:#f0fdf4;">₹1,25,000</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#bbb;">—</td></tr>
<tr><td style="padding:7px 10px;color:#555;border-bottom:1px solid #f5f5f5;font-weight:600;">Taxable</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;">₹2,00,000</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;background:#f0fdf4;">₹75,000</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;color:#555;">₹2,00,000</td></tr>
<tr><td style="padding:7px 10px;color:#555;border-bottom:1px solid #f5f5f5;font-weight:600;">Rate</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;font-weight:700;color:#c0392b;">20% STCG</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;font-weight:700;color:#15803d;background:#f0fdf4;">12.5% LTCG</td><td style="padding:7px 10px;text-align:center;border-bottom:1px solid #f5f5f5;font-weight:700;color:#991b1b;">30% slab</td></tr>
<tr><td style="padding:7px 10px;color:#333;font-weight:700;border-bottom:1px solid #f5f5f5;">Tax owed</td><td style="padding:7px 10px;text-align:center;font-weight:800;font-size:14px;color:#c0392b;border-bottom:1px solid #f5f5f5;">₹40,000</td><td style="padding:7px 10px;text-align:center;font-weight:800;font-size:14px;color:#15803d;border-bottom:1px solid #f5f5f5;background:#f0fdf4;">₹9,375</td><td style="padding:7px 10px;text-align:center;font-weight:800;font-size:14px;color:#991b1b;border-bottom:1px solid #f5f5f5;">₹60,000</td></tr>
<tr><td style="padding:7px 10px;color:#555;font-weight:600;">vs. STCG</td><td style="padding:7px 10px;text-align:center;color:#bbb;">—</td><td style="padding:7px 10px;text-align:center;font-weight:700;color:#15803d;background:#f0fdf4;">saves ₹30,625</td><td style="padding:7px 10px;text-align:center;font-weight:700;color:#991b1b;">costs ₹20,000 more</td></tr>
</tbody>
</table>
<div style="font-size:10.5px;color:#666;line-height:1.7;">
<span class="badge reg">Regulatory</span> <strong>Debt fund tax shift (2023):</strong> Indexation benefit removed. Debt MFs taxed at slab rate regardless of holding period — no more tax-efficiency advantage over FDs for 30% bracket investors. Arbitrage funds (equity-taxed, FD-like returns) are often a better alternative.<br>
<span class="badge reg">Regulatory</span> <strong>LTCG exemption:</strong> First ₹1.25L of equity LTCG per financial year is exempt. Relevant for portfolio sizing and staggered redemption planning.<br>
<span class="badge reg">Regulatory</span> <strong>No wash-sale rule:</strong> India does not prohibit selling a fund at a loss and immediately repurchasing. Tax-loss harvesting is clean — losses offset gains elsewhere or carry forward 8 years.
</div>
</div>
</div>
</div>

</div>

---

## 4. Execution Design

Execution is a 5-stage lifecycle — from capital allocation through ongoing monitoring and action.

<div class="fw-pipeline">
<div class="fw-node">
<div class="fw-node-step">Stage 01</div>
<div class="fw-node-title">Allocate</div>
<div class="fw-node-sub">Floor to NAV unit · Surface residual cash</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Stage 02</div>
<div class="fw-node-title">Submit</div>
<div class="fw-node-sub">Check NAV cut-off · Verify pre-conditions · Route via BSE Star MF</div>
<div class="fw-node-badges"><span class="badge reg">Regulatory</span> <span class="badge assume">Assumption</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Stage 03</div>
<div class="fw-node-title">Settle</div>
<div class="fw-node-sub">T+0 Liquid · T+1 Debt · T+2 Equity allotment</div>
<div class="fw-node-badges"><span class="badge reg">Regulatory</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Stage 04</div>
<div class="fw-node-title">Monitor</div>
<div class="fw-node-sub">Track drift · Load windows · Tax positions</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
<div class="fw-node">
<div class="fw-node-step">Stage 05</div>
<div class="fw-node-title">Act</div>
<div class="fw-node-sub">Rebalance · Redeem · Full exit · SIP</div>
<div class="fw-node-badges"><span class="badge impl">Prototype</span></div>
</div>
</div>

<div class="cc-container">
<div class="cc-tabs">
<button class="cc-tab active" data-case="init">Initial Allocation</button>
<button class="cc-tab" data-case="rebal">Rebalancing</button>
<button class="cc-tab" data-case="sips">SIPs</button>
<button class="cc-tab" data-case="redeem">Redemptions</button>
<button class="cc-tab" data-case="practical">Practical Constraints</button>
</div>

<div class="cc-panel active" id="cc-init">
<div class="cc-card">
<div class="cc-card-header">
<span class="cc-cat reg">Regulatory</span>
<span class="cc-title">Initial Allocation</span>
<span class="cc-impact high">High Impact</span>
</div>
<div class="cc-rows">
<div class="cc-row">
<div class="cc-row-label">How</div>
<div class="cc-row-body">Each fund receives rupee allocation = target weight × capital, floored to the nearest NAV unit. Residual from rounding surfaces as uninvested cash. Pre-condition checks must clear before any order is submitted.</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Rules</div>
<div class="cc-row-body">
<ul>
<li><span class="badge reg">Regulatory</span> <strong>NAV cut-off:</strong> 3:00 PM equity/hybrid · 1:00 PM debt ≥₹2 Cr — orders after cut-off get next business day's NAV</li>
<li><span class="badge reg">Regulatory</span> <strong>Settlement:</strong> Equity T+1 redemption T+2 allotment · Debt T+1 both ways · Liquid T+0</li>
<li><span class="badge reg">Regulatory</span> <strong>Pre-conditions:</strong> KYC + PAN verified · UPI ≤₹2L per transaction (RTGS for larger) · First AMC investment creates a folio</li>
</ul>
</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Kalpi</div>
<div class="cc-row-body">
<ul>
<li><span class="badge impl">Prototype</span> Floor each allocation to nearest NAV unit; surface residual as uninvested cash on the confirmation screen</li>
<li><span class="badge impl">Prototype</span> Warn if order will miss today's NAV cut-off: <em>"Submit before 3:00 PM for today's NAV"</em></li>
<li><span class="badge impl">Prototype</span> Show which funds have pending pre-condition checks (KYC, folio creation) before confirming</li>
</ul>
</div>
</div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Same-day NAV eligibility window</div>
<div class="nav-bar-wrap">
<div class="nav-zone" style="width:50%;background:#15803d;">9 AM – 1 PM · All funds</div>
<div class="nav-zone" style="width:25%;background:#854d0e;">1–3 PM · Equity only</div>
<div class="nav-zone" style="width:25%;background:#c0392b;">3 PM+ · Next day NAV</div>
</div>
<div style="position:relative;height:36px;margin-bottom:14px;">
<span style="position:absolute;left:0;font-size:9px;color:#aaa;">9 AM</span>
<span style="position:absolute;left:50%;transform:translateX(-50%);font-size:9px;text-align:center;color:#854d0e;font-weight:700;">1:00 PM<br><span style="font-weight:400;color:#aaa;font-size:8px;">Debt ≥₹2Cr closes</span></span>
<span style="position:absolute;left:75%;transform:translateX(-50%);font-size:9px;text-align:center;color:#991b1b;font-weight:700;">3:00 PM<br><span style="font-weight:400;color:#aaa;font-size:8px;">All windows close</span></span>
<span style="position:absolute;right:0;font-size:9px;color:#aaa;text-align:right;">5 PM<br><span style="font-size:8px;font-weight:400;">NAV published</span></span>
</div>
<div style="font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#bbb;margin-bottom:8px;">Settlement cycles</div>
<table class="nav-settle-grid">
<thead><tr><th>Fund type</th><th>Redemption settles</th><th>Purchase allots</th></tr></thead>
<tbody>
<tr><td>Liquid / Overnight</td><td><span class="t0">T+0</span></td><td><span class="t0">T+0</span></td></tr>
<tr><td>Debt (most categories)</td><td><span class="t1">T+1</span></td><td><span class="t1">T+1</span></td></tr>
<tr><td>Equity / Flexi / Multi Cap</td><td><span class="t1">T+1</span></td><td><span class="t2">T+2</span></td></tr>
<tr><td>Hybrid (Aggressive / BAF)</td><td><span class="t1">T+1</span></td><td><span class="t2">T+2</span></td></tr>
</tbody>
</table>
</div>
</div>
</div>

<div class="cc-panel" id="cc-rebal">
<div class="cc-card">
<div class="cc-card-header">
<span class="cc-cat reg">Regulatory</span>
<span class="cc-title">Rebalancing</span>
<span class="cc-impact high">High Impact</span>
</div>
<div class="cc-rows">
<div class="cc-row">
<div class="cc-row-label">How</div>
<div class="cc-row-body">Drift detected → cost gate (exit load + tax) → sell overweight using HIFO lots → wait settlement → buy underweight. If cost exceeds correction value at any gate, skip and log for the next cycle.</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Rules</div>
<div class="cc-row-body">
<ul>
<li><span class="badge assume">Assumption</span> <strong>Sell first, then buy</strong> — buying first creates temporary overexposure and may require bridging capital</li>
<li><span class="badge reg">Regulatory</span> <strong>Tax-lot ordering:</strong> HIFO (highest cost first) minimises taxable gains · Indian MF default is FIFO — HIFO requires explicit selection at the AMC level</li>
<li><span class="badge assume">Assumption</span> <strong>Growth option only</strong> — IDCW distributions move NAV unpredictably and complicate weight calculations</li>
</ul>
</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Kalpi</div>
<div class="cc-row-body">
<ul>
<li><span class="badge impl">Prototype</span> Before each sell: compute exit load + estimated tax · Show per-fund net benefit breakdown</li>
<li><span class="badge impl">Prototype</span> Skip + log if cost &gt; drift correction value — surface skipped trades in the rebalancing summary</li>
<li><span class="badge assume">Assumption</span> Flag any IDCW-option fund in basket — prompt switch to Growth before strategy executes</li>
</ul>
</div>
</div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Rebalancing decision gate</div>
<div class="rb-flow">
<div class="rb-step">
<div class="rb-line"><div class="rb-dot" style="border-color:#6366f1;background:#6366f1;"></div><div class="rb-stem"></div></div>
<div class="rb-box" style="border-color:#e0e7ff;background:#f5f3ff;">
<div class="rb-box-label">Pre-conditions</div>
<div class="rb-box-text">Growth option only · HIFO lot ordering · ISIN-based fund lookup</div>
<div class="rb-box-sub"><span class="badge assume">Assumption</span> Growth only prevents IDCW NAV disruption &nbsp; <span class="badge reg">Regulatory</span> HIFO requires explicit AMC selection (default is FIFO)</div>
</div>
</div>
<div class="rb-spacer"></div>
<div class="rb-step">
<div class="rb-line"><div class="rb-dot active"></div><div class="rb-stem"></div></div>
<div class="rb-box gate">
<div class="rb-box-label">Gate 1 — Drift Check</div>
<div class="rb-box-text">Is fund's current weight outside the drift threshold?</div>
<div class="rb-outcomes"><span class="rb-no">✗ Within threshold → no action this cycle</span><span class="rb-yes">✓ Exceeds threshold → continue</span></div>
</div>
</div>
<div class="rb-spacer"></div>
<div class="rb-step">
<div class="rb-line"><div class="rb-dot active"></div><div class="rb-stem"></div></div>
<div class="rb-box gate">
<div class="rb-box-label">Gate 2 — Cost Gate</div>
<div class="rb-box-text">Exit load cost + estimated tax liability vs. drift correction value</div>
<div class="rb-box-sub"><span class="badge impl">Prototype</span> Example: "Correcting saves ₹800 · Exit load ₹420 · Tax ~₹180 · Net: +₹200 → proceed"</div>
<div class="rb-outcomes"><span class="rb-no">✗ Cost &gt; benefit → skip + log, retry next cycle</span><span class="rb-yes">✓ Net positive → proceed</span></div>
</div>
</div>
<div class="rb-spacer"></div>
<div class="rb-step">
<div class="rb-line"><div class="rb-dot active"></div><div class="rb-stem" style="background:transparent;"></div></div>
<div class="rb-box" style="border-color:#bbf7d0;background:#f0fdf4;">
<div class="rb-box-label">Execute</div>
<div class="rb-box-text">Sell overweight (HIFO lots) → Wait T+1/T+2 settlement → Buy underweight</div>
<div class="rb-box-sub"><span class="badge assume">Assumption</span> Sell first, buy second — proceeds from settlement fund the buy leg</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-sips">
<div class="cc-card">
<div class="cc-card-header">
<span class="cc-cat" style="background:#f5f3ff;color:#7c3aed;border:1px solid #ddd6fe;">v2 Scope</span>
<span class="cc-title">SIPs</span>
<span class="cc-impact low">Not in prototype</span>
</div>
<div class="cc-rows">
<div class="cc-row">
<div class="cc-row-label">How</div>
<div class="cc-row-body">A strategy SIP distributes a fixed monthly amount across all basket funds proportional to target weights. Each fund receives (weight × monthly amount), floored to nearest NAV unit. Basket changes after a strategy re-run require full mandate cancellation and re-creation.</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Rules</div>
<div class="cc-row-body">
<ul>
<li><span class="badge reg">Regulatory</span> 30-day AMC notice period for SIP cancellation — basket changes are not instantaneous</li>
<li>Fund amounts below ₹500 per fund violate minimum lumpsum threshold — round up or exclude that fund from the SIP</li>
<li>SIP on a redeemed or cancelled folio is a common operational error — system must block it explicitly</li>
</ul>
</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Kalpi</div>
<div class="cc-row-body">
<ul>
<li>Monthly: distribute proportional to target weights · Floor to ₹500 minimum per fund</li>
<li><span class="badge impl">Prototype</span> Warn before re-run if active SIPs exist: <em>"Changing basket requires cancelling existing SIPs — takes up to 30 days"</em></li>
<li>Block new SIP creation on a folio with pending redemption — validate folio status before mandate creation</li>
</ul>
</div>
</div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Monthly SIP — ₹10,000 distributed by target weight</div>
<div class="sip-dist">
<div class="sip-row"><div class="sip-label">Fund A</div><div class="sip-bar-wrap"><div class="sip-fill" style="width:35%;background:#c0392b;">35%</div></div><div class="sip-amt">₹3,500</div></div>
<div class="sip-row"><div class="sip-label">Fund B</div><div class="sip-bar-wrap"><div class="sip-fill" style="width:30%;background:#6366f1;">30%</div></div><div class="sip-amt">₹3,000</div></div>
<div class="sip-row"><div class="sip-label">Fund C</div><div class="sip-bar-wrap"><div class="sip-fill" style="width:25%;background:#ea580c;">25%</div></div><div class="sip-amt">₹2,500</div></div>
<div class="sip-row"><div class="sip-label">Fund D</div><div class="sip-bar-wrap"><div class="sip-fill" style="width:10%;background:#888;">10%</div></div><div class="sip-amt">₹1,000</div></div>
</div>
<div style="font-size:9.5px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#bbb;margin:4px 0 8px;">Basket change flow</div>
<div style="display:flex;align-items:center;">
<div style="flex:1;padding:8px 10px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:4px 0 0 4px;font-size:10.5px;text-align:center;"><div style="font-weight:700;color:#1d4ed8;">Strategy Re-run</div><div style="color:#888;font-size:9.5px;margin-top:2px;">Basket changes</div></div>
<div style="font-size:16px;color:#ddd;padding:0 4px;">→</div>
<div style="flex:1;padding:8px 10px;background:#fff7ed;border-top:1.5px solid #fcd8b0;border-bottom:1.5px solid #fcd8b0;font-size:10.5px;text-align:center;"><div style="font-weight:700;color:#c2410c;">Cancel Old SIPs</div><div style="color:#888;font-size:9px;margin-top:3px;"><span class="badge reg" style="font-size:7.5px;">Regulatory</span> 30-day notice</div></div>
<div style="font-size:16px;color:#ddd;padding:0 4px;">→</div>
<div style="flex:1;padding:8px 10px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:0 4px 4px 0;font-size:10.5px;text-align:center;"><div style="font-weight:700;color:#15803d;">Create New SIPs</div><div style="color:#888;font-size:9.5px;margin-top:2px;">Updated basket</div></div>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-redeem">
<div class="cc-card">
<div class="cc-card-header">
<span class="cc-cat reg">Regulatory</span>
<span class="cc-title">Redemptions</span>
<span class="cc-impact high">High Impact</span>
</div>
<div class="cc-rows">
<div class="cc-row">
<div class="cc-row-label">How</div>
<div class="cc-row-body">Three partial redemption modes are available. Full exit must cancel active SIPs before submitting redemption orders — SIP continuation on a redeemed folio is a common operational error. Large debt redemptions above ₹2 Cr may span multiple days.</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Rules</div>
<div class="cc-row-body">
<ul>
<li><span class="badge impl">Prototype</span> Partial modes: <strong>Proportional</strong> (same % from all) · <strong>Overweight-first</strong> (rebalances while raising cash) · <strong>User-specified</strong></li>
<li><span class="badge impl">Prototype</span> Full exit: cancel active SIPs first, then submit redemption — system must enforce this sequence</li>
<li><span class="badge reg">Regulatory</span> Debt redemptions &gt;₹2 Cr may hit daily AMC limits — multi-day execution required</li>
</ul>
</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Kalpi</div>
<div class="cc-row-body">
<ul>
<li><span class="badge impl">Prototype</span> Show estimated proceeds + STCG/LTCG tax impact per fund before confirming any redemption</li>
<li><span class="badge impl">Prototype</span> Full exit: auto-initiate SIP cancellation flow · Block redemption submission until cancellation is confirmed</li>
<li><span class="badge impl">Prototype</span> &gt;₹2 Cr debt: surface multi-day execution schedule before confirmation</li>
</ul>
</div>
</div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Partial redemption — ₹20,000 from a ₹1,00,000 portfolio (actual: A=40% B=30% C=20% D=10% · target: A=35% C=25%)</div>
<div class="rd-modes">
<div class="rd-col">
<div class="rd-head"><div class="rd-head-title">Proportional</div><div class="rd-head-sub">Same % from each fund</div></div>
<div class="rd-cell"><div class="rd-fund">Fund A <span style="font-size:9px;color:#c0392b;">(overweight)</span></div><div class="rd-amt">₹8,000</div><div class="rd-note">20% of ₹40,000</div></div>
<div class="rd-cell"><div class="rd-fund">Fund B (on target)</div><div class="rd-amt">₹6,000</div><div class="rd-note">20% of ₹30,000</div></div>
<div class="rd-cell"><div class="rd-fund">Fund C <span style="font-size:9px;color:#15803d;">(underweight)</span></div><div class="rd-amt">₹4,000</div><div class="rd-note">20% of ₹20,000</div></div>
<div class="rd-cell"><div class="rd-fund">Fund D (on target)</div><div class="rd-amt">₹2,000</div><div class="rd-note">20% of ₹10,000</div></div>
<div class="rd-cell rd-total"><div class="rd-fund">Total</div><div class="rd-amt">₹20,000</div><div class="rd-note">No rebalancing effect</div></div>
</div>
<div class="rd-col">
<div class="rd-head"><div class="rd-head-title">Overweight-first</div><div class="rd-head-sub">Rebalances while raising cash</div></div>
<div class="rd-cell"><div class="rd-fund">Fund A <span style="font-size:9px;color:#c0392b;">(overweight)</span></div><div class="rd-amt">₹12,000</div><div class="rd-note">Sell most — corrects drift</div></div>
<div class="rd-cell"><div class="rd-fund">Fund B (on target)</div><div class="rd-amt">₹6,000</div><div class="rd-note">Proportional share</div></div>
<div class="rd-cell"><div class="rd-fund">Fund C <span style="font-size:9px;color:#15803d;">(underweight)</span></div><div class="rd-amt">₹0</div><div class="rd-note">Protected — not sold</div></div>
<div class="rd-cell"><div class="rd-fund">Fund D (on target)</div><div class="rd-amt">₹2,000</div><div class="rd-note">Proportional share</div></div>
<div class="rd-cell rd-total"><div class="rd-fund">Total</div><div class="rd-amt">₹20,000</div><div class="rd-note">Portfolio rebalanced on exit</div></div>
</div>
<div class="rd-col">
<div class="rd-head"><div class="rd-head-title">User-specified</div><div class="rd-head-sub">Full manual control</div></div>
<div class="rd-cell"><div class="rd-fund">Fund A</div><div class="rd-amt" style="color:#aaa;">— user input</div><div class="rd-note">&nbsp;</div></div>
<div class="rd-cell"><div class="rd-fund">Fund B</div><div class="rd-amt" style="color:#aaa;">— user input</div><div class="rd-note">&nbsp;</div></div>
<div class="rd-cell"><div class="rd-fund">Fund C</div><div class="rd-amt" style="color:#aaa;">— user input</div><div class="rd-note">&nbsp;</div></div>
<div class="rd-cell"><div class="rd-fund">Fund D</div><div class="rd-amt" style="color:#aaa;">— user input</div><div class="rd-note">&nbsp;</div></div>
<div class="rd-cell rd-total"><div class="rd-fund">Total</div><div class="rd-amt">₹20,000</div><div class="rd-note">Must equal target amount</div></div>
</div>
</div>
</div>
</div>
</div>

<div class="cc-panel" id="cc-practical">
<div class="cc-card">
<div class="cc-card-header">
<span class="cc-cat data">Infrastructure</span>
<span class="cc-title">Practical Constraints</span>
<span class="cc-impact med">Med Impact</span>
</div>
<div class="cc-rows">
<div class="cc-row">
<div class="cc-row-label">How</div>
<div class="cc-row-body">Indian MF execution runs on a single-NAV-per-day cycle. All orders route through BSE Star MF. ISIN is the stable fund identifier — scheme names change after rationalisation, ISINs do not.</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Rules</div>
<div class="cc-row-body">
<ul>
<li><span class="badge reg">Regulatory</span> NAV published once daily after market close — no intra-day pricing for any MF</li>
<li><span class="badge assume">Assumption</span> BSE Star MF: broadest AMC coverage, single API integration starting point</li>
<li><span class="badge assume">Assumption</span> Use ISIN as canonical fund identifier — scheme names change post-rationalisation, ISINs are stable</li>
</ul>
</div>
</div>
<div class="cc-row">
<div class="cc-row-label">Kalpi</div>
<div class="cc-row-body">All operational edge cases handled at design time — never silently skip or partially execute without user notification.</div>
</div>
</div>
<div class="cc-viz">
<div class="cc-viz-title">Operational edge cases</div>
<table class="ec-table">
<thead><tr><th>Scenario</th><th>Detect</th><th>Handle</th><th>Notify user</th></tr></thead>
<tbody>
<tr>
<td>Market holiday</td>
<td>BSE/NSE calendar check before submission</td>
<td>Queue order for next business day — do not submit</td>
<td>Before confirmation: "Orders will execute on [next date]"</td>
</tr>
<tr>
<td>AMC downtime</td>
<td>API error / timeout from BSE Star MF</td>
<td>Retry with exponential backoff · Max 3 attempts</td>
<td>After 3rd failure: "Fund X order failed — retry tomorrow"</td>
</tr>
<tr>
<td>Failed payment</td>
<td>Payment gateway callback: declined or timeout</td>
<td>Halt entire batch — no partial execution</td>
<td>Immediately: "Payment failed — no orders were placed"</td>
</tr>
<tr>
<td>Folio-bank mismatch</td>
<td>AMC KYC validation at onboarding</td>
<td>Block folio creation until bank details reconciled</td>
<td>At onboarding: "Bank account doesn't match KYC records"</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>

---

*Kalpi PM Assignment — Hridyanshu Singhal, June 2026*
