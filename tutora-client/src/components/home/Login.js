import React, { useState, useContext, useRef } from 'react'
import { Link } from "react-router-dom"
import { LoginContext } from "../App"
import Button from "../buttons/Button"
import Form from "../forms/Form"
import Card from "../cards/Card"
import PageContainer from "../pagecontainers/PageContainer"

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
        <PageContainer
            bgcolor = "#4b0082"
            flexDirection = "column">
            <Card
                h = "500px"
                w = "400px"
                bgcolor = "whitesmoke">
                <div
                    style = {{
                        fontFamily: "Arimo",
                        fontSize: "16px",
                        color: "#4b0082"
                    }}>
                    <h1>Log in</h1>
                </div>
                <div style={{ color: "red" }}>{error && error}</div>
                <Form 
                    h = "200px"
                    w = "400px"
                    flexDirection = "column"
                    onSubmit={sendLoginRequest}>
                    <input
                        required
                        type="email"
                        style={{
                            height: "40px",
                            width: "350px",
                            padding: "3px",
                            border: "2px solid lightgray",
                            borderRadius: "5px"
                        }}
                        placeholder="Email"
                        ref={emailRef}
                    />
                    <input
                        required
                        type="password"
                        style={{
                            height: "40px",
                            width: "350px",
                            padding: "3px",
                            border: "2px solid lightgray",
                            borderRadius: "5px"
                        }}
                        placeholder="Password"
                        ref={passwordRef}
                    />
                    <Button
                        type="submit"
                        bgcolor="green"
                        h="35px"
                        w="350px"
                        border = "none"
                        borderRadius = "5px"
                        color="white"
                        ftSize="16px"
                        text="Log in">
                            Log in
                    </Button>
                </Form>
                <div className="signup-prompt">
                    <p>Don't have an account? Register <Link to="/register" style={{ textDecoration: "none", color: "blue", cursor: "pointer" }}>here</Link></p>
                </div>
            </Card>
        </PageContainer>
    )
}

export default Login
