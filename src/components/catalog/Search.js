export default function MovieSearch({searchMovie}) {
    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            searchMovie(event.target.value)
        }
    }
    return (
        <div>
            <input onKeyDown={handleKeyDown} type="text" id="search" name="search" />
        </div>
    )
}