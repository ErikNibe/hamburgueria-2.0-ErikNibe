import Global from "./styles/global";

import { RoutesMain as Routes } from "./routes";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext, UserProvider } from "./contexts/UserContext";

function App() {

  return (
    <>
      <Global />

      <UserProvider>
        <Routes />
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
