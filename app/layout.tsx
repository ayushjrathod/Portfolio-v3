import Navbar from "@/components/Navbar";
import { profileData } from "@/lib/data";
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
  title: {
    default: profileData.name,
    template: `%s | ${profileData.name}`,
  },
  description: profileData.bio,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: profileData.name,
    description: profileData.bio,
    url: "https://ayushrathod.com", // Replace with actual URL
    siteName: profileData.name,
    images: [
      {
        url: profileData.image,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profileData.name,
    description: profileData.bio,
    images: [profileData.image],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="fixed z-50 flex justify-center w-full">
            <Navbar />
          </div>
          <div className="mx-4 md:mx-8 lg:mx-16 xl:mx-24 md:border-l md:border-r border-gray-200 dark:border-gray-800 min-h-screen bg-white dark:bg-gray-900 shadow-sm">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
