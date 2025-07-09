import { useEffect } from 'react';

export function SmartPreloader() {
  useEffect(() => {
    if (import.meta.env.PROD) {
      const preloadResources = [
        { href: '/projects/project1.png', as: 'image' },
        { href: '/projects/project2.png', as: 'image' },
        { href: '/projects/project3.png', as: 'image' },
        { href: '/certifications/aws-cloud-practitioner.svg', as: 'image' },
        { href: '/certifications/react-certificate.svg', as: 'image' },
        { href: '/certifications/freecodecamp-js.svg', as: 'image' },
        { href: '/certifications/freecodecamp-rwd.svg', as: 'image' },
        { href: '/certifications/ibm-nodejs.svg', as: 'image' },
        { href: '/certifications/github-cert.svg', as: 'image' }
      ];

      preloadResources.forEach(resource => {
        const existingPreload = document.querySelector(`link[href="${resource.href}"][rel="preload"]`);
        
        if (!existingPreload) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.href;
          link.as = resource.as;
          
          link.onload = () => {
          };
          
          link.onerror = () => {
            link.remove();
          };
          
          document.head.appendChild(link);
        }
      });
    }

    const preloadImages = () => {
      const criticalImages = [
        '/projects/project1.png',
        '/projects/project2.png',
        '/projects/project3.png',
        '/certifications/aws-cloud-practitioner.svg',
        '/certifications/react-certificate.svg',
        '/certifications/freecodecamp-js.svg'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    const preloadTimer = setTimeout(preloadImages, 300);

    return () => {
      clearTimeout(preloadTimer);
    };
  }, []);

  return null;
}
