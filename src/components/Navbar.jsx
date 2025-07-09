import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Inicio", href: "#hero"},
    {name: "Acerca de mí", href: "#about"},
    {name: "Habilidades", href: "#skills"},
    {name: "Proyectos", href: "#projects"},
    {name: "Certificaciones", href: "#certifications"},
    {name: "Contacto", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevenir scroll del body cuando el menu móvil está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        // Cleanup al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);
    return (
    <nav 
        className={cn(
            "navbar-fixed !fixed !top-0 !left-0 !right-0 !w-full !z-50 transition-all duration-300",
            isScrolled ? "py-3 bg-background/95 backdrop-blur-md shadow-lg" : "py-5 bg-background/10"
        )}
    >
        <div className="container flex items-center justify-between">
            <a className="text-xl font-bold text-primary flex items-center" href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Jonathan</span> Portfolio
                </span>
            </a>

            <div className="hidden md:flex space-x-8 items-center">
                {navItems.map((item, index) => (
                    <a 
                        key={`nav-desktop-${item.href}`} 
                        href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={(e) => handleNavClick(e, item.href)}
                    >
                        {item.name}
                    </a>
                ))}
                <div className="ml-4">
                    <ThemeToggle hideOnMobile={false} />
                </div>
            </div>

            <button 
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/> }
            </button>

            <div 
                className={cn(
                    "fixed z-40 md:hidden",
                    "transition-all duration-300",
                    isMenuOpen 
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
                )}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'hsl(var(--background))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onClick={(e) => {
                    // Cerrar menú si se hace clic en el overlay (no en el contenido)
                    if (e.target === e.currentTarget) {
                        setIsMenuOpen(false);
                    }
                }}
            >
                {/* Contenedor centrado con fondo sólido */}
                <div className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 mx-4 shadow-2xl border border-border/20 max-w-sm w-full">
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, index) => (
                            <a 
                                key={`nav-mobile-${item.href}`} 
                                href={item.href} 
                                className="text-foreground hover:text-primary transition-colors duration-300 text-center py-2 rounded-lg hover:bg-secondary/50"
                                onClick={(e) => handleNavClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="flex justify-center mt-6 pt-6 border-t border-border/20">
                            <ThemeToggle hideOnMobile={false} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    );

}