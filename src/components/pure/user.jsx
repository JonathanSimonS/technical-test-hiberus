import React from 'react';

const User = ({key, user}) => {

    return (
        <div id={key} className="card col-2 border-0 mt-3 m-0 rounded-5 rounded-top " >
            <div className="card-body border-0 h-25 bg-light">
                <h5 className="card-title">{user.name} {user.surname}</h5>
                <p className="card-text ">{user.email}</p>
            </div>
            <div className="card-footer border-0  rounded-5 rounded-top ">
                <i title="Edit user" className="bi bi-pencil p-2" style={{cursor:'pointer'}}></i>
                <i title="Delete user" className="bi bi-trash p-2" style={{cursor:'pointer'}}></i>            
            </div>
        </div>
    );
}

export default User;

