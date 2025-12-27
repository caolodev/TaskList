import { PieChart, Pie, Cell, Tooltip } from "recharts";
const PizzaGrafic = ({ data, colors }) => {
  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        dataKey="value"
        innerRadius={70}
        outerRadius={90}
        startAngle={90}
        endAngle={-270}
      >
        {data.map((_, index) => {
          return <Cell key={index} fill={colors[index]} />;
        })}
      </Pie>
    </PieChart>
  );
};

export default PizzaGrafic;
