// Cart.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Row, Col, Container } from 'react-bootstrap';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Load cart items from local storage when component mounts
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            dispatch({ type: 'SET_CART', payload: savedCart });
        }
    }, [dispatch]);

    const handleAdd = (item) => {
        dispatch(addCart(item));
        updateLocalStorage();
    };

    const handleDel = (item) => {
        dispatch(delCart(item));
        updateLocalStorage();
    };

    const updateLocalStorage = () => {
        // Update local storage with current cart items
        localStorage.setItem('cart', JSON.stringify(state));
    };

    // Rest of your component code remains the same
};

export default Cart;
