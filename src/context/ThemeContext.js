import { createContext } from "react";

// Initialize context
export const ThemeContext = createContext();

// Function to return context provider to wrap components
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: "royalblue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
