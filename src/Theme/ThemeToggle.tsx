import { useThemeContext } from "./ThemeProvider"
import { IconButton } from "@mui/material"
import Brightness4Icon from "@mui/icons-material/Brightness4"
import Brightness7Icon from "@mui/icons-material/Brightness7"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}
