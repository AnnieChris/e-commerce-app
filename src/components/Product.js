import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { addCart, delCart } from '../redux/action';

const ProductComponent = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addCart(product));
    };

    const handleRemoveFromCart = () => {
        dispatch(delCart(product));
    };

    return (
        <Container className="product-item">
            <Row>
                <Col>
                    <Button variant="dark" className="ms-2 px-3 py-2" onClick={handleAddToCart}>Add to Cart</Button>
                    {/* <Button onClick={handleRemoveFromCart}>Remove from Cart</Button> */}
                </Col>
            </Row>

        </Container>
    );
};

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch(); // Moved inside Product component

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        getProduct();
    }, []);

    return (
        <div>
            <Container className="py-5">
                <Row className="py-4">
                    <Col>
                        {loading ? (
                            // Loading skeleton
                            <div>Loading...</div>
                        ) : (
                            // Product details
                            <Container>
                                <Row className="justify-content-md-center">
                                    <Col>
                                        <Image src={product.image} alt={product.title} height="400px" width="400px" />
                                    </Col>
                                    <Col >
                                        <h4 className="text-uppercase text-black-50">{product.category}</h4>
                                        <h1 className="display-5">{product.title}</h1>
                                        <p className="lead fw-bolder">
                                            Rating {product.rating && product.rating.rate}
                                            <FontAwesomeIcon icon={faStar} />
                                        </p>
                                        <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                                        <p className="lead">{product.description}</p>
                                        {/* Render ProductComponent */}
                                        <ProductComponent product={product} />
                                        
                                        <NavLink to="/e-commerce-app/cart" className="btn btn-dark ms-2 px-3 py-2">
                                            Go to Cart
                                        </NavLink>
                                        
                                        </Col>
                                    
                                </Row>
                            </Container>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Product;
