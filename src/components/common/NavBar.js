import { Link } from 'react-router-dom'
export default function NavBar({chosenUser}) {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/catalog">Catalog</Link>
                </li>
            </ul>
            {chosenUser &&
                <Link to="/account">{chosenUser.name}</Link>
            }
            <Link className="navigation__logo" to="/">Logo</Link>
        </div>
    )
}