import { useMutation } from "@tanstack/react-query";
import { FormEvent, SetStateAction, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signup } from "src/api/auth/auth";
import Area from "src/components/containers/Area";
import Content from "src/components/containers/Content";
import Spacer from "src/components/containers/Spacer";
import CTAButton from "src/components/ctaButton/CTAButton";
import Header from "src/components/header/Header";
import LinkButton from "src/components/linkButton/LinkButton";
import ListHeader from "src/components/list/header/Header";
import Input from "src/components/list/input/Input";
import ListWrapper from "src/components/list/wrapper/ListWrapper";
import useDarkMode from "src/hooks/useDarkMode";

interface FormData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpPage = () => {
  const { isDarkMode } = useDarkMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
  };

  const password = useRef<string>();
  password.current = watch("password", "");

  const signupMutation = useMutation({
    mutationFn: signup,
  });

  return (
    <>
      <Header title="Sign up" />
      <Area as="form" onSubmit={handleSubmit(onSubmit)}>
        <ListWrapper>
          <ListHeader>Name</ListHeader>
          <Input
            type="text"
            placeholder="Name"
            $position="single"
            {...register("name", { required: "Name is required" })}
          />
        </ListWrapper>

        <ListWrapper>
          <ListHeader>Email</ListHeader>
          <Input
            type="email"
            placeholder="example@mail.com"
            $position="single"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </ListWrapper>

        <ListWrapper $isPaddingBottomExists>
          <ListHeader>Password</ListHeader>
          <Input
            type="password"
            placeholder="Password"
            $position="first"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
            })}
          />
          <Input
            type="password"
            placeholder="Password Confirm"
            $position="last"
            {...register("passwordConfirm", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
        </ListWrapper>

        <Content $isNarrow $isCenter>
          <Spacer height="24px" />
          <CTAButton type="submit" $isDarkMode={isDarkMode}>
            Sign up
          </CTAButton>
          <Spacer height="15px" />
          <LinkButton>Already have account</LinkButton>
        </Content>
      </Area>
    </>
  );
};

export default SignUpPage;
