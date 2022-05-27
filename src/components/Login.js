import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import API from "../API";
import Button from "./Button";

import { Wrapper } from "./Login.styles";

import { Context } from "../context";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const [_user, setUser] = useContext(Context);
  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");
myHeaders.append("Content-type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ id: 0, name: username, password: password }),
  };
  const navigate = useNavigate();
  const loginUser = async () => {
    await fetch("http://localhost:8080/user/login", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const handleSubmit = async () => {
    setError(false);
    try {
      const data = await loginUser(username, password);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };
  return (
    <Wrapper>
      {error && <div className="error">There was an error</div>}
      <label>User: </label>
      <input
        type="text"
        value={username}
        name="username"
        onChange={handleInput}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      ></input>
      <Button text="Login" callback={handleSubmit}></Button>
      <Link to="/register">
        <Button text="Create account"></Button>
      </Link>
    </Wrapper>
  );
};

export default Login;
