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

<script>
(function(){
  document.querySelectorAll('.comp-filters input[type=checkbox]').forEach(function(cb){
    cb.addEventListener('change', function(){
      var row = document.querySelector('tr[data-row="'+this.dataset.row+'"]');
      if(row) row.style.display = this.checked ? '' : 'none';
      this.closest('.chip').classList.toggle('active', this.checked);
    });
  });
})();
</script>

### Competitive Summary

**The white space:** No Indian platform combines analytical depth + transparent strategy building + execution in a single flow. Kalpi is the only product where a user can define their own screening rules, assign weights, score funds, and invest — without leaving the platform or accepting someone else's methodology.

---

## 2. Mutual Fund Framework

### Filtering
Filters define the floor — they eliminate the ineligible, not identify the best. <span class="badge impl">Prototype</span> All filters use AND logic; a fund that fails any single condition is out.

- <span class="badge impl">Prototype</span> **Minimum viability gates** apply to every strategy without exception: AUM ≥ ₹500 Cr <span class="badge assume">Assumption</span> (below this, large redemptions can move the NAV), Fund Age ≥ 3 years <span class="badge assume">Assumption</span> (insufficient data before this), Direct plan must exist
- **Qualitative gates:** Expense ratio cap >1.2% for equity <span class="badge assume">Assumption</span>, manager tenure floor, <span class="badge reg">Regulatory</span> SEBI riskometer alignment with the user's declared risk tolerance
- **Section-specific gates:** For Debt — modified duration and credit quality (AAA %, Sovereign %) matter. For Hybrid — verify actual equity/debt allocation matches the mandate
- <span class="badge impl">Prototype</span> **UX principle:** Show live fund count as filters are added. Warn below 5 funds; never block. Pre-populate sensible defaults so users aren't starting from zero

### Ranking
Ranking orders eligible funds from best to worst. Raw metric values across different scales (Sharpe ratio vs AUM vs CAGR %) aren't directly comparable — the solution is percentile normalisation.

- <span class="badge impl">Prototype</span> Every metric is converted to a 0–100 percentile rank within the filtered pool. Direction is pre-set: lower expense ratio → higher rank
- <span class="badge impl">Prototype</span> User-defined weights are applied across selected metrics to produce a single composite score per fund
- **Metric priority:** Prefer risk-adjusted returns (Sharpe, Sortino, Alpha) and rolling returns over trailing returns. 1Y return is the least reliable signal — highly sensitive to the measurement start date
- **Pool-relative scoring:** A fund with 12% 3Y CAGR scores differently depending on what else is in the pool. This is intentional — ranking is always relative to the selected universe

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

