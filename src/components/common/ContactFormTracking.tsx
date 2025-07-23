import { useEffect } from 'react';

const ContactFormTracking = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form'); // Adjust if needed

        if (form) {
          form.addEventListener('submit', function (event) {
            gtag('event', 'conversion', {
              'send_to': 'AW-17040751778/FORM_SUBMIT',
              'value': 1.0,
              'currency': 'INR'
            });

            gtag('event', 'form_submission', {
              'event_category': 'lead',
              'event_label': 'Contact Page Form'
            });
          });
        }
      });
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ContactFormTracking; 