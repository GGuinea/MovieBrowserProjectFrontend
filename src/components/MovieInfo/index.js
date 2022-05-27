import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import Thumb from "../Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/no_image.jpg";
import Button from "../Button/";
import { Context } from "../../context";

const MovieInfo = ({ movie }) => {
  const [user] = useContext(Context);
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
          alt="movie-thumb"
        ></Thumb>
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-direcotrs">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              {user ? (
                <Button text="Add to favorite"></Button>
              ) : (
                <Link to="/login">
                  <Button text="Log In"></Button>
                </Link>
              )}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
