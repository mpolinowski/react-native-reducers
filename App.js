import React from 'react'

import { RootView } from './src/components/_styles'
import ThemeContextProvider from './src/context/ThemeContext'
import AuthContextProvider from './src/context/AuthContext'
import TodoItemContextProvider from './src/context/TodoItemContext'
import Navbar from './src/components/Navbar'
import TodoList from './src/components/ToDo'

const App = () => {
  return (
    <RootView>
      <ThemeContextProvider>
        <Navbar />
        <TodoItemContextProvider>
          <AuthContextProvider>
            <TodoList />
          </AuthContextProvider>
        </TodoItemContextProvider>
      </ThemeContextProvider>
    </RootView>
  );
}

export default App