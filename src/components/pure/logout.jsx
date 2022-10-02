import React from 'react';

const Logout = () => {

    // Call service logout
    const handlerLogout = () => {
        console.log('Logout function')
    }

    return (
            <button className='btn btn-danger' onClick={handlerLogout}>Logout</button>
    );
}

export default Logout;