- <span class="badge impl">Prototype</span> **Equal (1/N):** Every fund receives the same allocation. Transparent baseline — no assumptions about relative quality
- <span class="badge impl">Prototype</span> **Score-Based:** Capital proportional to composite score. Two modes: *Softmax* compresses the distribution so the top fund doesn't dominate; *Linear* distributes directly proportional to score
- <span class="badge impl">Prototype</span> **Risk-Based (Inverse Volatility):** Lower-volatility funds receive more capital. Defensive by default — useful for capital-preservation mandates
- <span class="badge impl">Prototype</span> **Category-Based:** User sets Equity / Debt / Hybrid split first, then distributes equally within each category. Asset allocation decision is made upstream of fund selection
- <span class="badge impl">Prototype</span> **Rupee allocation:** Each fund's amount = target weight × capital, floored to the nearest NAV unit. Residual from rounding surfaces as uninvested cash
- <span class="badge impl">Prototype</span> Warn (don't block) if any fund's allocation falls below the ₹500 minimum lumpsum threshold
- <span class="badge assume">Assumption</span> Flag if a single fund exceeds 40% of portfolio weight after allocation — concentration risk alert before the user proceeds to rebalancing setup

---

## 3. Key Challenges & Corner Cases

### Fund Overlap
**The problem:** A user selects 8 funds believing they are well-diversified. In reality, every fund in the basket holds HDFC Bank, Reliance, and Infosys at >5% weight — they have effectively bought the same 30 stocks eight times over. Diversification across fund names provides no actual risk reduction.

**Why it happens:** Return-chasing selection naturally converges on the same high-performing large-caps. Flexi Cap, Large Cap, and Aggressive Hybrid funds in particular overlap heavily during bull markets.

**Kalpi's response:**
- Detect overlap at construction time by comparing top holdings across selected funds
- <span class="badge assume">Assumption</span> Flag pairs with >60% holdings overlap: "Fund A and Fund B share 68% of their top holdings"
- Surface the most repeated underlying stocks: "HDFC Bank appears in 6 of your 8 funds"
- <span class="badge impl">Prototype</span> Warn, don't block — a user may intentionally concentrate; inform them clearly and let them proceed
- Future: show a portfolio-level stock heatmap so users can visually see the true underlying diversification

---

### AMC Concentration
**The problem:** A scoring model that rewards consistent performance may end up selecting 4–5 funds from a single fund house — say, HDFC AMC or SBI Funds. The user believes they have a diversified basket; they actually have a concentrated bet on one AMC's operational health, leadership, and compliance culture.

**Why it matters:** AMC-level risk is distinct from fund-level risk. A regulatory sanction, a key fund manager exodus, or a compliance failure at the AMC level can affect all its funds simultaneously.

**Kalpi's response:**
- <span class="badge assume">Assumption</span> Flag when any single AMC represents >25% of the basket's total allocation
- Surface as a diagnostic: "3 of your 8 funds are from HDFC AMC, representing 42% of capital"
- <span class="badge assume">Assumption</span> Allow a soft constraint at construction time: "max 2 funds per AMC" — applies before final selection
- Do not enforce automatically; a user with strong conviction on an AMC's quality should be able to override with explicit acknowledgement

---

### Category Concentration
**The problem:** Even when a user selects multiple universes (e.g., Large Cap + Flexi Cap + Multi Cap), the composite score may rank all top-N funds from one sub-category — because that category happened to perform best during the metric window being used.

**Real example:** In 2021, Small Cap funds dominated 3Y CAGR rankings. A return-heavy scoring model applied to a basket that also includes Large Cap would fill most slots with Small Cap funds, defeating the intent of the multi-universe selection.

**Kalpi's response:**
- <span class="badge assume">Assumption</span> Warn when >50% of the selected Top N funds come from a single sub-universe
- Make the imbalance visible before the user carries funds to the portfolio: "7 of 10 selected funds are Flexi Cap"
- Future: offer a "universe-proportionate" mode that guarantees at least one fund per selected universe in the final basket
- Let the user manually pin a fund from an underrepresented universe if they want explicit coverage

---

### Style Drift
**The problem:** Fund mandates are declared; actual portfolio behaviour can diverge over time. A Flexi Cap fund manager who gradually shifts toward large-caps is not violating any rule — but the user who selected the fund for mid/small-cap exposure is getting something different from what they intended.

**Real example:** Several Flexi Cap funds post-2020 maintained 80%+ large-cap allocation for extended periods, effectively behaving as Large Cap funds without re-classifying. Users holding these in a "diversified" basket had duplicate large-cap exposure.

**Kalpi's response:**
- Monitor actual portfolio composition metrics (large cap %, mid cap %, small cap %) per fund over rolling 6-month windows
- <span class="badge assume">Assumption</span> Flag in portfolio diagnostics: "Fund X is classified as Flexi Cap but has held >80% large-cap allocation for the last 6 months"
- Quarterly strategy re-runs naturally surface this — if the user has a "large cap %" filter or ranking factor, a drifted fund will score differently on the latest data
- In a future state: automated drift alerts triggered by composition thresholds, not just periodic re-runs

---

### Survivorship Bias
**The problem:** Any analysis of historical MF performance — including backtests — only evaluates funds that exist today. Funds that were wound up or merged, typically because of poor performance or mismanagement, are invisible. This systematically inflates the apparent historical returns of any strategy.

**Why it's insidious:** A backtest showing "this strategy returned 15% CAGR over 10 years" is likely overstated because it never encountered any of the funds that were shut down during that period. The strategy looks better than it would have performed in practice.

**Kalpi's response:**
- <span class="badge impl">Prototype</span> Acknowledge this limitation explicitly wherever historical performance is shown: "Backtest results exclude funds that were wound up or merged during the period; actual returns may be lower"
- Tag funds in the data layer that have absorbed a merger — the track record pre-merger belongs to a different entity
- For live strategies, survivorship bias is less relevant — the strategy runs on currently existing funds; but any "strategy comparison" over historical periods must carry this caveat prominently

---

### Fund Mergers
**The problem:** <span class="badge reg">Regulatory</span> SEBI's 2018 mutual fund rationalisation directive forced AMCs to merge overlapping funds within the same category. As a result, many funds today carry a track record that is stitched together from two or more different entities — with different mandates, managers, AUM profiles, and investment styles. A "5Y return" on such a fund is not a continuous, comparable number.

**Real example:** Several Corporate Bond funds today absorbed Short Duration funds in 2018. Their 5Y return includes a period when the fund had a shorter duration mandate and a different manager — the comparison to a peer with a clean 5Y history is misleading.

**Kalpi's response:**
- <span class="badge impl">Prototype</span> Tag funds that underwent a merger in the last 5 years with a visible label: "Post-merger track record"
- <span class="badge assume">Assumption</span> For these funds, downweight or exclude long-term trailing metrics (5Y CAGR, inception-to-date return) from ranking; rely on shorter windows where the current mandate is intact
- Surface this in the fund detail view so users understand the data context before assigning high ranking weight to long-term metrics

---

### New Funds with Limited History
**The problem:** NFOs and funds that were recently reclassified under SEBI's categories have fewer than 3 years of data. Applying the standard percentile ranking formula to these funds produces unreliable or misleading scores — they rank either artificially high (on limited strong recent data) or low (due to gaps in multi-year metrics).

**Situations where this appears:**
- New fund launches (NFOs) from established AMCs trying to plug category gaps
- Funds reclassified post-2018 that effectively have a new mandate but partial historical data
- Passively managed ETFs and index funds launched in the last 2 years

**Kalpi's response:**
- <span class="badge impl">Prototype</span> The default Fund Age ≥ 3 years filter eliminates most of these from the eligible pool
- <span class="badge impl">Prototype</span> If a user removes the age filter, warn: "X funds in your pool have less than 3 years of data; their 3Y/5Y rankings are unreliable"
- <span class="badge impl">Prototype</span> Do not impute scores for missing long-term metrics — exclude the fund from those specific metric calculations and score it only on available data with a proportional weight adjustment
- Future: offer a dedicated "Emerging Funds" view where new funds are evaluated only on metrics they have sufficient data for (1Y rolling return, expense ratio, fund house track record)

---

### Missing Data
**The problem:** Not every metric is available for every fund, and the availability varies by fund type, AMC disclosure quality, and data provider. Debt-specific metrics (YTM, Modified Duration, Credit Quality breakdown) don't apply to equity funds. Some smaller AMCs update portfolio composition quarterly rather than monthly. Applying a ranking formula with missing inputs silently produces wrong scores.

**Why naive handling fails:**
- Imputing zero for a missing AAA% would score the fund as having zero AAA exposure — unfairly penalising it
- Imputing the pool mean makes the fund appear average when it's actually unknown — different problem
- Excluding the fund entirely from the pool wastes a potentially valid candidate

**Kalpi's response:**
- <span class="badge impl">Prototype</span> For any fund missing a specific ranked metric: exclude it from that metric's percentile computation only; redistribute that metric's weight proportionally to remaining metrics in the composite score
- <span class="badge impl">Prototype</span> Surface data gaps transparently: "3 funds were scored on 4 of 5 metrics — Sharpe 3Y data was unavailable for these funds"
- <span class="badge assume">Assumption</span> If >30% of the ranked pool is missing a metric, warn the user: "This metric has low coverage in your selected universe — consider removing it from ranking or choosing a better-covered alternative"
- <span class="badge assume">Assumption</span> Track data freshness per metric; flag when a fund's holdings data is more than 2 months stale

---

### Exit Loads
**The problem:** Most equity mutual funds charge a 1% exit load if redeemed within 12 months of purchase. Some debt funds charge 0.5% within 3–6 months. Rebalancing without accounting for these loads can silently erode returns — a drift correction that frees up ₹80 of value but triggers ₹100 in exit load is a net loss, not a gain.

**Fund-type reference:** <span class="badge reg">Regulatory</span>

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
- <span class="badge impl">Prototype</span> Surface exit load status per fund in the portfolio view — show which funds are within their load window and when they exit it
- <span class="badge impl">Prototype</span> Before any rebalancing order is confirmed, show the estimated exit load cost per fund being sold and the net benefit after load
- <span class="badge impl">Prototype</span> If exit load cost exceeds the value of drift correction for a fund, recommend skipping that specific trade: "Selling Fund X now incurs ₹420 in exit load; drift is within tolerance — skip for this cycle"
- <span class="badge assume">Assumption</span> Recommend quarterly or wider rebalancing cadence for equity-heavy strategies to avoid load windows
- Future: smart rebalancing that automatically excludes funds within their load window from sell candidates unless drift is severe

---

### Tax Implications
**The problem:** Every MF redemption in India has a tax consequence that depends on fund type, holding period, and the investor's income slab. Getting this wrong — especially the STCG vs LTCG threshold for equity — meaningfully reduces post-tax returns. The 2023 debt fund tax change and 2024 equity LTCG rate change have made this landscape more complex than most investors realise.

**Current tax regime (post-Budget 2024):** <span class="badge reg">Regulatory</span>

| Fund Type | Holding Period | Tax Treatment |
|---|---|---|
| Equity (>65% equity) | < 12 months | 20% STCG (flat) |
| Equity (>65% equity) | ≥ 12 months | 12.5% LTCG on gains above ₹1.25L per FY |
| Debt (< 35% equity) | Any | Slab rate — up to 30% for highest bracket |
| Hybrid (35–65% equity) | < 36 months | Slab rate |
| Hybrid (35–65% equity) | ≥ 36 months | 20% (verify per latest budget) |

**Key nuances:**
- <span class="badge reg">Regulatory</span> **Debt fund tax shift (2023):** Indexation benefit was removed. Debt MFs are now taxed at slab rate regardless of holding period — making them no more tax-efficient than fixed deposits for investors in the 30% bracket. Arbitrage funds (taxed as equity, FD-like returns) are often a better alternative
- <span class="badge reg">Regulatory</span> **LTCG exemption:** First ₹1.25L of equity LTCG per financial year is exempt — relevant for portfolio sizing and staggered redemption planning
- <span class="badge reg">Regulatory</span> **No wash-sale rule:** Unlike the US, India does not prohibit selling a fund at a loss and immediately repurchasing it. Tax-loss harvesting is clean — a loss can offset capital gains elsewhere or be carried forward for 8 years

**Kalpi's response:**
- <span class="badge impl">Prototype</span> Before any rebalancing, show estimated tax impact per fund: STCG or LTCG, estimated liability at the user's declared tax slab
- <span class="badge impl">Prototype</span> Flag funds approaching the 12-month mark: "Hold 23 more days to qualify for LTCG rate — saves an estimated ₹1,200"
- <span class="badge impl">Prototype</span> For debt fund holdings, surface the tax-equivalence note for high-bracket users: "At 30% slab, this Corporate Bond fund is taxed identically to an FD — consider an arbitrage fund for equivalent risk with equity taxation"
- Future: tax-optimised rebalancing mode that sequences sells to minimise current financial year tax outflow — selling LTCG-eligible lots first, harvesting available losses before year-end

---

## 4. Execution Design

### Initial Allocation
- <span class="badge impl">Prototype</span> Each fund receives a rupee allocation = target weight × capital, floored to the nearest NAV unit. Residual becomes uninvested cash
- <span class="badge reg">Regulatory</span> **NAV cut-off:** 3:00 PM for equity and most hybrid funds; 1:00 PM for large debt orders (≥₹2 Cr). Orders after cut-off get next business day's NAV
- <span class="badge reg">Regulatory</span> **Settlement:** Equity T+1 redemption, T+2 allotment. Debt T+1 both ways. Liquid T+0 redemption
- <span class="badge reg">Regulatory</span> **Practical gates:** KYC and PAN verification must be complete. UPI/net banking handles up to ₹2L per transaction; RTGS for large amounts. First investment with an AMC creates a folio

### Rebalancing
- <span class="badge assume">Assumption</span> **Sequence always: sell first, then buy.** Sell overweight positions → wait for settlement → use proceeds to buy underweight. Buying first creates temporary overexposure and may require bridging capital
- <span class="badge impl">Prototype</span> **Before executing:** Check exit load applicability per fund. If the cost of exit load + estimated tax exceeds the benefit of drift correction, skip and log
- <span class="badge reg">Regulatory</span> **Tax-lot ordering:** Selling highest-cost lots first (HIFO) minimises taxable gains. Indian MF default is FIFO — HIFO requires explicit selection at the AMC level
- <span class="badge assume">Assumption</span> Use Growth option only — IDCW distributions move NAV unpredictably and complicate weight calculations

### SIPs *(v2 scope)*
- A strategy SIP distributes a fixed monthly amount across all basket funds proportional to target weights
- Changing the basket after a strategy re-run requires cancelling old SIP mandates and creating new ones — operationally non-trivial; design must account for this
- <span class="badge reg">Regulatory</span> 30-day AMC notice period for SIP cancellation

### Redemptions
- <span class="badge impl">Prototype</span> **Partial — three modes:** Proportional (sell same % from all funds), Overweight-first (rebalances and raises cash simultaneously), or User-specified
- <span class="badge impl">Prototype</span> **Full exit:** Cancel active SIPs before submitting redemption orders — SIP continuation on a redeemed folio is a common operational error
- <span class="badge reg">Regulatory</span> Large debt redemptions (>₹2 Cr) may hit daily AMC limits and require multi-day execution

### Practical Constraints
- <span class="badge reg">Regulatory</span> NAV is published once daily after market close — no intra-day pricing for MFs
- <span class="badge assume">Assumption</span> **Order routing:** BSE Star MF is the recommended integration starting point (broadest AMC coverage, single API)
- <span class="badge assume">Assumption</span> **Scheme code stability:** Fund names change post-rationalisation; ISIN is stable across renames — use ISIN as the canonical identifier
- **Operational edge cases to handle:** Market holidays (queue orders), AMC downtime (retry with backoff), failed payments (notify user immediately, never silent-skip), folio-bank name mismatch (validate at onboarding, not at redemption)

---

*Kalpi PM Assignment — Hridyanshu Singhal, June 2026*
