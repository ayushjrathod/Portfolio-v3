import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/Hero";
import HowCanIHelp from "@/components/HowCanIHelp";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="h-screen w-full flex items-center justify-center">
        <ProfileCard />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <HowCanIHelp />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
