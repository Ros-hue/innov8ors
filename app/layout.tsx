import type { Metadata } from "next";
import { Geist, Geist_Mono, Megrim, Iceland } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const megrim = Megrim({
  variable: "--font-megrim",
  subsets: ["latin"],
  weight: "400",
});

const iceland = Iceland({
  variable: "--font-iceland",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Innov8ors",
  description:
    "Innov8ors is a company that specializes in creating high-quality, innovative products that enhance the lives of our customers.",
  icons: {
    icon: '/innov.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${megrim.variable} ${iceland.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
