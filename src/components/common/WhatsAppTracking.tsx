import { useEffect } from 'react';

const WhatsAppTracking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      document.addEventListener('DOMContentLoaded', function () {
        var whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
        whatsappLinks.forEach(function(link) {
          link.addEventListener('click', function() {
            // Google Ads Conversion
            gtag('event', 'conversion', {
              'send_to': 'AW-17040751778/WHATSAPP_CLICK',
              'value': 1.0,
              'currency': 'INR'
            });

            // Google Analytics Event
            gtag('event', 'whatsapp_click', {
              'event_category': 'engagement',
              'event_label': 'WhatsApp Button'
            });
          });
        });
      });
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default WhatsAppTracking; 