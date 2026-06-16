import LeftPage from "./components/LeftPage"
import RightPage from "./components/RightPage"
import useTodoStore from "./store/todoStore"

const App = () => {

  const clearAll = useTodoStore((state) => state.clearAll);
  return (
    <>
      <div className="flex justify-between items-center h-[10vh] bg-gray-900 text-white px-12 py-5">
        <h1 className="text-2xl font-bold px-8">My Todo</h1>
        <button className="bg-red-600 px-4 py-2 text-gray-800 rounded-xl font-bold"
        onClick={() =>{
          clearAll();
        }}
        >Clear All</button>
      </div>

      <div className="h-[90vh] bg-gray-900 flex gap-5 justify-center items-center px-10 pb-5">

        <LeftPage />

        <RightPage />


      </div>

    </>
  )
}

export default App
