import {Route, Routes} from "react-router-dom"
import Home from "./HomePage"

const MainRoutes=()=>{
    return(
     <Routes>
     <Route path="/" element={<Home/>}/>
     </Routes>

    )
}