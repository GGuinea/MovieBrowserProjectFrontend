import React from 'react';
import { Wrapper, Content, Text } from './MovieInfo.styles';
import Thumb from '../Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpg'
import Button from '../Button/';

const MovieInfo = ({ movie }) => (
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
            <Button text="Dodac tutaj metode asyn dodajaca do ulubionych dla klienta"></Button>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
