import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const CssSkill = () => {
  const PersianCssSkill = () => (
    <SkillComponent title="CSS" icon="css">
      <p>
        CSS یک زبان آسان برای یادگیری است، اما کسب مهارت در آن بسیار دشوار است.
        من کارشناس در این زمینه نیستم، اما هر روز تلاش می‌کنم تا دانش خود را
        بهبود دهم. همچنین، برای تسهیل توسعه برنامه‌ها از کتابخانه‌ها و
        فریمورک‌هایی مانند Styled Components، Tailwind و Bootstrap استفاده
        می‌کنم.
      </p>
      <h3>چگونه CSS را یاد گرفتم:</h3>
      <ul>
        <li>
          <a target="_blank" href="https://www.w3schools.com/css/">
          آموزش‌های W3Schools
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >
           مقاله‌های MDN 
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si"
          >
            سری ویدیوهای Web Dev Simplified CSS
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@KevinPowell">
            کانال یوتیوب کوین پاول
          </a>
        </li>
        <li>
          <a target="_blank" href="https://css-for-js.dev/">
            CSS برای توسعه‌دهندگان جاوااسکریپت اثر جاش کامو
          </a>
        </li>
        <li>پروژه‌های شخصی و حرفه‌ای را با آن توسعه دادم</li>
      </ul>
    </SkillComponent>
  );

  const EnglishCssSkill = () => (
    <SkillComponent title="CSS" icon="css">
      <p>
        css is an easy language to learn but very difficult one to master, as
        such I’m not expert in it but try to improve my knowledge every day, as
        well as using libraries/frameworks to make developing apps easier such
        as Styled Components, Tailwind, Bootstrap.
      </p>
      <h3>How did I learn CSS:</h3>
      <ul>
        <li>
          <a target="_blank" href="https://www.w3schools.com/css/">
            W3Schools Tutorials
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >
            MDN articles
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9D0J0Mtp6lIiD_8046k3si"
          >
            Web Dev Simplified's css series
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@KevinPowell">
            Kevin Powell's
          </a>{" "}
          youtube channel
        </li>
        <li>
          Josh W Comeau's{" "}
          <a target="_blank" href="https://css-for-js.dev/">
            CSS for Javascript Developers
          </a>
        </li>
        <li>Developed personal and professional projects with it</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianCssSkill}
      EnglishElement={EnglishCssSkill}
    />
  );
};
