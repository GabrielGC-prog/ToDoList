import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ tasks, onDelete, onCompleted }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onCompleted={onCompleted}
          />
        ))}
      </ul>
    </div>
  );
};
