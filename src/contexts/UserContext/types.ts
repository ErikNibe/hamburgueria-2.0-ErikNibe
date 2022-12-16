import React from "react";

export interface iUserProviderProps {
    children: React.ReactNode;
}

export interface iUser {
    email: string;
    name: string;
    id: number;
}

export interface iUserResponse {
    accessToken: string;
    user: iUser;
}

export interface iDataRegister {
    name: string;
    email: string;
    password: string;
}

export interface iDataLogin {
    email: string;
    password: string;
}

export interface iProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export interface iUserContext {
    registerUser: (data: iDataRegister) => Promise<void>;
    loginUser: (data: iDataLogin) => Promise<void>;
    user: iUser | null;
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
    sending: boolean;
    productList: iProduct[] | null;
    setProductList: React.Dispatch<React.SetStateAction<iProduct[] | null>>;
    loading: boolean;
}

