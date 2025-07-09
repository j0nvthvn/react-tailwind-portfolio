import { useState, useEffect } from 'react';
import { getLoadingConfig } from '../utils/environment';

export function useCSSLoaded() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const config = getLoadingConfig();
    
    const checkTailwindLoaded = () => {
      const testElement = document.getElementById('tailwind-test');
      if (!testElement) return false;

      const styles = window.getComputedStyle(testElement);
      const bgColor = styles.backgroundColor;
      
      return bgColor === 'rgb(139, 92, 246)' || bgColor === 'rgba(139, 92, 246, 1)';
    };

    const checkStylesheetsLoaded = () => {
      if (import.meta.env.DEV) {
        return document.styleSheets.length > 0;
      }
      
      const stylesheets = document.styleSheets;
      for (let i = 0; i < stylesheets.length; i++) {
        try {
          const rules = stylesheets[i].cssRules || stylesheets[i].rules;
          if (!rules) return false;
        } catch (e) {
          continue;
        }
      }
      return true;
    };

    const checkDOMReady = () => {
      return document.readyState === 'complete' || document.readyState === 'interactive';
    };

    const waitForCSS = () => {
      const tailwindLoaded = checkTailwindLoaded();
      const stylesheetsLoaded = checkStylesheetsLoaded();
      const domReady = checkDOMReady();

      if (tailwindLoaded && stylesheetsLoaded && domReady) {
        setTimeout(() => {
          setIsLoaded(true);
        }, config.transitionDelay);
        return true;
      }
      return false;
    };

    if (waitForCSS()) {
      return;
    };

    const events = ['load', 'DOMContentLoaded'];
    const checkInterval = setInterval(() => {
      if (waitForCSS()) {
        clearInterval(checkInterval);
      }
    }, config.cssCheckInterval);

    const handleLoad = () => {
      setTimeout(() => {
        if (waitForCSS()) {
          clearInterval(checkInterval);
        }
      }, config.transitionDelay);
    };

    events.forEach(event => {
      window.addEventListener(event, handleLoad);
    });

    const fallbackTimeout = setTimeout(() => {
      setIsLoaded(true);
      clearInterval(checkInterval);
    }, config.maxWaitTime);

    return () => {
      clearInterval(checkInterval);
      clearTimeout(fallbackTimeout);
      events.forEach(event => {
        window.removeEventListener(event, handleLoad);
      });
    };
  }, []);

  return isLoaded;
}
