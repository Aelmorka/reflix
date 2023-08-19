import { useRef } from "react"
import Icons from './../../images/sprite.svg'
export default function AddUser({add}) {
    let userNameRef = useRef(null)
    function addNewUser() {
        let user = {name: userNameRef.current.value}
        add(user)
    }
    function openUserAddition() {

    }
    return (
        <div className="new-user">
            <button onClick={openUserAddition}>
                <svg>
                    <use href={`${Icons}#addUser`}/>
                </svg>
            </button>
            <div className="new-user__add-container">
                <div className="new-user__add">
                    <label for="userName">User name</label>
                    <input ref={userNameRef} type="text" id="userName" name="userName" />
                    <label for="contentType">Child content</label>
                    <input type="checkbox" id="contentType" />
                    <button onClick={addNewUser}>Add</button>
                </div>
            </div>
        </div>
    )
}