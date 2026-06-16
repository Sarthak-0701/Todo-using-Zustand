import useTodoStore, { type Todo } from "../store/todoStore"

const TodoTasks = ({todo} : {todo : Todo}) => {

  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const toggle = useTodoStore((state) => state.toggleStatus)

  return (
    <div className="flex flex-col gap-2 bg-gray-900 w-4/17 h-1/3 justify-between rounded-xl px-4 py-4">
      
      <div>
        <h1 className='text-lg font-bold text-gray-200'>
          {todo.title}
        </h1>
        <h3 className='text-sm font-medium text-gray-200/50'>
          {todo.description}
        </h3>
      </div>
      
      
      <div className="flex justify-between gap-1.5">
        <button 
        className="px-2 py-1.5 text-sm bg-green-600 rounded-full active:scale-95 hover:cursor-pointer font-bold text-gray-800"
        onClick={() => {
          toggle(todo.id)
        }}
        >
          {todo.completed ? "Completed" : "Mark Complete"}
        </button>

        <button 
        className="px-2 py-1.5 text-sm bg-red-600 rounded-full active:scale-95 hover:cursor-pointer font-bold text-gray-800"
        onClick={() =>{
          deleteTodo(todo.id)
        }}
        >
          Delete
        </button>
      </div>
    
    </div>
  )
}

export default TodoTasks
