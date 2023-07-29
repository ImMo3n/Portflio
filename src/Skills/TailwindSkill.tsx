import { PersianH2, PersianParagraph } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";
import { useLanguage } from '../Providers/LangProvider'

export const TailwindSkill = () => {
  const language = useLanguage();
  console.log(language);

  const PersianTailwindSkill = () => <>
    <PersianH2>Tailwind</PersianH2>
      <PersianParagraph>
        من از این ابزار برای توسعه برنامه هواشناسی استفاده کرده‌ام. این ابزار به
        سرعت به عناصر html استایل می‌دهد، ظاهر زیبایی دارد و باعث می‌شود که شما
        کنترل بیشتری نسبت به Bootstrap روی عناصر داشته باشید. اما راه‌اندازی آن
        دشوار است و اگرچه در ارائه کلاس‌های مورد نیاز CSS کامل است، اما ممکن است
        در جایی نیاز به انجام کار خاصی دارید که این ابزار به شما اجازه انجام آن
        کار را نمی‌دهد. علاوه بر این، این ابزار اجازه style overriding را
        نمی‌دهد که این امر گاهی اوقات می‌تواند مزاحمت‌آور باشد.
      </PersianParagraph>
  </>;

  const EnglishTailwindSkill = () => <>
    <h2>Tailwind</h2>
    <p>
      I’ve developed the weather app using this tool, It is quick to style
      element, looks good and lets you have more control over elements unlike
      Bootstrap, but it is difficult to set up and although it is extensive in
      providing classes for every css need, there comes a point when you need
      to do something specific and it won’t let you, plus it doesn’t have
      style overriding which can be annoying at times.
    </p>
  </>

  return <LanguageElement PersianElement={PersianTailwindSkill} EnglishElement={EnglishTailwindSkill}/>

  // let TailwindSkillElement = () => <></>
  // if(language === Languages.fa){
  //   TailwindSkillElement = () => <>
  //     <PersianH2>Tailwind</PersianH2>
  //     <PersianParagraph>
  //       من از این ابزار برای توسعه برنامه هواشناسی استفاده کرده‌ام. این ابزار به
  //       سرعت به عناصر html استایل می‌دهد، ظاهر زیبایی دارد و باعث می‌شود که شما
  //       کنترل بیشتری نسبت به Bootstrap روی عناصر داشته باشید. اما راه‌اندازی آن
  //       دشوار است و اگرچه در ارائه کلاس‌های مورد نیاز CSS کامل است، اما ممکن است
  //       در جایی نیاز به انجام کار خاصی دارید که این ابزار به شما اجازه انجام آن
  //       کار را نمی‌دهد. علاوه بر این، این ابزار اجازه style overriding را
  //       نمی‌دهد که این امر گاهی اوقات می‌تواند مزاحمت‌آور باشد.
  //     </PersianParagraph>
  //   </>
  // }
  // else if(language === Languages.en){
  //   TailwindSkillElement = () => <>
  //     <h2>Tailwind</h2>
  //     <p>
  //       I’ve developed the weather app using this tool, It is quick to style
  //       element, looks good and lets you have more control over elements unlike
  //       Bootstrap, but it is difficult to set up and although it is extensive in
  //       providing classes for every css need, there comes a point when you need
  //       to do something specific and it won’t let you, plus it doesn’t have
  //       style overriding which can be annoying at times.
  //     </p>
  //   </>
  // }

  // return <TailwindSkillElement />;
};
