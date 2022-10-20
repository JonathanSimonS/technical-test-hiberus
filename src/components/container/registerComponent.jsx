import React, { useState } from 'react';
import RegisterForm from '../pure/forms/registerForm';
import {register} from '../../services/authService'

import toast, { Toaster } from 'react-hot-toast';

const RegisterComponent = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');

    const handlerRegister = (email, password, name, surname) => {

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
            <RegisterForm setEmail={setEmail} setName={setName} setSurname={setSurname} setPassword={setPassword} handlerRegister={handlerRegister}/>
        </div>
    );
}

export default RegisterComponent;
