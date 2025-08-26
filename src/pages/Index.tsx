import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const refs = {
      home: heroRef,
      about: aboutRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };

    const targetRef = refs[sectionId as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onNavigate={scrollToSection} />
      
      <div ref={heroRef}>
        <Hero
          onScrollToContact={() => scrollToSection("contact")}
          onScrollToProjects={() => scrollToSection("projects")}
        />
      </div>
      
      <div ref={aboutRef}>
        <About />
      </div>
      
      <div ref={skillsRef}>
        <Skills />
      </div>
      
      <div ref={projectsRef}>
        <Projects />
      </div>
      
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <Footer onScrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
