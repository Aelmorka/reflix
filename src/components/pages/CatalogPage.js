import './CatalogPage.css'
import { useState, useEffect } from 'react'
import { BASE_LIST_URL, API_KEY, BASE_SEARCH_URL } from './../helpers/config'
import { getUser, filterMovies } from '../helpers/common'

import Catalog from './../catalog/Catalog'
import Budget from './../users/Budget'
import MovieSearch from './../catalog/Search'
export default function CatalogPage({rent, unrent, page}) {
    let [movies, setMovies] = useState([])
    let [rentedMovies, setRentedMovies] = useState([])
    let [user, setUser] = useState(getUser())
    
    function changePage() {
        page('catalog')
    }
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
        getMovies(title)
    }
    
    function getMovies(query) {
        let request = query ? `${BASE_SEARCH_URL}?api_key=${API_KEY}&query=${query}` : `${BASE_LIST_URL}?api_key=${API_KEY}`
        fetch(request)
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then(function(data) {
                if (user && user?.movies?.length !== 0) {
                    setMovies(filterMovies(data.results, user.movies))
                } else {
                    setMovies(filterMovies(data.results))
                }
            }).catch(function(error) {
                console.log(error);
            })
    }
    useEffect(() => {
        let newMovies = [...movies]
        setRentedMovies(user?.movies)
        if (user && user?.movies?.length !== 0) {
            setMovies(filterMovies(newMovies, user.movies))
        } else {
            setMovies(filterMovies(newMovies))
        }
    }, [user])
    useEffect(() => {
        setRentedMovies(user?.movies || [])
        getMovies()
        changePage()
    }, [])

    return (
        <>
            <div className="catalog">
                <div className="catalog__header">
                    <MovieSearch searchMovie={searchMovie} />
                    {user &&
                        <Budget />
                    }
                </div>
                {user && user?.movies?.length !== 0 &&
                    <Catalog header="Rented" movies={rentedMovies} unrent={unrentMovie}/>
                }
                <Catalog header="Catalog" movies={movies} rent={rentMovie}/>
            </div>
        </>
    )
}