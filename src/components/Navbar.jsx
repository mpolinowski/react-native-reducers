import React, {useContext} from 'react'
import {Text} from 'react-native'

import { NavBackground, NavHeader, NavTabs, NavTabsHeader, ThemeToggle } from './_styles'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
    const { isDarkTheme, darkTheme, lightTheme, changeTheme } = useContext(ThemeContext)
    // if isDarkTheme is true return dark state / else light
    const theme = isDarkTheme ? darkTheme : lightTheme
    return (
        <NavBackground style={theme}>
            <NavHeader style={theme}>To-Do List</NavHeader>
            <NavTabs>
                <NavTabsHeader>Home</NavTabsHeader>
                <NavTabsHeader>More</NavTabsHeader>
                <ThemeToggle onPress={changeTheme}>
                    <Text>{theme.text}</Text>
                </ThemeToggle>
            </NavTabs>
        </NavBackground>
    )

}

 export default Navbar