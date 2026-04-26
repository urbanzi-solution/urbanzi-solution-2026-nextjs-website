export default function sitemap() {
  const baseUrl = "https://www.urbanzi.in";
  
  const routes = [
    "",
    "/about",
    "/contact",
    "/product/gym-application",
    "/products/whatsapp-marketing-software-india",
    "/products/momentry-digital-invitations",
    "/portfolio/case-studies",
    "/portfolio/case-studies/arrow-cabs",
    "/portfolio/case-studies/joseco-furniture",
    "/portfolio/clients",
    "/clients",
    "/services",
    "/services/app-development",
    "/services/cybersecurity",
    "/services/digital-marketing",
    "/services/ecommerce-solutions",
    "/services/graphic-design-animation",
    "/services/seo",
    "/services/software-development",
    "/services/ui-ux-design",
    "/services/web-development",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-04-26",
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
