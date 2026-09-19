import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from "recharts"

function ExpenseChart({ expenses = [] }) {

  const grouped = {}

  expenses.forEach(exp => {
    const date = exp.date || "No Date"

    if (!grouped[date]) {
      grouped[date] = 0
    }

    grouped[date] += Number(exp.amount)
  })

  const chartData = Object.keys(grouped).map(date => ({
    date,
    amount: grouped[date]
  }))

  console.log(chartData)

  return (
    <div className="chartContainer">
      <h2>Expense Chart</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />

          <Tooltip
            contentStyle={{
              backgroundColor: "#222",  
              borderRadius: "8px",
              color: "white"
            }}
          />

          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
            animationDuration={1200}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={`hsl(${index * 60},70%,50%)`} 
              />
            ))}
          </Bar>

        </BarChart>
      </ResponsiveContainer>

    </div>
  )
}

export default ExpenseChart