import type { Metadata } from "next";
import { Caveat, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KRE8 Studio — Design With Attitude",
  description:
    "KRE8 is a creative design agency crafting bold brands, websites, and visual systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        "font-sans",
        geist.variable,
        geistMono.variable,
        caveat.variable,
      )}
    >
      <body className="min-h-full flex flex-col text-black">
        {children}
      </body>
    </html>
  );
}
