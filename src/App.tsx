import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Paths from "./constants/paths";
import { DarkModeProvider } from "./hooks/useDarkMode";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/page";
import OnBoardingPage from "./pages/onboarding/page";
import SignInPage from "./pages/signIn/page";
import SignUpPage from "./pages/signUp/page";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path={Paths.Home} element={<HomePage />} />
          <Route path={Paths.Onboarding} element={<OnBoardingPage />} />

          <Route path={Paths.SignUp} element={<SignUpPage />} />
          <Route path={Paths.SignIn} element={<SignInPage />} />
        </Route>

        <Route path="*" element={<Navigate to={Paths.Home} replace />} />
      </>,
    ),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
