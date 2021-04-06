import React from 'react'
import "./Introduction.css"
import { Link } from "react-router-dom"

const Introduction = () => {
    return (
        <div className="intro-container">
            <div className="intro">
                <div className="intro-heading-container">
                    <h1>The best place for finding the best talents to personally tutor you. Find thousands of tutors and connect with them all from one place!</h1>
                </div>
                <div className="intro-para-container">
                    <p>All you have to do is register. Find tutors to match your requirements, based on subjects you want to study, level of education, as well as location of your residence!</p>
                </div>
                <div className="intro-register-btn-container">
                    <Link to="/register" style={{ textDecoration: "none" }}><button className="register-btn">Join us</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Introduction
