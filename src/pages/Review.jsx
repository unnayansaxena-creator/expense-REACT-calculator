 import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
import ExpenseChart from "../Components/ExpenseChart"

function Review({ expenses = [] }) {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>Expense Review</h1>

        {expenses.map((exp, index) => (
          <div key={index} className="card">
            <p>{exp.category} - ₹{exp.amount}</p>
          </div>
        ))}

        <h2>Expense Chart</h2>

        <ExpenseChart expenses={expenses} />

        <button onClick={() => navigate("/")}>
          Back Home
        </button>

      </div>
    </>
  )
}

export default Review
