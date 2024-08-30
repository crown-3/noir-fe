import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { signin, signup } from "src/api/auth/auth";
import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import CTAButton from "src/components/ctaButton/CTAButton";
import Header from "src/components/header/Header";
import LinkButton from "src/components/linkButton/LinkButton";
import ListFooter from "src/components/list/footer/ListFooter";
import ListHeader from "src/components/list/header/Header";
import Input from "src/components/list/input/Input";
import ListWrapper from "src/components/list/wrapper/ListWrapper";
import useDarkMode from "src/hooks/useDarkMode";

import SignupLoadingHandler from "./SignupLoadingHandler";

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpPage = () => {
  const { isDarkMode } = useDarkMode();

  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>();

  const signupMutation = useMutation({
    mutationFn: signup,
  });

  const signinMutation = useMutation({
    mutationFn: signin,
  });

  const onSubmit: SubmitHandler<SignupFormData> = (data) => {
    const { passwordConfirm: _, ..._formData } = data;
    const formData = {
      ..._formData,
      nickname: _formData.name,
    };

    signupMutation.mutate(formData);
  };

  const password = useRef<string>();
  password.current = watch("password", "");

  return (
    <>
      <Header title={t("pages.signUp.title")} />
      <Area as="form" onSubmit={handleSubmit(onSubmit)}>
        <ListWrapper>
          <ListHeader>{t("pages.signUp.name")}</ListHeader>
          <Input
            type="text"
            placeholder={t("pages.signUp.nameTextField")}
            $position="single"
            {...register("name", {
              required: t("pages.signUp.errorMessages.nameIsRequired"),
            })}
          />
          {errors.name && (
            <ListFooter $isErrorText>{errors.name.message}</ListFooter>
          )}
        </ListWrapper>

        <ListWrapper>
          <ListHeader>{t("pages.signUp.email")}</ListHeader>
          <Input
            type="email"
            placeholder={t("pages.signUp.emailTextField")}
            $position="single"
            {...register("email", {
              required: t("pages.signUp.errorMessages.emailIsRequired"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("pages.signUp.errorMessages.invalidEmail"),
              },
            })}
          />
          {errors.email && (
            <ListFooter $isErrorText>{errors.email.message}</ListFooter>
          )}
        </ListWrapper>

        <ListWrapper $isPaddingBottomExists>
          <ListHeader>{t("pages.signUp.password")}</ListHeader>
          <Input
            type="password"
            placeholder={t("pages.signUp.passwordTextField")}
            $position="first"
            {...register("password", {
              required: t("pages.signUp.errorMessages.passwordIsRequred"),
            })}
          />
          <Input
            type="password"
            placeholder={t("pages.signUp.passwordConfirmTextField")}
            $position="last"
            {...register("passwordConfirm", {
              validate: (value) =>
                value === password.current ||
                t("pages.signUp.errorMessages.passwordNotMatch"),
            })}
          />
          {errors.password ? (
            <ListFooter $isErrorText>{errors.password.message}</ListFooter>
          ) : errors.passwordConfirm ? (
            <ListFooter $isErrorText>
              {errors.passwordConfirm.message}
            </ListFooter>
          ) : null}
        </ListWrapper>

        <Content $isNarrow $isCenter>
          <Spacer height="24px" />
          <CTAButton type="submit" $isDarkMode={isDarkMode}>
            {t("pages.signUp.signUp")}
          </CTAButton>
          <Spacer height="15px" />
          <LinkButton>{t("pages.signUp.alreadyHaveAccount")}</LinkButton>
        </Content>
      </Area>

      <SignupLoadingHandler
        signinMutation={signinMutation}
        signupMutation={signupMutation}
      />
    </>
  );
};

export default SignUpPage;
