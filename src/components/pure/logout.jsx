import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Modal } from "react-bootstrap";

const Logout = () => {

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    // Call service logout
    const handlerLogout = () => {

        window.localStorage.removeItem("token")
        navigate("/")        
    }

    return (
        
        <>
            <div>
                <button className='btn btn-danger d-none d-md-inline' title='Logout' onClick={handleShow}>Logout</button>

                <button className='btn btn-danger d-md-none' title='Logout' onClick={handleShow}>
                    <i className='bi bi-box-arrow-left fs-4' style={{ color: 'white' }}></i> 
                </button>
            </div>
        
            <Modal show={show} onHide={handleClose}>
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
