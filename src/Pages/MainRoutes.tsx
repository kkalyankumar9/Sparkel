import {Route, Routes} from "react-router-dom"
import Home from "./HomePage"

import SignUp from "./signup."
import LoginPage from "./login"

export const MainRoutes=()=>{
    return(
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/Signup" element={<SignUp/>}/>
     
     </Routes>

    )
}