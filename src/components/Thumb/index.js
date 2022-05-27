import React from "react";
import {Link} from "react-router-dom";

import {Image} from "./Thumb.styles"

const Thumb = ({ image, movieId, clickable, title }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt={title}></Image>
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb"></Image>
    )}
  </div>
);

export default Thumb;

