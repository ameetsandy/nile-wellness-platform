import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Add Google Ads (gtag.js) script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17040751778';
    document.head.appendChild(script1);

    // Fix TypeScript error for window.dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'AW-17040751778');

    return () => {
      // Cleanup
      document.head.removeChild(script1);
    };
  }, []);

  return null;
};

export default GoogleAnalytics; 