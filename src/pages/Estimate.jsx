import { useState } from "react";

function Estimate({ addExpense }) {

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {

    if (!category || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      category,
      amount: Number(amount),
      date: new Date().toLocaleDateString("en-GB")
    };

    console.log(newExpense);

    addExpense(newExpense);

    setCategory("");
    setAmount("");

    alert("Expense Added ✅");
  };

  return (
    <div className="page">

      <h1>Add Expense</h1>

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
1
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Expense
      </button>

    </div>
  );
}

export default Estimate;