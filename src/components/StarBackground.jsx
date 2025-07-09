import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [activeMeteors, setActiveMeteors] = useState(new Set());
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        
        const generateStars = () => {
            const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 8000);
            const newStars = [];

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: `star-${i}`,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.6 + 0.4,
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 4,
                });
            }
            setStars(newStars);
        };

        const generateMeteors = () => {
            const numberOfMeteors = 5;
            const newMeteors = [];
            
            // Calcular distancias dinámicamente basadas en el tamaño de la pantalla
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const diagonalDistance = Math.sqrt(screenWidth * screenWidth + screenHeight * screenHeight);

            for (let i = 0; i < numberOfMeteors; i++) {
                const startX = Math.random() * 30 + 100;
                const startY = Math.random() * 40 - 30;
                
                newMeteors.push({
                    id: `meteor-${i}`,
                    size: Math.random() * 1 + 0.5,
                    startX: startX,
                    startY: startY,
                    duration: Math.random() * 3 + 2,
                    delay: Math.random() * 8 + 1,
                    tailLength: Math.random() * 100 + 150,
                    travelDistance: diagonalDistance * 1.5, // 1.5x la diagonal para asegurar que cruza toda la pantalla
                });
            }
            setMeteors(newMeteors);
        };

        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isClient]);

    useEffect(() => {
        if (!isClient || meteors.length === 0) return;

        const meteorManager = () => {
            meteors.forEach((meteor, index) => {
                setTimeout(() => {
                    const showMeteor = () => {
                        setActiveMeteors(prev => new Set([...prev, meteor.id]));
                        
                        setTimeout(() => {
                            setActiveMeteors(prev => {
                                const newSet = new Set(prev);
                                newSet.delete(meteor.id);
                                return newSet;
                            });
                        }, meteor.duration * 1000);
                    };
                    
                    showMeteor();
                    const interval = setInterval(showMeteor, (meteor.duration + Math.random() * 10 + 8) * 1000);
                    return interval;
                }, meteor.delay * 1000 + index * 500);
            });
        };

        meteorManager();
    }, [meteors, isClient]);

    if (!isClient) {
        return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" />;
    }

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.3)`,
                        animation: `starTwinkle ${star.duration}s infinite ease-in-out ${star.delay}s`,
                    }}
                />
            ))}

            {meteors
                .filter(meteor => activeMeteors.has(meteor.id))
                .map((meteor) => (
                <div
                    key={meteor.id}
                    className="absolute"
                    style={{
                        left: `${meteor.startX}%`,
                        top: `${meteor.startY}%`,
                        width: `${meteor.tailLength}px`,
                        height: `2px`,
                        background: `linear-gradient(-45deg, 
                            transparent 0%, 
                            transparent 40%,
                            rgba(135, 206, 250, 0.1) 50%,
                            rgba(255, 255, 255, 0.2) 60%,
                            rgba(255, 255, 255, 0.5) 75%,
                            rgba(255, 255, 255, 0.8) 85%,
                            rgba(255, 255, 255, 1) 95%,
                            rgba(255, 255, 255, 1) 100%
                        )`,
                        borderRadius: '50px',
                        transform: 'rotate(-45deg)',
                        transformOrigin: '100% 50%',
                        boxShadow: `
                            0 0 4px rgba(255, 255, 255, 0.9),
                            0 0 8px rgba(255, 255, 255, 0.6),
                            0 0 12px rgba(255, 255, 255, 0.3),
                            0 0 16px rgba(135, 206, 250, 0.2)
                        `,
                        animation: `meteorShoot-${meteor.id} ${meteor.duration}s linear`,
                    }}
                />
            ))}

            {meteors
                .filter(meteor => activeMeteors.has(meteor.id))
                .map((meteor) => (
                <div
                    key={`head-${meteor.id}`}
                    className="absolute rounded-full"
                    style={{
                        left: `${meteor.startX}%`,
                        top: `${meteor.startY}%`,
                        width: '4px',
                        height: '4px',
                        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 70%)',
                        boxShadow: `
                            0 0 8px rgba(255, 255, 255, 1),
                            0 0 16px rgba(255, 255, 255, 0.8),
                            0 0 24px rgba(135, 206, 250, 0.4)
                        `,
                        animation: `meteorShoot-${meteor.id} ${meteor.duration}s linear`,
                        transform: 'translate(-2px, -1px)', // Centrar en la cabeza del meteoro
                    }}
                />
            ))}

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes starTwinkle {
                        0%, 100% { 
                            opacity: 0.3; 
                            transform: scale(1); 
                        }
                        50% { 
                            opacity: 1; 
                            transform: scale(1.2); 
                        }
                    }

                    ${meteors.map(meteor => `
                        @keyframes meteorShoot-${meteor.id} {
                            0% {
                                transform: translateX(0) translateY(0) rotate(-45deg);
                                opacity: 0;
                            }
                            5% {
                                opacity: 1;
                            }
                            95% {
                                opacity: 1;
                            }
                            100% {
                                transform: translateX(-${meteor.travelDistance}px) translateY(${meteor.travelDistance}px) rotate(-45deg);
                                opacity: 0;
                            }
                        }
                    `).join('')}
                `
            }} />
        </div>
    );
};