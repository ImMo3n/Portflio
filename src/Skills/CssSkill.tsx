import { PersianH2, PersianParagraph } from "../CommonStyles";
// import { useLanguage, Languages } from '../Providers/LangProvider';
import { LanguageElement } from "../LanguageElement";

export const CssSkill = () => {

  const PersianCssSkill = () => <>
    <PersianH2>CSS</PersianH2>
    <PersianParagraph>
      CSS یک زبان آسان برای یادگیری است، اما کسب مهارت در آن بسیار دشوار است.
      من کارشناس در این زمینه نیستم، اما هر روز تلاش می‌کنم تا دانش خود را
      بهبود دهم. همچنین، برای تسهیل توسعه برنامه‌ها از کتابخانه‌ها و
      فریمورک‌هایی مانند Styled Components، Tailwind و Bootstrap استفاده
      می‌کنم.
    </PersianParagraph>
  </>;

  const EnglishCssSkill = () => <>
    <h2>CSS</h2>
    <p>
      css is an easy language to learn but very difficult one to master, as
      such I’m not expert in it but try to improve my knowledge every day, as
      well as using libraries/frameworks to make developing apps easier such
      as Styled Components, Tailwind, Bootstrap.
    </p>
  </>

  return <LanguageElement PersianElement={PersianCssSkill} EnglishElement={EnglishCssSkill}/>

  // const language = useLanguage();
  // console.log(language);

  // let CssSkillElement = () => <></>;
  // if(language === Languages.fa){
  //   CssSkillElement = () => (<>
  //     <PersianH2>CSS</PersianH2>
  //     <PersianParagraph>
  //       CSS یک زبان آسان برای یادگیری است، اما کسب مهارت در آن بسیار دشوار است.
  //       من کارشناس در این زمینه نیستم، اما هر روز تلاش می‌کنم تا دانش خود را
  //       بهبود دهم. همچنین، برای تسهیل توسعه برنامه‌ها از کتابخانه‌ها و
  //       فریمورک‌هایی مانند Styled Components، Tailwind و Bootstrap استفاده
  //       می‌کنم.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   CssSkillElement = () => (<>
  //     <h2>CSS</h2>
  //     <p>
  //       css is an easy language to learn but very difficult one to master, as
  //       such I’m not expert in it but try to improve my knowledge every day, as
  //       well as using libraries/frameworks to make developing apps easier such
  //       as Styled Components, Tailwind, Bootstrap.
  //     </p>
  //   </>)
  // }

  // return <CssSkillElement />;
};
