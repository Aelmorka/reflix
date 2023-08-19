import { useEffect } from 'react'
import { getUser } from './../helpers/common'
import IncreaseBudget from './../users/IncreaseBudget'
import SendGift from './../users/SendGift'
export default function AccountPage({increase, send, page}) {
    let user = getUser()
    page('account')
    return (
        <div>
            <div>
                {user.name}
            </div>
            <div>
                {user.budget}
            </div>
            <IncreaseBudget increase={increase} />
            <SendGift send={send}/>
        </div>
    )
}