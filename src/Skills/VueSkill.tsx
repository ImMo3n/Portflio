import { PersianH2, PersianParagraph } from "../CommonStyles";
// import { useLanguage, Languages } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";

export const VueSkill = () => {
  const PersianVueSkill = () => <>
    <PersianH2>Vue.js</PersianH2>
    <PersianParagraph>
      زمانی که برای جهاد دانشگاهی شریف کار میکردم برای پروژه‌ها نیاز به
      قالب‌های چاپی برای پرینت نتیجه آزمایش، نامه و رسید نیاز داشتیم. برای
      تولید این قالب‌ها از Vue.js استفاده کردم. اما بعد تصمیم گرفتم که به سمت
      React.js بروم.
    </PersianParagraph>
  </>;

  const EnglishVueSkill = () => <>
    <h2>Vue.js</h2>
    <p>
      When I was working for ACECR of Sharif University, we needed print
      formats for projects to print experiment results, letters, and receipts.
      For generating these formats, I used Vue.js. However, later, I decided
      to move towards React.js.
    </p>
  </>

  return <LanguageElement PersianElement={PersianVueSkill} EnglishElement={EnglishVueSkill}/>

  // const language = useLanguage();
  // console.log(language);

  // let VueSkillElement = () => <></>
  // if(language === Languages.fa){
  //   VueSkillElement = () => (<>
  //     <PersianH2>Vue.js</PersianH2>
  //     <PersianParagraph>
  //       زمانی که برای جهاد دانشگاهی شریف کار میکردم برای پروژه‌ها نیاز به
  //       قالب‌های چاپی برای پرینت نتیجه آزمایش، نامه و رسید نیاز داشتیم. برای
  //       تولید این قالب‌ها از Vue.js استفاده کردم. اما بعد تصمیم گرفتم که به سمت
  //       React.js بروم.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   VueSkillElement = () => (<>
  //     <h2>Vue.js</h2>
  //     <p>
  //       When I was working for ACECR of Sharif University, we needed print
  //       formats for projects to print experiment results, letters, and receipts.
  //       For generating these formats, I used Vue.js. However, later, I decided
  //       to move towards React.js.
  //     </p>
  //   </>)
  // }

  // return <VueSkillElement />;
};
