import { PersianH1 } from "../CommonStyles";
import { BootstrapSkill } from "./BootstrapSkill";
import { CssSkill } from "./CssSkill";
import { JavascriptSkill } from "./JavascriptSkill";
import { JQuerySkill } from "./jQuerySkill";
import { MysqlSkill } from "./MysqlSkill";
import { PHPSkill } from "./PhpSkill";
import { ReactSkill } from "./ReactSkill";
import { StyledComponentSkill } from "./StyledComponentSkill";
import { TailwindSkill } from "./TailwindSkill";
import { TypescriptSkill } from "./TypesciptSkill";
import { VueSkill } from "./VueSkill";

export const Skills = () => {
  return (
    <>
      <h1>Skills</h1>
      <PersianH1>مهارت‌ها</PersianH1>
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
