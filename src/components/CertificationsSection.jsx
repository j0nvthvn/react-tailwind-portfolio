import { Award, Calendar, ExternalLink, CheckCircle, Trophy, Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
    {
        id: 1,
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2024-03-15",
        verificationUrl: "https://aws.amazon.com/verification/ABC123",
        image: "/certifications/aws-cloud-practitioner.svg",
        skills: ["Cloud Computing", "AWS Services", "Security"],
        status: "verified",
        type: "certification",
        description: "Certificación fundamental de AWS que valida el conocimiento general de la nube de AWS.",
        credentialId: "AWS-CCP-2024-001"
    },
    {
        id: 2,
        title: "React Developer Certificate",
        issuer: "Meta",
        date: "2024-01-20",
        verificationUrl: "https://coursera.org/verify/XYZ789",
        image: "/certifications/react-certificate.svg",
        skills: ["React", "JavaScript", "Frontend Development"],
        status: "verified",
        type: "course",
        description: "Programa completo de desarrollo con React incluyendo hooks, state management y testing.",
        credentialId: "META-REACT-2024-002"
    },
    {
        id: 3,
        title: "JavaScript Algorithms and Data Structures",
        issuer: "FreeCodeCamp",
        date: "2023-11-10",
        verificationUrl: "https://freecodecamp.org/certification/user/javascript-algorithms",
        image: "/certifications/freecodecamp-js.svg",
        skills: ["JavaScript", "Algorithms", "Data Structures"],
        status: "verified",
        type: "certification",
        description: "300 horas de curriculum cubriendo algoritmos fundamentales y estructuras de datos.",
        credentialId: "FCC-JS-2023-003"
    },
    {
        id: 4,
        title: "Responsive Web Design",
        issuer: "FreeCodeCamp",
        date: "2023-08-15",
        verificationUrl: "https://freecodecamp.org/certification/user/responsive-web-design",
        image: "/certifications/freecodecamp-rwd.svg",
        skills: ["HTML", "CSS", "Responsive Design", "Accessibility"],
        status: "verified",
        type: "certification",
        description: "Certificación en diseño web responsivo con énfasis en accesibilidad y mejores prácticas.",
        credentialId: "FCC-RWD-2023-004"
    },
    {
        id: 5,
        title: "Node.js Application Development",
        issuer: "IBM",
        date: "2024-05-22",
        verificationUrl: "https://ibm.com/credentials/node-js-dev",
        image: "/certifications/ibm-nodejs.svg",
        skills: ["Node.js", "Express.js", "API Development", "Backend"],
        status: "verified",
        type: "course",
        description: "Desarrollo completo de aplicaciones backend con Node.js y Express.",
        credentialId: "IBM-NODE-2024-005"
    },
    {
        id: 6,
        title: "Git and GitHub Essentials",
        issuer: "GitHub",
        date: "2023-09-30",
        verificationUrl: "https://github.com/achievements",
        image: "/certifications/github-cert.svg",
        skills: ["Git", "GitHub", "Version Control", "Collaboration"],
        status: "verified",
        type: "achievement",
        description: "Dominio de Git y GitHub para control de versiones y colaboración en equipo.",
        credentialId: "GH-ESSENTIALS-2023-006"
    }
];

const achievements = [
    {
        id: 1,
        title: "Dean's List - Semestre 2024-1",
        issuer: "Universidad Diego Portales",
        date: "2024-06-15",
        type: "academic",
        description: "Reconocimiento por excelencia académica con promedio superior a 6.0",
        icon: Trophy
    },
    {
        id: 2,
        title: "Hackathon Winner - DevFest Santiago",
        issuer: "Google Developers",
        date: "2024-02-28",
        type: "competition",
        description: "Primer lugar en hackathon de 48 horas desarrollando una solución de sostenibilidad",
        icon: Award
    },
    {
        id: 3,
        title: "Open Source Contributor",
        issuer: "Various Projects",
        date: "2023-ongoing",
        type: "contribution",
        description: "Contribuciones activas a proyectos open source en GitHub",
        icon: Star
    }
];

const categories = ["todos", "certification", "course", "achievement", "academic"];

