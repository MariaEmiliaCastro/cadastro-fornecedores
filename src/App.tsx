import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SupplierForm from "./pages/SupplierForm";
import ViewSupplier from "./pages/ViewSupplier";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supplier/:id?" element={<SupplierForm />} />
        <Route path="/supplier/:id/view" element={<ViewSupplier />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
