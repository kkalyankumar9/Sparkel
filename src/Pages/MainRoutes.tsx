import {Route, Routes} from "react-router-dom"
import Home from "./HomePage"
import ProductsPage from "./ProductsPage"
import SingleCard from "./SinglePage"

const MainRoutes=()=>{
    return(
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/data " element={<ProductsPage/>}/>
     <Route path="/data:id " element={<SingleCard/>}/>
     </Routes>

    )
}