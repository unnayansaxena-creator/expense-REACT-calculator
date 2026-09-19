 function ExpenseList({ expenses }) {

  return (
    <div>
      <h2>All Expenses</h2>

      {expenses.map((exp) => (
        <div key={exp.id} className="card">
          ₹{exp.amount} — {exp.date}
        </div>
      ))}

    </div>
  )
}

export default ExpenseList
