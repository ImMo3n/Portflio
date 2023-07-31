import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const PHPSkill = () => {
  const PersianPHPSkill = () => (
    <SkillComponent title="PHP" icon="php">
      <p>
        کل چارچوب Processmaker بر پایه PHP/Laravel است و من در طول فعالیت خود با
        جهاد دانشگاه صنعتی شریف، این زبان را برای تشخیص دسترسی کاربران، تعریف
        رابط‌های برنامه‌نویسی REST API، ساخت کوئری‌ها با استفاده از فریمورک
        Laravel و برخی از تغییرات در داده‌ها هنگام ارسال فرم‌ها مورد استفاده
        قرار داده‌ام.
      </p>
      <h3>چگونه PHP را یاد گرفتم:</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-"
          >
            سری ویدیوهای آموزشی Program With Gio
          </a>
        </li>
        <li>تجربه کاری</li>
      </ul>
    </SkillComponent>
  );

  const EnglishPHPSkill = () => (
    <SkillComponent title="PHP" icon="php">
      <p>
        The entire Processmaker framework is based on php/laravel and I’ve used
        the language primarily for detection of user access, defining REST APIs,
        query building/fetching with laravel framework, Some data manipulation
        when submitting forms in my time with Sharif ACECR.
      </p>
      <h3>How did I learn PHP</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-"
          >
            Program With Gio's tutorial series
          </a>
        </li>
        <li>Work experience</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianPHPSkill}
      EnglishElement={EnglishPHPSkill}
    />
  );
};
