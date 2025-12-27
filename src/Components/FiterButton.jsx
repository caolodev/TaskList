import React from "react";

const FiterButton = ({ filter, name, setFilter }) => {
  const condicao = filter === name;
  return (
    <button
      style={{
        color: condicao ? "white" : "#62749D",
        backgroundColor: condicao ? "#4F39F6" : "white",
      }}
      onClick={() => setFilter(name)}
      className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm bg-white border border-slate-200 rounded-full px-6 py-2 text-xs font-semibold text-slate-500 data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:border-indigo-600 shadow-sm transition-all cursor-pointer"
    >
      {name}
    </button>
  );
};

export default FiterButton;
