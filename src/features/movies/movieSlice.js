import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
});

export const { addMovies } = movieSlice.actions;
 // Access movies array from the state
 export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
