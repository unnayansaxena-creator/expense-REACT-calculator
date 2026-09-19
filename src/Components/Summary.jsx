function Summary({ expenses }) {

    const getAverage = (days) => {
        let months;
        const now = new Date()
        console.log("days", typeof days, days, days === 7);

        if (days === 7) {
            months = 7
        } else {
            months = days / 30
        }


        const filtered = expenses.filter(exp => {
            const expDate = new Date(exp.date)
            const diff = (now - expDate) / (1000 * 60 * 60 * 24)
            return diff <= days
        })

        if (filtered.length === 0) return 0

        const total = filtered.reduce(
            (sum, e) => sum + e.amount,
            
        )

        return (total / months).toFixed(2)
    }

    
    const average3Days = () => {
        if (expenses.length < 2) return 0

        const last3 = expenses.slice(-3)

        const total = last3.reduce((sum, e) => sum + e.amount, 0)

        return (total / 3).toFixed(2)
    }

    return (
        <div className="summary">

            <h2>Statistics</h2>

            <p>Weekly Avg: ₹{getAverage(7)}</p>
            <p>Monthly Avg: ₹{getAverage(30)}</p>
            <p>3 Months Avg: ₹{getAverage(90)}</p>
            <p>Last 3 Days Avg: ₹{average3Days()}</p>
<p> monthaly average: $ {getComputedStyle}</p>
<p> weakly average : $ {getSelection}</p>
        </div>
    )
}

export default Summary

