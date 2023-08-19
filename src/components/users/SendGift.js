import { useRef, useState } from "react"
import { getUsers, getUserId } from './../helpers/common'
export default function SendGift({send}) {
    let sumRef = useRef(null)
    let friends = getUsers()
    let userId = getUserId()
    let [chosen, setChosen] = useState(0)
    if (friends?.length > 1) {
        let userIndex = friends.findIndex(fr => fr.id === userId)
        friends.splice(userIndex, 1)
    }
    function handleChoosing(e) {
        setChosen(e.target.value)
    }
    function sendGiftToOtherUser() {
        send(chosen, sumRef.current.value)
    }
    return (
        <>
            {friends?.length !== 0 &&
                <div>
                    <h1>Send a gift</h1>
                    <input ref={sumRef} name="sum"/>
                    <select value={chosen} onChange={handleChoosing}>
                        <option key="0" value="0">Not chosen</option>
                        {friends.map(friend => <option key={friend.id} value={friend.id}>{friend.name}</option>)}
                    </select>
                    <button onClick={sendGiftToOtherUser}>Send</button>
                </div>
            }
        </>
    )
}