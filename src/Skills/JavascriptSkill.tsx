import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const JavascriptSkill = () => {
  const PersianJavascriptSkill = () => (
    <SkillComponent title="Javascript" icon="javascript">
      <p>
        من درک خوبی از این زبان دارم، هر روز از آن استفاده می‌کنم و سعی می‌کنم
        درک خود از آن را هر روز بهبود ببخشم.
      </p>
      <h3>چگونه جاوااسکریپت را یاد گرفتم:</h3>
      <ul>
        <li>تجربه کاری</li>
        <li>
          <a target="_blank" href="https://eloquentjs.ir/">
            کتاب جاوااسکریپت شیوا نوشته‌ی مارین هاوربک
          </a>
        </li>
        <li>
          <a target="_blank" href="https://fa.javascript.info/">
            آموزش جاوااسکریپت مدرن
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@WebDevSimplified">
            کانال یوتیوب Web Dev Simplified
          </a>
        </li>
        <li>توسعه پروژه‌های شخصی و حرفه‌ای</li>
      </ul>
    </SkillComponent>
  );

  const EnglishJavascriptSkill = () => (
    <SkillComponent title="Javascript" icon="javascript">
      <p>
        I have a good understanding of the language, use it every day and try to
        improve on my understanding of it every day.
      </p>
      <h3>How did I learn Javascript:</h3>
      <ul>
        <li>Work experience</li>
        <li>
          <a target="_blank" href="https://eloquentjavascript.net/">
            Eloquent Javascript book by Margin Haverbeke
          </a>
        </li>
        <li>
          <a target="_blank" href="https://javascript.info/">
            The Modern JavaScript Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@WebDevSimplified">
            Web Dev Smiplified Youtube Channel
          </a>
        </li>
        <li>Developing personal and professional projects</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianJavascriptSkill}
      EnglishElement={EnglishJavascriptSkill}
    />
  );
};
