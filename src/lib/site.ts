export const SITE = {
  name: "Alluvium",
  url: "https://alluviumbi.com",
  title: "Power BI consulting for mid-sized firms | Alluvium",
  description:
    "Power BI consulting for mid-sized companies. Trusted numbers in the meeting, not more dashboards. Quickstart, models, training, and advisory. Book a Session.",
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
