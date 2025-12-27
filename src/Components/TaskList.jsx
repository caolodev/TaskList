import ItemList from "./ItemList";

const TaskList = ({ filtered, toggleDone, removeTask }) => {
  return (
    <ul className="space-y-3 pt-4">
      {filtered.map(({ id, done, text, hour, date }) => {
        return (
          <ItemList
            id={id}
            hour={hour}
            date={date}
            done={done}
            text={text}
            key={id}
            removeTask={removeTask}
            toggleDone={toggleDone}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
