import { Route, Routes } from "react-router-dom";
import Home from "./HomePage";
import ProductsPage from "./ProductsPage";
import SingleCard from "./SinglePage";
import SignUp from "./signup.";
import LoginPage from "./login";
import PrivateRouters from "../context/PrivateRoutes";
import CartPage from "./cartPage";
import CheckoutPage from "./Checkout";
import AdminProduct from "./AdminProduct";
import AdminAddProducts from "./AdminAddProducts";
import PrivateRoute from "../Components/PrivateRoute";
import AdminEditProduct from "./AdminEditPage";
import AdminLoginPage from "./AdminLoginPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/data " element={<ProductsPage />} />
      <Route path="/data:id " element={<SingleCard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignUp />} />
      <Route
        path="/cart"
        element={
          <PrivateRouters>
            <CartPage />
          </PrivateRouters>
        }
      ></Route>
      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/adminlogin" element={<AdminLoginPage />} />

      <Route path="/admin" element={<PrivateRoute></PrivateRoute>} />

      <Route
        path="/admin-addproducts"
        element={
          <PrivateRoute>
            <AdminAddProducts />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin-editproducts/:id"
        element={
          <PrivateRoute>
            <AdminEditProduct />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
