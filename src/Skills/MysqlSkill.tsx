import { PersianH2, PersianParagraph } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";

export const MysqlSkill = () => {
  const PersianMysqlSkill = () => <>
    <PersianH2>MySQL</PersianH2>
    <PersianParagraph>
      من این زبان را به طور اصلی برای انجام عملیات‌های انتخاب (SELECT)،
      به‌روزرسانی (UPDATE)، حذف (DELETE) و درج (INSERT) استفاده کرده‌ام.
      همچنین چند بار نمایش‌ها (views) نوشته‌ام و برخی از توابع و رویه‌ها
      (stored procedures) را نیز پیاده‌سازی کرده‌ام.
    </PersianParagraph>
  </>

  const EnglishMysqlSkill = () => <>
    <h2>MySQL</h2>
    <p>
      I’ve used it primarily to do select/update/delete/insert, Wrote views a
      few times, and some functions and stored procedures.
    </p>
  </>

  return <LanguageElement PersianElement={PersianMysqlSkill} EnglishElement={EnglishMysqlSkill}/>

  // return (
  //   <>
  //     <h2>MySQL</h2>
  //     <p>
  //       I’ve used it primarily to do select/update/delete/insert, Wrote views a
  //       few times, and some functions and stored procedures.
  //     </p>
  //     <PersianH2>MySQL</PersianH2>
  //     <PersianParagraph>
  //       من این زبان را به طور اصلی برای انجام عملیات‌های انتخاب (SELECT)،
  //       به‌روزرسانی (UPDATE)، حذف (DELETE) و درج (INSERT) استفاده کرده‌ام.
  //       همچنین چند بار نمایش‌ها (views) نوشته‌ام و برخی از توابع و رویه‌ها
  //       (stored procedures) را نیز پیاده‌سازی کرده‌ام.
  //     </PersianParagraph>
  //   </>
  // );
};
