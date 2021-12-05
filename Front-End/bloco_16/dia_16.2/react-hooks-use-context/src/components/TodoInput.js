import React, { useState, useContext } from 'react'
import TodoContext from '../context/TodoContext'

export default function TodoInput() {
  const [newTodo, setNewTodo] = useState(''); // dentro do useState é passado o estado inicial nesse caso uma string vazia ''
  // primeira variável é o estado, segundo parâmentro é a função que seta a primeira variável.
  const handleChange = ({ target }) => {
    const { value } = target;
    setNewTodo(value);
  }

  const { addTodo } = useContext(TodoContext);

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }
  
  return (
    <section>
      <label htmlFor="addTodo">
        Insira uma tarefa:
        <input 
        value={newTodo}
        onChange={handleChange}
        type="text"
        name="newTodo"
        id="newTodo"
        />
      </label>
      <button onClick={handleClick}> Adicionar Tarefa </button>
    </section>
  )
}
