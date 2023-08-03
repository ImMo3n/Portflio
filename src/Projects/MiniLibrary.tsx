import { LanguageElement } from "../LanguageElement";
import { GitLink } from "./GitLink";
import { ProjectComponent } from "./ProjectComponent";

export const MiniLibrary = () => {
  const PersianMiniLibrary = () => (
    <ProjectComponent title="کتابخانه توابع jQuery" icon="jquery.svg">
      <p>
        همانطور که می‌دانید ما از Processmaker به عنوان رابط کاربری و پشتیبانی
        برای صفحات وب خود استفاده می‌کردیم و این ابزار از کتابخانه JQuery در بخش
        رابط کاربری خود استفاده می‌کرد. کتابخانه JavaScript که با Processmaker
        ارائه شده بود، گسترده بود، اما در برخی از بخش‌ها، به ویژه وقتی به
        "grid"ها می‌رسیدیم، نیازمندی‌های توسعه را تأمین نمی‌کرد.
      </p>
      <p>
        به عنوان مثال Gridها در Processmaker ساختارهایی مشابه جدول هستند که
        دارای مجموعه‌ای از عناصر ورودی درون خود هستند. بنابراین، اگر می‌خواهید
        مثلاً کاربران خود را به صورت فرمی برای 5 نفر پر کنند، به جای ارسال 5
        فرم، تنها یک فرم با گریدی از 5 ردیف اطلاعات ارسال می‌کنید. این به کاربر
        اجازه می‌دهد اطلاعات مربوط به 5 نفر را در یک فرم گردآوری کند و با ارسال
        یک فرم تنها، اطلاعات را به راحتی ارسال کند.
      </p>
      <p>
        همان‌طور که می‌توانید حدس بزنید، این برای توسعه بسیار مفید و موثر بود،
        ما همیشه از آن در پروژه‌هایمان استفاده می‌کردیم. مشکل این بود که توابع
        موجود در Processmaker کافی نبودند و روش توصیه شده برای تعریف listeners
        برای ورودی‌ها درون گرید و یا تغییر دادن داده‌های آن بهینه و ایده‌آل
        نبود.
      </p>
      <p>
        این باعث شد که شروع به توسعه برخی از توابع کاربردی کردم که قابل استفاده
        مجدد در هر جا هستند و به یک برنامه خاص وابسته نباشند.
      </p>
      <p>
        نتیجه این کار یک کتابخانه کوچک jQuery است. کیفیت کد در آن متفاوت است،
        برخی از توابع که بسیار استفاده شدند چندین بار بازنگری شدند، اما دیگری
        همانند زمان اولیه‌ی نوشتنشان باقی ماندند.
      </p>
    </ProjectComponent>
  );

  const EnglishMiniLibrary = () => (
    <ProjectComponent
      title="Mini library of JQuery functions"
      icon="jquery.svg"
    >
      <p>
        As you may know, We used Processmaker as front-end and back-end for our
        web pages, and it uses JQuery library for it’s front-end. The Javascript
        library that was included with Processmaker was extensive, but it was
        lacking in some of the parts especially when it came to “grid”s.
      </p>
      <p>
        For example grids in Processmaker are table like structures that has a
        bunch of input elements inside them. So if you want to for example want
        your users to fill a form for 5 people instead of submitting 5 forms you
        would only submit one form with with a grid of 5 rows of information.
      </p>
      <p>
        As you can guess this was very useful for developing, we used it all the
        time in our projects. The problem was the functions included with
        Processmaker wasn’t enough, and the recommended way of defining
        listeners for inputs inside and/or manipulating data inside grid inputs
        wasn’t ideal.
      </p>
      <p>
        So I began to develop some utility functions that would be reusable
        anywhere and not be tied to a single app.
      </p>
      <p>
        The result is this mini library. The quality of the code varies, for
        some of them that were used a lot were revised a couple of times, others
        stayed the same as I first wrote them.
      </p>
      
    </ProjectComponent>
  );
  return (
    <>
    <LanguageElement
      PersianElement={PersianMiniLibrary}
      EnglishElement={EnglishMiniLibrary}
    />
    <GitLink link={"https://github.com/ImMo3n/jQueryMiniLibrary"}/>
    </>
  );
};
