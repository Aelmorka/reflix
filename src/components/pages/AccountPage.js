import './AccountPage.css'

import { useEffect } from 'react'

import { getUser } from './../helpers/common'

import Budget from './../users/Budget'
import IncreaseBudget from './../users/IncreaseBudget'
import SendGift from './../users/SendGift'

export default function AccountPage({increase, send, page}) {
    let user = getUser()
    useEffect(() => page('account'))
    return (
        <div className="account">
            <div className='account__info'>
                <h1>{user.name}</h1>
                <Budget />
            </div>
            <IncreaseBudget increase={increase} />
            <SendGift send={send}/>
        </div>
    )
}