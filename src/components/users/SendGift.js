import { useState } from "react"
import { getUsers, getUserId } from './../helpers/common'

import CustomSelect from './../common/CustomSelect'
export default function SendGift({send}) {
    let [sum, setSum] = useState('')
    let friends = getUsers()
    let userId = getUserId()
    let [chosen, setChosen] = useState('')
    if (friends?.length > 1) {
        let userIndex = friends.findIndex(fr => fr.id === userId)
        friends.splice(userIndex, 1)
    }
    function sendGiftToOtherUser() {
        send(friends[chosen].id, sum)
        setSum('')
        setChosen('')
    }
    function chooseFriend(id) {
        setChosen(id)
    }
    return (
        <>
            {friends?.length !== 0 &&
                <div>
                    <h3>Send a gift</h3>
                    <input value={sum} onChange={(e) => setSum(e.target.value)} name="sum"/>
                    <CustomSelect options={friends} choose={chooseFriend} chosen={chosen}/>
                    <button className="btn-prime" 
                        onClick={sendGiftToOtherUser}
                        disabled={sum === '' || chosen === '' ? 'disabled' : ''}>
                            Send
                    </button>
                </div>
            }
        </>
    )
}