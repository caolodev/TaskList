import EmptyList from "./EmptyList.jsx";
import TaskFilter from "./TaskFilter.jsx";
import TaskForm from "./TaskForm.jsx";
import TaskHeader from "./TaskHeader.jsx";
import TaskList from "./TaskList.jsx";
import TaskStatistics from "./TaskStatistics.jsx";
import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
const TaskApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("Tasks");
    return savedTask ? JSON.parse(savedTask) : [];
  });
  const [filter, setFilter] = useState("todos");

  const addTask = (e, textToSave) => {
    e.preventDefault();
    if (!textToSave.trim()) return;
    const time = new Intl.DateTimeFormat("pt-PT", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    const date = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(new Date());
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: textToSave.trim(),
        done: false,
        date: date,
        hour: time,
      },
    ]);
    toast.success("tarefa adicionada com sucesso");
  };

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (idToRemove) => {
    setTasks((prev) => prev.filter(({ id }) => id !== idToRemove));
    toast.error("Tarefa deletada com sucesso", {
      style: {
        background: "#7f1d1d",
        color: "#fff",
        border: "1px solid #991b1b",
      },
    });
  };

  const toggleDone = (idToChange) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === idToChange ? { ...item, done: !item.done } : item
      )
    );
  };

  const lengthPending = tasks.filter(({ done }) => done === false).length;
  const lengthDone = tasks.filter(({ done }) => done === true).length;
  const filtered = tasks.filter((item) => {
    if (filter === "todos") return item;
    if (filter === "pendentes") return item.done === false;
    if (filter === "concluidos") return item.done === true;
    return;
  });

  return (
    <div className="w-full max-w-xl space-y-10">
      <TaskHeader />
      {tasks.length > 0 && (
        <TaskStatistics
          done={lengthDone}
          pending={lengthPending}
          full={tasks.length}
        />
      )}
      <TaskForm addTask={addTask} />
      <TaskFilter setFilter={setFilter} filter={filter} />
      {tasks.length > 0 ? (
        <TaskList
          filtered={filtered}
          removeTask={removeTask}
          toggleDone={toggleDone}
        />
      ) : (
        <EmptyList />
      )}
      <Toaster position="top-center" duration={1000} />
    </div>
  );
};
export default TaskApp;
