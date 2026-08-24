import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ajithravi.dev"),
  title: "Ajith Ravi | Software Engineer · Data Scientist",
  description:
    "Software engineer and data scientist. I take slow, expensive systems and make them fast and cheap: 75% platform cost cuts, 180s to 5s APIs, terabyte-scale lakehouses, and AI agents.",
  keywords: [
    "Ajith Ravi",
    "software engineer",
    "data platform",
    "Snowflake",
    "AWS",
    "Golang",
    "Python",
    "AI agents",
    "Bangalore",
  ],
  authors: [{ name: "Ajith Ravi" }],
  openGraph: {
    title: "Ajith Ravi | I make heavy systems light",
    description:
      "Data platform and backend engineer. 75% cost cuts, 36x faster APIs, terabyte-scale lakehouses, multi-agent AI systems.",
    url: "https://ajithravi.dev",
    siteName: "Ajith Ravi",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Ajith Ravi | I make heavy systems light",
    description:
      "Data platform and backend engineer. 75% cost cuts, 36x faster APIs, terabyte-scale lakehouses, multi-agent AI systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
