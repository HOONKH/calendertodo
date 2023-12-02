import { useState } from "react";
import TodoModal from "./TodoModal";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(true);
  };
  const onClickClose = () => {
    setIsOpen(false);
  };

  return (
    <ul className="flex mx-2 text-[13px] pt-2">
      <span className="w-2/12">{todo.id}</span>
      <span className={`w-6/12 ${todo.isDone && "Myline"}`}>{todo.title}</span>

      <button onClick={onClickModal} className="w-4/12">
        자세히
      </button>

      <TodoModal isOpen={isOpen} onClickClose={onClickClose} todo={todo} />
    </ul>
  );
};

export default TodoCard;
