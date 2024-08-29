import styled from "styled-components";

interface HeaderProps {
  title: string;
  icon?: React.ReactNode;
  onIconClick?: React.ReactNode;
}

const Header = ({ title, icon, onIconClick }: HeaderProps) => {
  return (
    <header>
      <div style={{ height: "44px", width: "100%" }}></div>
      <div style={{ width: "100%", padding: "3px 0 8px 16px" }}>
        <StyledHeaderText>{title}</StyledHeaderText>
      </div>
    </header>
  );
};

const StyledHeaderText = styled.h1`
  color: ${(p) => p.theme.labels.primary};
`;

export default Header;
