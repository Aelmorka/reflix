import { Link } from 'react-router-dom'
export default function User({index, user, getUserById, remove}) {
    function choosedUser() {
        getUserById(user.id)
    }
    function removeUser() {
        remove(user.id)
    }
    return (
        <div className={`users__user user${index + 1}`}>
            <Link to="/catalog" onClick={choosedUser}>
                {user.name}
            </Link>
            <button onClick={removeUser}>delete</button>
        </div>
    )
}