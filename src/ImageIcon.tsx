import styled from "styled-components";

export const ImageIcon = ({ icon, size }: { icon: string; size: number }) => {
  return (
    <IconWrapper size={size} icon={icon}>
      <img src={`./Logos/${icon}`} alt={icon} />
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  border-radius: 5px;
  flex-shrink: 0;
  line-height: 0;
  & img {
    max-width: 100%;
    width: ${(props) => `${props.size}px`};
    height: ${(props) => `${props.size}px`};
    border-radius: ${(props) => `${props.icon === "vue.svg" ? "0" : "5px"}`};
  }
`;
