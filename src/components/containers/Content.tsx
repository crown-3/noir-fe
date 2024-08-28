import { MOBILE_PAGESIDEGAP } from "src/constants/defaults";
import styled, { css } from "styled-components";

export interface ContentAreaProps {
  width?: React.CSSProperties["width"];
  $isCenter?: boolean;
}

const Content = styled.div<ContentAreaProps>`
  margin: 0 auto;
  padding: 0 ${MOBILE_PAGESIDEGAP};

  ${({ $isCenter }) =>
    $isCenter &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

export default Content;
