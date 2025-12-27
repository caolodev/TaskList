import FilterButton from "./FiterButton.jsx";
const TaskFilter = ({ setFilter, filter }) => {
  return (
    <div className="w-full">
      <div className="items-center rounded-md text-muted-foreground flex justify-center bg-transparent gap-4 p-0 h-auto">
        <FilterButton filter={filter} setFilter={setFilter} name="todos" />
        <FilterButton filter={filter} setFilter={setFilter} name="concluidos" />
        <FilterButton filter={filter} setFilter={setFilter} name="pendentes" />
      </div>
    </div>
  );
};

export default TaskFilter;
