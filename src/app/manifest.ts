import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SheOwns — Women-First Real Estate Investment in Dubai",
    short_name: "SheOwns",
    description:
      "A private advisory initiative by Aurex Privy and Being She empowering women through real estate education, off-market access, and financial sovereignty in Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F5EF",
    theme_color: "#21102F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
