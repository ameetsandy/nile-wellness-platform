import { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Add Google tag (gtag.js) - Google Ads + GA4 script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-2EM7PKDET3';
    document.head.appendChild(script1);

    // Add inline script for gtag config
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      // Google Analytics
      gtag('config', 'G-2EM7PKDET3');
      // Google Ads
      gtag('config', 'AW-17040751778');
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default GoogleAnalytics; 