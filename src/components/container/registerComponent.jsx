import React from 'react';
import RegisterForm from '../pure/forms/registerForm';
import {register} from '../../services/authService'

import toast, { Toaster } from 'react-hot-toast';

const RegisterComponent = () => {

    const handlerRegister = (e, email, password, name, surname) => {
        e.preventDefault();

        register(email, password, name, surname).then((result) => {
            
            // guardar token en storage
            // window.localStorage.setItem("token",result.accessToken)
            
            console.log(result)
            toast.success('Successfully login')
            
        }).catch((err) => {
            toast.error(err)
        });
    }

    return (
        <div className='h-100 d-flex text-start justify-content-center flex-column'>
            <Toaster />
            <RegisterForm handlerRegister={handlerRegister}/>
        </div>
    );
}

export default RegisterComponent;
