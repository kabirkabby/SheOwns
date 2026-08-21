import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#21102F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sheownsdubai.com"),
  title: {
    default: "SheOwns | Women-First Real Estate Investment & Advisory in Dubai",
    template: "%s | SheOwns Dubai",
  },
  description:
    "SheOwns is a private real estate advisory and empowerment initiative by Aurex Privy and Being She. Learn Dubai property investment, access developer-negotiated monthly payment plans, and build financial sovereignty with 15,000+ female leaders.",
  keywords: [
    "SheOwns",
    "SheOwns Dubai",
    "Women Real Estate Investors Dubai",
    "Aurex Privy Real Estate",
    "Being She",
    "Dubai Property Investment for Women",
    "Dubai Real Estate Advisory",
    "Off-Plan Payment Plans Dubai",
    "Dubai Golden Visa Real Estate",
    "Female Wealth Creation Dubai",
    "Women Financial Independence UAE",
    "Aparna Bajpai",
    "Gaurav Sharma",
  ],
  authors: [{ name: "SheOwns Initiative", url: "https://sheownsdubai.com" }],
  creator: "Aurex Privy & Being She",
  publisher: "SheOwns",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://sheownsdubai.com",
  },
  openGraph: {
    title: "SheOwns | Women-First Real Estate Investment in Dubai",
    description:
      "A private advisory initiative by Aurex Privy × Being She. Learn Dubai property investment, access developer payment plans, and claim your seat in wealth ownership.",
    url: "https://sheownsdubai.com",
    siteName: "SheOwns Dubai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_new_bg.jpg",
        width: 1200,
        height: 630,
        alt: "SheOwns — Women-First Real Estate Investment in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SheOwns | Women-First Real Estate Investment in Dubai",
    description:
      "A private advisory initiative by Aurex Privy × Being She empowering women through real estate education and wealth ownership in Dubai.",
    images: ["/images/hero_new_bg.jpg"],
    creator: "@SheOwnsDubai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/sheowns_logo.png",
  },
  category: "Real Estate & Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sheownsdubai.com/#organization",
        name: "SheOwns",
        url: "https://sheownsdubai.com",
        logo: {
          "@type": "ImageObject",
          url: "https://sheownsdubai.com/images/sheowns_logo.png",
        },
        description:
          "Women-first real estate advisory initiative launched by Aurex Privy Real Estate in collaboration with Being She.",
        telephone: "+971501815561",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite no. 1509, The Exchange Tower, Business Bay",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        sameAs: [
          "https://instagram.com/aurexprivy",
          "https://www.linkedin.com/in/gauravaurexprivy",
          "https://aurexprivy.com",
          "https://beingshe.com/",
          "https://wa.me/971501815561",
        ],
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://sheownsdubai.com/#realestate",
        name: "SheOwns Advisory",
        parentOrganization: {
          "@id": "https://sheownsdubai.com/#organization",
        },
        telephone: "+971501815561",
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite no. 1509, The Exchange Tower, Business Bay",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
        areaServed: {
          "@type": "City",
          name: "Dubai",
        },
      },
      {
        "@type": "Event",
        name: "Emirati Women's Day Open House",
        description: "Exclusive masterclass and open house for women investors in Dubai.",
        startDate: "2026-08-28T16:00:00+04:00",
        endDate: "2026-08-28T20:00:00+04:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: {
          "@type": "Place",
          name: "Danube Sales Gallery",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sheikh Zayed Road",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
        },
        organizer: {
          "@id": "https://sheownsdubai.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F5EF] text-[#2B2B2B] font-sans selection:bg-[#D6BB88]/30 selection:text-[#21102F]">
        {children}
      </body>
    </html>
  );
}
