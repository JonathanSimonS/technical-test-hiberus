import React, {useState, useEffect} from 'react';
import User from '../pure/user';
import {deleteUser, getAllUsers, getMeUser, updateUser} from '../../services/userService';
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
        .then((result) => {
            toast.success('User upgraded successfully')

            console.log(result)
    
        }).catch((err) => {
            toast.error(err)
        });
    }

    const handlerDelete = (id) => {
        deleteUser(token, id)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(id)
            console.log(err)
        }); 
    }

    const goHome = () => {
        window.localStorage.removeItem("token")
        navigate("/")        
    }

    return (
        <div className='container-fluid text-center'>
            <h2 className='p-2'>Users list</h2>            
            <Toaster />
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

                { users.length===0 
                    ? <span className='p-3' style={{cursor:'pointer',color:'blue'}} onClick={goHome}> Go to home to log in and see users </span>
                    : '' }
                
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
