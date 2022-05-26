import Spinner from "./components/Spinner";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "./config";
import { useMovieFetch } from "./hooks/useMovieFetch";
import React from "react";
import BreadCrumb from "./components/BreadCrumb";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong </div>;

  return (
    <>
      <BreadCrumb movieTitle={movie.original_title}></BreadCrumb>
    </>
  );
};
export default Movie;
