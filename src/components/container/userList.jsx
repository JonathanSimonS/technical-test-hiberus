import React, {useState, useEffect} from 'react';
import User from '../pure/user';
import {deleteUser, getAllUsers,  updateUser} from '../../services/userService';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const UserList = () => {

    const [users, setUsers] = useState([]);
    const token = window.localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        !token  ? setUsers([]) 
                : getAllUsers(token).then((result) => {
                        setUsers(result)
                    }).catch((err) => {
                        console.log(err);
                    });
    }, [token]);

    const handlerEdit = (e, id, email, password, name, surname) => {
        e.preventDefault()
        
        updateUser(token, id, email, password, name, surname)
        .then(() => {
            
            // ! Update this
            window.location.reload() 

            toast.success('User upgraded successfully',
            {   
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })
        }).catch((err) => {
            toast.error(err)
        });
    }


    const handlerDelete = (e, id) => {
        e.preventDefault()

        deleteUser(token, id)
        .then(() => {
            // create copy of array without deleted user
            setUsers(users => users.filter(user => user.id !== id));
            toast('User delete!!',
                {   icon: '👏',
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
        }).catch((err) => {
            console.log(err)
        }); 
    }

    return (
        <div className='container-fluid text-center mb-3'>
            <h2 className='p-2'>Users list</h2>            
            <Toaster/>
            <div className='row m-0'>
                <div className='col-3'>
                    <span className='p-3'>Total users: { users.length } </span>
                </div>
                <div className='col-4'>
                    {/* <span className='p-3'> Welcome <strong>{userLogged.name}</strong></span> */}
                </div>
                <div className='col-4'>
                    <input type='text' className=' d-inline form-control' placeholder='Search user'></input>
                </div>       
            </div>
            {/* mapeo */}
            <div className="row m-0 ">
                {users.map((user, index) => (
                    <User key={index} user={user} handlerDelete={handlerDelete} handlerEdit={handlerEdit}></User>
                ))}
            </div>
        </div>
    );
}

export default UserList;
