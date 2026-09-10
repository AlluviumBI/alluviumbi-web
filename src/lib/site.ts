export const SITE = {
  name: "Alluvium",
  url: "https://www.alluviumbi.com",
  title: "Power BI consulting for mid-market | Alluvium",
  description:
    "Power BI consulting for mid-sized companies: semantic models, dashboard optimization, and trusted numbers in the meeting. Book a Session.",
  locale: "en_US",
  region: "United States",
} as const;

/** Absolute www URL. Homepage keeps a trailing slash; all other paths have none. */
export function absUrl(path: string): string {
  if (!path || path === "/") return SITE.url + "/";
  const p = path.startsWith("/") ? path : "/" + path;
  return SITE.url + p.replace(/\/+$/, "");
}

/** Unique <title>: primary query | Alluvium. Hard max 60 characters. */
export function pageTitle(query: string): string {
  const suffix = " | Alluvium";
  const maxQuery = 60 - suffix.length;
  let q = query.replace(/\s+/g, " ").trim();
  if (q.endsWith(suffix)) q = q.slice(0, -suffix.length).trim();
  if (q.length > maxQuery) {
    q = q.slice(0, maxQuery).replace(/\s+\S*$/, "").replace(/[–—,:;.]+$/, "").trim();
    if (q.length > maxQuery) q = q.slice(0, maxQuery).trim();
  }
  return `${q}${suffix}`;
}

export function seoTitle(primary: string): string {
  return pageTitle(primary);
}

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/power-bi-quickstart", label: "Quickstart" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
  { href: "/analytics-ai-strategy-roadmap", label: "Analytics strategy roadmap" },
  { href: "/data-project-management-change-leadership", label: "Data & Analytics project management" },
  { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
  { href: "/managed-advisory-retainer", label: "Managed advisory retainer" },
  { href: "/power-bi-training", label: "Training" },
  { href: "/conversational-analytics", label: "Conversational analytics" },
] as const;

export type Crumb = { name: string; href: string };

export const RELATED: Record<
  string,
  { services: { href: string; label: string }[]; posts: { href: string; label: string }[] }
> = {
  "/power-bi-quickstart": {
    services: [
      { href: "/power-bi-training", label: "Power BI training" },
      { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
      { href: "/managed-advisory-retainer", label: "Managed advisory retainer" },
    ],
    posts: [
      { href: "/blog/proof-of-value-in-30-days", label: "Proof of value in 30 days" },
      { href: "/blog/first-90-days-of-a-power-bi-program", label: "First 90 days of a Power BI program" },
    ],
  },
  "/analytics-ai-strategy-roadmap": {
    services: [
      { href: "/data-project-management-change-leadership", label: "Analytics project management" },
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/conversational-analytics", label: "Conversational analytics" },
    ],
    posts: [
      { href: "/blog/semantic-model-is-the-product", label: "The semantic model is the product" },
      { href: "/blog/power-bi-strategy-alignment", label: "Power BI strategy alignment" },
      { href: "/blog/forecast-never-ties-to-actuals", label: "When forecast never ties to actuals" },
    ],
  },
  "/data-project-management-change-leadership": {
    services: [
      { href: "/power-bi-training", label: "Power BI training" },
      { href: "/analytics-ai-strategy-roadmap", label: "Analytics strategy roadmap" },
      { href: "/managed-advisory-retainer", label: "Managed advisory retainer" },
    ],
    posts: [
      { href: "/blog/analytics-programs-fail-in-delivery", label: "Analytics programs fail in delivery" },
      { href: "/blog/pmo-should-own-the-analytics-backlog", label: "PMO should own the analytics backlog" },
      { href: "/blog/the-meeting-after-go-live", label: "The meeting after go-live" },
    ],
  },
  "/power-bi-dashboard-optimization-ai-insights": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/conversational-analytics", label: "Conversational analytics" },
      { href: "/power-bi-training", label: "Power BI training" },
    ],
    posts: [
      { href: "/blog/how-to-fix-slow-power-bi-dashboards-5-proven-optimization-tips", label: "How to fix slow Power BI dashboards" },
      { href: "/blog/nobody-opens-the-dashboard", label: "Nobody opens the dashboard" },
      { href: "/blog/data-quality-shows-up-as-arguments", label: "Data quality shows up as arguments" },
    ],
  },
  "/managed-advisory-retainer": {
    services: [
      { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
      { href: "/data-project-management-change-leadership", label: "Analytics project management" },
      { href: "/power-bi-training", label: "Power BI training" },
    ],
    posts: [
      { href: "/blog/who-can-change-a-measure", label: "Who can change a measure" },
      { href: "/blog/row-level-security-who-sees-the-number", label: "Row-level security: who sees the number" },
      { href: "/blog/gateway-refresh-7am-surprise", label: "Gateway refresh and the 7am surprise" },
    ],
  },
  "/power-bi-training": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/data-project-management-change-leadership", label: "Analytics project management" },
      { href: "/managed-advisory-retainer", label: "Managed advisory retainer" },
    ],
    posts: [
      { href: "/blog/the-meeting-after-go-live", label: "The meeting after go-live" },
      { href: "/blog/change-management-for-analytics", label: "Change management for analytics" },
    ],
  },
  "/conversational-analytics": {
    services: [
      { href: "/power-bi-model-health", label: "Power BI model health" },
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
      { href: "/analytics-ai-strategy-roadmap", label: "Analytics strategy roadmap" },
    ],
    posts: [
      { href: "/blog/conversational-analytics-needs-a-trusted-model", label: "Conversational analytics needs a trusted model" },
      { href: "/blog/ask-the-model-dont-screenshot", label: "Ask the model, don’t screenshot" },
      { href: "/blog/semantic-model-is-the-product", label: "The semantic model is the product" },
    ],
  },
  "/power-bi-for-manufacturing": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-oee-gauge", label: "Alluvium OEE Gauge" },
      { href: "/how-to-choose-a-power-bi-partner", label: "How to choose a Power BI partner" },
      { href: "/power-bi-for-finance", label: "Power BI for finance" },
    ],
    posts: [
      { href: "/blog/power-bi-for-manufacturing-reporting-consulting", label: "Power BI for manufacturing reporting consulting" },
      { href: "/blog/ops-still-runs-the-plant-from-spreadsheets", label: "Why ops still runs the plant from spreadsheets" },
      { href: "/blog/manufacturing-scrap-never-makes-the-pack", label: "Manufacturing scrap that never makes the pack" },
      { href: "/blog/slow-bi-costs-manufacturing-downtime", label: "Slow BI costs manufacturing downtime" },
    ],
  },
  "/power-bi-for-finance": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-training", label: "Power BI training" },
      { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
      { href: "/power-bi-for-manufacturing", label: "Power BI for manufacturing" },
    ],
    posts: [
      { href: "/blog/power-bi-for-finance-reporting-consulting", label: "Power BI for finance reporting consulting" },
      { href: "/blog/why-month-end-still-takes-a-week", label: "Why month-end still takes a week" },
      { href: "/blog/cash-not-charts-cfo-monday", label: "Cash, not charts: CFO Monday" },
      { href: "/blog/finance-accrual-ops-cash", label: "Finance: accrual, ops, and cash" },
    ],
  },
  "/power-bi-for-supply-chain": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-for-manufacturing", label: "Power BI for manufacturing" },
      { href: "/power-bi-for-finance", label: "Power BI for finance" },
      { href: "/managed-advisory-retainer", label: "Managed advisory retainer" },
    ],
    posts: [
      { href: "/blog/inventory-is-cash-slow-stock-reporting", label: "Inventory is cash: slow stock reporting" },
      { href: "/blog/throughput-inventory-report-nobody-trusts", label: "Throughput inventory report nobody trusts" },
      { href: "/blog/ops-still-runs-the-plant-from-spreadsheets", label: "Why ops still runs the plant from spreadsheets" },
      { href: "/blog/cash-not-charts-cfo-monday", label: "Cash, not charts: CFO Monday" },
    ],
  },
  "/power-bi-for-quality": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-for-manufacturing", label: "Power BI for manufacturing" },
      { href: "/power-bi-oee-gauge", label: "Alluvium OEE Gauge" },
      { href: "/power-bi-for-finance", label: "Power BI for finance" },
    ],
    posts: [
      { href: "/blog/manufacturing-scrap-never-makes-the-pack", label: "Manufacturing scrap that never makes the pack" },
      { href: "/blog/slow-bi-costs-manufacturing-downtime", label: "Slow BI costs manufacturing downtime" },
      { href: "/blog/weekly-ops-review-is-a-slide-deck", label: "When the weekly ops review is a slide deck" },
      { href: "/blog/power-bi-for-manufacturing-reporting-consulting", label: "Power BI for manufacturing reporting consulting" },
    ],
  },
  "/power-bi-for-sales": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-for-finance", label: "Power BI for finance" },
      { href: "/power-bi-training", label: "Power BI training" },
      { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
    ],
    posts: [
      { href: "/blog/power-bi-for-sales-analytics-consulting", label: "Power BI for sales analytics consulting" },
      { href: "/blog/sales-forecast-vs-finance-bookings", label: "Sales forecast vs finance bookings" },
      { href: "/blog/dynamics-salesforce-two-systems-one-label", label: "Dynamics / Salesforce: two systems, one label" },
      { href: "/blog/forecast-never-ties-to-actuals", label: "When forecast never ties to actuals" },
    ],
  },

  "/power-bi-for-hr": {
    services: [
      { href: "/power-bi-quickstart", label: "Power BI Quickstart" },
      { href: "/power-bi-for-finance", label: "Power BI for finance" },
      { href: "/power-bi-training", label: "Power BI training" },
      { href: "/managed-advisory-retainer", label: "Managed advisory retainer" },
    ],
    posts: [
      { href: "/blog/finance-accrual-ops-cash", label: "Finance: accrual, ops, and cash" },
      { href: "/blog/finance-wont-sign-off-on-the-dashboard", label: "When finance won’t sign off on the dashboard" },
      { href: "/blog/row-level-security-who-sees-the-number", label: "Row-level security: who sees the number" },
      { href: "/blog/change-management-for-analytics", label: "Change management for analytics" },
    ],
  },
};

export const SYSTEMS = [
  "SAP",
  "Oracle",
  "Salesforce",
  "HubSpot",
  "Workday",
  "Microsoft Dynamics",
  "Infor",
  "Snowflake",
  "Google BigQuery",
  "AWS",
  "SQL Server",
  "Azure SQL",
  "QuickBooks",
  "Excel",
  "SharePoint",
  "OneDrive",
  "Google Analytics",
  "NetSuite",
  "Sage",
  "Epicor",
  "ADP",
  "ServiceNow",
  "Adobe Analytics",
  "Microsoft Fabric",
  "Jira",
  "IBM Db2",
  "SQL Server Analysis Services",
  "Karmak Fusion",
] as const;
