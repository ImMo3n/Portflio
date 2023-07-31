import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const TailwindSkill = () => {
  const PersianTailwindSkill = () => (
    <SkillComponent title="Tailwind CSS" icon="tailwind">
      <p>
        من از این ابزار برای توسعه برنامه هواشناسی استفاده کرده‌ام. این ابزار به
        سرعت به عناصر html استایل می‌دهد، ظاهر زیبایی دارد و باعث می‌شود که شما
        کنترل بیشتری نسبت به Bootstrap روی عناصر داشته باشید. اما راه‌اندازی آن
        دشوار است و اگرچه در ارائه کلاس‌های مورد نیاز CSS کامل است، اما ممکن است
        در جایی نیاز به انجام کار خاصی دارید که این ابزار به شما اجازه انجام آن
        کار را نمی‌دهد. علاوه بر این، این ابزار اجازه style overriding را
        نمی‌دهد که این امر گاهی اوقات می‌تواند مزاحمت‌آور باشد.
      </p>
      <h3>چگونه Tailwind CSS را یاد گرفتم</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=UBOj6rqRUME&ab_channel=TraversyMedia"
          >
            ویدیوی آموزشی Traversy Media
          </a>
        </li>
        <li>
          <a target="_blank" href="https://tailwindcss.com/">
            داکیومنت رسمی
          </a>
        </li>
        <li>برنامه پیشبینی آب و هوا را باهاش توسعه دادم.</li>
      </ul>
    </SkillComponent>
  );

  const EnglishTailwindSkill = () => (
    <SkillComponent title="Tailwind CSS" icon="tailwind">
      <p>
        I’ve developed the weather app using this tool, It is quick to style
        element, looks good and lets you have more control over elements unlike
        Bootstrap, but it is difficult to set up and although it is extensive in
        providing classes for every css need, there comes a point when you need
        to do something specific and it won’t let you, plus it doesn’t have
        style overriding which can be annoying at times.
      </p>
      <h3>How did I learn Tailwind</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=UBOj6rqRUME&ab_channel=TraversyMedia"
          >
            Tailwind CSS Crash Course by Traversy Media
          </a>
        </li>
        <li>
          <a target="_blank" href="https://tailwindcss.com/">
            Official Tailwind CSS Docs
          </a>
        </li>
        <li>Developed Weather App with it</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianTailwindSkill}
      EnglishElement={EnglishTailwindSkill}
    />
  );
};
