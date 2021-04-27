import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../services/firebase.js";
import "./style.scss";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // stops the refresh! very important!
    //login logic goes here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to homepage
        console.log("Suceesfully logged in: ", auth);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault(); // stops the refresh! very important!
    // register logic goes here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created a user and logged in, then redirect to homepage
        console.log("Sucessfully registered: ", auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="loginLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="loginContainer">
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
          <button onClick={login} type="submit" className="loginSignInButton">
            Sign in
          </button>
        </form>
        <p>
          By signing-in here, you agree to Shikhar's Fake Amazon Page Terms &
          Conditions
        </p>
        <button onClick={register} className="loginRegisterButton">
          Create a new fake Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
