import styled from "styled-components";
import { ImageIcon } from "../ImageIcon";

export const ProjectComponent = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <ProjectHeader>
        <ImageIcon icon={icon} size={50} />
        <h2>{title}</h2>
      </ProjectHeader>
      <section>{children}</section>
    </>
  );
};

const ProjectHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & div {
    align-self: baseline;
  }
`;
