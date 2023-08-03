import styled from "styled-components";
import { Languages, useLanguage, useToggleLanguage } from "./Providers/LangProvider";
import {
  DarkTheme,
  useDarkTheme,
  useSetRandomTheme,
  useTheme,
  useToggleDarkTheme,
} from "./Providers/ThemeProvider";
import { CiDark, CiLight } from 'react-icons/ci';
import {BsPalette} from 'react-icons/bs';
import { Slider } from "./Slider";

export const Settings = () => {
  const theme = useDarkTheme();
  const styles = useTheme();
  const language = useLanguage();


  const setRandomTheme = useSetRandomTheme();
  const toggleDarkMode = useToggleDarkTheme();
  const toggleLanguage = useToggleLanguage();

  

  const ModifiedWrapper = styled(Wrapper).attrs(() => ({
    style: {
      backgroundColor: styles.backgroundColor,
    },
  }))``;

  const ModifiedIconWrapper = styled(IconWrapper).attrs(() => ({
    style: {
      backgroundColor: styles.surfaceColor,
      padding: '0.25rem',
      borderRadius: 34,
      outline: '2px solid currentColor',
    },
  }))``;

  

  const ToggleDarkThemeTitle = () => <IconWrapper><CiLight /></IconWrapper>;
  const ToggleLightThemeTitle = () => <IconWrapper><CiDark /></IconWrapper>;

  const PersianToggleTitle = () => <span>FA</span>;
  const EnglishToggleTitle = () => <span>EN</span>;

  return (
    <ModifiedWrapper dir="ltr">
      <button
        onClick={() => {
          setRandomTheme();
        }}
      >
      <ModifiedIconWrapper>
        <BsPalette />
      </ModifiedIconWrapper>
      </button>

      <Slider 
        onChangeHandler={toggleDarkMode} 
        checkedValue={theme === DarkTheme.light} 
        FalseElement={ToggleDarkThemeTitle} 
        TrueElement={ToggleLightThemeTitle}
      />
      <Slider 
        onChangeHandler={toggleLanguage} 
        checkedValue={language === Languages.fa} 
        FalseElement={EnglishToggleTitle} 
        TrueElement={PersianToggleTitle}
      />
    </ModifiedWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  /* position: sticky; */
  /* top: 0; */
  padding: 1rem 1rem;
  border-bottom: 2px solid currentColor;
  margin-inline: -1rem;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`