import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Instrument_Serif, Source_Serif_4, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ModeProvider } from "@/components/mode/ModeProvider";
import { ChromeVisibility, EditorialOnly } from "@/components/mode/ChromeVisibility";
import EditorialNavbar from "@/components/mode/EditorialNavbar";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import {
  personJsonLd,
  siteDescription,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/site";

// Inter Font (Body Text)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Editorial-mode fonts
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

// Agency-mode fonts
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Editorial New Font Family (Display/Headlines)
const editorialUltralight = localFont({
  src: "../fonts/Editorial_New_Font_Family_(Fontmirror)/Editorial New Ultralight 200.otf",
  variable: "--font-editorial-ultralight",
  weight: "200",
});

const editorialRegular = localFont({
  src: "../fonts/Editorial_New_Font_Family_(Fontmirror)/Editorial New Regular 400.otf",
  variable: "--font-editorial-regular",
  weight: "400",
});

const editorialUltrabold = localFont({
  src: "../fonts/Editorial_New_Font_Family_(Fontmirror)/Editorial New Ultrabold 800.otf",
  variable: "--font-editorial-ultrabold",
  weight: "800",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Josué Godeme — Researcher and Builder",
    template: "%s",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Josué Godeme — Researcher and Builder",
    description: siteDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Josué Godeme — Researcher and Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josué Godeme — Researcher and Builder",
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
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
    <html lang="en">
      <body
        className={`${inter.variable} ${editorialUltralight.variable} ${editorialRegular.variable} ${editorialUltrabold.variable} ${instrumentSerif.variable} ${sourceSerif.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Agent discovery: points AI agents at the markdown index. */}
        <link rel="describedby" href={`${siteUrl}/llms.txt`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <LanguageProvider>
          <ModeProvider>
            <ChromeVisibility>
              <Navbar />
            </ChromeVisibility>
            <EditorialOnly>
              <EditorialNavbar />
            </EditorialOnly>
            <main className="min-h-screen pt-16">{children}</main>
            <ChromeVisibility>
              <Footer />
            </ChromeVisibility>
          </ModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
