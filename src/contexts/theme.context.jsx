import { createContext, useState } from "react";
import '../App.style.jsx'
import { light } from "../components/theme/theme.styled.js";


export const ThemeContext =  new createContext({
    theme: light,
    setTheme: () =>  null
})

export const ThemeProvider = ( {children }) => {
    const [ theme, setTheme ] = useState(light);

    const value = { theme, setTheme}

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}