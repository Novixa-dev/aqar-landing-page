# Future Product Concept — Novixa Affiliate & Referral Partner Program

**Status:** Future-scope proposal, not part of the landing-page MVP.  
**Business context:** Existing manual partner message offers 30% commission on sale value for sales attributed to the partner.  
**Purpose:** Define a responsible, auditable referral system that could eventually live on Novixa's main website and support Aqar first, then other approved products.

## 1. Recommendation

Do not put a full multi-level affiliate tree into the Aqar landing page. Treat it as a separate product module and start with a reliable **single-level referral programme**: registration, approval, tracked links, lead attribution, admin review, commission ledger, and payout status.

Only after single-level attribution and payout accounting are stable should Novixa add **managed partner teams**. Unlimited recruitment trees, vague earnings promises, or rewards for recruiting people without real sales create legal, operational, trust, and abuse risks. Any multi-tier scheme must be based on actual closed customer revenue, have explicit written rules, and be reviewed for the applicable jurisdictions before launch. This document is product/engineering planning, not legal advice.

## 2. Separate current commitments from future tiers

Existing partners have been offered 30% in the current manual message. Preserve those signed/accepted terms unless a partner agrees to a change. A new public tiered scheme should apply only to new participants who accept the new programme terms.

Define commission basis before coding:

- Gross contracted value or net collected revenue?
- Is VAT/tax excluded?
- Are refunds, cancellations, non-payment, and chargebacks deducted?
- Are renewals/support/customization/change requests eligible?
- When does a commission become earned: signed contract, deposit collected, or full payment?
- When are commissions paid?
- What minimum payout and permitted payment methods apply?
- Who approves disputed attribution?

Recommended default: earn commission on eligible revenue **actually collected** by Novixa, after agreed exclusions, to reduce disputes over unpaid invoices. The signed partner agreement has priority over the software behaviour.

## 3. Suggested levels (illustrative, must be approved)

Use names that reflect contribution and capability rather than pyramid-like hierarchy:

| Level | Suggested rate | Example qualification | Suggested features |
|---|---:|---|---|
| Registered Partner | 15% | Account approved; basic onboarding completed | Unique link, approved product collateral, lead registration, basic stats |
| Active Partner | 20% | One eligible, fully collected sale | Better reporting, demo booking handoff, custom tracking tags |
| Growth Partner | 25% | Three eligible sales in a rolling 12-month period and quality review | Partner pipeline, priority enablement, permission to request a managed sub-partner |
| Strategic Partner | Up to 30% | Five eligible sales plus quality/contract review | Account manager, approved co-marketing, managed team controls where enabled |

These thresholds are recommendations, not existing promises. Adjust after modeling gross margin, support costs, customization cost, sales effort, refunds, and customer acquisition economics. Do not advertise the rates until the company has approved the contracts, budget, and payout flow.

If Novixa wants a one-sale upgrade to 20%, document that exact rule and model its costs first. Promotion criteria must be objective and visible in the dashboard, with effective dates and an audit trail.

## 4. Sub-partner / managed team model

### Safer initial design

- A partner may invite or request a sub-partner only after reaching an approved level.
- Admin approval is required for the sub-partner account and assigned programme.
- Limit depth to one managed level in the first version.
- A sub-partner has their own link, dashboard, leads, and commission ledger.
- A manager sees only the aggregate/team data needed for permitted management; no unnecessary access to private customer information.
- All sales/commissions come from actual eligible business revenue. No compensation for merely recruiting participants.
- Commission rates are centrally controlled by Novixa under the accepted programme policy; a parent must not be able to promise arbitrary percentages, change historical terms, or withdraw commissions.

### Payout-budget example

If the total acquisition commission cap is 30% of eligible net collected revenue, a sub-partner could earn 20% and a manager override could be 5%, for a total of 25%, with 5% unused headroom. These are only illustrative values. The application must enforce a central commission cap and ensure that parent plus sub-partner commission can never silently exceed the approved total. If existing terms require 30% directly for the sub-partner, do not layer another commission on top without explicit financial approval.

## 5. User roles

- `Affiliate`: normal approved referrer.
- `Team Manager`: approved partner who can invite/manage permitted sub-partners.
- `Affiliate Operations Admin`: approves applications, tiers, attribution disputes, and status changes.
- `Finance/Payout Operator`: validates eligible revenue and marks payouts; separation of duties is preferable.
- `Sales Operator`: manages lead/customer pipeline; sees partner attribution but only the customer details necessary for follow-up.

Avoid granting account-management permissions to a partner based solely on level.

## 6. Pages and information architecture

### Public pages

1. Affiliate programme overview.
2. Eligibility and how it works.
3. Commission and payout policy.
4. FAQ.
5. Registration/application form.
6. Terms/privacy pages.
7. Login and password reset.

### Authenticated partner dashboard

1. Overview: pending leads, accepted leads, won sales, pending/approved/paid commission, next-level requirements.
2. My referral links: create/copy/disable links for approved products and campaigns; show source and UTM parameters.
3. Leads: status, submitted time, assigned sales owner, next step. Hide sensitive customer details from unauthorized users.
4. Sales/attribution: expected vs eligible commission, contract/revenue status, source explanation, dispute request.
5. Commission ledger: event-based records and adjustments.
6. Payouts: method, legal/payee information, verification status, payout minimum, payout requests/history.
7. Performance: clicks, qualified leads, accepted leads, deals, conversion, earnings; show exact date ranges and definitions.
8. Partner level: current tier, next threshold, verified qualifying sales, rules and effective date.
9. Team management (approved roles only): invite/status, own link, group performance, allowed visibility, deactivation request.
10. Product/collateral library: approved descriptions, demos, image assets, pitch templates, brand rules, prohibited claims.
11. Profile/security: display name, email, phone, locale, password, sessions, notification preferences, two-factor option if supported, payout details protected appropriately.
12. Support/dispute centre: attribution question, missing lead, payment question, document upload if needed.
13. Notifications: lead accepted/rejected, level change, new conversion, commission approved, payout status, policy updates.

