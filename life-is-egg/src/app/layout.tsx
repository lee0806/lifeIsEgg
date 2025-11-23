import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";

const SUIT = localFont({
  src: [
    {
      path: "../../public/fonts/SUIT-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "leeseh0806",
  description: "Portfolio of leeseh0806",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${SUIT.variable}`} lang="en">
      <body className="paper-dark-bg">{children}</body>
    </html>
  );
}
