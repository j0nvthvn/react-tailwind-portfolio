import { useState, useEffect, useRef } from 'react';

export const useParallax = (speed = 0.5) => {
    const [offsetY, setOffsetY] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxStyle = {
        transform: `translateY(${offsetY * speed}px)`,
    };

    return { elementRef, parallaxStyle };
};

export const useScrollEffect = () => {
    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.pageYOffset;
            
            setScrollY(currentScrollY);
            
            // Calcular progreso de scroll
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (currentScrollY / maxScroll) * 100;
            setScrollProgress(Math.min(100, Math.max(0, progress)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return { scrollY, scrollProgress };
};

export const use3DEffect = (intensity = 1) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const elementRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const deltaX = (e.clientX - centerX) / (rect.width / 2);
                const deltaY = (e.clientY - centerY) / (rect.height / 2);
                
                setMousePosition({ x: deltaX * intensity, y: deltaY * intensity });
            }
        };

        const handleMouseLeave = () => {
            setMousePosition({ x: 0, y: 0 });
        };

        if (elementRef.current) {
            elementRef.current.addEventListener('mousemove', handleMouseMove);
            elementRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (elementRef.current) {
                elementRef.current.removeEventListener('mousemove', handleMouseMove);
                elementRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [intensity]);

    const transform3D = {
        transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg) translateZ(0)`,
        transition: 'transform 0.3s ease-out',
    };

    return { elementRef, transform3D, mousePosition };
};
