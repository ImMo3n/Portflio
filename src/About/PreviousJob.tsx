import styled from "styled-components";
import { CategoryTitle } from "../CommonStyles";
import { LanguageElement } from "../LanguageElement";
import { useTheme } from "../Providers/ThemeProvider";

export const PreviousJob = () => {
  const styles = useTheme();

  const ModifiedWrapper = styled(Wrapper).attrs(() => ({
    style: {
      backgroundColor: styles.surfaceColor,
    },
  }))``;

  const PersianPreviousJob = () => (
    <ModifiedWrapper>
      <h2>جهاد دانشگاهی صنعتی شریف</h2>
      <p>
        ما از یک فریمورک به نام Processmaker برای افزایش سرعت و آسانی فرآیند
        توسعه برنامه‌ها استفاده می‌کردیم. نقش من در این فرآیند، توسعه برنامه‌های
        جدید با این ابزار و نگهداری آن‌ها بود. این کار شامل طراحی نموداری از
        چگونگی عملکرد برنامه، طراحی فرم‌ها و پیاده‌سازی آن‌ها بود.
      </p>
    </ModifiedWrapper>
  );

  const EnglishPreviousJob = () => (
    <ModifiedWrapper>
      <h2>
        Academic Center for Education, Culture and Research of Sharif University
      </h2>
      <p>
        We used a framework called Processmaker to make development process of
        apps faster and easier. My role was to develop new apps with this tool
        and maintain them. It involved drawing a diagram of how the program was
        going to work, designing the forms and implementing them.
      </p>
    </ModifiedWrapper>
  );

  const EnglishTitle = () => <CategoryTitle>Work Experience</CategoryTitle>;
  const PersianTitle = () => <CategoryTitle>سابقه کار</CategoryTitle>;

  return (
    <>
      <LanguageElement
        PersianElement={PersianTitle}
        EnglishElement={EnglishTitle}
      />
      <LanguageElement
        PersianElement={PersianPreviousJob}
        EnglishElement={EnglishPreviousJob}
      />
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  border-radius: 10px;
  margin-inline: 1rem;
`;
