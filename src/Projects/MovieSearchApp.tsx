import { LanguageElement } from "../LanguageElement";
import { GitLink } from "./GitLink";
import { ProjectComponent } from "./ProjectComponent";
import { TechnologiesUsed } from "./TechnologiesUsed";

export const MovieSearchApp = () => {
  const PersianMovieSearchApp = () => (
    <ProjectComponent title="برنامه جستجوی فیلم و سریال" icon="film.svg">
      <p>
        یک برنامه‌ی جستجوی فیلم که به کاربران اجازه می‌دهد با استفاده از یک API،
        فیلم‌ها را بر اساس عنوان یا بازیگر جستجو کنند.
      </p>
      <p>
        تکنولوژی‌های استفاده شده برای این پروژه عبارتند از: React.js،
        Typescript، styled-components (CSS-in-JS)، و React Query (Tanstack
        Query).
      </p>
    </ProjectComponent>
  );

  const EnglishMovieSearchApp = () => (
    <ProjectComponent title="MovieSearch App" icon="film.svg">
      <p>
        A movie search app that allows users to search for movies by title, or
        actor using an API.
      </p>
      <p>
        Technologies used for this project: React js, Typescript, styled
        components (css), React query (Tanstack query).
      </p>
    </ProjectComponent>
  );

  return (
    <>
      <LanguageElement
        PersianElement={PersianMovieSearchApp}
        EnglishElement={EnglishMovieSearchApp}
      />
      <GitLink link={"https://github.com/ImMo3n/MovieSearch"}/>
      <TechnologiesUsed
        techArray={["react", "typescript", "styled-component", "react-query"]}
      />
    </>
  );
};
