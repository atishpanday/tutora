import React from 'react'
import "./SelectType.css"
import { Link } from "react-router-dom"
import pic1 from "../images/student-img-1.png"
import pic2 from "../images/teacher-img.png"

const SelectType = (props) => {

    const pic = props.props.type === "Student" ? pic1 : pic2

    return (
        <div className = "card-container">
            <div className = "card">
                <div className = "register-img-container">
                    <img src = {pic} width = "250" height = "250" alt = "register"></img>
                </div>
                <div className = "register-as-text-container">
                    <p className = "register-as-text">{props.props.text}</p>
                </div>
                <div className = "register-as">
                    <button className = "register-as-btn"><Link to = {(props.props.type === "Student") ? "/register/student" : "/register/teacher"} style = {{textDecoration: "none", color: "inherit"}}>Register as {props.props.type}</Link></button>
                </div>
            </div>
        </div>
    )
}


export default SelectType
