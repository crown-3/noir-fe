import { createContext, useContext, useEffect, useState } from "react";
import LocalstorageKeys from "src/constants/localstorageKeys";

interface DarkModeContext {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContext | undefined>(undefined);

const useDarkMode = (): DarkModeContext => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("DarkModeContext must be used within a DarkModeProvider");
  }

  return context;
};

export const DarkModeProvider = ({ children }: React.PropsWithChildren) => {
  const loadSavedMode = () => {
    const savedMode = localStorage.getItem(LocalstorageKeys.DarkMode);
    if (!savedMode) return true;

    switch (savedMode) {
      case "true":
        return true;
      case "false":
        return false;
      default:
        return true;
    }
  };

  const [isDarkMode, setIsDarkMode] = useState(loadSavedMode);

  useEffect(() => {
    localStorage.setItem(
      LocalstorageKeys.DarkMode,
      isDarkMode ? "true" : "false",
    );
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default useDarkMode;
