"use client";
import { useTheme } from "@/lib/ThemeProvider";
import { MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleBookCall = () => {
    window.open("https://calendly.com/ayushjrathod7", "_blank");
  };

  return (
    <nav
      className={`z-50 border-2 rounded-3xl w-fit mt-4 md:mt-10 flex flex-wrap md:flex-nowrap justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md transition-all duration-500 gap-2 md:gap-0 p-2 md:p-0 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <Link href="/">
        <Image
          src="/socials/home.svg"
          alt="Logo"
          width={30}
          height={40}
          className="ml-2 md:ml-4 cursor-pointer transition-transform duration-300 hover:scale-110 dark:invert"
        />
      </Link>
      <div className="border-r-2 border-gray-200 dark:border-gray-600 ml-2 h-8 transition-all duration-300 hidden md:block">
        &nbsp;
      </div>
      <div className="flex justify-center gap-2 md:gap-4 ml-0 md:ml-2">
        <a href="https://linkedin.com/in/ayushjrathod" target="_blank" rel="noopener noreferrer" className="group">
          <Image
            src="/socials/linkedin.svg"
            alt="LinkedIn"
            width={20}
            height={20}
            className="cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-6 dark:invert"
          />
        </a>
        <a href="https://x.com/ayushjrathod" target="_blank" rel="noopener noreferrer" className="group">
          <Image
            src="/socials/x.svg"
            alt="X"
            width={25}
            height={25}
            className="cursor-pointer transition-all duration-300 hover:scale-125 hover:-rotate-6 dark:invert"
          />
        </a>
        <a href="https://github.com/ayushjrathod" target="_blank" rel="noopener noreferrer" className="group">
          <Image
            src="/socials/github.svg"
            alt="GitHub"
            width={25}
            height={25}
            className="cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12 dark:invert"
          />
        </a>
      </div>
      <div className="border-r-2 border-gray-200 dark:border-gray-600 ml-2 h-8 transition-all duration-300">&nbsp;</div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ml-0 md:ml-2"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <SunIcon className="w-5 h-5 text-gray-800 dark:text-white" />
        ) : (
          <MoonIcon className="w-5 h-5 text-gray-800 dark:text-white" />
        )}
      </button>
      <div className="border-r-2 border-gray-200 dark:border-gray-600 ml-2 h-8 transition-all duration-300">&nbsp;</div>
      <button
        onClick={handleBookCall}
        className="bg-black text-white dark:bg-white dark:text-black rounded-2xl text-sm md:text-base px-3 md:px-4 py-2 m-[1.5px] ml-2 font-semibold 
        hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
      >
        Book a Call
      </button>
    </nav>
  );
};

export default Navbar;
