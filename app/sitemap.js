export const dynamic = "force-static";

const baseUrl = "https://spareonindia.com";

export default function sitemap() {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/about",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/products",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      path: "/satake",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/buhler",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/blogs",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      path: "/contact",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/privacy-policy",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}