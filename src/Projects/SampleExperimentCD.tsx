import { PersianH2, PersianParagraph } from "../CommonStyles";

export const SampleExperimentCD = () => {
  return (
    <>
      <h2>
        Design And Implementation of Sample Experimenting Process for Civil
        Defense Department of ACECR of Sharif University
      </h2>
      <p>
        The process was defined as a way to keep track of samples being sent to
        them and a way to organize the workflow of the department and to print
        out the official letter to organizations faster.
      </p>
      <p>
        I was responsible for this project, designing and implementing the
        workflow, forms, tables, viewing the results in grid format, and last
        but not least three print format to create official letter format.
      </p>
      <p>
        Technologies used in this project: JQuery (for forms), vue js (for
        letter format), php and laravel (for defining REST APIs), MySQL, Kendo
        UI (for viewing grid data).
      </p>
      <p>
        The challenging part of this project was the letter format because there
        were variable amount of items to experiment and the print format had to
        be adjusted so that it would be printed correctly in A4 format.
      </p>
      <PersianH2>
        طراحی و پیاده سازی فرآیند آزمایش نمونه پدافند غیرعامل جهاد دانشگاهی شریف
      </PersianH2>
      <PersianParagraph>
        این فرآیند به عنوان یک راه برای پیگیری نمونه‌هایی که به آنها ارسال
        می‌شوند و به عنوان یک روش برای سازماندهی جریان کار دپارتمان و چاپ
        نامه‌های رسمی به سازمان‌ها به‌صورت سریع‌تر تعریف شد.
      </PersianParagraph>
      <PersianParagraph>
        من مسئولیت کامل این پروژه را برعهده داشتم و قسمت‌های طراحی و پیاده‌سازی
        جریان کار، فرم‌ها، جداول، مشاهده نتایج به صورت گرید اطلاعات و ساخت سه
        فرمت چاپ برای ایجاد نامه‌های رسمی، رسید مشتری، مشخصات نمونه‌ها را بر
        عهده داشتم.
      </PersianParagraph>
      <PersianParagraph>
        تکنولوژی‌های استفاده شده در این پروژه عبارتند از JQuery (برای فرم‌ها)،
        Vue.js (برای فرمت نامه‌های رسمی)، PHP و Laravel (برای تعریف رابط‌های
        برنامه‌نویسی REST)،MySQL و Kendo UI (برای مشاهده داده‌ها به صورت گرید)
      </PersianParagraph>
      <PersianParagraph>
        بخش چالش‌برانگیز این پروژه بخش فرمت نامه‌های رسمی بود، زیرا تعداد متغیری
        از آیتم‌ها برای آزمایش وجود داشت و فرمت چاپ باید به گونه‌ای تنظیم می‌شد
        که به درستی در فرمت A4 چاپ شود.
      </PersianParagraph>
    </>
  );
};
