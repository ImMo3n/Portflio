import { PersianH2, PersianParagraph } from "../CommonStyles";
// import { useLanguage } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";

export const BootstrapSkill = () => {
  // const language = useLanguage();
  // console.log(language);

  const PersianBootstrapSkill = () => <>
    <PersianH2>Bootstrap</PersianH2>
      <PersianParagraph>
        از این ابزار برای استایل‌دهی به عناصر فرم‌های Processmaker استفاده
        می‌شود و من همچنین از این فریمورک در ابزارهای فرمت‌های چاپی استفاده کردم
        زمانی که در جهاد دانشگاه صنعتی شریف مشغول بودم. این فریمورک مشابه
        Tailwind است اما کمتر انعطاف‌پذیری دارد و وبسایت‌هایی که از آن استفاده
        می‌کنند، همه شبیه به هم به نظر می‌آیند.در وبسایتهایی که زیبایی در اولیت
        نیست مثل admin templateها و صفحه‌های تنظیمات استفاده از این ابزار به نظر
        گزینه‌ی خوبی می‌آید ولی این ابزار مورد علاقه من برای استفاده نیست.
      </PersianParagraph>
  </>

  const EnglishBootstrapSkill = () => <>
    <h2>Bootstrap</h2>
    <p>
      The Processmaker forms use it to style the elements and I’ve used this
      framework in print format tools when I was working in ACECR of Sharif.
      It’s like tailwind but gives a lot less flexibility, and the websites
      using it all look the same. It can be useful when developing something
      when style of the website isn't in the focus like admin templates or
      settings pages, but it’s not my favorite to use overall.
    </p>
  </>

  return <LanguageElement PersianElement={PersianBootstrapSkill} EnglishElement={EnglishBootstrapSkill}/>

  // let BootstapSkillsElement = () => <></>
  // if(language === Languages.fa){
  //   BootstapSkillsElement = () => (<>
  //     <PersianH2>Bootstrap</PersianH2>
  //     <PersianParagraph>
  //       از این ابزار برای استایل‌دهی به عناصر فرم‌های Processmaker استفاده
  //       می‌شود و من همچنین از این فریمورک در ابزارهای فرمت‌های چاپی استفاده کردم
  //       زمانی که در جهاد دانشگاه صنعتی شریف مشغول بودم. این فریمورک مشابه
  //       Tailwind است اما کمتر انعطاف‌پذیری دارد و وبسایت‌هایی که از آن استفاده
  //       می‌کنند، همه شبیه به هم به نظر می‌آیند.در وبسایتهایی که زیبایی در اولیت
  //       نیست مثل admin templateها و صفحه‌های تنظیمات استفاده از این ابزار به نظر
  //       گزینه‌ی خوبی می‌آید ولی این ابزار مورد علاقه من برای استفاده نیست.
  //     </PersianParagraph>
  //   </>)
  // }
  // else if(language === Languages.en){
  //   BootstapSkillsElement = () => (<>
  //     <h2>Bootstrap</h2>
  //       <p>
  //         The Processmaker forms use it to style the elements and I’ve used this
  //         framework in print format tools when I was working in ACECR of Sharif.
  //         It’s like tailwind but gives a lot less flexibility, and the websites
  //         using it all look the same. It can be useful when developing something
  //         when style of the website isn't in the focus like admin templates or
  //         settings pages, but it’s not my favorite to use overall.
  //       </p>
  //   </>)
  // }

  // return <BootstapSkillsElement />;
};
