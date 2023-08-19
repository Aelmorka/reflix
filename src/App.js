import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { getUsers, updateUsers, addUser, deleteUser, chooseUser, getUser } from './components/helpers/common'
import { MOVIE_PRICE } from './components/helpers/config'
import NavBar from './components/common/NavBar'
import LandingPage from './components/pages/LandingPage'
import CatalogPage from './components/pages/CatalogPage'
import CatalogItemPage from './components/pages/CatalogItemPage'
import AccountPage from './components/pages/AccountPage'

function App() {
	let [users, setUsers] = useState(getUsers())
	let [chosenUser, setChosenUser] = useState(getUser())
	let [page, setPage] = useState('home')
	function getUserById(id) {
		let user = users.find(user => user.id === id)
		chooseUser(user)
		setChosenUser(user)
	}
	function addNewUser(user) {
		addUser(user)
		setUsers(getUsers())
	}
	function removeUser(id) {
		let index = users.findIndex(el => el.id === id)
		if (JSON.stringify(chosenUser) === JSON.stringify(users[index])) {
			setChosenUser(null)
		}
		deleteUser(id)
		setUsers(getUsers())
	}
	function updateAllUsers(users, userIndex) {
		updateUsers(users)
		setChosenUser(users[userIndex])
		chooseUser(users[userIndex])
		setUsers(users)
	}
	function rentMovie(movie) {
		let userIndex = users.findIndex(el => el.id === chosenUser.id)
		let newUsers = [...users]
		newUsers[userIndex].movies.push(movie)
		newUsers[userIndex].budget -= MOVIE_PRICE
		updateAllUsers(newUsers, userIndex)
	}
	function unrentMovie(movie) {
		let userIndex = users.findIndex(el => el.id === chosenUser.id)
		let movieIndex = users[userIndex].movies.findIndex(el => el.id === movie.id)
		let newUsers = [...users]
		newUsers[userIndex].movies.splice(movieIndex, 1)
		newUsers[userIndex].budget += MOVIE_PRICE
		updateAllUsers(newUsers, userIndex)
	}
	function increaseBudget(sum) {
		let userIndex = users.findIndex(el => el.id === chosenUser.id)
		let newUsers = [...users]
		newUsers[userIndex].budget += Number(sum)
		updateAllUsers(newUsers, userIndex)
	}
	function sendGift(acceptorId, sum) {
		let newUsers = [...users]
		let acceptorIndex = newUsers.findIndex(el => el.id == acceptorId)
		let donorIndex = newUsers.findIndex(el => el.id === chosenUser.id)	
		newUsers[donorIndex].budget -= Number(sum)
		newUsers[acceptorIndex].budget += Number(sum)
		updateAllUsers(newUsers, donorIndex)
	}
	function changePage(page) {
		setPage(page)
	}
  	return (
    	<Router>
            <NavBar chosenUser={chosenUser} active={page}/>
            <Routes>
                <Route path="/" element={<LandingPage 
											users={users} 
											getUserById={getUserById} 
											add={addNewUser} 
											remove={removeUser}
											page={changePage}/>} />
                <Route path="/catalog" element={<CatalogPage 
											rent={rentMovie} 
											unrent={unrentMovie} 
											user={chosenUser}
											page={changePage}/>} />
                <Route path="/catalog/:id" element={<CatalogItemPage />} />
				<Route path="/account" element={<AccountPage 
												increase={increaseBudget} 
												send={sendGift}
												page={changePage}/>} />
            </Routes>
        </Router>
  	);
}

export default App;
