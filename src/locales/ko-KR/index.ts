export const main = {
  pages: {
    onboarding: {
      welcome: "Welcome to Noir.",
      signUp: "회원가입",
      alreadyHaveAccount: "이미 계정이 있어요",
    },

    signUp: {
      title: "회원가입",

      name: "이름",
      nameTextField: "이름",

      email: "메일 주소",
      emailTextField: "example@mail.com",

      password: "비밀번호",
      passwordTextField: "비밀번호",
      passwordConfirmTextField: "비밀번호 확인",

      signUp: "회원가입",
      alreadyHaveAccount: "이미 계정이 있어요",

      errorMessages: {
        nameIsRequired: "이름을 입력해주세요.",

        emailIsRequired: "메일 주소를 입력해주세요.",
        invalidEmail: "유효하지 않은 메일 주소입니다.",

        passwordIsRequred: "비밀번호를 입력해주세요.",
        passwordNotMatch: "비밀번호가 일치하지 않습니다.",

        userAlreadyExists: "이미 존재하는 이름 및 이메일입니다.",
      },

      loadingMessages: {
        signingIn: "회원가입 중...",
        loggingIn: "로그인 중...",
      },
    },

    signIn: {
      title: "로그인",

      email: "메일 주소",
      emailTextField: "example@mail.com",

      password: "비밀번호",
      passwordTextField: "비밀번호",

      logIn: "로그인",
      dontHaveAccount: "계정이 없나요?",

      errorMessages: {
        emailIsRequired: "메일 주소를 입력해주세요.",
        passwordIsRequred: "비밀번호를 입력해주세요.",

        userDontExist: "존재하지 않는 유저입니다.",
      },

      loadingMessages: {
        loggingIn: "로그인 중...",
      },
    },
  },
};
