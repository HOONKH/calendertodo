import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoCard from "./TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const getTodos = () => {
    const localTodos = localStorage.getItem("calendertodo");
    if (!localTodos) return;
    const parsedTodos = JSON.parse(localTodos);
    setTodos(parsedTodos);
    setTodoId(parsedTodos[parsedTodos.length - 1].id);
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="bg-black text-white w-[190px] h-[250px]">
      <h1 className="ml-3 pt-1">1</h1>
      <CreateTodo todos={todos} getTodos={getTodos} todoId={todoId} />
      {todos.map((v, i) => {
        return <TodoCard key={i} todo={v} todos={todos} />;
      })}
    </div>
  );
};

export default TodoList;
