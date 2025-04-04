import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/ThemeProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Rathod",
  description: "A portfolio website showcasing Ayush Rathod's work and projects.",
  icons: {
    icon: "ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <div className="fixed z-50 flex justify-center w-full">
            <Navbar />
          </div>
          <div className="mx-4 md:mx-12 lg:mx-24 md:border-l-1 md:border-r-1 border-gray-300">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
