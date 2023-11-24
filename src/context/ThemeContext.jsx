import {createContext, useState} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [basket, setBasket] = useState([""]);
    return <ThemeContext.Provider value={{basket, setBasket}}>{children}</ThemeContext.Provider>
}

export default ThemeContext
