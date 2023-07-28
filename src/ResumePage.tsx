// import { useLanguage } from "./Providers/LangProvider";
// import { useTheme } from "./Providers/ThemeProvider";
// import { styled } from "styled-components";

import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Settings } from "./Settings";
// import { useDarkTheme, useTheme } from "./Providers/ThemeProvider";
// import { useLanguage } from "./Providers/LangProvider";

// import { Bootstrap } from "@styled-icons/boxicons-logos/Bootstrap";

// const StyledBootstap = styled(Bootstrap)`
//   width: 100px;
//   color: navy;
// `;

export const ResumePage = () => {
  // const setRandomTheme = useSetRandomTheme();
  //   const style = getTheme();
  // console.log(useDarkTheme());
  // console.log(useTheme());

  return (
    <>
      <Settings />
      <About />
      <Skills />
      <Projects />
      {/* <StyledBootstap /> */}
    </>
  );
};
