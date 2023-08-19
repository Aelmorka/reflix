import { useState, useEffect } from 'react'
import { BASE_LIST_URL, API_KEY, BASE_SEARCH_URL } from './../helpers/config'
import { getUser, filterMovies } from '../helpers/common'

import Catalog from './../catalog/Catalog'
import Budget from './../users/Budget'
import MovieSearch from './../catalog/Search'
export default function CatalogPage({rent, unrent}) {
    let [movies, setMovies] = useState([])
    let [rentedMovies, setRentedMovies] = useState([])
    let [user, setUser] = useState(getUser())
    
    function rentMovie(movie) {
        rent(movie)
        setUser(getUser())
    }
    function unrentMovie(movie) {
        unrent(movie)
        let newMovies = [...movies]
        newMovies.splice(0, 0, movie)
        setMovies(newMovies)
        setUser(getUser())
    }
    function searchMovie(title) {
        findMovies(title)
    }
    
    async function getMovies() {
        const response = await fetch(`${BASE_LIST_URL}?api_key=${API_KEY}`);
        const moviesResp = await response.json();
        if (user?.movies?.length !== 0) {
            setMovies(filterMovies(moviesResp.results, user.movies))
        } else {
            setMovies(filterMovies(moviesResp.results))
        }
    }
    async function findMovies(query) {
        const response = await fetch(`${BASE_SEARCH_URL}?api_key=${API_KEY}&query=${query}`);
        const moviesResp = await response.json();
        if (user?.movies?.length !== 0) {
            setMovies(filterMovies(moviesResp.results, user.movies))
        } else {
            setMovies(filterMovies(moviesResp.results))
        }
    }
    useEffect(() => {
        setRentedMovies(user?.movies || [])
        getMovies()
    }, [])

    useEffect(() => {
        let newMovies = [...movies]
        setRentedMovies(user?.movies)
        if (user?.movies?.length !== 0) {
            setMovies(filterMovies(newMovies, user.movies))
        } else {
            setMovies(filterMovies(newMovies))
        }
    }, [user])
    return (
        <div>
            <MovieSearch searchMovie={searchMovie} />
            {user &&
                <Budget />
            }
            {user && user?.movies?.length !== 0 &&
                <Catalog header="Rented" movies={rentedMovies} unrent={unrentMovie}/>
            }
            <Catalog header="Catalog" movies={movies} rent={rentMovie}/>
        </div>
    )
}