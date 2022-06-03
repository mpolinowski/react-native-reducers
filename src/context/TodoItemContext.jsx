import React, { createContext, useReducer } from 'react'
import {v4 as uuidv4} from 'uuid'

import { todosReducer } from '../reducers/todosReducer'

export const TodoItemContext = createContext()

const TodoItemContextProvider = ( {children} ) => {
    const [todos, dispatch] = useReducer(todosReducer, [
        { text: 'Have a great day!', id: `${uuidv4()}`}
    ])

    return (
        <TodoItemContext.Provider value={{todos, dispatch}}>
            {children}
        </TodoItemContext.Provider>
        )
}

export default TodoItemContextProvider