export const CertificationsSection = () => {
    const [activeCategory, setActiveCategory] = useState("todos");
    const [selectedCert, setSelectedCert] = useState(null);

    const filteredCertifications = certifications.filter(cert => 
        activeCategory === "todos" || cert.type === activeCategory
    );

    const allItems = [...certifications, ...achievements.map(ach => ({...ach, type: ach.type}))];
    const filteredItems = allItems.filter(item => 
        activeCategory === "todos" || item.type === activeCategory
    );

    const getTypeLabel = (type) => {
        const labels = {
            certification: "Certificación",
            course: "Curso",
            achievement: "Logro",
            academic: "Académico",
            competition: "Competencia",
            contribution: "Contribución"
        };
        return labels[type] || type;
    };

    const getTypeColor = (type) => {
        const colors = {
            certification: "bg-blue-500/10 text-blue-600 border-blue-500/20",
            course: "bg-green-500/10 text-green-600 border-green-500/20",
            achievement: "bg-purple-500/10 text-purple-600 border-purple-500/20",
            academic: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
            competition: "bg-red-500/10 text-red-600 border-red-500/20",
            contribution: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20"
        };
        return colors[type] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <section id="certifications" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Certificaciones y <span className="text-primary">Logros</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Mi compromiso con el aprendizaje continuo se refleja en estas certificaciones y logros académicos.
                    Cada una representa horas de dedicación y crecimiento profesional.
                </p>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button 
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full transition-all duration-300 capitalize text-sm font-medium",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground shadow-lg" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-105"
                            )}
                        >
                            {category === "todos" ? "Todos" : getTypeLabel(category)}
                        </button>
                    ))}
                </div>

                {/* Timeline de Logros */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold mb-8 text-center">Timeline de Aprendizaje</h3>
                    <div className="relative">
                        {/* Línea central */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
                        
                        {filteredItems
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .slice(0, 6) // Mostrar solo los 6 más recientes
                            .map((item, index) => (
                            <div key={item.id} className={cn(
                                "relative flex items-center mb-12",
                                index % 2 === 0 ? "justify-start" : "justify-end"
                            )}>
                                {/* Punto en la línea */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                                
                                {/* Contenido */}
                                <div className={cn(
                                    "bg-card p-6 rounded-lg shadow-lg max-w-sm mx-8 card-hover",
                                    index % 2 === 0 ? "mr-auto" : "ml-auto"
                                )}>
                                    <div className="flex items-start gap-3 mb-3">
                                        {item.icon ? (
                                            <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                        ) : (
                                            <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                        )}
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm leading-tight">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.issuer}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="h-3 w-3 text-muted-foreground" />
                                        <span className="text-xs text-muted-foreground">
                                            {formatDate(item.date)}
                                        </span>
                                        <span className={cn(
                                            "px-2 py-0.5 rounded-full text-xs border",
                                            getTypeColor(item.type)
                                        )}>
                                            {getTypeLabel(item.type)}
                                        </span>
                                    </div>
                                    
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid de Certificaciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCertifications.map((cert) => (
                        <div 
                            key={cert.id} 
                            className="group bg-card rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
                            onClick={() => setSelectedCert(cert)}
                        >
                            {/* Header con imagen/placeholder */}
                            <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                                <img 
                                    src={cert.image} 
                                    alt={cert.title}
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
                                    <Award className="h-12 w-12" />
                                </div>
                                
                                {/* Badge de verificación */}
                                {cert.status === 'verified' && (
                                    <div className="absolute top-3 right-3 bg-green-500 p-1.5 rounded-full">
                                        <CheckCircle className="h-4 w-4 text-white" />
                                    </div>
                                )}
                            </div>

                            {/* Contenido */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-semibold text-lg leading-tight">{cert.title}</h3>
                                </div>
                                
                                <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                                
                                <div className="flex items-center gap-2 mb-4">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        {formatDate(cert.date)}
                                    </span>
                                    <span className={cn(
                                        "px-2 py-1 rounded-full text-xs border ml-auto",
                                        getTypeColor(cert.type)
                                    )}>
                                        {getTypeLabel(cert.type)}
                                    </span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-1 mb-4">
                                    {cert.skills?.slice(0, 3).map((skill, index) => (
                                        <span 
                                            key={index}
                                            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {cert.skills?.length > 3 && (
                                        <span className="px-2 py-1 text-xs bg-secondary text-muted-foreground rounded-md">
                                            +{cert.skills.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Acción */}
                                <div className="flex items-center justify-between">
                                    <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                                        Ver detalles
                                    </button>
                                    {cert.verificationUrl && (
                                        <a 
                                            href={cert.verificationUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal de detalles */}
                {selectedCert && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                                        <p className="text-muted-foreground">{selectedCert.issuer}</p>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 hover:bg-secondary rounded-full transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold mb-2">Descripción</h4>
                                        <p className="text-muted-foreground">{selectedCert.description}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold mb-2">Fecha de obtención</h4>
                                            <p className="text-muted-foreground">{formatDate(selectedCert.date)}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">ID de credencial</h4>
                                            <p className="text-muted-foreground font-mono text-sm">{selectedCert.credentialId}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">Habilidades desarrolladas</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedCert.skills?.map((skill, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {selectedCert.verificationUrl && (
                                        <div className="pt-4 border-t">
                                            <a 
                                                href={selectedCert.verificationUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cosmic-button w-full flex items-center justify-center gap-2"
                                            >
                                                Verificar certificación
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
