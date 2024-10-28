import { useRef } from "react" 

interface NewTodoFormProps {
  handleClick: (text: string) => void,
}

const NewTodoForm = ({ handleClick }: NewTodoFormProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onClick = () => {
    if (inputRef.current) {
      handleClick(inputRef.current.value)
      inputRef.current.value = ''
    }
  }

  return (
    <div className="todo-input">
      <input type="text" placeholder="new todo" ref={inputRef}/>
      <button onClick={onClick}>Add todo</button>
    </div>
  )
}

export default NewTodoForm