import React from 'react';
import LoginForm from '../pure/forms/loginForm';
import {login} from '../../services/authService'
import toast, { Toaster } from 'react-hot-toast';

const LoginComponent = () => {

    const handlerLogin = (e, email, password) => {
        e.preventDefault();
        login(email, password)
        .then((result) => {
            toast.success('Successfully login')
        
            // guardar token en storage
            window.localStorage.setItem("token",JSON.stringify(result))
            
            console.log(result)
            // navigate("/users");

        }).catch((err) => {
            toast.error(err)
        });
    }

    return (
        <div className='h-100 d-flex text-start justify-content-center flex-column'>
            <Toaster />
            <LoginForm handlerLogin={handlerLogin}></LoginForm>            
        </div>
    );
}

export default LoginComponent;
