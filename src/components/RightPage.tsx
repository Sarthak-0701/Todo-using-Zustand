import useTodoStore from "../store/todoStore";
import TodoTasks from "./TodoTasks";


const RightPage = () => {
  const todos = useTodoStore((state) => state.todos);

  return (

    <div className="bg-gray-800 w-2/3 h-full relative rounded-xl flex flex-col overflow-y-auto no-scrollbar">
      
      <h2 className="text-xl px-5 py-2 text-white/60 font-bold w-full border-b-2 border-white/40">
        Tasks
      </h2>
    
      <div className="flex flex-wrap content-start w-full p-4 gap-4 overflow-y-auto custom-dark-scrollbar flex-1">
        {todos.map((todo, id) => {
          return <TodoTasks key={id} todo={todo} />;
        })}
      </div>

    </div>
  );
};

export default RightPage;