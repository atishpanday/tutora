import React, { useRef, useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { LoginContext } from "../App"
import Card from '../cards/Card'
import PageContainer from "../pagecontainers/PageContainer"
import Form from "../forms/Form"
import Button from "../buttons/Button"

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
        <PageContainer
            bgcolor="#4b0082"
            flexDirection="column">
            <Card
                h="500px"
                w="400px"
                bgcolor="whitesmoke"
            >
                <div 
                    style = {{
                        fontSize: "16px",
                        fontFamily: "Arimo",
                        color: "#4b0082"
                    }}>
                    <h1>Register</h1>
                </div>
                <div style={{ color: "red" }}>{error && error}</div>
                <Form 
                    h = "300px"
                    w = "400px"
                    flexDirection = "column"
                    onSubmit={registerAcc}>
                    <input
                        required
                        type="text"
                        style={{
                            height: "40px",
                            width: "350px",
                            padding: "3px",
                            border: "2px solid lightgray",
                            borderRadius: "5px"
                        }}
                        placeholder="Full name"
                        ref={nameRef}
                    />
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
                        placeholder="Confirm password"
                        ref={passwordConfirmRef}
                    />
                    <Button
                        h = "35px"
                        w = "350px"
                        bgcolor = "green"
                        border = "none"
                        borderRadius = "5px"
                        color = "white"
                        ftSize = "16px"
                        >
                            Register
                    </Button>
                </Form>
                <div className="login-prompt">
                    <p>Already have an account? <Link to="/login" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}>Log in</Link></p>
                </div>
            </Card>
        </PageContainer>
    )
}

export default Registration
