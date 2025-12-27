import PizzaGrafic from "./PizzaGrafic.jsx";
const TaskStatistics = ({ done, pending, full }) => {
  const percent = full === 0 ? 0 : Math.round((done / full) * 100);
  const data = [
    { nome: "Pendentes", value: pending },
    { nome: "concluidos", value: done },
  ];

  const COLORS = ["#E2E8F0", "#6366F1"];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-62 w-62 relative">
        <PizzaGrafic data={data} colors={COLORS} done={done} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold text-slate-700">
            {percent}%
          </span>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Feito
          </span>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
          <span className="text-xs font-medium text-slate-500">
            {done} concluidas
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-slate-400"></div>
          <span className="text-xs font-medium text-slate-500">
            {pending} pendentes
          </span>
        </div>
      </div>
    </div>
  );
};
export default TaskStatistics;
