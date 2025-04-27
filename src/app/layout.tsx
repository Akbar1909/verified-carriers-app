import type { Metadata } from "next";
import {  Inter } from "next/font/google";
import "./globals.css";



const inter=Inter({
  variable:'--font-inter',
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Verified carriers",
  description: `Ship Smarter, Faster,and
Confidence with Verified Carriers.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
  style={{
    zoom:1
  }}
>
        {children}
      </body>
    </html>
  );
}
