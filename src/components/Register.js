import React, { useState, useContext } from "react";

import { useNavigate } from "react-router-dom";

import API from "../API";
import Button from "./Button";

import { Wrapper } from "./Login.styles";

import { Context } from "../context";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Content-type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ name: username, password: password, email: email }),
  };
  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const registerUser = async () => {
    setError(false);
    await fetch("http://localhost:8080/user/register", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.hasOwnProperty("admin")) {
            setUser({username: json.name})
          return;
        }
        if (json[0].body !== "OK") {
          alert(json[0].body);
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
        setError(true);
      });
  };
  const handleSubmit = async () => {
      if(username.length < 7) {
          alert("Username: min 7 characters");
          return;
      }
      if(password.length < 7) {
          alert("Password: to weak");
          return;
      }
      if(!email.includes("@") || email.length < 10) {
          alert("EMAIL: wrong!");
          return;
      }
    setError(false);
    try {
      const data = await registerUser(username, password, email);
      navigate("/register");
    } catch (error) {
      setError(true);
    }
  };
    
  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
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
      <label>Email: </label>
      <input
        type="text"
        value={email}
        name="email"
        onChange={handleInput}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        value={password}
        name="password"
        onChange={handleInput}
      ></input>
      <Button text="Register" callback={handleSubmit}></Button>
    </Wrapper>
  );
};

export default Register;
