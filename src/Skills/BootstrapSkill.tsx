import { LanguageElement } from "../LanguageElement";
import { SkillComponent } from "./SkillComponent";

export const BootstrapSkill = () => {
  const PersianBootstrapSkill = () => (
    <SkillComponent title="Bootstrap" icon="bootstrap">
      <p>
        از این ابزار برای استایل‌دهی به عناصر فرم‌های Processmaker استفاده
        می‌شود و من همچنین از این فریمورک در ابزارهای فرمت‌های چاپی استفاده کردم
        زمانی که در جهاد دانشگاه صنعتی شریف مشغول بودم. این فریمورک مشابه
        Tailwind است اما کمتر انعطاف‌پذیری دارد و وبسایت‌هایی که از آن استفاده
        می‌کنند، همه شبیه به هم به نظر می‌آیند.در وبسایتهایی که زیبایی در اولیت
        نیست مثل admin templateها و صفحه‌های تنظیمات استفاده از این ابزار به نظر
        گزینه‌ی خوبی می‌آید ولی این ابزار مورد علاقه من برای استفاده نیست.
      </p>
      <h3>چگونه Bootstrap :را یاد گرفتم</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=Jyvffr3aCp0&ab_channel=WebDevSimplified"
          >
            ویدیوی آموزشی Web Dev Simplified
          </a>
        </li>
        <li>
          <a target="_blank" href="https://getbootstrap.com/">
            داکیومنت رسمی
          </a>
        </li>
        <li>
          فرم‌های پروسس میکر از آن استفاده می‌کرد، من هم باید از آن استفاده
          می‌کردم.
        </li>
        <li>پرینت فرمت نامه و نتیجه را با این ابزار توسعه دادم</li>
      </ul>
    </SkillComponent>
  );

  const EnglishBootstrapSkill = () => (
    <SkillComponent title="Bootstrap" icon="bootstrap">
      <p>
        The Processmaker forms use it to style the elements and I’ve used this
        framework in print format tools when I was working in ACECR of Sharif.
        It’s like tailwind but gives a lot less flexibility, and the websites
        using it all look the same. It can be useful when developing something
        when style of the website isn't in the focus like admin templates or
        settings pages, but it’s not my favorite to use overall.
      </p>
      <h3>How did I learn Bootstrap:</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.youtube.com/watch?v=Jyvffr3aCp0&ab_channel=WebDevSimplified"
          >
            Web Dev Simplified's crash course
          </a>
        </li>
        <li>
          <a target="_blank" href="https://getbootstrap.com/">
            Official document
          </a>
        </li>
        <li>Processmaker forms use it (v3), So I had to use it</li>
        <li>I've used this tool to develop the print formats</li>
      </ul>
    </SkillComponent>
  );

  return (
    <LanguageElement
      PersianElement={PersianBootstrapSkill}
      EnglishElement={EnglishBootstrapSkill}
    />
  );
};
