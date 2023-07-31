import { CategoryTitle } from "../CommonStyles";
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

import { LanguageElement } from "../LanguageElement";
import styled from "styled-components";
import { useTheme } from "../Providers/ThemeProvider";

export const Skills = () => {
  const styles = useTheme();

  const PerisanTitle = () => <CategoryTitle>مهارت‌ها</CategoryTitle>;
  const EnglishTitle = () => <CategoryTitle>Skills</CategoryTitle>;

  const ModifiedSkillWrapper = styled(SkillWrapper).attrs(() => ({
    style: {
      backgroundColor: styles.surfaceColor,
      color: styles.color,
    },
  }))``;

  const ModifiedWrapper = styled(Wrapper).attrs(() => ({
    style: {
      backgroundColor: styles.backgroundColor,
      color: styles.color,
    },
  }))``;

  return (
    <>
      <LanguageElement
        PersianElement={PerisanTitle}
        EnglishElement={EnglishTitle}
      />
      <ModifiedWrapper>
        <ModifiedSkillWrapper>
          <JavascriptSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <ReactSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <VueSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <TypescriptSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <CssSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <TailwindSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <BootstrapSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <StyledComponentSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <PHPSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <MysqlSkill />
        </ModifiedSkillWrapper>
        <ModifiedSkillWrapper>
          <JQuerySkill />
        </ModifiedSkillWrapper>
      </ModifiedWrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-inline: 1rem;
`;

const SkillWrapper = styled.article`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 10px;
`;
