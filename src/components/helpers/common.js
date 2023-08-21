export function getUsers() {
    const users = JSON.parse(localStorage.getItem("reflixUsers")) || [];
    
    return users
}
export function updateUsers(users) {
    localStorage.setItem("reflixUsers", JSON.stringify(users))
}

export function addUser(user) {
    let users = getUsers()
    let newUser = {
        id: users?.length !== 0 ? users[users.length - 1].id + 1 : 1,
        name: user.name,
        budget: 10000,
        movies: []
    }
    users.push(newUser)
    updateUsers(users)
}

export function deleteUser(id) {
    let users = getUsers()
    let index = users.findIndex(el => el.id === id)
    let user = getUser()
    if (JSON.stringify(user) === JSON.stringify(users[index])) {
        chooseUser(null)
    }
    users.splice(index, 1)
    updateUsers(users)
}

export function chooseUser(user) {
    localStorage.setItem("chosenUser", JSON.stringify(user))
}

export function getUser() {
    return JSON.parse(localStorage.getItem("chosenUser"))
}

export function getUserId() {
    return JSON.parse(localStorage.getItem("chosenUser")).id
}

export function filterMovies(movies, rented) {
    let filtered = []
    if (!rented || rented?.length === 0) {
        filtered = movies.reduce((result, cur) => {
            if (cur.backdrop_path) {
                result.push(cur)
            }
            return result
        }, [])
    } else {
        filtered = movies.reduce((result, cur) => {
            if (rented.findIndex(el => el.id === cur.id) < 0 && cur.backdrop_path) {
              result.push(cur)
            }
            return result
        }, [])
    }
    return filtered
}
