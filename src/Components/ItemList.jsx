import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
const ItemList = ({ id, done, text, removeTask, toggleDone, date, hour }) => {
  return (
    <label
      style={{ cursor: "pointer" }}
      className=" flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 transition-all"
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleDone(id)}
        className="peer shrink-0 border ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:text-primary-foreground h-5 w-5 rounded-md border-slate-300 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600 transition-colors"
      />
      <p
        style={{
          textDecoration: done ? "line-through" : "none",
          color: done ? "#90a1b9" : "#314158",
        }}
        className="flex-1 text-sm font-medium cursor-pointer transition-all select-none truncate w-2xs"
        title={text}
      >
        {text}
      </p>
      <p
        className="text-xs text-slate-400 mt-1"
        style={{ textDecoration: "none" }}
      >
        {date} • {hour}
      </p>
      <FontAwesomeIcon
        className="p-2 rounded-xl inline-block hover:shadow-[0_0_3px_0] text-slate-400 hover:text-red-400"
        icon={faTrashCan}
        onClick={(e) => {
          e.stopPropagation();
          removeTask(id);
        }}
      />
    </label>
  );
};
export default ItemList;
