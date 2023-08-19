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
        console.log(movie)
    }
    useEffect(() => {getMovieDetails()}, [])
    return (
        <div>
            <img alt={movieDetails.title} src={IMG_URL + movieDetails.backdrop_path}/>
        </div>
    )
}