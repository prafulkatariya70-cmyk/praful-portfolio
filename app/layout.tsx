import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prafful Katariya | Data Analyst Portfolio",
    template: "%s | Prafful Katariya",
  },

  description:
    "Data Analyst passionate about transforming raw data into meaningful business insights using SQL, Python, Power BI, Excel, and Machine Learning. Explore real-world analytics projects, interactive dashboards, and end-to-end data solutions.",

  keywords: [
    "Prafful Katariya",
    "Prafful",
    "Data Analyst",
    "Data Analytics",
    "Business Intelligence",
    "Business Analyst",
    "SQL",
    "Python",
    "Power BI",
    "Excel",
    "Machine Learning",
    "Data Science",
    "Dashboard",
    "Portfolio",
    "ETL",
    "Data Visualization",
    "GitHub Portfolio",
  ],

  authors: [
    {
      name: "Prafful Katariya",
    },
  ],

  creator: "Prafful Katariya",

  publisher: "Prafful Katariya",

  metadataBase: new URL("https://prafulkatariya.site"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Prafful Katariya | Data Analyst Portfolio",

    description:
      "Explore real-world SQL, Python, Power BI, Excel and Machine Learning projects with interactive dashboards and business analytics solutions.",

   url: "https://prafulkatariya.site",

    siteName: "Prafful Katariya Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prafful Katariya Data Analyst Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Prafful Katariya | Data Analyst Portfolio",

    description:
      "SQL • Python • Power BI • Excel • Machine Learning",

    images: ["/og-image.png"],
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
};

export const viewport: Viewport = {
  themeColor: "#09111D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#09111D] text-white">
        {children}
      </body>
    </html>
  );
}