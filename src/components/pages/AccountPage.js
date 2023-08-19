import { getUser } from './../helpers/common'
import IncreaseBudget from './../users/IncreaseBudget'
import SendGift from './../users/SendGift'
export default function AccountPage({increase, send}) {
    let user = getUser()
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