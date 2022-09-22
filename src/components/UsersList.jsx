import axios from 'axios';
import React from 'react';

const UsersList = ({ users, selectUser, getUsers }) => {

    const deleteUser = (id) => {
        axios
            .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
    }

    return (
        <div className='users_list-container'>
            <h2 className='users_list-title'>Users List</h2>
            <ul className='users-container'>
                {
                    users.map(user => (
                        <li className='user-card' key={user.id}>
                            <p><i className="icon fa-solid fa-user"></i> <b className='user-name'>{user.first_name} {user.last_name}</b></p>
                            <p><i className="icon fa-solid fa-at"></i> {user.email}</p>
                            <p><i className="icon fa-solid fa-cake-candles"></i> {user.birthday}</p>
                            <div className="user-btns">
                                <button className='user-btn delete-btn' onClick={() => deleteUser(user.id)}><i className="fa-solid fa-trash"></i></button>
                                <button className='user-btn edit-btn' onClick={() => selectUser(user)}><i className="fa-solid fa-pen-to-square"></i></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;