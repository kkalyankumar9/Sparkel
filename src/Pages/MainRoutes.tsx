import {Route, Routes} from "react-router-dom"
import Home from "./HomePage"
import ProductsPage from "./ProductsPage"
import SingleCard from "./SinglePage"
import SignUp from "./signup."
import LoginPage from "./login"
import PrivateRouters from "../context/PrivateRoutes";
import CartPage from "./cartPage";
import CheckoutPage from "./Checkout"

export const MainRoutes=()=>{
    return(
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/data" element={<ProductsPage/>}/>
     <Route path="/data:id" element={<SingleCard/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/Signup" element={<SignUp/>}/>
     <Route path="/cart" element={<PrivateRouters><CartPage/></PrivateRouters>}></Route>
     <Route path="/checkout" element={<CheckoutPage/>}/>
     </Routes>

    )
}