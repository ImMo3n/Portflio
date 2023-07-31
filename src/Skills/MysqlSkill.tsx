import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const MysqlSkill = () => {
  const PersianMysqlSkill = () => (
    <SkillComponent title="MySQL" icon="mysql">
      <p>
        من این زبان را به طور اصلی برای انجام عملیات‌های انتخاب (SELECT)،
        به‌روزرسانی (UPDATE)، حذف (DELETE) و درج (INSERT) استفاده کرده‌ام.
        همچنین چند بار نمایش‌ها (views) نوشته‌ام و برخی از توابع و رویه‌ها
        (stored procedures) را نیز پیاده‌سازی کرده‌ام.
      </p>
      <h3>چگونه MySQL :را یاد گرفتم</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PL08903FB7ACA1C2FB"
          >
            سری ویدیوهای آموزشی SQL Server kudvenkat
          </a>
        </li>
        <li>تجربه کاری</li>
      </ul>
    </SkillComponent>
  );

  const EnglishMysqlSkill = () => (
    <SkillComponent title="MySQL" icon="mysql">
      <p>
        I’ve used it primarily to do select/update/delete/insert, Wrote views a
        few times, and some functions and stored procedures.
      </p>
      <h3>How did I learn MySQL:</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/playlist?list=PL08903FB7ACA1C2FB"
          >
            SQL Server tutorial series by kudvenkat
          </a>
        </li>
        <li>Work experience</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianMysqlSkill}
      EnglishElement={EnglishMysqlSkill}
    />
  );
};
