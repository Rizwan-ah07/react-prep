interface TodoItemProps {
  todo: string;
  onDelete: () => void;
}

const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>x</button>
    </li>
  );
};

export default TodoItem;



