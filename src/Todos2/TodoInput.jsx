import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../ReduxTodo1/todos/action"

const TodoInput = ({ onAdd }) => {
  const [state, setState] = useState("")
  const disptach = useDispatch()
  const handleAdd = () => {
    const addTodoaction = addTodo(state)
    disptach(addTodoaction)
  }
  return (
    <div>
      <input
        value={state}
        onChange={e => setState(e.target.value)}
        placeholder="add something"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default TodoInput
