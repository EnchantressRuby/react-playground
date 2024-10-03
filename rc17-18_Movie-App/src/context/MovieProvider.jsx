import React, { createContext, useContext } from 'react'

export const MovieContext = createContext()
export const useMovieContext = () => {
    return useContext(MovieContext)
}

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

const MovieProvider = ({ children }) => {

    return (
        <MovieContext.Provider>{children}</MovieContext.Provider>
    )
}

export default MovieProvider