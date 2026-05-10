import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import SocialRail from "@/components/SocialRail";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="absolute left-[-9999px] top-0 z-[100] overflow-hidden focus:left-4 focus:top-4 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-canvas focus:px-3 focus:py-2 focus:text-sm focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40"
      >
        Skip to content
      </a>
      <PageLoader />
      <Navbar />
      <SocialRail />
      <main id="main" className="relative isolate overflow-hidden">
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
