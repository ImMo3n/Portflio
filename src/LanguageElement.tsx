import { useLanguage, Languages } from "./Providers/LangProvider";

export const LanguageElement = ({
  PersianElement,
  EnglishElement,
}: {
  PersianElement: () => JSX.Element;
  EnglishElement: () => JSX.Element;
}) => {
  const language = useLanguage();
  console.log(language);

  let Element = () => <></>;
  if (language === Languages.fa) {
    Element = () => <PersianElement />;
  } else if (language === Languages.en) {
    Element = () => <EnglishElement />;
  } else {
    Element = () => <p>Error, language not found.</p>;
  }

  return <Element />;
};
