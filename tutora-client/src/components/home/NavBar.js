import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"


const NavBar = () => {

    return (
        <div className="nav-bar-container">
            <nav className="nav-bar">
                <div className="links-container">
                    <div className="link home">
                        <div><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></div>
                    </div>
                    <div className="link tutors">
                        <div><Link to="/tutors" style={{ color: "white", textDecoration: "none" }}>Tutors</Link></div>
                    </div>
                    <div className="link subjects">
                        <div>Subjects</div>
                    </div>
                    <div className="link about">
                        <div>About us</div>
                    </div>
                    <div className="link faq">
                        <div>FAQ</div>
                    </div>
                    <div className="login">
                    <Link to = "/login" style = {{ textDecoration: "none" }}><button className="nav-login-btn">Login</button></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default NavBar
