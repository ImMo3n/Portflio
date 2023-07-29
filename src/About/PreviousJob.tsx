import { PersianH2, PersianParagraph } from "../CommonStyles";
// import { useLanguage, Languages } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";

export const PreviousJob = () => {
  const PersianPreviousJob = () => <>
    <PersianH2>مسئولیت‌های من در شغل قبلی‌ام:</PersianH2>
    <PersianParagraph>
      ما از یک فریمورک به نام Processmaker برای افزایش سرعت و آسانی فرآیند
      توسعه برنامه‌ها استفاده می‌کردیم. نقش من در این فرآیند، توسعه برنامه‌های
      جدید با این ابزار و نگهداری آن‌ها بود. این کار شامل طراحی نموداری از
      چگونگی عملکرد برنامه، طراحی فرم‌ها و پیاده‌سازی آن‌ها بود.
    </PersianParagraph>
  </>;

  const EnglishPreviousJob = () => <>
    <h2>My Responsiblity in My Previous Job</h2>
    <p>
      We used a framework called Processmaker to make development process of
      apps faster and easier. My role was to develop new apps with this tool
      and maintain them. It involved drawing a diagram of how the program was
      going to work, designing the forms and implementing them.
    </p>
  </>

return <LanguageElement PersianElement={PersianPreviousJob} EnglishElement={EnglishPreviousJob}/>


  // const language = useLanguage();
  // console.log(language);

  // let PreviousJobElement = () => <></>;
  // if(language === Languages.fa) {
  //   PreviousJobElement = () => (<>
  //     <PersianH2>مسئولیت‌های من در شغل قبلی‌ام:</PersianH2>
  //     <PersianParagraph>
  //       ما از یک فریمورک به نام Processmaker برای افزایش سرعت و آسانی فرآیند
  //       توسعه برنامه‌ها استفاده می‌کردیم. نقش من در این فرآیند، توسعه برنامه‌های
  //       جدید با این ابزار و نگهداری آن‌ها بود. این کار شامل طراحی نموداری از
  //       چگونگی عملکرد برنامه، طراحی فرم‌ها و پیاده‌سازی آن‌ها بود.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   PreviousJobElement = () => (<>
  //     <h2>My Responsiblity in My Previous Job</h2>
  //     <p>
  //       We used a framework called Processmaker to make development process of
  //       apps faster and easier. My role was to develop new apps with this tool
  //       and maintain them. It involved drawing a diagram of how the program was
  //       going to work, designing the forms and implementing them.
  //     </p>
  //   </>)
  // }
  // return <PreviousJobElement />;
};
