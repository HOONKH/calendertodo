import { FaPencilAlt } from "react-icons/fa";
import { useState } from "react";

const TodoModal = ({ isOpen, onClickClose, todo }) => {
  const [editTodo, setEditTodo] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const doneTodo = () => {
    const localTodos = localStorage.getItem("calendertodo");

    if (!localTodos) return;

    const parsedTodos = JSON.parse(localTodos);

    const updateTodo = parsedTodos.map((v, i) => {
      if (v.id === +todo.id) {
        return { id: v.id, title: v.title, isDone: !v.isDone };
      } else {
        return v;
      }
    });
    localStorage.setItem("calendertodo", JSON.stringify(updateTodo));
  };

  const onSubmitEditTodo = () => {
    const localTodos = localStorage.getItem("calendertodo");
    if (!editTodo) return;
    const parsedTodos = JSON.parse(localTodos);
    const editTodos = parsedTodos.map((v, i) => {
      if (v.id === +todo.id) {
        return { id: v.id, title: editTodo, isDone: v.isDone };
      } else {
        return v;
      }
    });
    localStorage.setItem("calendertodo", JSON.stringify(editTodos));
  };

  const deleteTodo = () => {
    const localTodos = localStorage.getItem("calendertodo");

    const parsedTodos = JSON.parse(localTodos);
    const deleteTodos = parsedTodos.filter((v, i) => {
      if (v.id !== +todo.id) {
        return v;
      }
    });
    if (deleteTodos.length === 0) {
      localStorage.removeItem("calendertodo");
    } else {
      localStorage.setItem("calendertodo", JSON.stringify(deleteTodos));
    }
  };

  const onChangeValue = (e) => {
    setEditTodo(e.target.value);
  };
  const onClickToggle = () => {
    setIsEdit(true);
  };
  const onClickCloseToggle = () => {
    setIsEdit(false);
  };

  return (
    <>
      {isOpen && (
        <div className="bg-blue-100 w-48 h-24 absolute z-10 translate-x-[125px] ">
          <button className="ml-2" onClick={onClickClose}>
            나가기
          </button>
          {isEdit ? (
            <form onSubmit={onSubmitEditTodo}>
              <input
                className="bg-gray-900"
                type="text"
                onChange={onChangeValue}
                value={editTodo}
              />

              <input type="submit" value="수정" />
              <button onClick={doneTodo}>완료</button>
              <button onClick={deleteTodo} className="ml-2">
                삭제
              </button>
              <button>뒤로</button>
            </form>
          ) : (
            <button onClick={onClickToggle}>
              <FaPencilAlt className="ml-2" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default TodoModal;
