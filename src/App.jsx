import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [ users, setUsers ] = useState([])
  const [ selectedUser, setSelectedUser ] = useState(null)

  useEffect(() => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])

  const getUsers = () => {
    axios
      .get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const selectUser = (user) => {
    setSelectedUser(user)
  }

  const deselectUser = () => setSelectedUser(null)

  console.log(selectedUser)

  return (
    <div className="App">
      <UsersForm 
        getUsers={getUsers} 
        selectedUser={selectedUser}
        deselectUser={deselectUser}/>
      <UsersList 
        users={users} 
        selectUser={selectUser}
        getUsers={getUsers}/>
    </div>
  )
}

export default App
