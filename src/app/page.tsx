import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import GithubActivity from "@/components/GithubActivity";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Metrics />
      <Skills />
      <Projects />
      <Experience />
      <GithubActivity />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}
