import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const JQuerySkill = () => {
  const PersianJQuerySkill = () => (
    <SkillComponent title="jQuery" icon="jquery">
      <p>
        من این زبان را زمانی که در جهاد دانشگاه صنعتی شریف مشغول بودم بسیار
        استفاده کردم. اما الان دیگر نمی‌خواهم دانش خود را در این زبان بهبود دهم،
        زیرا JavaScript خام اصلی تقریباً تمامی قابلیت‌هایی را که برای توسعه
        برنامه‌های وب نیاز دارم، فراهم می‌کند.
      </p>
      <h3>چگونه jQuery را یاد گرفتم:</h3>
      <ul>
        <li>تجربه کاری</li>
      </ul>
    </SkillComponent>
  );

  const EnglishJQuerySkill = () => (
    <SkillComponent title="jQuery" icon="jquery">
      <p>
        I’ve used it a lot when I was developing in Sharif ACECR but personally
        don’t want to improve my knowledge on it, because the vanilla Javascript
        fulfills most of the functionality I need to develop web apps.
      </p>
      <h3>How did I learn jQuery:</h3>
      <ul>
        <li>Work experience</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianJQuerySkill}
      EnglishElement={EnglishJQuerySkill}
    />
  );
};
