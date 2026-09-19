function Month({ expenses = [] }) {
    console.log(expenses)
  return (
    <div>
      <h1>Monthly Expenses</h1>

      {expenses.map((e, i) => (
        <p key={i}>
          {e.category} - ₹{e.amount}
        </p>
      ))}

    </div>
  );
}

export default Month;