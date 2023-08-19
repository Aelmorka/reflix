import './LandingPage.css'

import User from './../users/User'
import AddUser from './../users/AddUser'

export default function LandingPage({users, getUserById, add, remove}) {

    return (
        <div className="users">
            <h1>Who is watching?</h1>
            <ul>
                {users.map((user, index) => <li key={user.id}><User index={index} user={user} getUserById={getUserById} remove={remove}/></li>)}
            </ul>
            <AddUser add={add} />
        </div>
    )
}