import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

type Theme = "light" | "dark"

const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {},
})

export const useThemeContext = () => useContext(ThemeContext)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light"
  })

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
  }, [theme])

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  })

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}
