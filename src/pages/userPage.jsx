import React from 'react';
import Header from '../components/pure/header';
import Logout from '../components/pure/logout'
import UserList from '../components/container/userList';
import Footer from '../components/pure/footer';

const UserPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='row m-0 justify-content-end'>

                <div className='col-lg-10 m-0'>
                    <UserList></UserList>
                </div>
                <div className='col-lg-1 mt-5 '>
                    <Logout></Logout>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default UserPage;
