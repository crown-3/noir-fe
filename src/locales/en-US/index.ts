export const main = {
  pages: {
    onboarding: {
      welcome: "Welcome to Noir.",
      signUp: "Sign up",
      alreadyHaveAccount: "Already have account",
    },

    signUp: {
      title: "Sign up",

      name: "Name",
      nameTextField: "Name",

      email: "Email",
      emailTextField: "example@mail.com",

      password: "Password",
      passwordTextField: "Password",
      passwordConfirmTextField: "Password Confirm",

      signUp: "Sign up",
      alreadyHaveAccount: "Already have account",

      errorMessages: {
        nameIsRequired: "Name is required.",

        emailIsRequired: "Email is required.",
        invalidEmail: "Invalid email address.",

        passwordIsRequred: "Password is required.",
        passwordNotMatch: "The passwords do not match.",

        userAlreadyExists: "User with these name and email already exists.",
      },

      loadingMessages: {
        signingIn: "Signing In...",
        loggingIn: "Logging In...",
      },
    },

    signIn: {
      title: "Log in",

      email: "Email",
      emailTextField: "example@mail.com",

      password: "Password",
      passwordTextField: "Password",

      logIn: "Log in",
      dontHaveAccount: "Don't have Account?",

      errorMessages: {
        emailIsRequired: "Email is required.",
        passwordIsRequred: "Password is required.",

        userDontExist: "Your Email address or password was incorrect.",
      },

      loadingMessages: {
        loggingIn: "Logging in...",
      },
    },
  },
};
