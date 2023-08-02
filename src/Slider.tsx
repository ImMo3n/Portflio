import { styled } from "styled-components";
import { TStyles, useTheme } from "./Providers/ThemeProvider";

export const Slider = ({
  onChangeHandler,
  TrueElement = () => <></>,
  FalseElement = () => <></>,
  checkedValue,
}: {
  onChangeHandler: () => void;
  TrueElement?: () => JSX.Element;
  FalseElement?: () => JSX.Element;
  checkedValue: boolean;
}) => {
  const theme = useTheme();

  return (
    <>
      <Label>
        <Input
          type="checkbox"
          onChange={() => {
            onChangeHandler();
          }}
          checked={checkedValue}
        />
        <Span styles={theme}>
          <TrueElement />
          <FalseElement />
        </Span>
      </Label>
    </>
  );
};

type SpanPropTypes = {
  styles: TStyles;
};

const Span = styled.span<SpanPropTypes>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 34px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
  background-color: ${(props) => props.styles.surfaceColor};
  outline: 2px solid currentColor;

  &::before {
    border-radius: 50%;
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    outline: 1px solid currentColor;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Span} {
    background-color: #2196f3;
  }

  &:focus + ${Span} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Span}::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }
`;
