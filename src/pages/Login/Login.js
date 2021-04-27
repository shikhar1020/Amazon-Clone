import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.scss";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            /*onClick={login}*/ type="submit"
            className="login__signInButton"
          >
            Sign in
          </button>
        </form>
        <p>
          By signing-in here, you agree to Adam's Fake Amazon Page Terms &
          Conditions
        </p>
        <button /*onClick={register}*/ className="login__registerButton">
          Create a new fake Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
