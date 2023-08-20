import { useRef, useState } from "react"
import { getUsers, getUserId } from './../helpers/common'

import CustomSelect from './../common/CustomSelect'
export default function SendGift({send}) {
    let sumRef = useRef(null)
    let friends = getUsers()
    let userId = getUserId()
    let [chosen, setChosen] = useState(0)
    if (friends?.length > 1) {
        let userIndex = friends.findIndex(fr => fr.id === userId)
        friends.splice(userIndex, 1)
    }
    function sendGiftToOtherUser() {
        send(chosen, sumRef.current.value)
    }
    function chooseFriend(id) {
        setChosen(id)
    }
    return (
        <>
            {friends?.length !== 0 &&
                <div>
                    <h3>Send a gift</h3>
                    <input ref={sumRef} name="sum"/>
                    <CustomSelect options={friends} chosen={chooseFriend}/>
                    <button className="btn-prime" onClick={sendGiftToOtherUser}>Send</button>
                </div>
            }
        </>
    )
}