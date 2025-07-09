import { useScrollEffect } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

export const ScrollProgressIndicator = () => {
    const { scrollProgress } = useScrollEffect();

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-secondary/30 z-30">
            <div 
                className="h-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export const ParallaxBackground = ({ children, className = "" }) => {
    const { scrollY } = useScrollEffect();
    
    return (
        <div className={cn("relative overflow-hidden", className)}>
            {/* Layer de fondo - muy lento */}
            <div 
                className="absolute inset-0 parallax-bg opacity-20"
                style={{ 
                    transform: `translateY(${scrollY * 0.1}px) scale(1.1)`,
                    background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)'
                }}
            />
            
            {/* Layer medio - velocidad media */}
            <div 
                className="absolute inset-0 parallax-mid opacity-30"
                style={{ 
                    transform: `translateY(${scrollY * 0.3}px)`,
                    background: 'linear-gradient(45deg, hsl(var(--primary))/20% 0%, transparent 100%)'
                }}
            />
            
            {/* Contenido principal */}
            <div className="relative z-10 parallax-front">
                {children}
            </div>
        </div>
    );
};
