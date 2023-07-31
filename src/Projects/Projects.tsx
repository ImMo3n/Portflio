import styled from "styled-components";
import { CategoryTitle } from "../CommonStyles";
import { useTheme } from "../Providers/ThemeProvider";
import { CentralOffice } from "./CentralOffice";
import { MiniLibrary } from "./MiniLibrary";
import { MovieSearchApp } from "./MovieSearchApp";
import { SampleExperimentCD } from "./SampleExperimentCD";
import { SampleExperimentM } from "./SampleExperimentM";
import { WeatherApp } from "./WeatherApp";

import { LanguageElement } from "../LanguageElement";

export const Projects = () => {
  const styles = useTheme();

  const ModifiedProjectWrapper = styled(ProjectWrapper).attrs(() => ({
    style: {
      backgroundColor: styles.surfaceColor,
      color: styles.color,
    },
  }))``;

  const ModifiedWrapper = styled(Wrapper).attrs(() => ({
    style: {
      backgroundColor: styles.backgroundColor,
      color: styles.color,
    },
  }))``;

  const PersianTitle = () => <CategoryTitle>پروژه‌ها</CategoryTitle>;
  const EnglishTitle = () => <CategoryTitle>Projects</CategoryTitle>;

  return (
    <>
      <LanguageElement
        PersianElement={PersianTitle}
        EnglishElement={EnglishTitle}
      />
      <ModifiedWrapper>
        <ModifiedProjectWrapper>
          <MiniLibrary />
        </ModifiedProjectWrapper>
        <ModifiedProjectWrapper>
          <SampleExperimentCD />
        </ModifiedProjectWrapper>
        <ModifiedProjectWrapper>
          <SampleExperimentM />
        </ModifiedProjectWrapper>
        <ModifiedProjectWrapper>
          <CentralOffice />
        </ModifiedProjectWrapper>
        <ModifiedProjectWrapper>
          <WeatherApp />
        </ModifiedProjectWrapper>
        <ModifiedProjectWrapper>
          <MovieSearchApp />
        </ModifiedProjectWrapper>
      </ModifiedWrapper>
    </>
  );
};

const ProjectWrapper = styled.article`
  padding: 2rem;
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 10px;

  & section:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

const Wrapper = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
