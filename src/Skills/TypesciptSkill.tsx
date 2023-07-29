import { PersianH2, PersianParagraph } from "../CommonStyles";
// import { useLanguage, Languages } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";

export const TypescriptSkill = () => {

  const PersianTypescriptSkill = () => <>
    <PersianH2>Typescript</PersianH2>
    <PersianParagraph>
      برای استفاده از TypeScript، شما نیازی به دانش گسترده‌ای از زبان ندارید و
      این بسیار به توسعه کمک می‌کند و به جلوگیری از باگ‌ها و خطاها کمک می‌کند.
      در دو پروژه "Weather app" و "MovieSearch app" که توسعه داده‌ام، از
      TypeScript استفاده کردم و در آینده نیز سعی خواهم کرد از آن استفاده کنم.
    </PersianParagraph>
  </>;

  const EnglishTypescriptSkill = () => <>
    <h2>Typescript</h2>
    <p>
      To be able to use typescript you don’t need extensive knowledge of the
      language and it helps a lot during development and helps prevents bugs
      and errors. I’ve used it in the two projects "Weather app" and
      "MovieSearch app" and will try to use it in the future.
    </p>
  </>

  return <LanguageElement PersianElement={PersianTypescriptSkill} EnglishElement={EnglishTypescriptSkill}/>

  // const language = useLanguage();
  // console.log(language);

  // let TypescriptSkillElement = () => <></>;
  // if(language === Languages.fa){
  //   TypescriptSkillElement = () => (<>
  //     <PersianH2>Typescript</PersianH2>
  //     <PersianParagraph>
  //       برای استفاده از TypeScript، شما نیازی به دانش گسترده‌ای از زبان ندارید و
  //       این بسیار به توسعه کمک می‌کند و به جلوگیری از باگ‌ها و خطاها کمک می‌کند.
  //       در دو پروژه "Weather app" و "MovieSearch app" که توسعه داده‌ام، از
  //       TypeScript استفاده کردم و در آینده نیز سعی خواهم کرد از آن استفاده کنم.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   TypescriptSkillElement = () => (<>
  //     <h2>Typescript</h2>
  //     <p>
  //       To be able to use typescript you don’t need extensive knowledge of the
  //       language and it helps a lot during development and helps prevents bugs
  //       and errors. I’ve used it in the two projects "Weather app" and
  //       "MovieSearch app" and will try to use it in the future.
  //     </p>
  //   </>)
  // }

  // return <TypescriptSkillElement />;
};
