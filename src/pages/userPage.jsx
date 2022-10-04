import React from 'react';
import Header from '../components/pure/header';
import UserList from '../components/container/userList';
import Footer from '../components/pure/footer';

const UserPage = () => {
    
    return (
        <div>
            <Header></Header>
            <div className='row m-0 justify-content-center'>
                <div className='col-lg-12 col-sm-9 m-0'>
                    <UserList></UserList>
                </div>
            </div>
            <Footer className='sticky-bottom '></Footer>
        </div>
    );
}

export default UserPage;
