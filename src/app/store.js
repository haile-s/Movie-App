import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../features/movies/movieSlice'
export const store = configureStore({
    reducer: {
        movies: moviesReducer, // Use "movies" to match the slice name
    },
});
