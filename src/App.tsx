import Global from "./styles/global";

import { RoutesMain as Routes } from "./routes";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";

function App() {

  return (
    <>
      <Global />

      <UserProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </UserProvider>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
