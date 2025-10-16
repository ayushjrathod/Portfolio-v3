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
      <head>
        {/* Preload critical images */}
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/cnserver/image/upload/f_auto,q_auto,w_200,h_200,c_fill,g_face/v1750407073/rwh3vitd2cyltekuz6qo.jpg"
          type="image/jpeg"
        />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/cnserver/image/upload/f_auto,q_auto,w_800,h_450,c_fill/t_projects_section/twtykmlpjspyubqkayk3"
          type="image/jpeg"
        />
      </head>
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
