import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import axios from 'axios';
import { movieApi, APIKey } from '../../common/api/MoviewApi';
import { useDispatch } from 'react-redux';
import {addMovies} from '../../features/movies/movieSlice'

const Home = () => {
  const movieText = "Harry";
  const dispatch=useDispatch()
  useEffect(() => {
    const fetchMovie = async () => {
      
        const response = await axios
        .get(`${movieApi}?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((error)=>{
        console.error("Error fetching data:", error);

        })
        dispatch(addMovies(response.data))
        // console.log(response.data); 
       
    };

    fetchMovie();
  }, []);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
};

export default Home;
