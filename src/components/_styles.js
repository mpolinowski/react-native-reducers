import {Text, View, TouchableOpacity, FlatList, TextInput } from 'react-native'
import styled from 'styled-components/native'

export const RootView = styled(View)`
    flex: 1;
`

export const ThemeToggle = styled(TouchableOpacity)`
    font-size: 22px;
    padding: 10px;
`

export const LoginView = styled(View)`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavBackground = styled(View)`
    height: 200px;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
`

export const NavHeader = styled(Text)`
    margin-top: 25px;
    font-size: 26px;
`

export const NavTabs = styled(Text)`
    background-color: plum;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-self: flex-end;
    width: 100%;
    margin-top: 25px;
`

export const NavTabsHeader = styled(Text)`
    font-size: 22px;
    padding: 10px;
`

export const TodoBackground = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`

export const TodoItem = styled(Text)`
    display: flex;
    justify-content: center;
    border: solid #eee;
    width: 100%;
    color: plum;
    font-size: 18px;
    margin: 5px 0;
    padding: 10px;
`

export const TodoList = styled(FlatList)`
    width: 100%;
`

export const InputItem = styled(TextInput)`
    font-size: 15px;
    background-color: white;
    border-width: 1px;
    border-color: plum;
    width: 95%;
    margin: 15px 5px;
    padding: 10px;
`