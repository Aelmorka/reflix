import { Link } from 'react-router-dom'
import Icons from './../../images/sprite.svg'
export default function User({index, user, getUserById, remove}) {
    function choosedUser() {
        getUserById(user.id)
    }
    function removeUser() {
        remove(user.id)
    }
    return (
        <div className="users__user-container">
            <Link to="/catalog" onClick={choosedUser} className={`users__user user${index + 1}`}>
                {user.name}
            </Link>
            <button onClick={removeUser}>
                <svg>
                    <use href={`${Icons}#delete`}/>
                </svg>
            </button>
        </div>
    )
}