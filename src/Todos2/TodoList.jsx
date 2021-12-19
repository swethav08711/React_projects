import React from "react"
import { useSelector } from "react-redux"

function TodoItem({ title, status }) {
  return (
    <div style={{ display: "flex", padding: "1rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
    </div>
  )
}

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  return (
    <div>
      {todos.map(item => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  )
}

export default TodoList
