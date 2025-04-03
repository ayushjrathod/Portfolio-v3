import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/Hero";
import HowCanIHelp from "@/components/HowCanIHelp";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-screen w-full flex items-center justify-center">
        <ProfileCard />
      </div>
      <Projects />
      <About />
      <HowCanIHelp />
      <Contact />
      <Footer />
    </div>
  );
}
