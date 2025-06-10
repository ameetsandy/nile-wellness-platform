interface GoogleTranslateElementInit {
  pageLanguage: string;
  includedLanguages: string;
  layout: number;
  autoDisplay: boolean;
}

interface GoogleTranslateElement {
  new (options: GoogleTranslateElementInit, elementId: string): void;
}

interface Window {
  googleTranslateElementInit: () => void;
  google: {
    translate: {
      TranslateElement: GoogleTranslateElement;
      TranslateElement: {
        InlineLayout: {
          SIMPLE: number;
        };
      };
    };
  };
} 