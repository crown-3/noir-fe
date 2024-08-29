import styled from "styled-components";

interface ListWrapperProps {
  $isPaddingBottomExists?: boolean;
}

const ListWrapper = styled.section<ListWrapperProps>`
  display: flex;
  flex-direction: column;

  padding: ${(p) => (p.$isPaddingBottomExists ? "18px 0" : "18px 0 0 0")};
  width: 100%;
`;

export default ListWrapper;
