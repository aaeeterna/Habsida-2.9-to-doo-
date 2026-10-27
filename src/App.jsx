import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Completed task",
      createdAt: new Date(),
      completed: true,
      editing: false,
    },
    {
      id: 2,
      title: "Editing task",
      createdAt: new Date(),
      completed: false,
      editing: false,
    },
    {
      id: 3,
      title: "Active task",
      createdAt: new Date(),
      completed: false,
      editing: false,
    },
  ]);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const startEditing = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, editing: true } : task)),
    );
  };

  const cancelEditing = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, editing: false } : task)),
    );
  };

  const updateTitle = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle, editing: false } : task,
      ),
    );
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onStartEdit={startEditing}
          onCancelEdit={cancelEditing}
          onUpdateTitle={updateTitle}
        />
        <Footer />
      </section>
    </section>
  );
}

export default App;
