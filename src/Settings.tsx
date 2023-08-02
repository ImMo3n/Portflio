import styled from "styled-components";
import { useToggleLanguage } from "./Providers/LangProvider";
import {
  useSetRandomTheme,
  useTheme,
  useToggleDarkTheme,
} from "./Providers/ThemeProvider";
import { Slider } from "./Slider";

export const Settings = () => {
  const styles = useTheme();

  const setRandomTheme = useSetRandomTheme();
  const toggleDarkMode = useToggleDarkTheme();
  const toggleLanguage = useToggleLanguage();

  const ModifiedWrapper = styled(Wrapper).attrs(() => ({
    style: {
      backgroundColor: styles.backgroundColor,
    },
  }))``;

  return (
    <ModifiedWrapper dir="ltr">
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
    </ModifiedWrapper>
  );
};
// <Slider />

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  position: sticky;
  top: 0;
  padding: 1rem 1rem;
  border-bottom: 2px solid currentColor;
  margin-inline: -1rem;
`;
