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

  const [_user, setUser] = useContext(Context);
  const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(
              requestToken,
              username,
              password
            );
            console.log(sessionId)
            setUser({sessionId: sessionId.session_id, username})
            navigate('/');
        } catch(error) {
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
