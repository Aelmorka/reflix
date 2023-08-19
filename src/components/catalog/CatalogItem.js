import { Link } from 'react-router-dom'

import { IMG_URL } from './../helpers/config'
export default function CatalogItem({movie, rent, unrent}) {
    function addMovie() {
        rent(movie)
    }
    function returnMovie() {
        unrent(movie)
    }
    return (
        <div>
            <Link to={`/catalog/${movie.id}`}>
                <img alt={movie.title} src={IMG_URL + movie.backdrop_path} />
                <p>{movie.title}</p>
            </Link>
            {rent &&
                <button onClick={addMovie}>
                    add
                </button>
            }
            {unrent &&
                <button onClick={returnMovie}>
                    del
                </button>
            }
        </div>
    )
}