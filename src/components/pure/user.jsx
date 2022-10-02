import React from 'react';

const User = ({index, user}) => {

    return (
        <div id={index} className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 border-0 mt-3 m-0 rounded-5  " >
            <div className="card-body border-0 h-25 bg-light rounded-top">
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

