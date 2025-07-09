import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Landing Page SaaS",
        description: "Una hermosa landing page desarrollada con React y Tailwind CSS, enfocada en conversión.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Dashboard Analítico",
        description: "Dashboard interactivo con visualización de datos y capacidades de filtrado avanzado.",
        image: "/projects/project2.png",
        tags: ["React", "Chart.js", "Node.js"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 3,
        title: "Sistema de Gestión",
        description: "Sistema web completo para gestión de inventario con autenticación y roles de usuario.",
        image: "/projects/project3.png",
        tags: ["Java", "Spring Boot", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Proyectos <span className="text-primary">Destacados</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Aquí algunos de mis proyectos más recientes. Cada proyecto fue cuidadosamente
                desarrollado con atención al detalle, rendimiento y experiencia de usuario.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden bg-secondary/20 flex items-center justify-center">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                                onLoad={(e) => {
                                    e.target.nextSibling.style.display = 'none';
                                }}
                            />
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-muted-foreground">
                                <span>Imagen del proyecto</span>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://github.com/j0nvthvn">
                        Ver Mi GitHub 
                        <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
    );
}