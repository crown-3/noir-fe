import { UseMutationResult } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import {
  SigninRequest,
  SigninResponse,
  SignupRequest,
} from "src/api/auth/auth";
import LoadingAnimation from "src/assets/animations/Loading.json";
import FloatingSheet, {
  FloatingSheetWrapper,
} from "src/components/floatingSheet/FloatingSheet";
import styled from "styled-components";

interface SignupLoadingHandlerProps {
  signupMutation: UseMutationResult<any, Error, SignupRequest, unknown>;
  signinMutation: UseMutationResult<
    SigninResponse,
    Error,
    SigninRequest,
    unknown
  >;
}

const SignupLoadingHandler = ({
  signinMutation,
  signupMutation,
}: SignupLoadingHandlerProps) => {
  const { t } = useTranslation();

  if (signupMutation.status === "pending") {
    return (
      <FloatingSheetWrapper>
        <FloatingSheet>
          <Lottie
            loop
            animationData={LoadingAnimation}
            style={{
              width: "70px",
              height: "70px",
            }}
          />
          <Description>
            {t("pages.signUp.loadingMessages.signingIn")}
          </Description>
        </FloatingSheet>
      </FloatingSheetWrapper>
    );
  } else if (
    signupMutation.status === "success" &&
    signinMutation.status === "pending"
  ) {
    return (
      <FloatingSheetWrapper>
        <FloatingSheet>
          <Lottie
            loop
            animationData={LoadingAnimation}
            style={{
              width: "70px",
              height: "70px",
            }}
          />
          <Description>
            {t("pages.signUp.loadingMessages.loggingIn")}
          </Description>
        </FloatingSheet>
      </FloatingSheetWrapper>
    );
  } else {
    return null;
  }
};

const Description = styled.h5`
  color: ${(p) => p.theme.labels.primary};
`;

export default SignupLoadingHandler;
