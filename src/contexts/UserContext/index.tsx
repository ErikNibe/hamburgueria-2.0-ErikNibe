import { createContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { api } from "../../api/api";

import { iDataRegister, iUserContext, iDataLogin, iUserProviderProps, iUserResponse, iUser, iProduct } from "./types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
    const navigate = useNavigate();

    const [user, setUser] = useState<iUser | null>(null);
    const [productList, setProductList] = useState<iProduct[] | null>(null);
    const [sending, setSending] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");

            if(!token){
                setLoading(false);

                return;
            }

            try {
                api.defaults.headers.common.authorization = `Bearer ${token}`;

                const { data } = await api.get("products");

                setProductList(data);

                navigate("/dashboard");

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }
        }

        loadUser();
    }, [])

    const registerUser = async (data: iDataRegister) => {
        try {
            await api.post<iUserResponse>("users", data);
            
            toast.success("Usuário registrado com sucesso!");

            setTimeout(() => navigate("/"), 3000);

        } catch (error) {
            toast.error("Ops, algo deu errado!");
        }
    }

    const loginUser = async (data: iDataLogin) => {
        try {
            setSending(true);

            const response = await api.post<iUserResponse>("/login", data);

            const {accessToken, user: userData} = response.data;

            api.defaults.headers.common.authorization = `Bearer ${accessToken}`;

            setUser(userData);

            const listResponse = await api.get("/products");
            
            setProductList(listResponse.data);
            
            localStorage.setItem("@TOKEN", accessToken);

            toast.success("Login realizado com sucesso");

            setTimeout(() => navigate("/dashboard"), 2000);

        } catch (error) {

            toast.error("Ops, algo deu errado");

        } finally {

            setSending(false);
        }
        
    }


    return (
        <UserContext.Provider value={{ registerUser, loginUser, user, setUser, sending, productList, loading }}>
            { children }
        </UserContext.Provider>
    )
}