import useDarkMode, { PropsWithDarkMode } from "src/hooks/useDarkMode";
import styled from "styled-components";

const CTAButton = styled.button<{ disabled?: boolean } & PropsWithDarkMode>`
  background-color: ${(p) =>
    p.disabled
      ? p.theme.fills.tertiary
      : p.$isDarkMode
        ? p.theme.grays.white
        : p.theme.grays.black};

  font-weight: 600;
  font-size: 19px;
  line-height: 24px;
  color: ${(p) =>
    p.disabled
      ? p.theme.labels.tertiary
      : p.$isDarkMode
        ? p.theme.grays.black
        : p.theme.grays.white};

  width: 100%;
  height: 54px;

  border-radius: 14px;
  border: none;
`;

export default CTAButton;
