import React from 'react';
import LoginForm from '../pure/forms/loginForm';
import {login} from '../../services/authService'
import toast, { Toaster } from 'react-hot-toast';

const LoginComponent = () => {

    const handlerLogin = async (e, email, password) => {
        e.preventDefault();
        login(email, password)
        .then((result) => {
        
            // guardar token en storage
            // window.localStorage.setItem("token",result.accessToken)
            
            console.log(result.accessToken)
            toast.success('Successfully login')
            
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
