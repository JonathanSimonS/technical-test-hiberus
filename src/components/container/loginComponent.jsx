import React, { useState } from 'react';
import LoginForm from '../pure/forms/loginForm';
import { login } from '../../services/authService'
import toast, { Toaster } from 'react-hot-toast';
import { getMeUser } from '../../services/userService';
// redux toolkit
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../../store/slices/loggedUser';
import { setToken } from '../../store/slices/token';

const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // hook Redux Toolkit
    const dispatch = useDispatch();

    const handlerLogin = (email, password) => {

        login(email, password)
        .then((result) => {

            dispatch(setToken(result));
            
            // get session user
            getMeUser(result.accessToken).then((resul) => {

                dispatch(setLoggedUser(resul));

            }).catch((err) => {
                toast.error(err,
                    {   
                        style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                        },
                    })
            });
    
        }).catch((err) => {
            toast.error(err,
            {   
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })
        });
    }

    return (
        <div className='h-100 d-flex text-start justify-content-center flex-column'>
            <Toaster />
            <LoginForm setPassword={setPassword} setEmail={setEmail} handlerLogin={handlerLogin}></LoginForm>
        </div>
    );
}

export default LoginComponent;
