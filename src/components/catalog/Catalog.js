import CatalogIitem from './CatalogItem'
import { getUser } from '../helpers/common'
import { MOVIE_PRICE } from '../helpers/config'
export default function Catalog({movies, header, rent, unrent}) {
    let user = getUser()
    return (
        <div>
               <h1>{header}</h1>
                <div className={`catalog__list catalog__${header}`}>
                    {movies?.length !==0
                        ? <>
                            {movies.map(movie => {
                                let canRent = user && user.budget >= MOVIE_PRICE ? rent : null
                                if (user) {
                                    return (
                                        <CatalogIitem key={movie.id} movie={movie} rent={canRent} unrent={unrent}/>
                                    ) 
                                } else {
                                    return (<CatalogIitem key={movie.id} movie={movie}/>)
                                }
                            })}
                        </>
                        : <p>Something went wrong</p>
                    }
                </div>
        </div>
    )
}