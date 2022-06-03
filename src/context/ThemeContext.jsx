import React, {createContext, useState } from 'react'

export const ThemeContext = createContext()

const carpeDiem = {
    color: 'purple',
    backgroundColor: 'snow',
    text: 'Dark'
}

const carpeNoctem = {
    color: 'plum',
    backgroundColor: 'purple',
    text: 'Light'
}

const ThemeContextProvider = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(true)

    const [lightTheme, setLightTheme] = useState(carpeDiem)

    const [darkTheme, setdarkTheme] = useState(carpeNoctem)

    const changeTheme = () => {
        // toggle theme to opposite when called
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <ThemeContext.Provider value={{ isDarkTheme, changeTheme, lightTheme, darkTheme }}>
            { children }
        </ThemeContext.Provider>
    )
 }

export default ThemeContextProvider