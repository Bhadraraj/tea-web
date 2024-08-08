import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [responseMessage, setResponseMessage] = useState(''); // Define setResponseMessage


    const validate = (field, value) => {
        let tempErrors = { ...errors };

        switch (field) {
            case 'name':
                tempErrors.name = value ? '' : 'Name is required.';
                break;
            case 'email':
                if (!value) {
                    tempErrors.email = 'Email is required.';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    tempErrors.email = 'Email is not valid.';
                } else {
                    tempErrors.email = '';
                }
                break;
            case 'mobile':
                if (!value) {
                    tempErrors.mobile = 'Mobile number is required.';
                } else if (!/^\d{10}$/.test(value)) {
                    tempErrors.mobile = 'Mobile number is not valid.';
                } else {
                    tempErrors.mobile = '';
                }
                break;
            case 'message':
                tempErrors.message = value ? '' : 'Message is required.';
                break;
            default:
                break;
        }

        setErrors(tempErrors);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validate(name, value); // Validate on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (Object.values(errors).every(error => !error) && Object.values(formData).every(field => field)) {
            axios.post('http://localhost/sereniTea/contactForm.php', formData)
                .then(response => {
                    if (response.data.status === 'success') {
                        setSubmitted(true);
                        setResponseMessage('Form submitted successfully!');
                    } else {
                        setResponseMessage('There was an error submitting the form: ' + response.data.message);
                    }
                })
                .catch(error => {
                    console.error('There was an error submitting the form!', error);
                    setResponseMessage('There was an error submitting the form.');
                });
        } else {
            setResponseMessage('Please fix the errors before submitting.');
        }
    };
    

    const getInputStyle = (field) => {
        if (!formData[field]) return null;
        return errors[field] ? { borderColor: 'red' } : { borderColor: 'green' };
    };

    return (
        <section className="contactUsSec">
            <div className="container text-center py-4 sectionsix">
                <h2>CONTACT</h2>
                <div className="row py-4 text-start p-3">
                    <div className="col-lg-6 order-lg-2">
                        {submitted && <Alert variant="success">Form submitted successfully!</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Ex: Gopal Ram. KGR"
                                    value={formData.name}
                                    onChange={handleChange}
                                    isInvalid={!!errors.name}
                                    style={getInputStyle('name')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Ex: gopal@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                    style={getInputStyle('email')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="mobile"
                                    placeholder="Ex: 7895432438"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    isInvalid={!!errors.mobile}
                                    style={getInputStyle('mobile')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    isInvalid={!!errors.message}
                                    style={getInputStyle('message')}
                                />
                                <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31287.52079462516!2d76.67277907016867!3d11.411893946213855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8bd84b5f3d78d%3A0x179bdb14c93e3f42!2sOoty%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1722663648497!5m2!1sen!2sin"
                            width="100%"
                            height={650}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="row">
                    <p className='text-primaryClr'>Stay connected with Serenity Hills Tea on social media for updates, offers, and more.</p>
                    <div className="col-12 text-center d-flex justify-content-center">
                        <span className="contacticon"><AiFillInstagram /> </span>
                        <span className="contacticon"><FaFacebookF /> </span>
                        <span className="contacticon"><FaTwitter /> </span>
                        <span className="contacticon"><IoLogoWhatsapp /></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
