import { useState } from "react"

function ExpenseForm({ addExpense }) {

  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      date
    }

    addExpense(newExpense)

    setAmount("")
    setDate("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button>Add Expense</button>
    </form>
  )
}

export default ExpenseForm