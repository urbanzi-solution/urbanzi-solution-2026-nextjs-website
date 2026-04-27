export default function robots() {
  return {
    rules: [
      {
        // Default rules for traditional search engines (Google, Bing, etc.)
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      {
        /**
         * AI TRAINING BLOCK
         * Prevents models from using your content for LLM training (IP Protection).
         */
        userAgent: [
          "GPTBot", 
          "ClaudeBot", 
          "Google-Extended", 
          "ccbot", 
          "GPTBot-Mobile"
        ],
        disallow: "/",
      },
      {
        /**
         * AI SEARCH & CITATION ALLOWANCE
         * Allows bots that provide real-time citations and traffic (AEO).
         */
        userAgent: [
          "OAI-SearchBot", 
          "PerplexityBot", 
          "Claude-SearchBot"
        ],
        allow: "/",
      }
    ],
    sitemap: "https://www.urbanzi.in/sitemap.xml",
  };
}
