import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Acerca de <span className="text-primary">Mí</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Estudiante de Ingeniería & Desarrollador Web</h3>

                    <p className="text-muted-foreground">
                        Actualmente curso Ingeniería Civil en Informática y Telecomunicaciones 
                        en la Universidad Diego Portales. Me apasiona el desarrollo web y me 
                        especializo en crear aplicaciones responsivas, accesibles y de alto rendimiento.
                    </p>

                    <p className="text-muted-foreground">
                        Me motiva crear soluciones elegantes a problemas complejos, y estoy en 
                        constante aprendizaje de nuevas tecnologías para mantenerme al día en 
                        el mundo del desarrollo web.
                    </p>                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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

                        <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Descargar CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                                <p className="text-muted-foreground"> 
                                    Creación de sitios web responsivos y aplicaciones web con
                                    frameworks modernos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                                <p className="text-muted-foreground"> 
                                    Diseño de interfaces intuitivas y experiencias de usuario
                                    fluidas y atractivas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10"> 
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Gestión de Proyectos</h4>
                                <p className="text-muted-foreground"> 
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