export const isProduction = () => {
  return import.meta.env.PROD;
};

export const isDevelopment = () => {
  return import.meta.env.DEV;
};

export const isVercel = () => {
  return typeof window !== 'undefined' && 
         (window.location.hostname.includes('vercel.app') || 
          window.location.hostname.includes('vercel.com'));
};

export const getLoadingConfig = () => {
  if (isDevelopment()) {
    return {
      cssCheckInterval: 25,
      maxWaitTime: 1000,
      transitionDelay: 50
    };
  }
  
  
  return {
    cssCheckInterval: 50,
    maxWaitTime: 3000,
    transitionDelay: 100
  };
};
