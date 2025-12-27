import { useState } from "react";
const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  return (
    <form
      onSubmit={(e) => {
        addTask(e, task);
        setTask("");
      }}
      className="max-w-xl w-full mx-auto flex justify-center shadow-[0_0_2px_0] rounded-xl gap-2 py-1"
    >
      <input
        type="text"
        placeholder="O que farás hoje ? "
        value={task}
        className="outline-indigo-600 py-1 px-4 inline-block rounded-xl w-9/10"
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        type="submit"
        className="border-2 py-1 px-3 rounded-xl font-black text-white text-xl"
        style={{ backgroundColor: task === "" ? "#A7A2F2" : "#4338CA" }}
      >
        +
      </button>
    </form>
  );
};
export default TaskForm;
