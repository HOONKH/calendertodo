import { useState } from "react";

const CreateTodo = ({ todos, todoId, getTodos }) => {
  const [newTodo, setNewTodo] = useState("");
  const onSubmitTodo = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    const newTodos = [
      ...todos,
      { id: todoId + 1, title: newTodo, isDone: false },
    ];
    localStorage.setItem("calendertodo", JSON.stringify(newTodos));

    getTodos();
    console.log(todos);
    setNewTodo("");
  };

  return (
    <form
      onSubmit={onSubmitTodo}
      className="flex items-center gap-2 justify-center pt-2"
    >
      <input
        className="w-[130px] bg-gray-900 border-2 border-white rounded-lg "
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="생성" />
    </form>
  );
};

export default CreateTodo;
