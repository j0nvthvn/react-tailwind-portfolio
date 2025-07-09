import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-16 sm:py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
                Acerca de <span className="text-primary">Mí</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-xl sm:text-2xl font-semibold">Estudiante de Ingeniería & Desarrollador Web</h3>

                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        Actualmente curso Ingeniería Civil en Informática y Telecomunicaciones 
                        en la Universidad Diego Portales. Me apasiona el desarrollo web y me 
                        especializo en crear aplicaciones responsivas, accesibles y de alto rendimiento.
                    </p>

                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        Me motiva crear soluciones elegantes a problemas complejos, y estoy en 
                        constante aprendizaje de nuevas tecnologías para mantenerme al día en 
                        el mundo del desarrollo web.
                    </p>                    
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
                        <a 
                            href="#contact" 
                            className="cosmic-button"
                            onClick={(e) => {
                                e.preventDefault();
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }
                            }}
                        >
                            Contáctame
                        </a>

                        <a href="#" className="px-4 sm:px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:text-base text-center">
                            Descargar CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:gap-6 order-first lg:order-last">
                    <div className="gradient-border p-4 sm:p-6 card-hover">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"> 
                                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                            </div>
                            <div className="text-left min-w-0">
                                <h4 className="font-semibold text-base sm:text-lg">Desarrollo Web</h4>
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed"> 
                                    Creación de sitios web responsivos y aplicaciones web con
                                    frameworks modernos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-4 sm:p-6 card-hover">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"> 
                                <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                            </div>
                            <div className="text-left min-w-0">
                                <h4 className="font-semibold text-base sm:text-lg">Diseño UI/UX</h4>
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed"> 
                                    Diseño de interfaces intuitivas y experiencias de usuario
                                    fluidas y atractivas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-4 sm:p-6 card-hover">
                        <div className="flex items-start gap-3 sm:gap-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0"> 
                                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                            </div>
                            <div className="text-left min-w-0">
                                <h4 className="font-semibold text-base sm:text-lg">Gestión de Proyectos</h4>
                                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed"> 
                                    Liderando proyectos desde la concepción hasta la finalización 
                                    con metodologías ágiles.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
}