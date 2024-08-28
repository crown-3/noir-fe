import {
  MOBILE_PAGESIDEGAP,
  MOBILE_PAGESIDEGAP_2,
} from "src/constants/defaults";
import styled, { css } from "styled-components";

export interface ContentAreaProps {
  width?: React.CSSProperties["width"];
  $isCenter?: boolean;
  $isNarrow?: boolean;
}

const Content = styled.div<ContentAreaProps>`
  width: 100%;
  padding: 0 ${(p) => (p.$isNarrow ? MOBILE_PAGESIDEGAP_2 : MOBILE_PAGESIDEGAP)};

  ${({ $isCenter }) =>
    $isCenter &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export default Content;
