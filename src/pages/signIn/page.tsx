import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { setTokens, signin } from "src/api/auth/auth";
import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import CTAButton from "src/components/ctaButton/CTAButton";
import Header from "src/components/header/Header";
import LinkButton from "src/components/linkButton/LinkButton";
import ListFooter from "src/components/list/footer/ListFooter";
import ListHeader from "src/components/list/header/Header";
import ListInput from "src/components/list/input/Input";
import ListWrapper from "src/components/list/wrapper/ListWrapper";
import Paths from "src/constants/paths";
import useDarkMode from "src/hooks/useDarkMode";

import SigninLoadingHandler from "./SigninLoadingHandler";

export interface SigninFormData {
  email: string;
  password: string;
}

const SignInPage = () => {
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();
  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<SigninFormData>({ mode: "onChange" });

  const signinMutation = useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      setTokens(data);
      navigator(Paths.Home);
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.status === 404) {
        setError("email", {
          type: "manual",
          message: t("pages.signIn.errorMessages.userDontExist"),
        });
      } else {
        console.error(error);
      }
    },
  });

  const onSubmit: SubmitHandler<SigninFormData> = (data) => {
    signinMutation.mutate(data);
  };

  return (
    <>
      <Header title={t("pages.signIn.title")} />

      <Area as="form" onSubmit={handleSubmit(onSubmit)}>
        <ListWrapper>
          <ListHeader>{t("pages.signIn.email")}</ListHeader>
          <ListInput
            type="email"
            placeholder={t("pages.signIn.emailTextField")}
            $position="single"
            {...register("email", {
              required: t("pages.signIn.errorMessages.emailIsRequired"),
            })}
          />
          {errors.email && (
            <ListFooter $isErrorText>{errors.email.message}</ListFooter>
          )}
        </ListWrapper>

        <ListWrapper $isPaddingBottomExists>
          <ListHeader>{t("pages.signIn.password")}</ListHeader>
          <ListInput
            type="password"
            placeholder={t("pages.signIn.passwordTextField")}
            $position="single"
            {...register("password", {
              required: t("pages.signIn.errorMessages.passwordIsRequred"),
            })}
          />
          {errors.password && (
            <ListFooter $isErrorText>{errors.password.message}</ListFooter>
          )}
        </ListWrapper>

        <Content $isNarrow $isCenter>
          <Spacer height="24px" />

          <CTAButton type="submit" $isDarkMode={isDarkMode} disabled={!isValid}>
            {t("pages.signIn.logIn")}
          </CTAButton>

          <Spacer height="15px" />

          <LinkButton
            onClick={() => {
              navigator(Paths.SignUp);
            }}
          >
            {t("pages.signIn.dontHaveAccount")}
          </LinkButton>
        </Content>
      </Area>

      <SigninLoadingHandler signinMutation={signinMutation} />
    </>
  );
};

export default SignInPage;
