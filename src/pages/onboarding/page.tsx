import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import CTAButton from "src/components/ctaButton/CTAButton";
import useDarkMode from "src/hooks/useDarkMode";
import styled from "styled-components";

const OnBoardingPage = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Area style={{ height: "100%" }}>
        <Content $isCenter $isNarrow>
          <Title>Welcome to Noir.</Title>

          <Spacer height="25px" />

          <CTAButton $isDarkMode={isDarkMode}>Sign up</CTAButton>
        </Content>
      </Area>
    </>
  );
};

const Title = styled.h1`
  color: ${(p) => p.theme.labels.primary};
  font-weight: 600;
  font-size: 40px;
`;

export default OnBoardingPage;
