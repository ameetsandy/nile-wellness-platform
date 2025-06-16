import { useEffect, useRef } from 'react';
import { Languages } from 'lucide-react';

const GoogleTranslate = () => {
  const translateElementRef = useRef<HTMLDivElement>(null);

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
        font-family: 'Poppins', sans-serif !important;
        font-size: 0 !important;
      }
      .goog-te-gadget .goog-te-combo {
        padding: 8px 16px !important;
        border-radius: 6px !important;
        border: 1px solid #0f766e !important;
        background-color: white !important;
        color: #0f766e !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        box-shadow: 0 1px 2px rgba(15, 118, 110, 0.1) !important;
        min-width: 120px !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230f766e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: right 12px center !important;
        background-size: 14px !important;
        padding-right: 36px !important;
      }
      .goog-te-gadget .goog-te-combo:hover {
        background-color: #f0fdfa !important;
        border-color: #0f766e !important;
        box-shadow: 0 2px 4px rgba(15, 118, 110, 0.1) !important;
      }
      .goog-te-gadget .goog-te-combo:focus {
        outline: none !important;
        border-color: #0f766e !important;
        box-shadow: 0 0 0 2px rgba(15, 118, 110, 0.1) !important;
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
        padding: 8px 12px !important;
        font-size: 14px !important;
        background-color: white !important;
        color: #0f766e !important;
        font-weight: 500 !important;
      }
      .goog-te-gadget .goog-te-combo option:hover {
        background-color: #f0fdfa !important;
      }
      .goog-te-menu-frame {
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
        border: none !important;
        border-radius: 6px !important;
      }
      .goog-te-menu2 {
        border: none !important;
        border-radius: 6px !important;
        padding: 4px !important;
      }
      .goog-te-menu2-item {
        padding: 8px 12px !important;
        font-size: 14px !important;
        color: #0f766e !important;
        font-weight: 500 !important;
        border-radius: 4px !important;
      }
      .goog-te-menu2-item:hover {
        background-color: #f0fdfa !important;
      }
      .goog-te-menu2-item:focus {
        background-color: #f0fdfa !important;
        outline: none !important;
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

    // Function to close the dropdown
    const closeDropdown = () => {
      const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.blur();
      }
    };

    // Handle clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('.goog-te-menu-frame');
      const trigger = document.querySelector('.goog-te-combo');
      
      if (dropdown && trigger) {
        const isClickInside = dropdown.contains(event.target as Node) || trigger.contains(event.target as Node);
        if (!isClickInside) {
          closeDropdown();
        }
      }
    };

    // Handle touch events for mobile
    const handleTouchOutside = (event: TouchEvent) => {
      const dropdown = document.querySelector('.goog-te-menu-frame');
      const trigger = document.querySelector('.goog-te-combo');
      
      if (dropdown && trigger) {
        const isTouchInside = dropdown.contains(event.target as Node) || trigger.contains(event.target as Node);
        if (!isTouchInside) {
          closeDropdown();
        }
      }
    };

    // Handle back button press
    const handleBackButton = () => {
      const dropdown = document.querySelector('.goog-te-menu-frame');
      if (dropdown) {
        closeDropdown();
      }
    };

    // Add mutation observer to detect dropdown state changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const dropdown = document.querySelector('.goog-te-menu-frame');
          if (dropdown) {
            // Dropdown is open, add event listeners
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('touchstart', handleTouchOutside);
            window.addEventListener('popstate', handleBackButton);
          } else {
            // Dropdown is closed, remove event listeners
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleTouchOutside);
            window.removeEventListener('popstate', handleBackButton);
          }
        }
      });
    });

    // Start observing the document body for changes
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      // Cleanup
      document.body.removeChild(script);
      document.head.removeChild(style);
      delete window.googleTranslateElementInit;
      observer.disconnect();
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchOutside);
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return (
    <div 
      ref={translateElementRef}
      id="google_translate_element" 
      className="absolute top-[1rem] left-12 md:top-[1.25rem] md:left-auto md:right-4 z-[60] bg-white rounded-lg p-1.5 md:p-2 shadow-md flex items-center gap-1.5 md:gap-2 scale-90 md:scale-100"
      style={{ direction: 'ltr' }}
    >
      <Languages className="h-3.5 w-3.5 md:h-4 md:w-4 text-nile-600" />
    </div>
  );
};

export default GoogleTranslate; 