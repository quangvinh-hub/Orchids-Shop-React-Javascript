import { createContext, useState } from "react";

// 1. Tạo context
export const ThemeContext = createContext();

// 2. Tạo provider components
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>{children}</div>
      </ThemeContext.Provider>
    </>
  );
};
