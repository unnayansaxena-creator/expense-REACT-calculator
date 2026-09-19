 function Quaterly(){

const expenses=JSON.parse(localStorage.getItem("expenses")) || [];

const total=expenses.reduce(
(sum,e)=>sum+Number(e.amount),0
);

return(

<div className="page">

<h1>Quaterly Expense</h1>

<h2>Total : ₹{total}</h2>

</div>

);
}

export default Quaterly;