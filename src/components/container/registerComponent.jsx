import React from 'react';
import RegisterForm from '../pure/forms/registerForm';

const RegisterComponent = () => {

    const handlerRegister = (e, email, password, name, surname) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='h-100 d-flex text-start justify-content-center flex-column'>
            <RegisterForm handlerRegister={handlerRegister}/>
        </div>
    );
}

export default RegisterComponent;
