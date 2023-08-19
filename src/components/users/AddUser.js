import { useRef } from "react"
export default function AddUser({add}) {
    let userNameRef = useRef(null)
    function addNewUser() {
        let user = {name: userNameRef.current.value}
        add(user)
    }
    function openUserAddition() {

    }
    return (
        <div>
            <button onClick={openUserAddition}>Add user</button>
            <div>
                <input ref={userNameRef} type="text" id="userName" name="userName" />
                
                <input type="checkbox" />
                <button onClick={addNewUser}>Add</button>
            </div>
        </div>
    )
}