### Admin dashboard

1. Applications and verification.
2. Partner directory/status.
3. Product/campaign management.
4. Rate/tier policy editor with effective dates and versioning.
5. Referral link and attribution audit.
6. Leads and deduplication.
7. Deal/revenue reconciliation.
8. Commission ledger and adjustment approvals.
9. Payout batches and exports.
10. Team relationships and permissions.
11. Fraud flags and abuse review.
12. Reports/audit log.
13. Programme terms and policy acceptance.

## 7. Referral link and attribution requirements

- Each partner has an immutable opaque ID, not an editable email/name field, in the referral URL.
- Store landing-page visits and lead submissions with the referral ID where consent/lawful basis allows.
- Support UTM source/medium/campaign values.
- Use a documented attribution window (example: 60 or 90 days; choose after sales-cycle analysis) and explain it in terms.
- Preserve attribution through form submissions and CRM handoffs.
- Deduplicate repeated leads by normalized company/contact rules without revealing private information to affiliates.
- Store original source and last meaningful source if the policy supports both; clearly define which one wins.
- Do not let affiliates assign a customer to themselves by editing hidden fields after the lead exists.
- Record source changes with timestamp, actor, reason, previous value, and new value.
- Support manual offline leads only through audited admin action with evidence.
- Have an attribution dispute workflow and SLA, without promising a response time before operations agrees.

## 8. Commission ledger and payout integrity

Use append-only or audit-preserving ledger entries. Do not compute payout solely from mutable dashboard counters.

Suggested commission states:

`tracked → lead_submitted → lead_accepted → opportunity → contract_signed → revenue_collected → commission_pending → commission_approved → payout_queued → paid`

Possible exceptional states: `rejected`, `duplicate`, `disputed`, `cancelled`, `refunded`, `reversed`. Every transition must have an authorized actor, time, and reason.

The dashboard should distinguish:

- Estimated commission (not earned yet).
- Pending commission (eligible event, waiting for policy period/review).
- Approved/available commission.
- Payment queued.
- Paid amount.
- Reversed/adjusted amount with explanation.

Never label an estimate as money already earned or guaranteed income.

## 9. Abuse and security cases

- Self-referrals and self-owned customer entities.
- Duplicate lead resubmissions.
- Click fraud/bots and abusive traffic patterns.
- Fake identities and multiple accounts.
- Manipulated attribution parameters.
- Unauthorized customer-data access.
- Commission stacking beyond approved caps.
- Account takeovers and payout detail changes.
- Fake marketing claims or unauthorized brand use.
- Referral partner soliciting without permission/spam.

Build rate limiting, validation, immutable audit logs, role-based access, payout-change confirmation, and admin review. Do not block legitimate traffic solely on one weak signal; flag for review.

## 10. Mobile-first experience

- All dashboard pages usable at phone widths; navigation collapses into an accessible menu.
- Tables convert to readable cards or responsive data layouts without losing status/context.
- Link-copy uses a visible confirmation and a fallback selection/copy method.
- Commission values and currencies remain readable in RTL/LTR.
- Filters work with touch and keyboard.
- Empty states explain next actions.
- Every action shows loading/success/error states.
- Don't make core tasks depend on hover.

## 11. Data model candidates

Exact schema depends on the existing app, but discuss entities such as:

- `AffiliateProfile`
- `AffiliateApplication`
- `AffiliateTier`
- `AffiliateTierPolicyVersion`
- `AffiliateProductPermission`
- `ReferralLink`
- `AttributionTouch`
- `Lead`
- `LeadAttribution`
- `Opportunity/Deal`
- `EligibleRevenueEvent`
- `CommissionLedgerEntry`
- `PayoutRequest`
- `PayoutBatch`
- `AffiliateTeamRelationship`
- `PolicyAcceptance`
- `AuditLog`
- `Notification`

Use database uniqueness, foreign keys, transaction boundaries, authorization policies, idempotency keys, and money values in integer minor units/decimal-safe types—not floating point. Never store the payout amount only as a floating JS number.

## 12. Reporting definitions

Define precisely before displaying:

- Clicks vs unique clicks.
- Leads submitted vs accepted/qualified leads.
- Opportunities vs signed deals.
- Revenue contracted vs revenue collected.
- Commission estimated vs earned vs approved vs paid.
- Conversion rate denominator and date range.
- Refund/cancellation treatment.
- Team performance vs direct performance.

Show timezone, currency, date range, and refresh timestamp where useful.

## 13. Launch plan

### Phase A — Manual/simple referral tracking

- Approved partner records.
- Unique referral links.
- Lead form attribution.
- Admin lead review.
- Manual commission ledger and payout approval.
- Basic partner dashboard.
- Written terms and direct 30% partner exceptions recorded.

### Phase B — Automated single-level affiliates

- Automatic source capture/deduplication.
- CRM deal/revenue integration.
- Tier qualification rules and versioned agreements.
- Commission ledger, payout workflow, notifications, reporting.

### Phase C — Managed partner teams

- One-level team relationships.
- Manager aggregate reporting and carefully scoped permissions.
- Parent override within a central approved cap.
- Team invitation and compliance flow.

Do not launch multi-level team commissions before attribution, revenue reconciliation, refunds, and audited payouts work reliably.
