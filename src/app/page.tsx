import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/hero";
import { AboutSection } from "../components/about";
import { SkillsSection } from "../components/skills";
import { PortofolioSection } from "../components/portofolio";
import { ExperienceSection } from "../components/experience";
import { TestimonialsSection } from "../components/testimonials";
import { ContactSection } from "../components/contact";
import { Footer } from "../components/footer";
import { MotionProvider } from "../components/motion";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortofolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionProvider>
  );
}
