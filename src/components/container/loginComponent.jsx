import React from 'react';
import LoginForm from '../pure/forms/loginForm';

const LoginComponent = () => {

    const handlerLogin = async (e, email, password) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='h-100 d-flex text-start justify-content-center flex-column'>
            <LoginForm handlerLogin={handlerLogin}></LoginForm>            
        </div>
    );
}

export default LoginComponent;
