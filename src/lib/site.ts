export const SITE = {
  name: "Alluvium",
  url: "https://alluviumbi.com",
  title: "Alluvium | Strategic Power BI Consulting",
  description:
    "Strategic Power BI and practical AI advisory for C-suite and BI leaders at mid-sized companies. Book a 30-minute consult.",
  locale: "en_US",
  region: "Wisconsin, United States",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/power-bi-quickstart", label: "Quickstart" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
