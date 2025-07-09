import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const handleScrollDown = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hola, soy</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Jonathan</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Flores</span>
                </h1>
                
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                    Estudiante de Ingeniería Civil en Informática y Telecomunicaciones en la UDP.
                    Me especializo en desarrollo web creando interfaces modernas y funcionales.
                </p>

                <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-4">
                    <a 
                        href="#projects" 
                        className="cosmic-button"
                        onClick={(e) => {
                            e.preventDefault();
                            const projectsSection = document.getElementById('projects');
                            if (projectsSection) {
                                projectsSection.scrollIntoView({
                                    behavior: 'smooth',
                                    block: 'start'
                                });
                            }
                        }}
                    >
                        Ver Mi Trabajo
                    </a>
                </div>                </div>
            </div>

            <div 
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer hover:text-primary/80 transition-colors"
                onClick={handleScrollDown}
            >
                <span className="text-xs sm:text-sm text-muted-foreground mb-2">Desplázate</span>
                <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary"/>
            </div>
        </section>
    );
}