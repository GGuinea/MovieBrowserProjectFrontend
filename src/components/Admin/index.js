import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Text } from "./Admin.styles";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Button from "../Button/";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import Grid from "../Grid";

const Admin = () => {
  const [data, setData] = useState();
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Content-type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({}),
    };
    fetch("http://localhost:8080/users", requestOptions)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  }, []);
  return (
    <Wrapper>
      <Content>
        <Text>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Banned</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.admin ? "true" : "false"}</td>
                    <td>{user.banned ? "true" : "false"}</td>
                    <td>
                        {user.banned ? <Button text="unban"></Button> : <Button text="ban"></Button>}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default Admin;
