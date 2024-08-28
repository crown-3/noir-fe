import { Outlet } from "react-router-dom";
import useDarkMode, { DarkModeProvider } from "src/hooks/useDarkMode";
import styled from "styled-components";

import ThemeProvider from "./ThemeProvider";

const Layout = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <ThemeProvider isDarkMode={isDarkMode}>
        <MobileSizedView>
          <Screen>
            <Outlet />
          </Screen>
        </MobileSizedView>
      </ThemeProvider>
    </>
  );
};

const MobileSizedView = styled.div`
  width: 100%;

  @media screen and (min-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  background-color: #dee7ec;
`;

const Screen = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 100vh;
  overflow-y: scroll;

  @media screen and (min-width: 500px) {
    width: 400px;

    height: calc(100vh - 90px);
    overflow-y: scroll;

    border-radius: 30px;
  }
`;

export default Layout;
