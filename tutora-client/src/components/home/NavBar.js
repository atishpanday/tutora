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
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" /></svg> */}
                    </div>
                    <div className="link tutors">
                        <div><Link to="/tutors" style={{ color: "white", textDecoration: "none" }}>Tutors</Link></div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 28 28"><path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" /></svg> */}
                    </div>
                    <div className="link subjects">
                        <div>Subjects</div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z" /></svg> */}
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
