import styled from "styled-components";

import Button from "../button/Button";

const LinkButton = styled(Button)`
  color: ${(p) => p.theme.labels.secondary};
  text-decoration: underline;

  font-size: 17px;
`;

export default LinkButton;
