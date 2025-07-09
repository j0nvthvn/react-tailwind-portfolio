import { Navbar } from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ScrollProgressIndicator } from "../components/ScrollEffects";

export const Home = () => {
    return ( 
        <>
            {/* Navbar fuera de cualquier contenedor con transforms */}
            <Navbar />
            
            {/* Indicador de progreso también fuera */}
            <ScrollProgressIndicator />
            
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
                <StarBackground />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <CertificationsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
};