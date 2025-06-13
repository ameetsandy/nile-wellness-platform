import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-2EM7PKDET3';
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-2EM7PKDET3');

    return () => {
      // Cleanup
      document.head.removeChild(script1);
    };
  }, []);

  return null;
};

export default GoogleAnalytics; 