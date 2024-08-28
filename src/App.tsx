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

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path={Paths.Home} element={<HomePage />} />
          <Route path={Paths.Onboarding} element={<OnBoardingPage />} />
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
