import { PersianH2, PersianParagraph } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";

export const JQuerySkill = () => {
  const PersianJQuerySkill = () => <>
    <PersianH2>jQuery</PersianH2>
    <PersianParagraph>
      من این زبان را زمانی که در جهاد دانشگاه صنعتی شریف مشغول بودم بسیار
      استفاده کردم. اما الان دیگر نمی‌خواهم دانش خود را در این زبان بهبود دهم،
      زیرا JavaScript خام اصلی تقریباً تمامی قابلیت‌هایی را که برای توسعه
      برنامه‌های وب نیاز دارم، فراهم می‌کند.
    </PersianParagraph>
  </>;

  const EnglishJQuerySkill = () => <>
    <h2>jQuery</h2>
    <p>
      I’ve used it a lot when I was developing in Sharif ACECR but personally
      don’t want to improve my knowledge on it, because the vanilla Javascript
      fulfills most of the functionality I need to develop web apps.
    </p>
  </>

  return <LanguageElement PersianElement={PersianJQuerySkill} EnglishElement={EnglishJQuerySkill}/>

  // return (
  //   <>
  //     <h2>jQuery</h2>
  //     <p>
  //       I’ve used it a lot when I was developing in Sharif ACECR but personally
  //       don’t want to improve my knowledge on it, because the vanilla Javascript
  //       fulfills most of the functionality I need to develop web apps.
  //     </p>
  //     <PersianH2>jQuery</PersianH2>
  //     <PersianParagraph>
  //       من این زبان را زمانی که در جهاد دانشگاه صنعتی شریف مشغول بودم بسیار
  //       استفاده کردم. اما الان دیگر نمی‌خواهم دانش خود را در این زبان بهبود دهم،
  //       زیرا JavaScript خام اصلی تقریباً تمامی قابلیت‌هایی را که برای توسعه
  //       برنامه‌های وب نیاز دارم، فراهم می‌کند.
  //     </PersianParagraph>
  //   </>
  // );
};
