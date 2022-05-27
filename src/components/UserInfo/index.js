import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Text } from "./UserInfo.styles";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Button from "../Button/";
import { Context } from "../../context";
import { useNavigate } from "react-router-dom";
import Grid from "../Grid";

const UserInfo = () => {
  const [user] = useContext(Context);
    console.log(user);
    console.log(user.favorit);
  return (
    <Wrapper>
      <Content>
        <Text>
        <Grid header={"Favorite"}>
          {user.favorit.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
                title={movie.name}
              movieId={movie.externalId}
            ></Thumb>
          ))}
        </Grid>

        </Text>
      </Content>
    </Wrapper>
  );
};

export default UserInfo;
