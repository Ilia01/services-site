import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/", disallow: "/sample/" }, sitemap: "https://services.iliagoginashvili.com/sitemap.xml" };
}
