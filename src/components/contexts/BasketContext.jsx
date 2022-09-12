import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const BasketContext = createContext();


const BasketProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addToBasket = (data, findBasketItem) => {
        if (!findBasketItem) {
            return setItems((items) => [data, ...items]);
        }

        const filtered = items.filter((item) => item !== findBasketItem);
        setItems(filtered); 
    };

    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item !== item_id);
        setItems(filtered);
    };

    const emptyBasket = () => setItems([]);

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        emptyBasket,
    };


    return (
        <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
    );
};

const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket};