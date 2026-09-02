export const SITE = {
  name: "Alluvium",
  url: "https://alluviumbi.com",
  title: "Power BI consulting for mid-market | Alluvium",
  description:
    "Power BI consulting for mid-sized companies: semantic models, dashboard optimization, and trusted numbers in the meeting. Book a Session.",
  locale: "en_US",
  region: "United States",
} as const;

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
      { href: "/power-bi-dashboard-optimization-ai-insights", label: "Dashboard optimization" },
      { href: "/analytics-ai-strategy-roadmap", label: "Analytics strategy roadmap" },
      { href: "/power-bi-training", label: "Power BI training" },
    ],
    posts: [
      { href: "/blog/conversational-analytics-needs-a-trusted-model", label: "Conversational analytics needs a trusted model" },
      { href: "/blog/ask-the-model-dont-screenshot", label: "Ask the model, don’t screenshot" },
      { href: "/blog/semantic-model-is-the-product", label: "The semantic model is the product" },
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
