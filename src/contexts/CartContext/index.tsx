import { createContext, useState } from "react";
import { iProduct } from "../UserContext/types";

import { iCartContext, iCartProviderProps, iProductQuantity } from "./types";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iCartProviderProps) => {

    const [cartList, setCartList] = useState<iProductQuantity[]>([]);
    
    const addToCart = (product: iProduct) => {
        const searchedProduct = cartList.find((productCart) => productCart.id === product.id);

        if(searchedProduct) {
            setCartList(
                cartList.map((productCart) => {
                    if(productCart.id === product.id) {
                        return {...searchedProduct, quantity: searchedProduct.quantity + 1};
                    }
                    else{
                        return productCart;
                    }
                })
            );
        }
        else {
            setCartList([...cartList, {...product, quantity: 1}]);
            console.log(cartList);
        }
    }

    const removeFromCart = (product: iProductQuantity) => {
        const searchedProduct = cartList.find((productCart) => productCart.id === product.id);

        if(searchedProduct && searchedProduct.quantity > 1) {
            setCartList(
                cartList.map((productCart) => {
                    if(productCart.id === product.id) {
                        return {...searchedProduct, quantity: searchedProduct.quantity - 1};
                    }
                    else{
                        return productCart;
                    }
                })
            );
        }
        else {
            setCartList(cartList.filter((productCart) => productCart.id !== product.id));
        }
    }

    const removeItem = (product: iProductQuantity) => {
        setCartList(cartList.filter((productCart) => productCart.id !== product.id));
    }

    const totalValue = cartList.reduce((previousValue: number, currentValue: iProductQuantity) => {

        return previousValue + (currentValue.price * currentValue.quantity);

    }, 0);

    const totalItens = cartList.reduce((previousValue:number, currentValue: iProductQuantity) => {
        return previousValue + currentValue.quantity;
    }, 0)

    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, removeItem, cartList, setCartList, totalValue, totalItens }}>
            { children }
        </CartContext.Provider>
    )
}