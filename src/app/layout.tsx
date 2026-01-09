import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahad Shoukat | Tech + Execution + Revenue",
  description: "I help tech companies bridge engineering, operations, and sales to ship faster and close bigger deals."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <div className="absolute inset-0 blueprint-grid pointer-events-none" />
            <main className="flex-grow z-10">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
