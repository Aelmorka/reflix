import Icons from './../../images/sprite.svg'
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
        <div className="catalog__item">
            <Link className="catalog__item-content" to={`/catalog/${movie.id}`}>
                <img alt={movie.title} src={IMG_URL + movie.backdrop_path} />
                <p>{movie.title}</p>
            </Link>
            {rent &&
                <button className="catalog__item-button" onClick={addMovie}>
                    <svg>
                        <use href={`${Icons}#rent`}/>
                    </svg>
                </button>
            }
            {unrent &&
                <button className="catalog__item-button" onClick={returnMovie}>
                    <svg>
                        <use href={`${Icons}#unrent`}/>
                    </svg>
                </button>
            }
        </div>
    )
}