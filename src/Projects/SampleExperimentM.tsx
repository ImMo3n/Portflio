import { LanguageElement } from "../LanguageElement";
import { ProjectComponent } from "./ProjectComponent";
import { TechnologiesUsed } from "./TechnologiesUsed";

export const SampleExperimentM = () => {
  const PersianSampleExperimentM = () => (
    <ProjectComponent
      title="طراحی و پیاده سازی فرآیند آزمایش نمونه متالورژی جهاد دانشگاهی شریف"
      icon="sharif.png"
    >
      <p>
        این فرآیند به عنوان یک راه برای پیگیری نمونه‌هایی که به واحد ارسال می‌شد
        و به عنوان یک روش برای سازماندهی جریان کار دپارتمان و چاپ نتایج
        آزمایش‌ها تعریف شد.
      </p>
      <p>
        من مسئول طراحی و پیاده‌سازی این فرآیند، جریان کار، فرم‌ها، جداول، مشاهده
        گریدی اطلاعات و فرمت چاپ نتایج آزمایش‌ها بودم.
      </p>
      <p>
        تکنولوژی‌های استفاده شده در این پروژه عبارتند از JQuery (برای فرم‌ها)،
        Vue.js (برای فرمت پرینت نتیجه آزمایش‌ها)، PHP و Laravel (برای تعریف
        رابط‌های برنامه‌نویسی REST)،MySQL و Kendo UI (برای مشاهده داده‌ها به
        صورت گرید)
      </p>
      <p>
        بخشی که بیشترین چالش را در این پروژه ایجاد کرد، فرمت چاپ بود. در ابتدا،
        ما تلاش کردیم از یک فریمورک استفاده کنیم که یک فرمت در قالب PDF تولید
        می‌کرد، اما این رویه نتیجه مطلوبی به همراه نداشت. سپس ما خودمان فرمت چاپ
        را با استفاده از Vue.js توسعه دادیم.
      </p>
    </ProjectComponent>
  );

  const EnglishSampleExperimentM = () => (
    <ProjectComponent
      title="Design and Implementation of Sample Experimenting Process for Metallurgy
      Department of ACECR of Sharif University"
      icon="sharif.png"
    >
      <p>
        The process was defined as a way to keep track of samples being sent to
        them and a way to organize the workflow of the department and to print
        out the result of experiments.
      </p>
      <p>
        I was responsible for design and implementation of this process,
        workflow, forms, tables, viewing grid, and the print format of result of
        the experiments.
      </p>
      <p>
        Technologies used in this project: JQuery (for forms), vue js (for
        letter format), php and laravel (for defining REST APIs), MySQL, Kendo
        UI (for viewing grid data).
      </p>
      <p>
        The most challenging part of this project was the print format. At first
        we tried using a framework that produced a format in pdf format, but
        that didn’t work out. Next we developed the print format ourselves using
        vue js. More details.
      </p>
    </ProjectComponent>
  );

  return (
    <>
      <LanguageElement
        PersianElement={PersianSampleExperimentM}
        EnglishElement={EnglishSampleExperimentM}
      />
      <TechnologiesUsed
        techArray={["jquery", "vue", "php", "laravel", "mysql", "kendo"]}
      />
    </>
  );
};
