import React from 'react'
import { Link } from "react-router-dom"
import Button from "../buttons/Button"

const Introduction = () => {
    
    return (
        <div
            style = {{
                height: "600px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }} 
            >
            <div
                style = {{
                    height: "400px",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly"
                }} 
                >
                <div className="intro-heading-container">
                    <h1
                        style = {{
                            color: "#4B0082",
                            letterSpacing: "2px"
                        }}>
                            The best place for finding the best talents to personally tutor you. Find thousands of tutors and connect with them all from one place!
                    </h1>
                </div>
                <div className="intro-para-container">
                    <p
                        style = {{
                            color: "gray",
                            fontSize: "18px",
                            fontStyle: "italic"
                        }}>
                            All you have to do is register. Find tutors to match your requirements, based on subjects you want to study, level of education, as well as location of your residence!
                    </p>
                </div>
                <div className="intro-register-btn-container">
                    <Link
                        to="/register" 
                        style={{ 
                            textDecoration: "none" 
                        }}>
                        <Button
                            h = "50px"
                            w = "150px"
                            bgcolor = "green"
                            color = "white"
                            border = "none"
                            borderRadius = "5px"
                            ftSize = "16px"
                            >Join us</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Introduction
