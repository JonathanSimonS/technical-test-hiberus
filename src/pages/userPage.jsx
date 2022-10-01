import React from 'react';
import UserList from '../components/container/userList';
import Footer from '../components/pure/footer';
import Header from '../components/pure/header';

const UserPage = () => {
    return (
        <div>
            <Header></Header>
            <UserList></UserList>
            <Footer></Footer>
        </div>
    );
}

export default UserPage;
