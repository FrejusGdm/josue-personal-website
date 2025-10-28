import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// Editorial New Font Family
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${editorialUltralight.variable} ${editorialRegular.variable} ${editorialUltrabold.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
