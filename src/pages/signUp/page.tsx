import { useMutation } from "@tanstack/react-query";
import { FormEvent, SetStateAction, useState } from "react";
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

  const signupMutation = useMutation({
    mutationFn: signup,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupMutation.mutate();
  };

  return (
    <>
      <Header title="Sign up" />
      <Area as="form" onSubmit={handleSubmit}>
        <ListWrapper>
          <ListHeader>Name</ListHeader>
          <Input
            type="text"
            placeholder="Name"
            $position="single"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </ListWrapper>

        <ListWrapper>
          <ListHeader>Email</ListHeader>
          <Input
            type="email"
            placeholder="example@mail.com"
            $position="single"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </ListWrapper>

        <ListWrapper $isPaddingBottomExists>
          <ListHeader>Password</ListHeader>
          <Input
            type="password"
            placeholder="Password"
            $position="first"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            placeholder="Password Confirm"
            $position="last"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
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
