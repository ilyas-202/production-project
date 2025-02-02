import { useContext } from "react";
import { LOCAL_STORAGE_THRME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)


    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK 
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THRME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}