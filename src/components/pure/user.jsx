import React, { useState } from 'react';
import { Form, Button, Modal, Card } from "react-bootstrap";
import imgCard from '../../assets/logo-avengers-hiberus.png';
import { useSelector } from 'react-redux';

const User = ({index, user, handlerDelete, handlerEdit}) => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const loggedUser = useSelector((state) => state.loggedUser) // value in store

    // Modal
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showMeUser, setShowMeUser] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleCloseMeUser = () => setShowMeUser(false);
    const handleShowMeUser = () => setShowMeUser(true);

    // styles for login user
    const activeUser = {
        backgroundColor: '#242935',
        color: 'white',
        fontWeight : 'bolder'
    }
    const noActiveUser = {
        color: 'black',
        backgroundColor: 'whitesmoke',
    }

    return <>
        <div id={index} className="card col-lg-3 col-md-4 col-sm-6 border-0 mt-3 m-0 rounded-5" >
            <div className="card-body h-25 rounded-top "
                style={user.id === loggedUser.id ? activeUser : noActiveUser}>
                <h5 className="card-title ">{user.name} {user.surname}</h5>
                <samp className="card-text link-success">{user.email}</samp>
            </div>
            <div style={user.id === loggedUser.id ? activeUser : noActiveUser} className="card-footer border-0 rounded-bottom   ">
                <kbd className="m-1"><i onClick={handleShowEdit} title="Edit user" className="bi bi-pencil p-2" style={{cursor:'pointer'}}></i></kbd>
                {user.id !== loggedUser.id
                    ? <kbd className="m-1 "><i onClick={handleShowDelete} title="Delete user" className="bi bi-trash p-2" style={{cursor:'pointer'}}></i></kbd>
                    : <kbd className="m-1 "><i onClick={handleShowMeUser} title="Me user" className="bi bi-person-circle p-2" style={{cursor:'pointer'}}></i></kbd>}
                    
            </div>
        </div>

        <Modal show={showDelete} onHide={handleCloseDelete} className='back-modal'>
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

        <Modal show={showEdit} onHide={handleCloseEdit} className='back-modal'>
            <Modal.Header closeButton className="border-0 m-0 ">
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

        <Modal show={showMeUser} onHide={handleCloseMeUser} className='back-modal'>
            <Modal.Header closeButton className="border-0 bg-dark text-white">
                <Modal.Title >Me user</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Card className="text-center border-0">
                    <Card.Img variant="top" src={imgCard} />
                    <Card.Header className="text-center border-0 bg-dark rounded-top mt-4 text-white p-3">Me email is <strong> {user.email} </strong></Card.Header>
                    <Card.Header className="text-center border-0 bg-dark rounded-bottom text-white p-3 fs-3">{user.name} {user.surname}</Card.Header>
                </Card>
            </Modal.Body>
            <Modal.Footer className='border-0'>
                <Button className='rounded-5 w-25' variant="dark" onClick={handleCloseMeUser}>Back
                </Button>
            </Modal.Footer>
        </Modal>

    </>;
}

export default User;

