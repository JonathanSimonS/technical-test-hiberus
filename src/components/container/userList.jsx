import React, {useState, useEffect} from 'react';
import User from '../pure/user';
import {deleteUser, getAllUsers,  updateUser} from '../../services/userService';
import toast, { Toaster } from 'react-hot-toast';
import Logout from '../pure/logout';
import ScrollToTop from "react-scroll-to-top";
// redux toolkit
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUser } from '../../store/slices/loggedUser';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    // hook Redux Toolkit
    const dispatch = useDispatch();
    const loggedUser = useSelector((state) => state.loggedUser); // value in store
    const token = useSelector((state) => state.token); // value in store

    useEffect(() => {
        !token  ? setUsers([])
                : getAllUsers(token.accessToken).then((result) => {
                        setUsers(result)
                        
                    }).catch((err) => {
                    });
    }, [token]);

    const handlerEdit = (e, id, email, name, surname) => {
        e.preventDefault()

        updateUser(token.accessToken, id, email,  name, surname)
        .then((result) => {

            // save update user
            const userUpdate = JSON.stringify({
                email: email,
                name: name,
                surname: surname,
                id: id,
            });

            // array with update user 
            setUsers(users.map(user => (user.id === id ? JSON.parse(userUpdate) : user)))

            // update welcome name
            if(loggedUser.id === JSON.parse(userUpdate).id){
                dispatch(setLoggedUser(JSON.parse(userUpdate)));
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

        deleteUser(token.accessToken, id)
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
        <div className='container mb-4'>
            <h2 className='p-2'>Users list</h2>
            <Toaster/>
            <div className='row m-0 mt-3 mb-2 justify-content-center d-flex'>
                <div className='col-lg-4'>
                    <span className='p-3'>Total users: <strong>{ users.length }</strong> </span>
                </div>
                <div className='col-lg-4 mt-1' >
                    <span className='p-3'> Welcome <strong>{loggedUser && (loggedUser.name +' '+ loggedUser.surname)}</strong></span>
                </div>
                <div className='col-lg-4 mt-1'>
                    <Logout></Logout>
                </div>
                <div className='col-lg-6 mt-3 '>
                    <div className="input-group">
                        <input className="form-control rounded-0 rounded-start d-inline form-control" onChange={seacher} value={search}  type='text' placeholder='Search email' />
                        <div className="input-group-append">
                            <button className="btn btn-secondary rounded-0 rounded-end" type="button">
                                    <i className='bi bi-eraser-fill' title='Clean search' onClick={() => setSearch('')} style={{ color: 'white' }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop smooth  color='black'/>

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
