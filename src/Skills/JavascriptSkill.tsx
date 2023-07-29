import { PersianH2, PersianParagraph } from "../CommonStyles";
// import { useLanguage, Languages } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";

export const JavascriptSkill = () => {
  const PersianJavascriptSkill = () => <>
    <PersianH2>Javascript</PersianH2>
    <PersianParagraph>
      من درک خوبی از این زبان دارم، هر روز از آن استفاده می‌کنم و سعی می‌کنم
      درک خود از آن را هر روز بهبود ببخشم.
    </PersianParagraph>
  </>;

  const EnglishJavascriptSkill = () => <>
    <h2>Javascript</h2>
    <p>
      I have a good understanding of the language, use it every day and try to
      improve on my understanding of it every day.
    </p>
  </>

  return <LanguageElement PersianElement={PersianJavascriptSkill} EnglishElement={EnglishJavascriptSkill}/>

  // const language = useLanguage();
  // console.log(language);

  // let JavascriptSkillElement = () => <></>
  // if(language === Languages.fa){
  //   JavascriptSkillElement = () => (<>
  //   <PersianH2>Javascript</PersianH2>
  //     <PersianParagraph>
  //       من درک خوبی از این زبان دارم، هر روز از آن استفاده می‌کنم و سعی می‌کنم
  //       درک خود از آن را هر روز بهبود ببخشم.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   JavascriptSkillElement = () => (<>
  //     <h2>Javascript</h2>
  //     <p>
  //       I have a good understanding of the language, use it every day and try to
  //       improve on my understanding of it every day.
  //     </p>
  //   </>)
  // }

  // return <JavascriptSkillElement />;
};
