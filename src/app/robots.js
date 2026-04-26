export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      {
        userAgent: ["GPTBot", "Claude-Web", "ClaudeBot", "PerplexityBot", "ccbot", "GPTBot-Mobile"],
        disallow: "/",
      }
    ],
    sitemap: "https://www.urbanzi.in/sitemap.xml",
  };
}
