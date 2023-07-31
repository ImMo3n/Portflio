// import { useLanguage, Languages } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const ReactSkill = () => {
  const PersianReactSkill = () => (
    <SkillComponent title="React.js" icon="react">
      <p>
        از بین تمام فریموردهای مدرن جاوااسکریپت (مانند Vue.js، Svelte و ...) من
        React را برای بهبود دانش خود انتخاب کردم. به این دلیل که محبوب‌تر است.
        محبوب بودن نه تنها یافتن شغل‌ها (و استخدام) را آسان‌تر می‌کند، بلکه
        هنگام توسعه برنامه‌ها نیز کمک می‌کند. وجود صدها کتابخانه و صدها هزار بحث
        آنلاین درباره چالش‌هایی که افراد قبلاً با آن مواجه شده‌اند، توسعه را
        آسان‌تر و سریع‌تر می‌کند.
      </p>
      <p>
        من دو برنامه با آن توسعه داده‌ام. با بیشتر هوک‌ها آشنا هستم و چند تا هوک
        را هم خودم نوشتم، اما هنوز در محیط واقعی / حرفه‌ای محیط کار تجربه React
        نداشته‌ام.
      </p>
      <h3>چگونه React.js را یاد گرفتم:</h3>
      <ul>
        <li>
          <a target="_blank" href="https://www.roadtoreact.com/">
            کتاب "راه به ری‌اکت" نوشته‌ی رابین ویروش
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@WebDevSimplified">
            کانال یوتیوب Web Dev Simplified
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@jherr">
            کانال یوتیوب Jack Harrington
          </a>
        </li>
        <li>توسعه پروژه‌های شخصی</li>
      </ul>
    </SkillComponent>
  );

  const EnglishReactSkill = () => (
    <SkillComponent title="React.js" icon="react">
      <p>
        Out of all the modern js frameworks(vuejs, svelte, …) I chose React to
        improve my knowledge on. Simply put because it is more popular. Being
        popular not only helps with finding jobs (and hiring) easier but it also
        helps when you are developing apps with it. Hundreds of libraries and
        hundreds of thousands of discussions online about challenges people
        already ran into tends to make development easier and faster.
      </p>
      <p>
        I’ve developed two apps with it. I’m familiar with most of hooks and
        developed some custom hooks myself, but I’ve yet to develop react in the
        real world / career environment.
      </p>
      <h3>How did I learn React.js:</h3>
      <ul>
        <li>
          <a target="_blank" href="https://www.roadtoreact.com/">
            The Road To React book by Robin Wieruch
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@WebDevSimplified">
            Web Dev Simplified Youtube Channel
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.youtube.com/@jherr">
            Jack Harrington Youtube Channel
          </a>
        </li>
        <li>Developing personal projects</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianReactSkill}
      EnglishElement={EnglishReactSkill}
    />
  );
};
