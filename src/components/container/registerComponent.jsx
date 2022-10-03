import React from 'react';
import RegisterForm from '../pure/forms/registerForm';
import {register} from '../../services/authService'

import toast, { Toaster } from 'react-hot-toast';

const RegisterComponent = () => {

    const handlerRegister = (e, email, password, name, surname) => {
        e.preventDefault();

        register(email, password, name, surname).then((result) => {
            toast.success('Successfully sign up, sign in now ',
            {   
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            })           
        
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
            <RegisterForm handlerRegister={handlerRegister}/>
        </div>
    );
}

export default RegisterComponent;
