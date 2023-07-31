import { LanguageElement } from "../LanguageElement";
import { ProjectComponent } from "./ProjectComponent";
import { TechnologiesUsed } from "./TechnologiesUsed";

export const WeatherApp = () => {
  const PersianWeatherApp = () => (
    <ProjectComponent title="برنامه پیشبینی آب و هوا" icon="sun.svg">
      <p>
        یک برنامه‌ی هواشناسی که از طریق یک رابط برنامه‌نویسی (API)، اطلاعات
        هواشناسی فعلی، پیش‌بینی هوا، و آلودگی هوا را برای مکان فعلی کاربر نمایش
        می‌دهد.
      </p>
      <p>
        تکنولوژی‌های استفاده شده برای این پروژه عبارتند از: React.js،
        Typescript، و Tailwind CSS.
      </p>
    </ProjectComponent>
  );

  const EnglishWeatherApp = () => (
    <ProjectComponent title="Weather App" icon="sun.svg">
      <p>
        A weather app that displays the current weather, forecast, air pollution
        for a given location using an API.
      </p>
      <p>
        Technologies used for this project: React js, Typescript, Tailwind css
      </p>
    </ProjectComponent>
  );

  return (
    <>
      <LanguageElement
        PersianElement={PersianWeatherApp}
        EnglishElement={EnglishWeatherApp}
      />
      <TechnologiesUsed techArray={["react", "typescript", "tailwind"]} />
    </>
  );
};
