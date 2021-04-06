import React, { useRef, useState, useContext } from 'react'
import "./Registration.css"
import { Link } from "react-router-dom"
import { LoginContext } from "../App"

const Registration = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [error, setError] = useState("")

    const value = useContext(LoginContext)

    const registerAcc = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("*Passwords do not match")
        }

        try {
            const res = await fetch("/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: nameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                })
            })
            const parsedResponse = await res.json()
            console.log(parsedResponse)
            if (parsedResponse.status === "successful") {
                localStorage.setItem("token", parsedResponse.token)
                return value.setLoggedIn(true)
            } else {
                setError("*Could not log you in")
                return value.setLoggedIn(false)
            }
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="register-page">
            <div className="registration-form-container">
                <div className="registration-type">
                    <h1>Register</h1>
                </div>
                <div style={{ color: "red" }}>{error && error}</div>
                <form className="registration-form" onSubmit={registerAcc}>
                    <div className="registration-form-item-container">
                        <label className="registration-form-item" for="name">Name</label>
                        <input required className="registration-form-item registration-input" id="name" type="text" ref={nameRef}></input>
                    </div>
                    <div className="registration-form-item-container">
                        <label className="registration-form-item" for="email">Email</label>
                        <input required className="registration-form-item registration-input" id="email" type="email" ref={emailRef}></input>
                    </div>
                    <div className="registration-form-item-container">
                        <label className="registration-form-item" for="password">Password</label>
                        <input required className="registration-form-item registration-input" id="password" type="password" ref={passwordRef}></input>
                    </div>
                    <div className="registration-form-item-container">
                        <label className="registration-form-item" for="confirm-password">Confirm Password</label>
                        <input required className="registration-form-item registration-input" id="confirm-password" type="password" ref={passwordConfirmRef}></input>
                    </div>
                    <button className="registration-btn" type="submit">Register</button>
                </form>
                <div className="login-prompt">
                    <p>Already have an account? <Link to = "/login" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Registration
