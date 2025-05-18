import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import GlobalProvider from "@/providers/GlobalProvider";
import { getServerSession } from "next-auth";
import MainLayoutClient from "@/components/MainLayoutClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verified carriers",
  description: `Ship Smarter, Faster,and
Confidence with Verified Carriers.`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();


  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{
          zoom: 1,
        }}
      >
        <GlobalProvider session={session}>
          <MainLayoutClient>
          {children}
          </MainLayoutClient>
        </GlobalProvider>
        <Toaster containerStyle={{ zIndex: 99999 }} />
      </body>
    </html>
  );
}
