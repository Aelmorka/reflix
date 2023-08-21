import { getUser } from './../helpers/common'
export default function Budget() {
    let user = getUser()
    return (
        <div className="budget">
            Budget: $ {user.budget}
        </div>
    )
}