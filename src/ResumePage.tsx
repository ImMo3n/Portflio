// import { useLanguage } from "./Providers/LangProvider";
// import { useTheme } from "./Providers/ThemeProvider";
// import { styled } from "styled-components";

import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Settings } from "./Settings";
import styled from "styled-components";
import { useTheme } from "./Providers/ThemeProvider";
import { Languages, useLanguage } from "./Providers/LangProvider";
// import { useDarkTheme, useTheme } from "./Providers/ThemeProvider";
// import { useLanguage } from "./Providers/LangProvider";

// import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";

// const StyledBootstap = styled(Bootstrap)`
//   width: 100px;
//   color: navy;
// `;

export const ResumePage = () => {
  const styles = useTheme();
  const language = useLanguage();

  const DOMWrapper = styled.div`
    background-color: ${styles.backgroundColor};
    color: ${styles.color};
    display: flex;
    /* background: url("./ttten.svg") no-repeat center center fixed; */
    background-image: url("./ttten.svg");
    background-blend-mode: color-dodge;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    /* background-size: contain; */

    /* background-size: contain; */
    /* background-repeat: no-repeat; */
  `;

  const ContentWrapper = styled.main`
    background-color: ${styles.backgroundColor}ad;
    color: ${styles.color};
    flex-basis: 1000px;
    margin: auto;
    padding: 1rem;
  `;
  // const setRandomTheme = useSetRandomTheme();
  //   const style = getTheme();
  // console.log(useDarkTheme());
  // console.log(useTheme());

  return (
    <DOMWrapper dir={language === Languages.fa ? "rtl" : "ltr"}>
      <ContentWrapper>
        <Settings />
        <About />
        <Skills />
        <Projects />
      </ContentWrapper>
      {/* <StyledBootstap /> */}
    </DOMWrapper>
  );
};
