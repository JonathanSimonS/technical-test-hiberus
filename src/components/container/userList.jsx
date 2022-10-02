import React, {useState, useEffect} from 'react';
import User from '../pure/user';
import {getAllUsers} from '../../services/userService'; 

const UserList = () => {

    const [users, setUsers] = useState([]);

    const [token, setToken] = useState({
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjZTZlMjQyLTY3OTQtNDM0Mi05OTk3LTk0MzgxN2EzZjQzMiIsImRhdGUiOiIyMDIyLTEwLTAxVDE1OjI3OjAxLjQxOVoiLCJpYXQiOjE2NjQ2MzgwMjEsImV4cCI6MTY2NDcyNDQyMX0.GrTe2b6Pe6Lv7wqntQmWyi82cbkL3Q4XRtbIeIGanQM",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjZTZlMjQyLTY3OTQtNDM0Mi05OTk3LTk0MzgxN2EzZjQzMiIsImRhdGUiOiIyMDIyLTEwLTAxVDE1OjI3OjAxLjQxOVoiLCJpYXQiOjE2NjQ2MzgwMjEsImV4cCI6MTY2NzIzMDAyMX0.0FV3p70MaZ_sbWfErdN11-ZxbnclwjYG0UGKpYagd2A",
        "tokenType": "Bearer"
    });


    useEffect(() => {
        !token  ? setUsers([])
                : getAllUsers(token).then((result) => {
                        setUsers(result)
                    }).catch((err) => {
                        console.log(err);
                    });
    }, [token, setToken]);

    
    return (
        <div className='container-fluid text-center'>
            <h2 className='p-2'>Users list</h2>
            {/* mapeo */} 
            <div className="row m-0">
                {users.map((user, index) => (
                    <User key={index} user={user}></User>
                ))}
            </div>
        </div>
    );
}

export default UserList;
