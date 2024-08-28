import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import { DarkModeProvider } from "./hooks/useDarkMode";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/page";

const App = () => {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
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
