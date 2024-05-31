import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action/index.js';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
        console.log(product)
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Image src={product.image} alt={product.title} height="400px" width="400px" />
                    </Col>
                    <Col>
                        <h4 className="text-uppercase text-black-50">
                            {product.category}
                        </h4>
                        <h1 className="display-5">{product.title}</h1>
                        <p className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate}
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                        <h3 className="display-6 fw-bold my-4">
                            $ {product.price}
                        </h3>
                        <p className="lead">{product.description}</p>
                        <Button variant="dark" className="ms-2 px-3 py-2" onClick={() => addProduct(product)}>
                            Add to Cart
                        </Button>
                        <NavLink to="/e-commerce-app/cart" className="btn btn-dark ms-2 px-3 py-2">
                            Go to Cart
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <div>
            <Container className="py-5">
                <Row className="py-4">
                    <Col>
                        {loading ? <Loading /> : <ShowProduct />}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Product;