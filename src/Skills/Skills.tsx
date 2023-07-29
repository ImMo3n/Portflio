import { PersianH1 } from "../CommonStyles";
import { BootstrapSkill } from "./BootstrapSkill";
import { CssSkill } from "./CssSkill";
import { JavascriptSkill } from "./JavascriptSkill";
import { JQuerySkill } from "./JQuerySkill";
import { MysqlSkill } from "./MysqlSkill";
import { PHPSkill } from "./PHPSkill";
import { ReactSkill } from "./ReactSkill";
import { StyledComponentSkill } from "./StyledComponentSkill";
import { TailwindSkill } from "./TailwindSkill";
import { TypescriptSkill } from "./TypesciptSkill";
import { VueSkill } from "./VueSkill";

// import { useLanguage, Languages } from '../Providers/LangProvider'
import { LanguageElement } from "../LanguageElement";

export const Skills = () => {
  // const language = useLanguage();
  // console.log(language);

  // let SkillTitle = () => <></>;
  // if(language === Languages.fa){
  //   SkillTitle = () => (<PersianH1>مهارت‌ها</PersianH1>)
  // }
  // else if(language === Languages.en){
  //   SkillTitle = () => (<h1>Skills</h1>)
  // }

  const PerisanTitle = () => <PersianH1>مهارت‌ها</PersianH1>
  const EnglishTitle = () => <h1>Skills</h1>

  return (
    <>
      <LanguageElement PersianElement={PerisanTitle} EnglishElement={EnglishTitle}/>
      {/* <SkillTitle /> */}
      <JavascriptSkill />
      <ReactSkill />
      <VueSkill />
      <TypescriptSkill />
      <CssSkill />
      <TailwindSkill />
      <BootstrapSkill />
      <StyledComponentSkill />
      <PHPSkill />
      <MysqlSkill />
      <JQuerySkill />
    </>
  );
};
