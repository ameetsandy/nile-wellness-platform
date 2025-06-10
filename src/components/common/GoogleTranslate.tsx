import { useEffect } from 'react';

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
        padding: 8px 12px !important;
        border-radius: 8px !important;
        border: 1px solid #e2e8f0 !important;
        background-color: white !important;
        color: #1e293b !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) !important;
        min-width: 120px !important;
      }
      .goog-te-gadget .goog-te-combo:hover {
        border-color: #0f766e !important;
        box-shadow: 0 2px 8px rgba(15, 118, 110, 0.1) !important;
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
        padding: 8px !important;
        font-size: 14px !important;
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
      className="absolute top-4 right-4 z-[60] bg-white rounded-lg p-2 shadow-sm"
      style={{ direction: 'ltr' }}
    />
  );
};

export default GoogleTranslate; 