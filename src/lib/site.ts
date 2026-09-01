export const SITE = {
  name: "Alluvium",
  url: "https://alluviumbi.com",
  title: "Alluvium | Strategic Power BI Consulting",
  description:
    "Strategic Power BI consulting for C-suite and BI leaders at mid-sized companies. Conversational analytics on a certified semantic model. Book a 30-minute consult.",
  locale: "en_US",
  region: "United States",
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/power-bi-quickstart", label: "Quickstart" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;
