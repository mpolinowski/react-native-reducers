import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { TodoBackground, TodoList, TodoItem, LoginView, InputItem } from './_styles'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext'
import { TodoItemContext } from '../context/TodoItemContext'

const ToDoList = () => {

    const [todo, setTodo] = useState('')

    const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext)
    // if isDarkTheme is true return dark state / else light
    const theme = isDarkTheme ? darkTheme : lightTheme

    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext)

    const { todos, dispatch } = useContext(TodoItemContext)

    const handleChange = (text) => {
        setTodo(text)
    }

    const handleAddItem = () => {
        if(todo.length > 0) 
        dispatch({type: 'ADD_TODO', text: todo})
        setTodo('')
    }

    const handleRemoveItem = (id) => {
        dispatch({type: 'REMOVE_TODO', id})
    }

    if (isLoggedIn) {
        return (
            <TodoBackground style={theme}>
                {
                    todos.length ? (
                        <TodoList 
                            data={todos}
                            keyExtractor={(todo) => todo.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return <TouchableOpacity onPress={() => handleRemoveItem(item.id)}><TodoItem>{item.text}</TodoItem></TouchableOpacity>
                            }}
                        />
                    ) : (
                        <TodoItem>Nothing to do...</TodoItem>
                    )
                }
                <InputItem
                    value={todo}
                    onChangeText={(text) => handleChange(text)}
                />
                <TodoItem onPress={handleAddItem}>
                    <Text>Add Item</Text>
                </TodoItem>
                <TodoItem onPress={changeAuthStatus}>
                    <Text>Logout</Text>
                </TodoItem>
            </TodoBackground>
        )}
        return (
            <LoginView>
                <TodoItem onPress={changeAuthStatus}>
                    <Text>Login</Text>
                </TodoItem>
            </LoginView>
        )
}

export default ToDoList