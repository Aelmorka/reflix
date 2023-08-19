import { Link } from 'react-router-dom'
export default function NavBar({chosenUser, active}) {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link className={active === 'home' ? 'active' : ''} to="/">Home</Link>
                </li>
                <li>
                    <Link className={active === 'catalog' ? 'active' : ''} to="/catalog">Catalog</Link>
                </li>
            </ul>
            {chosenUser &&
                <Link className={active === 'account' ? 'active' : ''} to="/account">{chosenUser.name}</Link>
            }
            <Link className="navigation__logo" to="/">
                <span className="blue">R</span>
                <span className="violet">e</span>
                <span className="pink">f</span>
                <span className="yellow">L</span>
                <span className="green">i</span>
                <span className="white">x</span>
            </Link>
        </div>
    )
}