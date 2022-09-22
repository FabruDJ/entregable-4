import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'

const UsersForm = ({ getUsers, selectedUser, deselectUser }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if(selectedUser) {
            reset(selectedUser)
        }
    }, [ selectedUser ])

    const submit = (data) => {
        if(selectedUser) {
            axios.put(
                `https://users-crud1.herokuapp.com/users/${selectedUser.id}/`,
                data
            )
                .then(() => getUsers())
        } else {
            axios
            .post('https://users-crud1.herokuapp.com/users/', data)
            .then(() => getUsers())
            .catch(error => console.log(error.response))
        }
        clear()
    }

    const clear = () => {
        reset({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            birthday:''
        })
        deselectUser()
    }

    return (
        <div className="form-container">
            <h2 className='form-title'>Create User</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' {...register('email')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' {...register('password')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id='first_name' {...register('first_name')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id='last_name' {...register('last_name')}/>
                </div>
                <div className="input-container">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" id='birthday' {...register('birthday')}/>
                </div>
                <button className='submit-btn'>
                    {selectedUser ? 'Save Changes' : 'Submit'}
                </button>
                <button className='clear-btn' type='button' onClick={clear}>Clear</button>
            </form>
        </div>
    );
};

export default UsersForm;