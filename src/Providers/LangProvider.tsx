/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export enum Languages {
  fa = "fa",
  en = "en",
}

const LanguageContext = createContext<Languages>(Languages.fa);
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
  const [language, setLanguage] = useState<Languages>(Languages.fa);

  const toggleLanguage = () => {
    setLanguage((prev) =>
      prev === Languages.fa ? Languages.en : Languages.fa
    );
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageTogglerContex.Provider value={toggleLanguage}>
        {children}
      </LanguageTogglerContex.Provider>
    </LanguageContext.Provider>
  );
};
