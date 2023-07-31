import { LanguageElement } from "../LanguageElement";
import { ProjectComponent } from "./ProjectComponent";
import { TechnologiesUsed } from "./TechnologiesUsed";

export const CentralOffice = () => {
  const PersianCentralOffice = () => (
    <ProjectComponent
      title="توسعه سامانه جامع جهاد دفتر مرکزی"
      icon="sharif.png"
    >
      <p>
        هدف این پروژه این بود که دفتر مرکزی جهاد دانشگاهی را در مدیریت شعبه‌های
        دیگرش کمک کند.
      </p>
      <p>
        نقش من در این پروژه در ابتدا برای توسعه بخش‌های باقی‌مانده از فرآیندها
        بود، اما بعدها تبدیل به تمیزکردن کد و یکپارچه‌سازی توابع مشترک شد.
      </p>
      <p>
        تکنولوژی‌های استفاده شده در این پروژه عبارتند از: JQuery (برای فرم‌ها)،
        Vue.js و Kendo UI (برای مشاهده داده‌ها به صورت گرید اطلاعات)، PHP و
        Laravel (برای تعریف رابط‌های برنامه‌نویسی REST) و MySQL
      </p>
    </ProjectComponent>
  );

  const EnglishCentralOffice = () => (
    <ProjectComponent
      title="Development of Processes for Central Office of ACECR"
      icon="sharif.png"
    >
      <p>
        The goal of this project was for the center office of ACECR to be able
        to help manage other branches.
      </p>
      <p>
        My role in this project initially was to develop the remaining parts of
        processes, but later it transformed into cleaning up the code and
        unifying the common functions.
      </p>
      <p>
        Technologies used in this project: JQuery (for forms), vue js and Kendo
        UI (for viewing grid data), php and laravel (for defining REST APIs),
        MySQL.
      </p>
    </ProjectComponent>
  );

  return (
    <>
      <LanguageElement
        PersianElement={PersianCentralOffice}
        EnglishElement={EnglishCentralOffice}
      />
      <TechnologiesUsed
        techArray={["jquery", "vue", "kendo", "php", "laravel", "mysql"]}
      />
    </>
  );
};
