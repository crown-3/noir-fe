import styled from "styled-components";

const ListHeader = styled.legend`
  text-transform: uppercase;
  font-size: 13px;
  line-height: 16px;
  color: ${(p) => p.theme.labels.secondary};

  width: 100%;
  padding: 0 36px;
  margin-bottom: 7px;
`;

export default ListHeader;
