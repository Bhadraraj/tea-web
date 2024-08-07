import React, { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { RiShoppingBag4Line } from "react-icons/ri";


import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function NavPage() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <header>

            <div className="topOfferBar">
                offer  Citrus Bliss Green Tea | Use "TEA20" & Get FLAT 20% OFF
            </div>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className='py-2'>
                    <Navbar.Brand href="#">
                        <Link to='/'> LOGO</Link>
                    </Navbar.Brand>
                    <span className="d-flex navCartLeft">
                        <Nav.Link href="#action1" className='cart d-flex align-items-center'>
                            <Link to="/Cart"> <RiShoppingBag4Line /> </Link>
                        </Nav.Link>
                        <Nav.Link href="#action1" className='cart d-flex align-items-center'>
                            <Link to='/login'> <FaUserCircle /></Link>
                        </Nav.Link>
                        <Navbar.Toggle>
                            <CgMenuLeftAlt />
                        </Navbar.Toggle>
                    </span>

                    <Navbar.Collapse id="navbarScroll">

                        <Nav className="me-auto my-2 my-lg-0 navBarCenter" navbarScroll>
                            <Nav.Link href="#action1">
                                <Link to='/home'>  Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/shopnow'>  Shop Now</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/ourteas'> Our Teas</Link>
                            </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/aboutus'> About Us</Link> </Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/blog'> Blogs</Link></Nav.Link>
                            <Nav.Link href="#action2">
                                <Link to='/contact'> Contact</Link>
                            </Nav.Link>
                        </Nav>
                        <span className="d-flex navCartRight">
                            <Nav.Link href="#action1" className='cart'>
                                <Link to="/Cart">
                                    <RiShoppingBag4Line style={{ height: '100%', width: 'auto' }} />
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#action1" className='cart'>
                                <Link to='/login'> <FaUserCircle style={{ height: '100%', width: 'auto' }} /></Link>
                            </Nav.Link>

                            <Navbar.Toggle aria-controls="navbarScroll" />
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div class="inner-BannerCont">
                <div className="container">

                    <div className="row">
                        <div className="col-md-6 ">


                            <div className='text-start'>


                                <h1 className='mb-3'>Sereni Tea Hills - Tea for Your Peaceful Moments</h1>



                                <div className="col-10 text-start">  <h6> Discover the finest teas, handpicked from lush hills, and delivered to your doorstep. <br /> Indulge in a serene tea experience with every sip. Enjoy the perfect blend of flavor and tranquility from SereniTea Hills.</h6>
                                </div>


                                <button className='bannnerBtn'>
                                    Buy Now
                                </button>

                            </div>


                        </div>

                        <div className="col-md-6">
                            <img src="../images/lemonTea.png" alt="" className='img-fluid' />
                        </div>
                    </div>


                    <div className="row">
                     
                        <div className="col-12 text-center d-flex justify-content-center">
                            <span className="contacticon"><AiFillInstagram /> </span>
                            <span className="contacticon"><FaFacebookF /> </span>
                            <span className="contacticon"><FaTwitter /> </span>
                            <span className="contacticon"><IoLogoWhatsapp /></span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}