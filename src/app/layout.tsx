import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efika Creative",
  description: "Design and Branding studio helping startup, agency, and brands to grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rethinkSans.variable} font-sans antialiased text-brand-raisin selection:bg-brand-primary selection:text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
