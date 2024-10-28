import React  from "react"
import { Todo } from '../types'

interface TodoItemProps extends Todo {
  style?: React.CSSProperties,
  toggleTodo: (id: Todo['id']) => void,
  removeTodo: (id: Todo['id']) => void
}

const TodoItem = ({ toggleTodo, removeTodo, id, title, completed, style = {} }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)}/>
      <p>{title}</p>
      <span onClick={() => removeTodo(id)}>X</span>
    </div>
  )
}

export default TodoItem