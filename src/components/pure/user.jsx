import React from 'react';

const User = ({user}) => {
    return (
        <div className='container text-center p-2 '>
            <h2 className='p-4'>Users list</h2>
            <div className="row m-0">
                
                {/* <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">{user.name}{user.surname}</h5>
                        <p className="card-text ">{user.email}</p>
                        <i className="bi bi-pencil p-2" onClick={e => (editUser(id))}></i>
                        <i className="bi bi-trash p-2" onClick={ () => (deleteUser(id)) }></i>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div> */}

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text ">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>
            
                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text ">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text ">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                <div className="col-3 card w-25 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Name Surname</h5>
                        <p className="card-text">example@gmail.com</p>
                        <i className="bi bi-pencil p-2"></i>
                        <i className="bi bi-trash p-2"></i>
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default User;
