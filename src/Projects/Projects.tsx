import styled from "styled-components";
import { PersianH1 } from "../CommonStyles";
import { useTheme } from "../Providers/ThemeProvider";
import { CentralOffice } from "./CentralOffice";
import { MiniLibrary } from "./MiniLibrary";
import { MovieSearchApp } from "./MovieSearchApp";
import { SampleExperimentCD } from "./SampleExperimentCD";
import { SampleExperimentM } from "./SampleExperimentM";
import { WeatherApp } from "./WeatherApp";

import {LanguageElement} from '../LanguageElement';

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

  const PersianTitle = () => <PersianH1>پروژه‌ها</PersianH1>
  const EnglishTitle = () => <h1>Projects</h1>

  return (
    <ModifiedWrapper>
      <LanguageElement PersianElement={PersianTitle} EnglishElement={EnglishTitle}/>
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
  );
};

const ProjectWrapper = styled.article`
  padding: 1rem;
`;

const Wrapper = styled.section`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
`;
