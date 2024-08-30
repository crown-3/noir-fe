import { UseMutationResult } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { SigninRequest, SigninResponse } from "src/api/auth/auth";
import FloatingSheetLoading from "src/components/floatingSheet/FloatingSheetLoading";
import styled from "styled-components";

interface SigninLoadingHandlerProps {
  signinMutation: UseMutationResult<
    SigninResponse,
    Error,
    SigninRequest,
    unknown
  >;
}

const SigninLoadingHandler = ({
  signinMutation,
}: SigninLoadingHandlerProps) => {
  const { t } = useTranslation();

  if (signinMutation.status === "pending") {
    return (
      <FloatingSheetLoading>
        <Description>{t("pages.signIn.loadingMessages.loggingIn")}</Description>
      </FloatingSheetLoading>
    );
  }
};

const Description = styled.h5`
  color: ${(p) => p.theme.labels.primary};
`;

export default SigninLoadingHandler;
