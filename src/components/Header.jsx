import React from 'react'
import Logo from "../assets/images/book-logo.png"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div id="header">
            <div className="header-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-xl-2">
                            <div className="logo">
                                <Link to="/"> <img src={Logo} alt="" /> </Link>
                            </div>
                        </div>
                        <div className="col-xl-10 d-none d-xl-block">
                            <div className="menu-items">
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
