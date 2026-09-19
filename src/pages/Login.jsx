function Login() {
  return (
    <div className="loginContainer">

      <div className="loginCard">

        <h1>Expense Tracker</h1>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>Login</button>

      </div>

    </div>
  );
}

export default Login;
