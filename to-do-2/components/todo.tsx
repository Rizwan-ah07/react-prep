interface ToDoProps{
    text: string;
    onDelete: () => void;
}


const ToDoItem = ({ text, onDelete} : ToDoProps) => {
    return(
        <li>
            {text}{" "}
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}

export default ToDoItem;