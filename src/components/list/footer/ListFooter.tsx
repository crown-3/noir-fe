import styled from "styled-components";

const ListFooter = styled.h6<{ $isErrorText?: boolean }>`
  color: ${(p) =>
    p.$isErrorText ? p.theme.colors.red : p.theme.labels.secondary};
  font-size: 13px;

  width: 100%;
  padding: 0 36px;
  margin-top: 5px;
`;

export default ListFooter;
