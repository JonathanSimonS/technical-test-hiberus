import React, { useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";

const User = ({index, user, handlerDelete, handlerEdit}) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    // Modal
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    

    return (
        <>
            <div id={index} className="card col-xl-2 col-lg-3 col-md-4 col-sm-6 border-0 mt-3 m-0 rounded-5" >
                <div className="card-body border-0 h-25 bg-light rounded-top">
                    <h5 className="card-title">{user.name} {user.surname}</h5>
                    <p className="card-text ">{user.email}</p>
                    {/* <p className="card-text ">{user.id === userLogged.id ? 'OK' : 'NO'}</p> */}
                </div>
                <div className="card-footer border-0  rounded-5 rounded-top ">
                    <i onClick={handleShowEdit} title="Edit user" className="bi bi-pencil p-2" style={{cursor:'pointer'}}></i>
                    <i onClick={handleShowDelete} title="Delete user" className="bi bi-trash p-2" style={{cursor:'pointer'}}></i>            
                </div>
            </div>

            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title >¡¡Delete user!!</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={e => handlerDelete(e, user.id)}>
                        <Form.Label>Do you want to delete <strong>{user.email}</strong> from the database?</Form.Label>
                        <Form.Group className="mt-3 mb-2 text-center">
                            <Button onClick={handleCloseDelete} className='rounded-5 w-25 m-1' variant="dark">
                                Cancel
                            </Button>
                            <Button className='rounded-5 w-25 m-1' variant="danger" type="submit" onClick={handleCloseDelete}>
                                Delete
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton className="border-0 m-0">
                    <Modal.Title >Edit user</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={ e => {handlerEdit(e, user.id, email, name, surname)} }>
                    <Form.Text className="text-muted mt-3">
                        You are editing user <strong>{user.email}</strong>
                    </Form.Text>
                        <Form.Group className="mb-3 mt-3 form-floating">
                            <Form.Control  
                                id="email" 
                                type="email" 
                                value={email}
                                placeholder="{user.email}" 
                                required
                                autoFocus
                                onChange={({target}) => {setEmail(target.value)}}
                            />
                            <Form.Label>Email</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 form-floating">
                            <Form.Control
                                id="name"
                                type="text"
                                value={name}
                                // onChange={handleChangeUser}
                                placeholder="Name"
                                required
                                onChange={({target}) => {setName(target.value)}}
                            />
                            <Form.Label>Name</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 form-floating">
                            <Form.Control
                                id='surname'
                                type="text"
                                value={surname}
                                placeholder='Surname'
                                onChange={({target}) => {setSurname(target.value)}}
                                required
                            />
                            <Form.Label size={'10px'}>Surname</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 text-center">
                            <Button onClick={handleCloseEdit} className='rounded-5 w-25 m-1' variant="dark">
                                Cancel
                            </Button>
                            <Button className='rounded-5 w-25 m-1' variant="danger" type="submit" onClick={handleCloseEdit}>
                                Edit
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default User;

