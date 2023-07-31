import { styled } from "styled-components";
import { CategoryTitle } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";
import { useTheme } from "../Providers/ThemeProvider";

export const GeneralIntroduction = () => {
  const styles = useTheme();

  const ModifiedWrapper = styled(Wrapper).attrs(() => ({
    style: {
      backgroundColor: styles.surfaceColor,
    },
  }))``;

  const PersianIntroduction = () => (
    <ModifiedWrapper>
      <p>
        با سلام، محسن افشاری هستم. من یک توسعه‌دهنده وب بخش رابط کاربری
        Front-end در سطح متوسط هستم.
      </p>
      <p>
        قبلاً به عنوان یک توسعه‌دهنده در Full-stack در مرکز جهاد دانشگاه صنعتی
        شریف فعالیت می‌کردم و مدت حدود 1 سال و 8 ماه تجربه کاری دارم، از این مدت
        4 ماه به عنوان کارآموز فعالیت می‌کردم.
      </p>
      <p>
        مدرک کارشناسی من از در رشته فناوری اطلاعات دانشگاه آزاد اسلامی (واحد
        تهران جنوب) است.
      </p>
      <p>من 27 ساله هستم و در تهران ایران زندگی می‌کنم.</p>
      <p>
        می‌خواهم بیشتر بر روی توسعه بخش رابط کاربری (Front-end)، به ویژه
        React.js، تمرکز کنم.
      </p>
    </ModifiedWrapper>
  );

  const EnglishIntroduction = () => (
    <ModifiedWrapper>
      <p>
        Hello, my name is Mohsen Afshari. I am a mid-level front-end web
        developer.
      </p>
      <p>
        I used to work as a full-stack developer for Academic Center for
        Education, Culture and Research (ACECR) of Sharif University for about 1
        year and 8 months, 4 months of which I was an intern.
      </p>
      <p>
        I have bachelor’s degree of Information Technology from Islamic Azad
        University (southern branch). I am {calculateAge()} years old. I live in
        Iran Tehran.
      </p>
      <p>I want to focus on front-end development especially React.js.</p>
    </ModifiedWrapper>
  );

  const EnglishTitle = () => <CategoryTitle>Introduction</CategoryTitle>;
  const PersianTitle = () => <CategoryTitle>معرفی</CategoryTitle>;

  return (
    <>
      <LanguageElement
        PersianElement={PersianTitle}
        EnglishElement={EnglishTitle}
      />
      <LanguageElement
        PersianElement={PersianIntroduction}
        EnglishElement={EnglishIntroduction}
      />
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  margin-inline: 1rem;
  border-radius: 10px;
`;

function calculateAge() {
  const dateOfBirth = new Date("1996-07-15");
  const now = new Date();

  let age = now.getFullYear() - dateOfBirth.getFullYear();

  const hasBirthdayOccurred =
    now.getMonth() > dateOfBirth.getMonth() ||
    (now.getMonth() === dateOfBirth.getMonth() &&
      now.getDate() >= dateOfBirth.getDate());

  if (!hasBirthdayOccurred) {
    age--;
  }

  return age;
}
