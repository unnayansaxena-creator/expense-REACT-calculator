 function Weekly(){

const expenses=JSON.parse(localStorage.getItem("expenses")) || [];

const week=expenses.slice(-7);

return(

<div className="page">

<h1>Weekly Expense</h1>

{week.map((e,i)=>(

<p key={i}>
{e.category} - ₹{e.amount}
</p>

))}

</div>

);
}

export default Weekly;