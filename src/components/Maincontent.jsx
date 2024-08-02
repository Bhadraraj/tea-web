import React, { useState } from 'react'
import SectionSix from './SectionSix'
import FooterBar from './FooterBar'
import Login from './Login'
import NavPage from './NavPage'
import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import OurTeas from './OurTeas'
import AboutUs from './AboutUs'
import Cart from './Cart'
import ShopCard from './ShopCard'
import Blogs from './Blogs'
import ForgotPasswordForm from './ForgotPasswordForm';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

const Maincontent = () => {


    const [cart, setCart] = useState([]);

    const [initialProducts, setInitialCart] = useState([
        { id: 1, name: "Black Tea 250g", price: 145, quantity: 0, img: '../images/blackTea.jpg' },
        { id: 2, name: "Black Tea 500g", price: 290, quantity: 0, img: '../images/blackTea.jpg' },
        { id: 3, name: "Black Tea 1kg", price: 580, quantity: 0, img: '../images/blackTea.jpg' },
        { id: 4, name: "Green Tea 250g", price: 190, quantity: 0, img: '../images/Greentea.png' },
        { id: 5, name: "Green Tea 500g", price: 380, quantity: 0, img: '../images/Greentea.png' },
        { id: 6, name: "Green Tea 1kg", price: 760, quantity: 0, img: '../images/Greentea.png' },
        { id: 7, name: "White Tea 500g", price: 780, quantity: 0, img: '../images/WTEA.jpg' },
        { id: 8, name: "White Tea 1kg", price: 1560, quantity: 0, img: '../images/WTEA.jpg' },
        { id: 9, name: "Oolong Tea 500g", price: 780, quantity: 0, img: '../images/oolong tea.webp' },
        { id: 10, name: "Oolong Tea 1kg", price: 1560, quantity: 0, img: '../images/oolong tea.webp' },
        { id: 11, name: "Serenity Spice Symphony 500g", price: 780, quantity: 0, img: '../images/cardamom-tea.webp' },
        { id: 12, name: "Serenity Spice Symphony 1kg", price: 1560, quantity: 0, img: '../images/cardamom-tea.webp' },
        { id: 12, name: "Ginger Serenitea 500g", price: 780, quantity: 0, img: '../images/newgtea.png' },
        { id: 12, name: "Ginger Serenitea 1kg", price: 1560, quantity: 0, img: '../images/newgtea.png' },
        { id: 13, name: "Soothing Chamomile 500g", price: 1560, quantity: 0, img: '../images/chamomile-tea.webp' },
        { id: 14, name: "Soothing Chamomile 1kg", price: 1560, quantity: 0, img: '../images/chamomile-tea.webp' },
        { id: 15, name: "Hibiscus Dream 500g", price: 780, quantity: 0, img: '../images/hibiscusteaaa.jpeg' },
        { id: 16, name: "Hibiscus Dream 1kg", price: 1560, quantity: 0, img: '../images/hibiscusteaaa.jpeg' },
        { id: 17, name: "Citrus Bliss 500g", price: 780, quantity: 0, img: '../images/Lemon tea.jpg' },
        { id: 18, name: "Citrus Bliss 1kg", price: 1560, quantity: 0, img: '../images/Lemon tea.jpg' },
        { id: 20, name: "Homemade chocolate 500g", price: 750, quantity: 0, img: '../images/homechoc.jpg' },
        { id: 20, name: "Varkey 500g", price: 480, quantity: 0, img: '../images/varkey.jpg' },
        { id: 20, name: "Coffee 500g", price: 290, quantity: 0, img: '../images/coffee 2.jpg' },
        { id: 20, name: "Coffee 1Kg", price: 580, quantity: 0, img: '../images/coffee 2.jpg' },
        { id: 19, name: "Tea Bag-Any Flavour(Pack of 3)", price: 850, quantity: 0, img: '../images/teabag.jpg' },
        { id: 20, name: "Tea Infuser pot", price: 1299, quantity: 0, img: '../images/teainfuser.jpg' },

    ]);

    const addToCart = (product) => {
        const updatedCart = [...cart];
        const updatedQuantity = [...initialProducts];


        const updatedQuantityIndex = updatedQuantity.findIndex((p) => p.id === product.id);

        const existingProductIndex = updatedCart.findIndex((p) => p.id === product.id);

        if (updatedQuantityIndex !== -1) {
            updatedQuantity[updatedQuantityIndex].quantity += 1;

        } else {
            updatedQuantity.push({ ...product });
        }

        if (existingProductIndex !== -1) {
            updatedCart[existingProductIndex].quantity += 1;
            updatedCart[existingProductIndex].totalPrice += product.price;
        } else {
            updatedCart.push({ ...product, quantity: 1, totalPrice: product.price });
        }

        setCart(updatedCart);
        setInitialCart(updatedQuantity);
    };

    const removeFromCart = (product) => {
        const updatedCart = [...cart];
        const updatedQuantity = [...initialProducts];
        const updatedQuantityIndex = updatedQuantity.findIndex((p) => p.id === product.id);
        const existingProductIndex = updatedCart.findIndex((p) => p.id === product.id);

        if (updatedQuantityIndex !== -1) {
            updatedQuantity[updatedQuantityIndex].quantity -= 1;

        } else {
            updatedQuantity.push({ ...product });
        }
        if (existingProductIndex !== -1) {
            updatedCart[existingProductIndex].quantity -= 1;
            updatedCart[existingProductIndex].totalPrice -= product.price;

            if (updatedCart[existingProductIndex].quantity <= 0) {
                updatedCart.splice(existingProductIndex, 1);
            }
        }

        setCart(updatedCart);
        setInitialCart(updatedQuantity);
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + product.totalPrice, 0);
    };


    return (
        <>
            {/* <div className="container"> */}


            <NavPage />
            {/* <div className="contentSec"> */}


                <Routes>
                    <Route path='/' element={< HomePage />}></Route>
                    <Route path="shopnow" element={
                        <ShopCard
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}


                            cart={cart} initialProducts={initialProducts}
                        />}
                    />
                    <Route path="/cart" element={
                        <Cart
                            cart={cart}
                            calculateTotalPrice={calculateTotalPrice} removeFromCart={removeFromCart}
                        />}
                    />

                    <Route path='/Login' element={<Login />}></Route>

                    <Route path='/home' element={<  HomePage />}></Route>
                    <Route path='/aboutus' element={<AboutUs />}></Route>
                    <Route path='/ourteas' element={<OurTeas />}></Route>
                    <Route path='/contact' element={<SectionSix />}></Route>
                    <Route path='/blog' element={<Blogs />}></Route>
                    <Route path='/forgot-password' element={<ForgotPasswordForm />}></Route>

                </Routes>
            {/* </div> */}
            {/* <Footer /> */}
            <FooterBar/>

        </>
    )
}

export default Maincontent;