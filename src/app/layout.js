import { Saira, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "@/components/ThemeScript";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL("https://forexdna.co.uk"),
  title: "ForexDNA — Automated Forex Strategy",
  description:
    "An automated mean-reversion strategy on curated FX pairs, wrapped in a risk layer. Request access to ForexDNA.",
  openGraph: {
    title: "ForexDNA — Automated Forex Strategy",
    description:
      "Retail access to algorithmic trading on curated FX pairs. Request access to ForexDNA.",
    url: "https://forexdna.co.uk",
    siteName: "ForexDNA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ForexDNA — Automated Forex Strategy",
    description:
      "Retail access to algorithmic trading on curated FX pairs. Request access to ForexDNA.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${saira.variable} ${jbMono.variable} h-full`}>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-ink text-text">
        {children}
      </body>
    </html>
  );
}
