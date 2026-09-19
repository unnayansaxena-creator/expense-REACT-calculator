 import ExpenseForm from "../Components/ExpenseForm"
import Summary from "../Components/Summary"
import ExpenseList from "../Components/ExpenseList"
import ExpenseChart from "../Components/ExpenseChart"
import { useNavigate } from "react-router-dom"
import Navbar from "../Components/Navbar"
function Home({ expenses, addExpense }) {

  const navigate = useNavigate()

  return (
    <>
    <Navbar />


      <div className="container">

        <h1> Expense Tracker 💰</h1>
+

        <ExpenseForm addExpense={addExpense}/>
        <Summary expenses={expenses}/>
        <ExpenseChart expenses={expenses}/>
        <ExpenseList expenses={expenses}/>

        <button onClick={() => navigate("/review")}>
          Review Expenses
        </button>

      </div>
</>
  )
}

export default Home
