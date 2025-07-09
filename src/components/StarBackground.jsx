import { useEffect, useLayoutEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mounted]);

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            const animationDuration = Math.random() * 3 + 4;
            // En lugar de delay negativo, usar un offset de posición
            const startOffset = Math.random() * 100;
            
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                startOffset: startOffset,
                animationDuration: animationDuration,
            });
        }
        setMeteors(newMeteors);
    };

    // No renderizar hasta que esté completamente montado
    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className="star animate-pulse-subtle" 
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div 
                    key={`meteor-${meteor.id}-${mounted}`}
                    className="absolute meteor" 
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDuration: `${meteor.animationDuration}s`,
                        animationDelay: `${-meteor.startOffset / 100 * meteor.animationDuration}s`,
                        animationIterationCount: 'infinite',
                        animationTimingFunction: 'linear',
                        animationName: 'meteor',
                    }}
                />
            ))}
        </div>
    );
}