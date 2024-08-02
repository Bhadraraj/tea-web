import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const Cart = ({ cart, calculateTotalPrice, removeFromCart }) => {
    return (
        <>
            <div>
                {(cart) ? (

                    <div className='container text-center py-4 px-0'>

                        <h2> Your Cart</h2 >
                        <h4 className='pt-4'><b>Cart is empty !</b></h4>
                        <button className='shopnowbtn'>
                            <Link to="/shopnow">Shop Now</Link>
                        </button>


                    </div>



                ) : (


                    

                    <div className='container text-center py-4 px-0'>

                        <Row className='py-4'>
                            <Col md={4}>
                                <h4>Product</h4>
                            </Col>
                            <Col md={4}>
                                <h4>Quantity</h4>
                            </Col>
                            <Col md={4}>
                                <h4>Total Price</h4>
                            </Col>
                        </Row>
                        <ListGroup variant="flush">
                            {cart.map((product) => (

                                <ListGroup.Item key={product.id}>
                                    <Row>
                                        <Col md={4}>
                                            <strong>{product.name}</strong> - Rs {product.price} x {product.quantity}
                                        </Col>
                                        <Col md={4}>
                                            <Button variant="danger" onClick={() => removeFromCart(product)}>
                                                <RiDeleteBin5Line /> Remove
                                            </Button>
                                        </Col>
                                        <Col md={4}>
                                            = Rs {product.totalPrice}
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ))}
                            <h5>Total Price : Rs {calculateTotalPrice()}</h5>
                            <h5>Taxes and shipping calculated after Placing Order</h5>
                            <button className=' btncart'>
                                <Link to="/login">Place Order</Link>
                            </button>
                        </ListGroup>

                    </div >

                )

                }
            </div >
        </>
    );
};

export default Cart;
