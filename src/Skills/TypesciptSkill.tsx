import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const TypescriptSkill = () => {
  const PersianTypescriptSkill = () => (
    <SkillComponent title="TypeScript" icon="typescript">
      <p>
        برای استفاده از TypeScript، شما نیازی به دانش گسترده‌ای از زبان ندارید و
        این بسیار به توسعه کمک می‌کند و به جلوگیری از باگ‌ها و خطاها کمک می‌کند.
        در دو پروژه "Weather app" و "MovieSearch app" که توسعه داده‌ام، از
        TypeScript استفاده کردم و در آینده نیز سعی خواهم کرد از آن استفاده کنم.
      </p>
      <h3>چگونه TypeScript را یاد گرفتم:</h3>
      <ul>
        <li>
          <a target="_blank" href="https://www.roadtoreact.com/">
            کتاب "راه به ری‌اکت"
          </a>{" "}
          قسمتی درباره TypeScript داشت
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g"
          >
            سری ویدیوهای Web Dev Simplified TypeScript
          </a>
        </li>
        <li>
          ویدیوهای{" "}
          <a target="_blank" href="https://www.youtube.com/@jherr/featured">
            Jack Harrington
          </a>{" "}
          درباره TypeScript
        </li>
        <li>توسعه پروژه‌های شخصی</li>
      </ul>
    </SkillComponent>
  );

  const EnglishTypescriptSkill = () => (
    <SkillComponent title="TypeScript" icon="typescript">
      <p>
        To be able to use typescript you don’t need extensive knowledge of the
        language and it helps a lot during development and helps prevents bugs
        and errors. I’ve used it in the two projects "Weather app" and
        "MovieSearch app" and will try to use it in the future.
      </p>
      <h3>How did I learn Typescript:</h3>
      <ul>
        <li>
          <a target="_blank" href="https://www.roadtoreact.com/">
            The Road To React book
          </a>{" "}
          has a part that delves into Typescript
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_z2fqIg50_POJrUkJgBu7g"
          >
            Web Dev Simplified TypeScript Series
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@jherr/featured">
            Jack Harrington's
          </a>{" "}
          videos about TypeScript
        </li>
        <li>Developed personal projects with it</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianTypescriptSkill}
      EnglishElement={EnglishTypescriptSkill}
    />
  );
};
