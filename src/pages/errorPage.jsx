import React from 'react';
import Header from '../components/pure/header';
import Footer from '../components/pure/footer';
import imgError from '../assets/img-error.gif'
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }
    return (
        <div>
            <Header/>
                <div className='row m-0 text-center justify-content-center mt-5 mb-5'>
                    <div className='col-6'>
                        <h1 style={{fontSize:'4rem'}}>404</h1>
                        <h1>Page not found</h1>
                        <button className=' mt-3 mb-3 btn btn-secondary' onClick={goHome}>
                            <h3>Go to home</h3>
                        </button>
                    </div>
                    <div className='col-6'>
                        <img src={imgError} alt='Error logo' style={{width:'60%'}}/>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default ErrorPage;
