import { useRef, useState } from "react"
import Icons from './../../images/sprite.svg'
export default function AddUser({add}) {
    let userNameRef = useRef(null)
    let [show, setShow] = useState(false)
    function addNewUser() {
        let user = {name: userNameRef.current.value}
        add(user)
        setShow(!show)
    }
    function toggleUserAddition() {
        setShow(!show)
    }
    return (
        <div className="new-user">
            <button className="new-user__button" onClick={toggleUserAddition}>
                <svg>
                    <use href={`${Icons}#addUser`}/>
                </svg>
            </button>
            <div onClick={toggleUserAddition} className={"new-user__add-container " + (!show ? "hidden" : "")}>
                <div onClick={(e) => e.stopPropagation()} className="new-user__add">
                    <label htmlFor="userName">
                        <span className="new-user__add-name">User name</span>
                        <input ref={userNameRef} type="text" id="userName" name="userName" />
                    </label>
                    <label htmlFor="contentType">
                        <span>Child content</span>
                        <input type="checkbox" id="contentType" />
                    </label>
                    <button className="btn-prime" onClick={addNewUser}>Add</button>
                </div>
            </div>
        </div>
    )
}