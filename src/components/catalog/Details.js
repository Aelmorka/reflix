import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { IMG_URL, BASE_ITEM_URL, API_KEY } from './../helpers/config'
export default function Details() {
    let [movieDetails, setMovieDetails] = useState({})
    const { id } = useParams()
    async function getMovieDetails() {
        const response = await fetch(`${BASE_ITEM_URL}${id}?api_key=${API_KEY}`);
        const movie = await response.json();
        setMovieDetails(movie)
    }
    useEffect(() => {getMovieDetails()}, [])
    return (
        <>
            {movieDetails.backdrop_path &&
                <div className="details">
                    <img alt={movieDetails.title} src={IMG_URL + movieDetails.backdrop_path}/>
                    <h1>{movieDetails.title}</h1>
                    <p>Released: {movieDetails.release_date}</p>
                    <p>{movieDetails.overview}</p>
                </div>
            }
        </>
    )
}