import { getUser } from './../helpers/common'
export default function Budget() {
    let user = getUser()
    return (
        <div>
            {user.budget}
        </div>
    )
}