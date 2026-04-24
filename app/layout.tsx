import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Instrument_Serif, Source_Serif_4, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ModeProvider } from "@/components/mode/ModeProvider";
import { ModeToggle } from "@/components/mode/ModeToggle";

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
  title: "Josue Godeme - Researcher, Builder, Designer",
  description: "Personal website of Josue Godeme - exploring AI, HCI, and creative expression through research and building.",
  openGraph: {
    title: "Josue Godeme - Researcher, Builder, Designer",
    description: "Personal website of Josue Godeme - exploring AI, HCI, and creative expression through research and building.",
    images: [], // Explicitly empty to prevent scraping random project images
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Josue Godeme",
    description: "Researcher, Builder, Designer",
    images: [], // Explicitly empty
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
        <ModeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ModeToggle />
        </ModeProvider>
      </body>
    </html>
  );
}
