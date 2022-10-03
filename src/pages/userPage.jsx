import React from 'react';
import Header from '../components/pure/header';
import Logout from '../components/pure/logout'
import UserList from '../components/container/userList';
import Footer from '../components/pure/footer';

const UserPage = ({token, setToken}) => {
    
    return (
        <div>
            <Header></Header>
            <div className='row m-0 justify-content-center'>

                <div className='col-9 m-0'>
                    <UserList token={token} setToken={setToken}></UserList>
                </div>
                <div className='col-1 mt-5 justify-content-center'>
                    <Logout></Logout>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default UserPage;
