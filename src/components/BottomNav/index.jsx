import React from "react"
import "./style.css"
import { NavLink } from "react-router-dom"

const BottomNav = () =>{
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink exact to="/">
                        <i className="iconfont icon-home"></i>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/life">
                        <i className="iconfont icon-trophy"></i>
                        LifeService
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop">
                    <i className="iconfont icon-shop"></i>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user">
                        <i className="iconfont icon-team"></i>
                        User
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BottomNav