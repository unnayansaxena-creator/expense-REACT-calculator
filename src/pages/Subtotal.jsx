 function Subtotal(){

const expenses=JSON.parse(localStorage.getItem("expenses")) || [];

const total=expenses.reduce(
(sum,e)=>sum+Number(e.amount),0
);

return(

<div className="page">

<h1>Subtotal</h1>

<h2>Total Expense ₹{total}</h2>

</div>

);
}

export default Subtotal;