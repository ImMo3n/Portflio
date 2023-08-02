/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export enum DarkTheme {
  light = "light",
  dark = "dark",
}

export type TStyles = {
  backgroundColor: string;
  surfaceColor: string;
  color: string;
  secondColor: string;
};

const defaultTheme = {
  // default style is dark mode
  // office gray
  backgroundColor: "#212529",
  surfaceColor: "#343A40",
  color: "#F8F9FA",
  secondColor: "#c4cbd2",
};

const DarkThemeContext = createContext<DarkTheme>(getPreferredTheme());
const DarkThemeToggleContext = createContext(() => {});
const SetRandomThemeContext = createContext(() => {});
const ThemeContext = createContext(defaultTheme);

export const useDarkTheme = () => {
  return useContext(DarkThemeContext);
};

export const useToggleDarkTheme = () => {
  return useContext(DarkThemeToggleContext);
};

export const useSetRandomTheme = () => {
  return useContext(SetRandomThemeContext);
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState<DarkTheme>(getPreferredTheme());
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleDarkTheme = () => {
    setDarkTheme((prev) =>
      prev === DarkTheme.dark ? DarkTheme.light : DarkTheme.dark
    );
  };

  const setRandomTheme = () => {
    const themeArray = darkTheme === DarkTheme.dark ? darkThemes : lightThemes;
    const nonRepeatingThemeArray = themeArray.filter(
      (theme) => theme.backgroundColor !== currentTheme.backgroundColor
    );
    const randomIndex = Math.floor(
      Math.random() * nonRepeatingThemeArray.length
    );
    const theme = nonRepeatingThemeArray[randomIndex];
    setCurrentTheme(theme);
  };

  // Listener for system dark mode change
  useEffect(() => {
    const handleColorSchemeChange = (event: MediaQueryListEvent) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setDarkTheme(newColorScheme as DarkTheme);
    };
    const colorSchemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    colorSchemeMediaQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      colorSchemeMediaQuery.removeEventListener(
        "change",
        handleColorSchemeChange
      );
    };
  }, []);

  useEffect(() => {
    setRandomTheme();
  }, [darkTheme]);

  return (
    <DarkThemeContext.Provider value={darkTheme}>
      <DarkThemeToggleContext.Provider value={toggleDarkTheme}>
        <SetRandomThemeContext.Provider value={setRandomTheme}>
          <ThemeContext.Provider value={currentTheme}>
            {children}
          </ThemeContext.Provider>
        </SetRandomThemeContext.Provider>
      </DarkThemeToggleContext.Provider>
    </DarkThemeContext.Provider>
  );
};

function prefersDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function getPreferredTheme() {
  if (prefersDarkMode() === true) return DarkTheme.dark;
  return DarkTheme.light;
}

const darkThemes = Object.freeze([
  {
    // purple
    backgroundColor: "#10002B",
    surfaceColor: "#240046",
    color: "#ffffff",
    secondColor: "#C77DFF",
  },
  {
    // office gray
    backgroundColor: "#212529",
    surfaceColor: "#343A40",
    color: "#F8F9FA",
    secondColor: "#c4cbd2",
  },
  {
    // crimson
    backgroundColor: "#2c0610",
    surfaceColor: "#50091e",
    color: "#f9eaed",
    secondColor: "#FF8FA3",
  },
  {
    // navy
    backgroundColor: "#020334",
    surfaceColor: "#001845",
    color: "#e0f7fc",
    secondColor: "#48CAE4",
  },
  {
    // brown
    backgroundColor: "#2d1901",
    surfaceColor: "#422502",
    color: "#ffffff",
    secondColor: "#e7bc91",
  },
  {
    // pink
    backgroundColor: "#392e3b",
    surfaceColor: "#4f3e4c",
    color: "#ffffff",
    secondColor: "#f0c7c2",
  },
  {
    // green
    backgroundColor: "#0b2315",
    surfaceColor: "#043414",
    color: "#ffffff",
    secondColor: "#5ede91",
  },
  {
    // gray
    backgroundColor: "#212529",
    surfaceColor: "#343a40",
    color: "#f8f9fa",
    secondColor: "#ced4da",
  },
]);

const lightThemes = Object.freeze([
  {
    // pink
    backgroundColor: "#ffccd5",
    surfaceColor: "#fff0f3",
    color: "#800f2f",
    secondColor: "#ff758f",
  },
  {
    // blue
    backgroundColor: "#90e0ef",
    surfaceColor: "#caf0f8",
    color: "#03045e",
    secondColor: "#0077b6",
  },
  {
    // green
    backgroundColor: "#95d5b2",
    surfaceColor: "#b7e4c7",
    color: "#081c15",
    secondColor: "#1b4332",
  },
  {
    // gray
    backgroundColor: "#d3d3d3",
    surfaceColor: "#f5f3f4",
    color: "#161a1d",
    secondColor: "#660708",
  },
  {
    // purple
    backgroundColor: "#b3beff",
    surfaceColor: "#e6f2ff",
    color: "#431259",
    secondColor: "#805ebf",
  },
  {
    // lighter blue
    backgroundColor: "#abc4ff",
    surfaceColor: "#e2eafc",
    color: "#11171a",
    secondColor: "#2e2949",
  },
  {
    // aqua
    backgroundColor: "#9ceaef",
    surfaceColor: "#c4fff9",
    color: "#032d2c",
    secondColor: "#036865",
  },
  {
    // brown
    backgroundColor: "#f3d5b5",
    surfaceColor: "#ffedd8",
    color: "#583101",
    secondColor: "#6f4518",
  },
]);
