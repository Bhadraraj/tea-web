
import React from "react";
import { Link } from "react-router-dom";
import ShopNow from "./ShopNow";
import { FaShoppingCart } from "react-icons/fa";

function ShopCard({ addToCart, cart, removeFromCart, initialProducts }) {

    return (
      
            <div className="container px-0">
                <ShopNow />
                <div className="row">
                    {initialProducts.map((product) => (
                        <div key={product.id} className="col-lg-4 col-sm-6 mb-4 text-center">
                            <div className="card">
                                <div className="card-body">
                                    <img src={product.img} alt="" className="productImgCard" />
                                    <h5 className="card-title py-2">{product.name}</h5>
                                    <div className="d-flex justify-content-center align-items-center ">
                                        <h5 className="card-text">Rs {product.price}</h5>
                                        <h5 className="card-text ms-4 ">Quantity: {product.quantity}</h5>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center pt-2">
                                        <button className="btn btn-primary mr-2" onClick={() => addToCart(product)}>Add</button>
                                        {cart.some((p) => p.id === product.id) && (
                                        <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove</button>
                                        )}
                                        <Link to='/Cart'> <button className="btn ms-2"> <FaShoppingCart /></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr />

            </div>
     
    );
}

export default ShopCard;