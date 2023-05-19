import { createContext, useState } from "react";
import '../App.style.jsx'


export const ThemeContext =  new createContext({
    theme: {},
    setTheme: () =>  null
})

export const ThemeProvider = ( {children }) => {
    const [ theme, setTheme ] = useState({});

    const value = { theme, setTheme}

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}