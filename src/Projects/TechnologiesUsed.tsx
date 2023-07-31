import styled from "styled-components";
import { ImageIcon } from "../ImageIcon";
import { useTheme } from "../Providers/ThemeProvider";

export const TechnologiesUsed = ({
  techArray,
}: {
  techArray: Array<string>;
}) => {
  const theme = useTheme();
  const { backgroundColor } = theme;

  const ImageWrapper = styled.div`
    background-color: ${backgroundColor};
    padding: 0.8rem;
    border-radius: 8px;
  `;

  return (
    <TechnologiesWrapper>
      {techArray.map((techIcon) => (
        <ImageWrapper key={techIcon}>
          <ImageIcon icon={`${techIcon}.svg`} size={50} />
        </ImageWrapper>
      ))}
    </TechnologiesWrapper>
  );
};

const TechnologiesWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;
