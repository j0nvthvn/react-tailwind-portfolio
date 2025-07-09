import { useParallax, useScrollEffect } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

export const ParallaxContainer = ({ 
    children, 
    speed = 0.5, 
    className = ""
}) => {
    const { elementRef, parallaxStyle } = useParallax(speed);

    return (
        <div 
            ref={elementRef}
            className={cn("transition-all duration-700", className)}
            style={parallaxStyle}
        >
            {children}
        </div>
    );
};

export const SectionDivider = ({ variant = "wave", className = "" }) => {
    const { scrollY } = useScrollEffect();
    
    const waveOffset = scrollY * 0.3;
    
    const variants = {
        wave: (
            <svg 
                className={cn("w-full h-24 md:h-32", className)}
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
                style={{ transform: `translateY(${waveOffset}px)` }}
            >
                <path 
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                    fill="currentColor"
                    className="text-background"
                />
            </svg>
        ),
        diagonal: (
            <div 
                className={cn("w-full h-24 bg-gradient-to-r from-background to-card", className)}
                style={{ 
                    clipPath: `polygon(0 0, 100% ${20 + waveOffset * 0.1}%, 100% 100%, 0 100%)`,
                    transform: `translateY(${waveOffset * 0.5}px)`
                }}
            />
        ),
        curve: (
            <svg 
                className={cn("w-full h-20 md:h-28", className)}
                viewBox="0 0 1200 120" 
                preserveAspectRatio="none"
                style={{ transform: `translateY(${waveOffset * 0.8}px)` }}
            >
                <path 
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                    fill="currentColor"
                    className="text-card"
                />
            </svg>
        )
    };

    return (
        <div className="relative overflow-hidden">
            {variants[variant]}
        </div>
    );
};

export const FloatingElement = ({ 
    children, 
    delay = 0, 
    amplitude = 20,
    duration = 4,
    className = "" 
}) => {
    return (
        <div 
            className={cn("animate-float", className)}
            style={{
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                '--float-amplitude': `${amplitude}px`
            }}
        >
            {children}
        </div>
    );
};


