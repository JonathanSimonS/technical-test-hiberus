import React, { useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";
import { Toaster } from 'react-hot-toast';

const Logout = () => {

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handlerLogout = () => {
        window.localStorage.removeItem("persist:root")        
    }

    return (
        
        <>
            <div>
                <Toaster />
                <button className='btn btn-danger d-none d-md-inline' title='Logout' onClick={handleShow}>Logout</button>
                <button className='btn btn-danger d-md-none rounded-circle' title='Logout' onClick={handleShow}>
                    <i className='bi bi-box-arrow-left ' style={{ color: 'white' }}></i> 
                </button>
            </div>
        
            {/* style in App.css */}
            <Modal show={show} onHide={handleClose} className='back-modal'>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title >Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form onSubmit={handlerLogout}>
                        <Form.Label>Confirm to leave the session.</Form.Label>
                        <Form.Group className="mt-3 mb-2 text-center">
                            <Button onClick={handleClose} className='rounded-5 w-25 m-1' variant="dark">
                                Cancel
                            </Button>
                            <Button className='rounded-5 w-25 m-1' title="See you soon" variant="danger" type="submit">
                                Log out
                            </Button>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Logout;
