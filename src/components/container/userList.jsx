import React, {useState, useEffect} from 'react';
import User from '../pure/user';
import {deleteUser, getAllUsers,  updateUser} from '../../services/userService';
import toast, { Toaster } from 'react-hot-toast';
import Logout from '../pure/logout';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    let userLogged = window.localStorage.getItem("loggedUser");
    let parserUserLogger = JSON.parse(userLogged);

    const token = window.localStorage.getItem("token");

    useEffect(() => {
        !token  ? setUsers([])
                : getAllUsers(token).then((result) => {
                        setUsers(result)
                        
                    }).catch((err) => {
                        console.log(err);
                    });
    }, [token]);


    const handlerEdit = (e, id, email, name, surname) => {
        e.preventDefault()

        updateUser(token, id, email,  name, surname)
        .then((result) => {

            // save update user
            const userUpdate = JSON.stringify({
                email: email,
                id: id,
                name: name,
                surname: surname,
            });

            // array with update user 
            setUsers(users.map(user => (user.id === id ? JSON.parse(userUpdate) : user)))

            // update welcome name
            if(JSON.parse(userLogged).id === JSON.parse(userUpdate).id){
                window.localStorage.setItem("loggedUser", userUpdate)
            }
            
            toast.success('Update user successfully',
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

    const seacher = (e) => {
        setSearch(e.target.value)
    }

    const resultSearch = !search 
                            ? users 
                            : users.filter((user) => user.email.toLowerCase()
                                .includes(search.toLocaleLowerCase()))


    return (
        <div className='container mb-3'>
            <h2 className='p-2'>Users list</h2>
            <Toaster/>
            <div className='row m-0 mt-4 mb-4 '>
                <div className='col-lg-3'>
                    <span className='p-3'>Total users: <strong>{ users.length }</strong> </span>
                </div>
                <div className='col-lg-3 mt-1'>
                    <span className='p-3'> Welcome <strong>{userLogged && (parserUserLogger.name)}</strong></span>
                </div>
                <div className='col-lg-3 mt-1'>
                    <input onChange={seacher} value={search}  type='text' className=' d-inline form-control' placeholder='Search email'></input>
                </div>
                <div className='col-lg-3 mt-1'>
                    <Logout></Logout>
                </div>
            </div>
            {/* mapeo */}
            <div className="row m-0 col-12">
                {resultSearch.map((user, index) => (
                    <User key={index} user={user} handlerDelete={handlerDelete} handlerEdit={handlerEdit}></User>
                ))}
            </div>
        </div>
    );
}

export default UserList;
