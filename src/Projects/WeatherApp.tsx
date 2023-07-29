import { PersianH2, PersianParagraph } from "../CommonStyles";

export const WeatherApp = () => {
  const PersianWeatherApp = () => <>
    <PersianH2>Weather App</PersianH2>
    <PersianParagraph>
      یک برنامه‌ی هواشناسی که از طریق یک رابط برنامه‌نویسی (API)، اطلاعات
      هواشناسی فعلی، پیش‌بینی هوا، و آلودگی هوا را برای مکان فعلی کاربر نمایش
      می‌دهد.
    </PersianParagraph>
    <PersianParagraph>
      تکنولوژی‌های استفاده شده برای این پروژه عبارتند از: React.js،
      Typescript، و Tailwind CSS.
    </PersianParagraph>
  </>;

  const EnglishWeatherApp = () => <>
    <h2>Weather App (Personal Project)</h2>
    <p>
      A weather app that displays the current weather, forecast, air pollution
      for a given location using an API.
    </p>
    <p>
      Technologies used for this project: React js, Typescript, Tailwind css
    </p>
  </>

  return (
    <>
      
      
    </>
  );
};
