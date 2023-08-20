import Icons from './../../images/sprite.svg'
import { useRef } from 'react'
export default function MovieSearch({searchMovie}) {
    let searchRef = useRef(null)
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            searchMovie(event.target.value)
        }
    }
    function handleClick(e) {
        searchMovie(searchRef.current.value)
    }
    return (
        <div className="catalog__search">
            <input onKeyDown={handleKeyDown} ref={searchRef} type="text" id="search" name="search" />
            <svg onClick={handleClick}>
                <use href={`${Icons}#search`}/>
            </svg>
        </div>
    )
}