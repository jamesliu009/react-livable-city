import React from "react"
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../pages/Home"
import LifeService from "../pages/LifeService"
import Shop from "../pages/Shop"
import User from "../pages/User"

import BottomNav from "../components/BottomNav"

const AppRouter = () =>{
    return(
        <div>            
            <Routes>               
                <Route exact path="/" element={ <Home/> } />
                <Route path="/life" element={ <LifeService/> } />
                <Route path="/shop" element={ <Shop/> } />
                <Route path="/user" element={ <User/> } />
            </Routes>
            <BottomNav />
        </div>        
    )
}

export default AppRouter