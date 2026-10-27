import Task from "./Task";

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onStartEdit,
  onCancelEdit,
  onUpdateTitle,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          editing={task.editing}
          onToggle={onToggle}
          onDelete={onDelete}
          onStartEdit={onStartEdit}
          onCancelEdit={onCancelEdit}
          onUpdateTitle={onUpdateTitle}
        />
      ))}
    </ul>
  );
}

export default TaskList;
