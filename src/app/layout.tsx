import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { ReadingProgress } from "@/components/layout/ReadingProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitmishra.dev"),
  title: {
    default: "Sumit Mishra | Senior Software Engineer",
    template: "%s | Sumit Mishra",
  },
  description:
    "Senior Software Engineer specializing in React, Next.js, TypeScript, and ASP.NET. Building high-performance web applications with modern technologies.",
  keywords: [
    "Sumit Mishra",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "ASP.NET",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Sumit Mishra" }],
  creator: "Sumit Mishra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumitmishra.dev",
    siteName: "Sumit Mishra",
    title: "Sumit Mishra | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Next.js, TypeScript, and ASP.NET.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sumit Mishra Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Mishra | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Next.js, TypeScript, and ASP.NET.",
    images: ["/images/og-image.png"],
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
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
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
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <ReadingProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
