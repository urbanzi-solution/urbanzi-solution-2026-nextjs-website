export default function sitemap() {
  const baseUrl = "https://urbanzi.in";
  
  const routes = [
    "",
    "/about",
    "/contact",
    "/blogs",
    "/careers",
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
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
