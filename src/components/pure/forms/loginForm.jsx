import React, { useState } from 'react';
import { Button, Modal, FormGroup, FormLabel } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';

// validate form
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/**
 * LoginEsquema with yup for validation
 */
const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(3, 'Minimum 3 characters')
    }
)

const LoginForm = ({setPassword, setEmail, handlerLogin}) => {

    // Modal state
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialCredentials = {
        email: '',
        password : ''
    }

    return (
        <>
            {/* Modal button */}
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
            
            {/* Modal container */}
            <Modal show={show} onHide={handleClose} className='modal-container back-modal'>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Sign in</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    {/* Validation using Formik */}
                    <Formik
                        initialValues={initialCredentials}
                        
                        // * Yup validation esquema
                        validationSchema={loginEsquema}
                        
                        onSubmit={(values) => {
                            setEmail(values.email);
                            setPassword(values.password);
                            handlerLogin(values.email, values.password );
                        }}
                    >

                        {/* props of formik */}
                        {() => (

                            <Form >
                                <FormGroup className="mb-3 form-floating">
                                    <Field className='form-control mb-1' id="email" name="email" type="email" placeholder="example@mail.com" />
                                    <FormLabel><i className="bi bi-envelope-fill"></i> Email</FormLabel>
                                    <ErrorMessage className='text-danger text-center' component="div" name='email' />
                                </FormGroup>
                                <FormGroup className="mb-3 form-floating">
                                    <Field className='form-control mb-1' id="password" name="password" type="password" placeholder="***" />
                                    <FormLabel><i className="bi bi-lock-fill"></i> Password</FormLabel>
                                    <ErrorMessage className='text-danger text-center' component="div" name='password' />
                                </FormGroup>
                                <FormGroup className="mb-3 text-center">
                                    <Button className='rounded-5 w-50' variant="dark" type="submit">
                                        Log in
                                    </Button>
                                </FormGroup>
                            </Form>
                        )}

                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginForm;
