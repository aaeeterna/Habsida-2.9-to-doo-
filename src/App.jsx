import "./App.css";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

function App() {
const tasks = [
  {
    id: 1,
    title: "Completed task",
    createdAt: new Date(),
    completed: true,
  },
  {
    id: 2,
    title: "Editing task",
    createdAt: new Date(),
    editing: true,
  },
  {
    id: 3,
    title: "Active task",
    createdAt: new Date(),
  },
];
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList tasks={tasks} />
        <Footer />
      </section>
    </section>
  );
}

export default App;
