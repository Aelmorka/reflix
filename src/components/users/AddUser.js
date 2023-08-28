import { useState } from "react"
import Icons from './../../images/sprite.svg'
export default function AddUser({add}) {
    let [show, setShow] = useState(false)
    let [userName, setUserName] = useState('')
    function addNewUser() {
        let user = {name: userName}
        add(user)
        setUserName('')
        setShow(!show)
    }
    function toggleUserAddition() {
        setShow(!show)
    }
    return (
        <div className="new-user">
            <button className="btn-svg" onClick={toggleUserAddition}>
                <svg>
                    <use href={`${Icons}#addUser`}/>
                </svg>
            </button>
            <div onClick={toggleUserAddition} className={"new-user__add-container " + (!show ? "hidden" : "")}>
                <div onClick={(e) => e.stopPropagation()} className="new-user__add">
                    <label htmlFor="userName">
                        <span className="new-user__add-name">User name</span>
                        <input className="input-prime" type="text" id="userName" name="userName"
                            onChange={(e) => setUserName(e.target.value)} value={userName} />
                    </label>
                    <button className="btn-prime" 
                        onClick={addNewUser}
                        disabled={userName === '' ? 'disabled' : ''}>
                            Add
                    </button>
                </div>
            </div>
        </div>
    )
}