/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export enum Languages {
  fa = "fa",
  en = "en",
}

const LanguageContext = createContext<Languages>(Languages.en);
const LanguageTogglerContex = createContext(() => {});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const useToggleLanguage = () => {
  return useContext(LanguageTogglerContex);
};

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Languages>(Languages.en);

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === Languages.fa ? Languages.en : Languages.fa
    );
  };

  useEffect(() => {
    if(language === Languages.fa) document.title = 'رزومه محسن افشاری'
    else if(language === Languages.en) document.title = 'Resume of Mohsen Afshari'
  })

  return (
    <LanguageContext.Provider value={language}>
      <LanguageTogglerContex.Provider value={toggleLanguage}>
        {children}
      </LanguageTogglerContex.Provider>
    </LanguageContext.Provider>
  );
};
