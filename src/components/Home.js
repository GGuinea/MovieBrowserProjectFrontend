import React, { useState, useEffect } from 'react'
import apiSettings from '../API';

//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import {useMoveFetch} from '../hooks/useHomeFetch'

import NoImage from '../images/no_image.jpg';
import Grid from './Grid';
import HeroImage from './HeroImage';
import Thumb from './Thumb';


const Home = () => {
    const {state, loading, error} = useMoveFetch();
    console.log(state);
    return (
      <>
        {state.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}
        <Grid header="Popular Mobies">
          {state.results.map((movie) => (
            <Thumb
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              movieId={movie.id}
            ></Thumb>
          ))}
        </Grid>
      </>
    );
};

export default Home;
