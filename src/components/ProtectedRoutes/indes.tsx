import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext"

export const ProtectedRoutes = () => {
    const { loading, productList } = useContext(UserContext);

    if(loading) {
        return null;
    }

    return productList ? <Outlet /> : <Navigate to={"/"} />;
}