import { PersianParagraph } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";
import { useLanguage } from '../Providers/LangProvider'

export const GeneralIntroduction = () => {
  const language = useLanguage();
  console.log(language);

  const PersianIntroduction = () => (<>
    <PersianParagraph>
        با سلام، محسن افشاری است. من یک توسعه‌دهنده وب بخش رابط کاربری Front-end
        در سطح متوسط هستم. قبلاً به عنوان یک توسعه‌دهنده در Full-stack در مرکز
        جهاد دانشگاه صنعتی شریف فعالیت می‌کردم و مدت حدود 1 سال و 8 ماه تجربه
        کاری دارم، از این مدت 4 ماه به عنوان کارآموز فعالیت می‌کردم. مدرک
        کارشناسی ارشد من از دانشگاه آزاد اسلامی (واحد تهران جنوب) است. من 27
        ساله هستم و در تهران ایران زندگی می‌کنم.
      </PersianParagraph>
      <PersianParagraph>
        من می‌خواهم بیشتر بر روی توسعه بخش رابط کاربری (Front-end)، به ویژه
        React.js، تمرکز کنم.
      </PersianParagraph>
  </>);

  const EnglishIntroduction = () => (<>
      <p>
        Hello, my name is Mohsen Afshari. I am a mid-level front-end web
        developer. I used to work as a full-stack developer for Academic Center
        for Education, Culture and Research (ACECR) of Sharif University for
        about 1 year and 8 months, 4 months of which I was an intern. I have
        bachelor’s degree from Islamic Azad University (southern branch). I am
        27 years old. I live in Iran Tehran.
      </p>
      <p>I want to focus on front-end development specially React.js.</p>
  </>)

  return <LanguageElement PersianElement={PersianIntroduction} EnglishElement={EnglishIntroduction}/>

  // let IntroductionElement = () => <></>
  // if(language === Languages.fa){
  //   IntroductionElement = () => (<>
  //     <PersianParagraph>
  //       با سلام، محسن افشاری است. من یک توسعه‌دهنده وب بخش رابط کاربری Front-end
  //       در سطح متوسط هستم. قبلاً به عنوان یک توسعه‌دهنده در Full-stack در مرکز
  //       جهاد دانشگاه صنعتی شریف فعالیت می‌کردم و مدت حدود 1 سال و 8 ماه تجربه
  //       کاری دارم، از این مدت 4 ماه به عنوان کارآموز فعالیت می‌کردم. مدرک
  //       کارشناسی ارشد من از دانشگاه آزاد اسلامی (واحد تهران جنوب) است. من 27
  //       ساله هستم و در تهران ایران زندگی می‌کنم.
  //     </PersianParagraph>
  //     <PersianParagraph>
  //       من می‌خواهم بیشتر بر روی توسعه بخش رابط کاربری (Front-end)، به ویژه
  //       React.js، تمرکز کنم.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   IntroductionElement = () => (<>
  //     <p>
  //       Hello, my name is Mohsen Afshari. I am a mid-level front-end web
  //       developer. I used to work as a full-stack developer for Academic Center
  //       for Education, Culture and Research (ACECR) of Sharif University for
  //       about 1 year and 8 months, 4 months of which I was an intern. I have
  //       bachelor’s degree from Islamic Azad University (southern branch). I am
  //       27 years old. I live in Iran Tehran.
  //     </p>
  //     <p>I want to focus on front-end development specially React.js.</p>
  //   </>)
  // }

  // return <IntroductionElement />;
};
