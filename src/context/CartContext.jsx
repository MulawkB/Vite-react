import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);

    function addToCart() {
        setCartCount( (prevState) => prevState + 1);
    }
    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}