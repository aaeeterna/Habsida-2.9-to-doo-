import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          created={task.created}
          completed={task.completed}
          editing={task.editing}
        />
      ))}
    </ul>
  );
}

export default TaskList;