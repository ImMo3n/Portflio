import { useToggleLanguage } from "./Providers/LangProvider";
import {
  useSetRandomTheme,
  useToggleDarkTheme,
} from "./Providers/ThemeProvider";

export const Settings = () => {
  const setRandomTheme = useSetRandomTheme();
  const toggleDarkMode = useToggleDarkTheme();
  const toggleLanguage = useToggleLanguage();

  return (
    <>
      <button
        onClick={() => {
          setRandomTheme();
        }}
      >
        Change Theme
      </button>
      <button
        onClick={() => {
          toggleDarkMode();
        }}
      >
        Toggle Dark/light Mode
      </button>
      <button
        onClick={() => {
          toggleLanguage();
        }}
      >
        Toggle Language
      </button>
    </>
  );
};
