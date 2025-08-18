import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tickets Management APP - TS&NextJS",
  description: "NextJS APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center py-10">
          <Link href="/">
            <h1 className="uppercase text-4xl my-5 hover:animate-bounce">
              TICKET MANAGEment app
            </h1>
          </Link>
          {children}
        </div>
      </body>
    </html>
  );
}
