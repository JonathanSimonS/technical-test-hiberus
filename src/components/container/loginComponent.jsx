import React, { useState } from 'react';
import LoginForm from '../pure/forms/loginForm';
import {login} from '../../services/authService'
import toast, { Toaster } from 'react-hot-toast';
import { getMeUser } from '../../services/userService';

const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = async (e, email, password) => {
        e.preventDefault();

        login(email, password)
        .then((result) => {
            window.localStorage.setItem("token",result.accessToken);
            
            const token = window.localStorage.getItem("token");
    
            // get session user
            getMeUser(token).then((result) => {
                window.localStorage.setItem("loggedUser", JSON.stringify(result))
                window.location.reload()
            }).catch((err) => {
                console.log(err)
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
            <LoginForm email={email} password={password} setPassword={setPassword} setEmail={setEmail} handlerLogin={handlerLogin}></LoginForm>
        </div>
    );
}

export default LoginComponent;
