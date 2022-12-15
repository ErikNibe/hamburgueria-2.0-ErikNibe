import { Routes, Route} from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes/indes";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const RoutesMain = () => {
    
    return (
        <Routes>
            <Route path="/" element={ <LoginPage /> } />

            <Route path="/register" element={ <RegisterPage /> } />

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={ <DashboardPage /> } />
            </Route>

            <Route path="*" element={ <LoginPage/> } />
        </Routes>
    )
}