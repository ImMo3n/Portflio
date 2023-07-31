import styled from "styled-components";
import { ImageIcon } from "../ImageIcon";
import { useTheme } from "../Providers/ThemeProvider";

export const SkillComponent = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) => {
  const styles = useTheme();

  return (
    <Wrapper>
      <HeaderWrapper>
        <ImageIcon icon={`${icon}.svg`} size={40} />
        <h2>{title}</h2>
      </HeaderWrapper>
      <ContentWrapper styles={styles}>{children}</ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    margin-bottom: 0.5rem;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* How did learn x title */
  & h3 {
    margin-block: 0.8rem;
  }

  /* Learned unoredered list styles */
  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    list-style: circle;
    margin-inline: 1.2rem;

    & li a {
      border-bottom: 1px solid currentColor;
      cursor: pointer;
      padding-bottom: 0.15rem;
      border-color: ${(props) => props.styles.secondColor};

      &:hover,
      &:focus {
        color: ${(props) => props.styles.secondColor};
      }

      &:focus {
        outline: 1px solid ${(props) => props.styles.secondColor};
      }
    }
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
