import { getUser } from './../helpers/common'
export default function Budget() {
    let user = getUser()
    return (
        <div>
            Budget: $ {user.budget}
        </div>
    )
}