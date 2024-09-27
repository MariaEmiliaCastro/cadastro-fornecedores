import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import { AuthContext } from "./contexts/authContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SupplierForm from "./pages/SupplierForm";
import ViewSupplier from "./pages/ViewSupplier";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const { userLoggedIn } = useContext(AuthContext);

  return (
    <>
      {userLoggedIn && <Sidebar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/supplier/:id?"
          element={<ProtectedRoute element={<SupplierForm />} />}
        />
        <Route
          path="/supplier/:id/view"
          element={<ProtectedRoute element={<ViewSupplier />} />}
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
