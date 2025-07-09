import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "¡Mensaje enviado!",
                description: "Gracias por tu mensaje. Te responderé pronto",
            });
            setIsSubmitting(false);
        }, 1500);
    };
    
    return (
        <section id="contact" className="py-16 sm:py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
                ¡Hablemos <span className="text-primary">Juntos!</span>
            </h2>

            <p className="text-center text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
                Siempre estoy abierto a discutir nuevas oportunidades.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                <div className="space-y-6 sm:space-y-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Información de Contacto</h3>
                    <div className="space-y-4 sm:space-y-6 justify-center">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-medium text-sm sm:text-base">Email</h4>
                                <a href="mailto:jonathan.flores@mail.udp.cl" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all">
                                    jonathan.flores@mail.udp.cl
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-medium text-sm sm:text-base">Teléfono</h4>
                                <a href="tel:+56940369948" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                                    +56 9 4036 9948
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="p-2 sm:p-3 rounded-full bg-primary/10 flex-shrink-0">
                                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-medium text-sm sm:text-base">Ubicación</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                                    Santiago, Chile
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 sm:pt-8">
                        <h4 className="font-medium mb-3 sm:mb-4 text-sm sm:text-base">Conecta Conmigo</h4>
                        <div className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start">
                            <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-card p-6 sm:p-8 rounded-lg shadow-xs order-first lg:order-last">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Envía un Mensaje</h3>
                    <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">Tu Nombre</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                placeholder="Juan Pérez"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">Tu Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                                placeholder="juan.perez@gmail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Tu Mensaje</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows={4}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm sm:text-base"
                                placeholder="Hola, me gustaría hablar sobre..."
                            />
                        </div>
                        <button type="submit" disabled={isSubmitting} className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",
                            isSubmitting && "opacity-70 cursor-not-allowed"
                        )}>
                            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
}