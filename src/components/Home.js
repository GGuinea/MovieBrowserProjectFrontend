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
import Button from './Button';


const Home = () => {
    const {
      state,
      loading,
      error,
      searchTerm,
      setSearchTerm,
      setIsLoadingMore,
    } = useMoveFetch();
    console.log(state);
    if(error) return <div>Something go wrong</div>
    return (
      <>
        {!searchTerm && state.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
            title={state.results[0].original_title}
            text={state.results[0].overview}
          />
        ) : null}
        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
        <Grid header={searchTerm ? "Search result" : "Popular Movies"}>
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
        {loading && <Spinner/>}
        {state.page < state.total_pages && !loading && (
            <Button text ="Load more" callback={() => setIsLoadingMore(true)}/>
        )}
      </>
    );
};

export default Home;
