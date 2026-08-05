import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "She Owns | Women-First Real Estate Investment in Dubai",
  description:
    "An initiative by Aurex Privy in collaboration with Being She to empower women through real estate education, exclusive developer offers, flexible payment structures, and financial independence in Dubai.",
  keywords: [
    "She Owns",
    "Aurex Privy",
    "Being She",
    "Dubai Real Estate",
    "Women Investors",
    "Financial Independence",
    "Property Investment Dubai",
    "Women Empowerment",
  ],
  authors: [{ name: "She Owns Initiative" }],
  openGraph: {
    title: "She Owns | Women-First Real Estate Investment in Dubai",
    description:
      "Build wealth, confidence, and community through real estate investment in Dubai. Launched by Aurex Privy x Being She.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F8F5EF] text-[#2B2B2B] font-sans selection:bg-[#D6BB88]/30 selection:text-[#21102F]">
        {children}
      </body>
    </html>
  );
}
