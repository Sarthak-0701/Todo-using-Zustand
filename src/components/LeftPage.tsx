import { useState } from "react";
import useTodoStore from "../store/todoStore";

const LeftPage = () => {

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);


  const submitHandler = (e:SubmitEvent<HTMLFormElement>) =>{
    if(title === ""){
      return alert("Enter task title to proceed.")
    }
    e.preventDefault();
    addTodo(title , description);
    console.log(todos);
    setTitle("");
    setDescription("");
  }

  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");

  return (
    <>
      <div className="bg-gray-800 w-1/3 h-full relative rounded-xl flex justify-center items-center">
          <h2 className="text-xl absolute top-0 px-5 py-2 text-white/60 font-bold w-full align-middle border-b-2 border-white/40">Create Task</h2>
          <div className="flex w-3/4 h-70 rounded-xl items-center justify-center">
            <form 
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="bg-gray-900 rounded-xl p-4 gap-2 flex flex-col h-full w-full items-center justify-center">
              <input 
              type="text" name="title" id="task-title" 
              className="bg-gray-800 px-4 py-2 rounded-xl outline-none h-1/4 w-full text-gray-200"
              placeholder="Enter task title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
              <textarea 
              name="description" id="task-title" 
              className="bg-gray-800 h-2/4 px-4 py-2 rounded-xl outline-none w-full text-gray-200 resize-none"
              placeholder="Enter task description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              />
              <button
              className="h-1/4 w-full active:scale-95 hover:cursor-pointer text-gray-200 bg-blue-900 rounded-xl"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
    </>
  )
}

export default LeftPage
