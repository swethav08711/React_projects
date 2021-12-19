import React from "react"
import { useSelector } from "react-redux"

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  return (
    <div>
      <h2>List of items</h2>
      {todos.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default TodoList
