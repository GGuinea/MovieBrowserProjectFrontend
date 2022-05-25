import React from 'react'

//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';
import {useMoveFetch} from '../hooks/useHomeFetch'

import NoImage from '../images/no_image.jpg';
import Grid from './Grid';
import HeroImage from './HeroImage';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Thumb from './Thumb';


const Home = () => {
    const {state, loading, error, setSearchTerm} = useMoveFetch();
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
        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
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
        <Spinner></Spinner>
      </>
    );
};

export default Home;
