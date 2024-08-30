import { UseMutationResult } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import {
  SigninRequest,
  SigninResponse,
  SignupRequest,
} from "src/api/auth/auth";
import FloatingSheetLoading from "src/components/floatingSheet/FloatingSheetLoading";
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
      <FloatingSheetLoading>
        <Description>{t("pages.signUp.loadingMessages.signingIn")}</Description>
      </FloatingSheetLoading>
    );
  } else if (
    signupMutation.status === "success" &&
    signinMutation.status === "pending"
  ) {
    return (
      <FloatingSheetLoading>
        <Description>{t("pages.signUp.loadingMessages.loggingIn")}</Description>
      </FloatingSheetLoading>
    );
  } else {
    return null;
  }
};

const Description = styled.h5`
  color: ${(p) => p.theme.labels.primary};
`;

export default SignupLoadingHandler;
