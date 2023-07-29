import { PersianH2, PersianParagraph } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";

export const StyledComponentSkill = () => {
  const PersianStyledComponentSkill = () => <>
    <PersianH2>Styled Components</PersianH2>
    <PersianParagraph>
      من از این ابزار در برنامه جستجوی فیلم‌های خود استفاده کرده‌ام. این ابزار
      به‌صورت CSS در قالب جاوااسکریپت (CSS-in-JS) عمل می‌کند و از لحاظ
      استایل‌دهی به عناصر، ابزار مورد علاقه‌ام هست. React باعث شد تا HTML و
      JavaScript در یک فایل با هم قرار گیرند، اما این ابزار اجازه می‌دهد تا
      همه اجزای HTML، JS و CSS در یک فایل تکی قرار گیرند. همچنین به شما اجازه
      می‌دهد تا استایل‌ها را override کنید، تگ‌های عمومی html (مانند div) را
      به نام‌های معنی‌دارتری تغییر دهید که باعث مفهوم بودن المان‌ها می‌شود که
      باعث سرعت در توسعه می‌شود.
    </PersianParagraph>
  </>

  const EnglishStyledComponentSkill = () => <>
    <h2>Styled Components</h2>
    <p>
      I’ve used this tool in my Movie Search app. It is css in javascript
      format and it’s my favorite tool to style elements. React caused the
      html and javascript to be together, this tool allows react to include
      all html, js, css to be in one single file. It also lets you override
      styles, name generic div names to be more meaningful when developing and
      debugging.
    </p>
  </>

  return <LanguageElement PersianElement={PersianStyledComponentSkill} EnglishElement={EnglishStyledComponentSkill}/>
};
