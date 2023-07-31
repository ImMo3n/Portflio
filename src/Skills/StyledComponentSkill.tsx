import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const StyledComponentSkill = () => {
  const PersianStyledComponentSkill = () => (
    <SkillComponent title="Styled Components" icon="styled-component">
      <p>
        من از این ابزار در برنامه جستجوی فیلم‌های خود استفاده کرده‌ام. این ابزار
        به‌صورت CSS در قالب جاوااسکریپت (CSS-in-JS) عمل می‌کند و از لحاظ
        استایل‌دهی به عناصر، ابزار مورد علاقه‌ام هست. React باعث شد تا HTML و
        JavaScript در یک فایل با هم قرار گیرند، اما این ابزار اجازه می‌دهد تا
        همه اجزای HTML، JS و CSS در یک فایل تکی قرار گیرند. همچنین به شما اجازه
        می‌دهد تا استایل‌ها را override کنید، تگ‌های عمومی html (مانند div) را
        به نام‌های معنی‌دارتری تغییر دهید که باعث مفهوم بودن المان‌ها می‌شود که
        باعث سرعت در توسعه می‌شود.
      </p>
      <h3>چگونه Styled Components را یاد گرفتم:</h3>
      <ul>
        <li>
          جاش کامو در سری آموزشی{" "}
          <a target="_blank" href="https://css-for-js.dev/">
            CSS برای توسعه‌دهندگان جاوااسکریپت
          </a>{" "}
          مفهومش را معرفی کرد
        </li>
        <li>برنامه جستجوی فیلم و سریال را با آن توسعه دادم</li>
      </ul>
    </SkillComponent>
  );

  const EnglishStyledComponentSkill = () => (
    <SkillComponent title="Styled Components" icon="styled-component">
      <p>
        The Processmaker forms use it to style the elements and I’ve used this
        framework in print format tools when I was working in ACECR of Sharif.
        It’s like tailwind but gives a lot less flexibility, and the websites
        using it all look the same. It can be useful when developing something
        when style of the website isn't in the focus like admin templates or
        settings pages, but it’s not my favorite to use overall.
      </p>
      <h3>How did I learn Styled Components</h3>
      <ul>
        <li>
          Josh Comeau introduced me to the concept in the{" "}
          <a target="_blank" href="https://css-for-js.dev/">
            CSS for Javascript Developers
          </a>{" "}
          series
        </li>
        <li>Developed the MovieSearch App with it</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianStyledComponentSkill}
      EnglishElement={EnglishStyledComponentSkill}
    />
  );
};
