import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./Movie";
import NotFound from "./NotFound";
import Login from "./components/Login";
import Register from "./components/Register";

import UserProvider from "./context";
import UserInfo from "./components/UserInfo";
import Admin from "./components/Admin";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/user/:userId" element={<UserInfo/>} />
            <Route path="/admin" element={<Admin/>} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
