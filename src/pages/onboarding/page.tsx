import { useTranslation } from "react-i18next";
import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import CTAButton from "src/components/ctaButton/CTAButton";
import LinkButton from "src/components/linkButton/LinkButton";
import useDarkMode from "src/hooks/useDarkMode";
import styled from "styled-components";

const OnBoardingPage = () => {
  const { isDarkMode } = useDarkMode();

  const { t } = useTranslation();

  return (
    <>
      <Area style={{ height: "100%" }}>
        <Content $isCenter $isNarrow>
          <Title>{t("pages.onboarding.welcome")}</Title>

          <Spacer height="25px" />

          <CTAButton $isDarkMode={isDarkMode}>
            {t("pages.onboarding.signUp")}
          </CTAButton>

          <Spacer height="15px" />

          <LinkButton>{t("pages.onboarding.alreadyHaveAccount")}</LinkButton>
        </Content>
      </Area>
    </>
  );
};

const Title = styled.h1`
  color: ${(p) => p.theme.labels.primary};
  font-weight: 600;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
`;

export default OnBoardingPage;
