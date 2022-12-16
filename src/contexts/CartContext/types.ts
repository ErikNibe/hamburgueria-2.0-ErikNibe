import React from "react";
import { iProduct } from "../UserContext/types";

export interface iCartProviderProps {
    children: React.ReactNode;
}

export interface iProductQuantity {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    quantity: number;
}

export interface iCartContext {
    addToCart: (product: iProduct) => void;
    removeFromCart: (product: iProductQuantity) => void;
    removeItem: (product: iProductQuantity) => void;
    cartList: iProductQuantity[] | [];
    setCartList: React.Dispatch<React.SetStateAction<iProductQuantity[] | []>>;
    totalValue: number;
    totalItens: number;
}