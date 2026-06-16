import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

interface TodoState{
    todos: Todo[];
    addTodo: (title: string , description: string) => void;
    deleteTodo: (id: string) => void;
    toggleStatus: (id: string) => void;
    clearAll : () => void;
}

const useTodoStore = create<TodoState>()(
    persist((set) => ({
    todos: [],

    addTodo: (title , description) => set((state)=>({
        todos: [...state.todos , {id: Date.now().toString() , title , description , completed: false}]
    })),

    deleteTodo: (id) => set((state)=>({
        todos: state.todos.filter((todo) => todo.id !== id ? todo : null)
    })),

    toggleStatus: (id) => set((state)=>({
        todos: state.todos.map((todo) => todo.id === id ? {...todo , completed: !todo.completed} : todo)
    })),

    clearAll : () => set(() => ({
        todos: [],
    }))

})
,{
    name: 'todo-storage',
}));

export default useTodoStore;