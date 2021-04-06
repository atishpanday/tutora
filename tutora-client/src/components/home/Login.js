import React, { useRef, useState, useContext } from 'react'
import "./Login.css"
import { Link } from "react-router-dom"
import { LoginContext } from "../App"


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [error, setError] = useState("")

    const value = useContext(LoginContext)

    const sendLoginRequest = async (e) => {
        e.preventDefault()

        try {
            const res = await fetch("/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
            })
            const parsedResponse = await res.json()
            if (parsedResponse.status === "successful") {
                localStorage.setItem("token", parsedResponse.token)
                value.setLoggedIn(true)
            }
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <div className="login-page">
            <div className="login-form-container">
                <div className="login-heading">
                    <h1>Log in</h1>
                </div>
                <div style={{ color: "red" }}>{error && error}</div>
                <form className="login-form" onSubmit={sendLoginRequest}>
                    <div className="login-form-item-container">
                        <label className="login-form-item" for="email">Email</label>
                        <input required className="login-form-item login-input" id="email" type="email" ref={emailRef}></input>
                    </div>
                    <div className="login-form-item-container">
                        <label className="login-form-item" for="password">Password</label>
                        <input required className="login-form-item login-input" id="password" type="password" ref={passwordRef}></input>
                    </div>
                    <button className="login-btn" type="submit">Log in</button>
                </form>
                <div className="signup-prompt">
                    <p>Don't have an account? Register as <Link to="/register/student" style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>Student</Link> or as <Link to="/register/teacher" style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>Teacher</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Login
