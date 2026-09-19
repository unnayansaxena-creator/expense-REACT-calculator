import { NavLink } from "react-router-dom"

function Navbar() {

  return (
    <nav className="navbar">

      <div className="navLeft">
        💰 Expense Tracker
      </div>

      <div className="navRight">

        <NavLink to="/Login" className="navItem">
          LOGIN 
        </NavLink>

        <NavLink to="/Review" className="navItem">
          Review
        </NavLink>

        <NavLink to="/Estimate" className="navItem">
          ESTIMATE
        </NavLink>

        <NavLink to="/Weakly" className="navItem">
          WEAKLY ESTIMATE
        </NavLink>

        <NavLink to="/Monthly" className="navItem">
          MONTHALY ESTIMATE
        </NavLink>
         
        <NavLink to="/Quaterly" className="navItem">
          QUATERLY ESTIMATE
        </NavLink>

        <NavLink to="/Subtotal" className="navItem">
          SUB TOTAL 
        </NavLink>

        <NavLink to="/" className="navItem">
          Home
        </NavLink>

      </div>

    </nav>
  )
}

export default Navbar