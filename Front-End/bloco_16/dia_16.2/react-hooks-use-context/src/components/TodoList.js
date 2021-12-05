import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  return (
    // <TodoContext.Consumer> // Essa seria a solução usando o context API.
    //   {({ todos }) => (
    //   <ul>
    //     { todos.map(todo => <li>{todo}</li>)}
    //   </ul>
    //   )}
    // </TodoContext.Consumer>
    <ul>
        { todos.map((todo, index) => <li key={index}>{todo}</li>)}
    </ul>
    // essa a solução usando o useContext.
  )
}
