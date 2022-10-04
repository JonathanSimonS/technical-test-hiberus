import React, { useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";

const RegisterForm = ({handlerRegister}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>
                <h3>Register now</h3>
                <div>
                    <Button variant='primary' onClick={handleShow} >
                        Sign up
                    </Button>
                </div>
            </div>
        
            <Modal show={show} onHide={handleClose} className='modal-container back-modal'>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Create your account</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={ e => {handlerRegister(e, email, password, confirmPassword, name, surname)} }>
                        <Form.Group className="mb-3 form-floating">
                            <Form.Control  
                                id="email" 
                                type="email" 
                                value={email}
                                placeholder="name@example.com" 
                                required
                                autoFocus
                                onChange={({target}) => {setEmail(target.value)}}
                            />
                            <Form.Label>Email</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 form-floating">
                            <Form.Control
                                id='password'
                                type="password"
                                value={password}
                                placeholder='****'
                                required
                                onChange={({target}) => {setPassword(target.value)}}
                            />
                            <Form.Label>Password</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 form-floating">
                            <Form.Control
                                id='passwordConfirm'
                                type="password"
                                placeholder='****'
                                value={confirmPassword}
                                onChange={({target}) => {setConfirmPassword(target.value)}}
                                required
                            />
                            <Form.Label>Password confirm</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 form-floating">
                            <Form.Control
                                id="name"
                                type="text"
                                value={name}
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
                            <Form.Label>Surname</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 text-center">
                            <Button className='rounded-5 w-50' variant="dark" type="submit">
                                Sign up
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default RegisterForm;
