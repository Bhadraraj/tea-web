import React from 'react';
import Form from 'react-bootstrap/Form';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io"; const ContactUs = () => {
    return (
        <section className="contactUsSec">
            <div className="container text-center py-4 sectionsix">
                <h2>CONTACT</h2>
                <div className="row py-4 text-start p-3">
                  
                    {/* <h4>Visit Us</h4>
                        <p> Plan your visit to Serenity Hills Tea Estate and immerse yourself in the beauty of Ooty's tea country.</p>
                        <h4>Email Us</h4>
                        <p>Got a question or feedback? Reach out to our team, and we'll be happy to assist you.</p>
                        <h4>Follow Us</h4>
                        <p>Stay connected with Serenity Hills Tea on social media for updates, offers, and more.</p> */}
                 <div className="col-lg-6 order-lg-2">

                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Ex : Gopal Ram . KGR" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ex. gopal@gmail.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="tel" placeholder="Ex.7895432438" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
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
    )
}

export default ContactUs