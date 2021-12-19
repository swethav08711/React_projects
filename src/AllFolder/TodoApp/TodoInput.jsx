import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../TodoRedux/action"
import { v4 as uuid } from "uuid"
const TodoInput = () => {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const handleADD = () => {
    const payload = {
      title,
      status: false,
      id: uuid(),
    }
    const addTodoAction = addTodo(payload)
    dispatch(addTodoAction)
  }
  return (
    <div>
      <h1>ADD TODO</h1>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="add something"
      />
      <button onClick={handleADD}>ADD</button>
    </div>
  )
}

export default TodoInput
