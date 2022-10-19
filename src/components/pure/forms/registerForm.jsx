import React, { useState } from 'react';
import { FormGroup, FormLabel, Button, Modal } from "react-bootstrap";

// validate form
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/**
 * Register Esquema with yup for validation
 */
 const registerEsquema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        name: Yup.string()
            .min(3, 'Minimum 3 characters')
            .max(15, 'Max 15 characters')
            .required('Name is required'),
        surname: Yup.string()
            .min(3, 'Minimum 3 characters')
            .max(15, 'Max 15 characters')
            .required('Surname is required'),
        password: Yup.string()
            .min(3, 'Minimum 3 characters')
            .required('Password is required'),
        passwordConfirm: Yup.string()
            .when('password', {

                // expect there to be something in the password, it has value or the length is greater than 0
                is: value => (value && value.length > 0 ? true : false),
                
                // when it occurs, the value must be one of those found in the list
                // with ref we access the value of the list ('password')
                then: Yup.string().oneOf(
                    [Yup.ref('password')],
                    'Passsword must match'
                )
            }).required('You must confirm the password')
    }
)

const RegisterForm = ({setEmail, setName, setSurname, setPassword, handlerRegister}) => {

    // modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // initial credentials for form validator
    const initialCredentials = {
        email: '',
        name :  '',
        surname :  '',
        password : '',
        confirmPassword :  '',
    }

    return (
        <>
            {/* Modal button */}
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

                    {/* Validation using Formik */}
                    <Formik
                        initialValues={initialCredentials}
                        
                        // * Yup validation esquema
                        validationSchema={registerEsquema}
                        
                        onSubmit={(values) => {
                            setEmail(values.email);
                            setName(values.name);
                            setSurname(values.surname);
                            setPassword(values.password);
                            handlerRegister(values.email, values.name, values.surname, values.password );
                        }}
                    >

                    {/* props of formik */}
                    {() => (
                        <Form>
                            <FormGroup className="mb-3 form-floating">
                                <Field  
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="name@example.com" 
                                    autoFocus
                                    className='form-control mb-1'
                                />
                                <FormLabel>Email</FormLabel>
                                <ErrorMessage className='text-danger text-center' component="div" name='email' />

                            </FormGroup>
                            <FormGroup className="mb-3 form-floating">
                                <Field
                                    id="name"
                                    name="name" 
                                    type="text"
                                    placeholder="Name"
                                    className='form-control mb-1'
                                />
                                <FormLabel>Name</FormLabel>
                                <ErrorMessage className='text-danger text-center' component="div" name='name' />
                            </FormGroup>
                            <FormGroup className="mb-3 form-floating">
                                <Field
                                    id='surname'
                                    name="surname" 
                                    type="text"
                                    placeholder='Surname'
                                    className='form-control mb-1'
                                />
                                <FormLabel>Surname</FormLabel>                                
                                <ErrorMessage className='text-danger text-center' component="div" name='surname' />
                            </FormGroup>
                            <FormGroup className="mb-3 form-floating">
                                <Field
                                    id='password'
                                    name="password" 
                                    type="password"
                                    placeholder='****'
                                    className='form-control mb-1'
                                />
                                <FormLabel>Password</FormLabel>                                
                                <ErrorMessage className='text-danger text-center' component="div" name='password' />
                            </FormGroup>
                            <FormGroup className="mb-3 form-floating">
                                <Field
                                    id='passwordConfirm'
                                    name="passwordConfirm" 
                                    type="password"
                                    placeholder='****'
                                    className='form-control mb-1'
                                />
                                <FormLabel>Password confirm</FormLabel>                                
                                <ErrorMessage className='text-danger text-center' component="div" name='passwordConfirm' />
                            </FormGroup>
                            <FormGroup className="mb-3 text-center">
                                <Button className='rounded-5 w-50' variant="dark" type="submit">
                                    Sign up
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

export default RegisterForm;
