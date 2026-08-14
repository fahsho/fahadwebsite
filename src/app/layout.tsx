import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  adjustFontFallback: false,
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fahad Shoukat | Tech + Execution + Revenue",
    template: "%s | Fahad Shoukat",
  },
  description: "I help tech companies bridge engineering, operations, and sales to ship faster and close bigger deals.",
  authors: [{ name: "Fahad Shoukat", url: "https://fahadshoukat.com" }],
  creator: "Fahad Shoukat",
  metadataBase: new URL("https://fahadshoukat.com"),
  openGraph: {
    title: "Fahad Shoukat | Tech + Execution + Revenue",
    description: "Bridging engineering, operations, and sales to ship faster and close bigger deals.",
    url: "https://fahadshoukat.com",
    siteName: "Fahad Shoukat",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Shoukat | Tech + Execution + Revenue",
    description: "Bridging engineering, operations, and sales to ship faster and close bigger deals.",
    creator: "@fahadshoukat",
  },
  alternates: {
    canonical: "/",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`${newsreader.variable} ${mono.variable} font-serif antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
