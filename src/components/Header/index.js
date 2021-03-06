import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./Header.styles";
import { Context } from "../../context";
import Button from "../Button";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);
  return (
    <Wrapper>
      <Content>
        <Link to="/" style={{ textDecoration: "none" }}>
          Simple movie app
        </Link>
        {user ? (
          <span>
            <Link to={`/user/${user.id}`}>
              <Button text={user.username}></Button>
            </Link>
        {user.admin ? (
          <span>
            <Link to={"/admin"}>
              <Button text="dashboard"></Button>
            </Link>
          </span>
        ) : (
          <span></span>
        )}
          </span>
        ) : (
          <Link to="/login">
            <Button text="Log In"></Button>
          </Link>
        )}
      </Content>
    </Wrapper>
  );
};
export default Header;
