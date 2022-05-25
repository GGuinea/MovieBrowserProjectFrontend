import React, { useState, useEffect } from 'react'
import apiSettings from '../API';

//config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

import {useHomeFetch} from '../hooks/useHomeFetch'
import NoImage from '../images/no_image.jpg';


const Home = () => {
    const {state, loading, error} = useHomeFetch();
    console.log(state);
    return <div>Home Page</div> }

export default Home;
