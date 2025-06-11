import { useEffect } from 'react';
import { Languages } from 'lucide-react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Add Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Add custom styles for Google Translate
    const style = document.createElement('style');
    style.textContent = `
      .goog-te-gadget {
        font-family: inherit !important;
        font-size: 0 !important;
      }
      .goog-te-gadget .goog-te-combo {
        padding: 10px 16px !important;
        border-radius: 8px !important;
        border: 2px solid #0f766e !important;
        background-color: white !important;
        color: #0f766e !important;
        font-size: 14px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        box-shadow: 0 2px 4px rgba(15, 118, 110, 0.1) !important;
        min-width: 140px !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230f766e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: right 12px center !important;
        background-size: 16px !important;
        padding-right: 40px !important;
      }
      .goog-te-gadget .goog-te-combo:hover {
        background-color: #f0fdfa !important;
        border-color: #0f766e !important;
        box-shadow: 0 4px 12px rgba(15, 118, 110, 0.15) !important;
        transform: translateY(-1px) !important;
      }
      .goog-te-gadget .goog-te-combo:focus {
        outline: none !important;
        border-color: #0f766e !important;
        box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.1) !important;
      }
      .goog-te-banner-frame {
        display: none !important;
      }
      .goog-te-menu-value {
        display: none !important;
      }
      .goog-te-gadget img {
        display: none !important;
      }
      .goog-te-gadget .goog-te-combo option {
        padding: 12px !important;
        font-size: 14px !important;
        background-color: white !important;
        color: #0f766e !important;
        font-weight: 500 !important;
      }
      .goog-te-gadget .goog-te-combo option:hover {
        background-color: #f0fdfa !important;
      }
    `;
    document.head.appendChild(style);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,ru,ar',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    return () => {
      // Cleanup
      document.body.removeChild(script);
      document.head.removeChild(style);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className="absolute top-[1.25rem] right-4 z-[60] bg-white rounded-lg p-2 shadow-md flex items-center gap-2"
      style={{ direction: 'ltr' }}
    >
      <Languages className="h-4 w-4 text-nile-600" />
    </div>
  );
};

export default GoogleTranslate; 