// src/redux/action/index.js

export const addCart = (product) => {
    return {
        type: 'ADD_TO_CART', // Define a unique action type
        payload: product // Include the product data as payload
    };
};

export const delCart = (product) => {
    return {
        type: 'DEL_FROM_CART', // Define a unique action type
        payload: product // Include the product data as payload
    };
};
