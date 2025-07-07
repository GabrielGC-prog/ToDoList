export const ToDoItem = ({ task, onDelete, onCompleted }) => {
  const styleCompleted = {
    textDecoration: task.completed ? "line-through" : "none",
    textAlign: "left",
    //display: "flex",
    //alignItems: "left",
    //justifyContent: "left",
    //height: "200px",
  };

  return (
    <li style={styleCompleted}>
      {task.text}
      <button onClick={() => onCompleted(task.id)}>
        {task.completed ? "❌" : "✔"}
      </button>
      <button onClick={() => onDelete(task.id)}>🗑</button>
    </li>
  );
};
