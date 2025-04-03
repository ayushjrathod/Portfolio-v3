"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const handleBookCall = () => {
    window.open("https://calendly.com/ayushjrathod7", "_blank");
  };

  return (
    <nav className="z-50 border-2 rounded-3xl w-fit mt-10 flex justify-between items-center bg-white shadow-md">
      <Link href="/">
        <Image src="/socials/home.svg" alt="Logo" width={40} height={50} className="mx-4 cursor-pointer" />
      </Link>
      <div className="border-r-2 border-gray-200 mx-4">&nbsp;</div>
      <div className="flex justify-center gap-12 mx-4">
        <a href="https://linkedin.com/in/ayushjrathod" target="_blank" rel="noopener noreferrer">
          <Image src="/socials/linkedin.svg" alt="LinkedIn" width={30} height={30} className="mx-2 cursor-pointer" />
        </a>
        <a href="https://twitter.com/ayushjrathod" target="_blank" rel="noopener noreferrer">
          <Image src="/socials/x.svg" alt="X" width={35} height={35} className="mx-2 cursor-pointer" />
        </a>
        <a href="https://github.com/ayushjrathod" target="_blank" rel="noopener noreferrer">
          <Image src="/socials/github.svg" alt="GitHub" width={35} height={35} className="mx-2 cursor-pointer" />
        </a>
      </div>
      <div className="border-r-2 border-gray-200 mx-4">&nbsp;</div>
      <button
        onClick={handleBookCall}
        className="bg-black text-white rounded-2xl px-8 py-4 m-1 font-semibold hover:bg-gray-800 transition-colors"
      >
        Book a Call
      </button>
    </nav>
  );
};

export default Navbar;
