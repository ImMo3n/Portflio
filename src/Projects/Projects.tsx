import { PersianH1 } from "../CommonStyles";
import { CentralOffice } from "./CentralOffice";
import { MiniLibrary } from "./MiniLibrary";
import { MovieSearchApp } from "./MovieSearchApp";
import { SampleExperimentCD } from "./SampleExperimentCD";
import { SampleExperimentM } from "./SampleExperimentM";
import { WeatherApp } from "./WeatherApp";

export const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <PersianH1>پروژه‌ها</PersianH1>
      <MiniLibrary />
      <SampleExperimentCD />
      <SampleExperimentM />
      <CentralOffice />
      <WeatherApp />
      <MovieSearchApp />
    </>
  );
};
