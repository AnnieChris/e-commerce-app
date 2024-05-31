
const handleCart = (state = [], action) => {
    console.log('Reducer action:', action); // Add logging statement
    switch (action.type) {
        case 'ADD_ITEM':
            const exist = state.find((x) => x.id === action.payload.id);
            if (exist) {
                return state.map((x) =>
                    x.id === action.payload.id ? { ...x, qty: (x.qty || 0) + 1 } : x
                );
            } else {
                return [...state, { ...action.payload, qty: 1 }];
            }
        default:
            return state;
    }
};

export default handleCart;
