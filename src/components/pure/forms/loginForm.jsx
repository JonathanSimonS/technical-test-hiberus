import React, { useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";

const LoginForm = ({handlerLogin}) => {

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className='h-100 d-flex justify-content-center flex-column'>
                <h3>Already have an account?</h3>
                <div>
                    <Button
                        className="btn btn-outline-success"
                        variant=''
                        onClick={handleShow}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
        
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={e => handlerLogin(e, email, password)}>
                            <Form.Group className="mb-3 form-floating">
                                <Form.Control  
                                    autoFocus
                                    id="email" 
                                    type="email" 
                                    value={email}
                                    placeholder="name@example.com" 
                                    required
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
                                <Form.Label >Password</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 text-center">
                            <Button className='rounded-5 w-50' variant="dark" type="submit">
                                Log in
                            </Button>
                        </Form.Group>
                        
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginForm;
