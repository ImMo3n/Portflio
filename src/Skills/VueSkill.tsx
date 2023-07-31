import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const VueSkill = () => {
  const PersianVueSkill = () => (
    <SkillComponent title="Vue.js" icon="vue">
      <p>
        زمانی که در جهاد دانشگاهی شریف مشغول بودم برای پروژه‌ها نیاز به قالب‌های
        چاپی برای پرینت نتیجه آزمایش، نامه و رسید نیاز داشتیم. برای تولید این
        قالب‌ها از Vue.js استفاده کردم. اما بعد تصمیم گرفتم که به سمت React.js
        بروم.
      </p>
      <h3>چگونه vue.js را یاد گرفتم:</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=qZXt1Aom3Cs&ab_channel=TraversyMedia"
          >
            ویدیوی آموزش فشرده Vue JS از Traversy Media
          </a>
        </li>
        <li>
          <a target="_blank" href="https://vueschool.io/courses">
            آموزش‌های مجانی vueschool.io
          </a>
        </li>
        <li>پرینت فرمت‌‌هایی که برای جهاد شریف توسعه دادم</li>
      </ul>
    </SkillComponent>
  );

  const EnglishVueSkill = () => (
    <SkillComponent title="Vue.js" icon="vue">
      <p>
        When I was working for ACECR of Sharif University, we needed print
        formats for projects to print experiment results, letters, and receipts.
        For generating these formats, I used Vue.js. However, later, I decided
        to move towards React.js.
      </p>
      <h3>How did I learn Vue.js:</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=qZXt1Aom3Cs&ab_channel=TraversyMedia"
          >
            Vue JS Crash Course by Traversy Media
          </a>
        </li>
        <li>
          <a target="_blank" href="https://vueschool.io/courses">
            vueschool.io free courses
          </a>
        </li>
        <li>Developing print formats for Sharif ACECR</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianVueSkill}
      EnglishElement={EnglishVueSkill}
    />
  );
};
