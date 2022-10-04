import React, {useState, useEffect} from 'react';
import User from '../pure/user';
import {deleteUser, getAllUsers,  updateUser} from '../../services/userService';
import toast, { Toaster } from 'react-hot-toast';
import Logout from '../pure/logout';

const UserList = () => {

    const [users, setUsers] = useState([]);

    const userLogged = window.localStorage.getItem("loggedUser");
    const parserUserLogger = JSON.parse(userLogged);

    const token = window.localStorage.getItem("token");


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
            
            window.localStorage.setItem("loggedUser", {
                email: email,
                name: name,
                surname: surname,
                id: id
            });

            console.log(result)

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
        <div className='container mb-3'>
            <h2 className='p-2'>Users list</h2>
            <Toaster/>
            <div className='row m-0 mt-4 mb-4 '>
                <div className='col-lg-3'>
                    <span className='p-3'>Total users: <strong>{ users.length }</strong> </span>
                </div>
                <div className='col-lg-3 mt-1'>
                    <span className='p-3'> Welcome <strong>{userLogged && (parserUserLogger.name +' '+ parserUserLogger.surname)}</strong></span>
                </div>
                <div className='col-lg-3 mt-1'>
                    <input type='text' className=' d-inline form-control' placeholder='Search user'></input>
                </div>
                <div className='col-lg-3 mt-1'>
                    <Logout></Logout>
                </div>
            </div>
            {/* mapeo */}
            <div className="row m-0 col-12">
                {users.map((user, index) => (
                    <User key={index} user={user} handlerDelete={handlerDelete} handlerEdit={handlerEdit}></User>
                ))}
            </div>
        </div>
    );
}

export default UserList;
