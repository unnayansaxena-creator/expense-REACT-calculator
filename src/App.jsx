import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/App.css";

import Home from "./pages/Home";
import Review from "./pages/Review";
import Estimate from "./pages/Estimate";
import Login from "./pages/Login";
import Month from "./pages/Month";
import Weakly from "./pages/Weakly";
import Quaterly from "./pages/Quaterly";
import Subtotal from "./pages/Subtotal";

import Footer from "./Components/Footer";

function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <BrowserRouter>

      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>


        <div style={{ flex: 1 }}>

          <Routes>


            <Route
              path="/"
              element={
                <Home
                  expenses={expenses}
                  addExpense={addExpense}
                />
              }
            />


            <Route
              path="/login"
              element={<Login />}
            />


            <Route
              path="/estimate"
              element={<Estimate addExpense={addExpense} />}
            />


            <Route
              path="/review"
              element={<Review expenses={expenses} />}
            />


            <Route
              path="/weakly"
              element={<Weakly expenses={expenses} />}
            />


            <Route
              path="/month"
              element={<Month expenses={expenses} />}
            />
            

            <Route
              path="/quaterly"
              element={<Quaterly expenses={expenses} />}
            />


            <Route
              path="/subtotal"
              element={<Subtotal expenses={expenses} />}
            />


            <Route
              path="*"
              element={
                <Home
                  expenses={expenses}
                  addExpense={addExpense}
                />
              }
            />

          </Routes>

        </div>


        <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;