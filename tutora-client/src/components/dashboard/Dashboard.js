import React, { useContext } from 'react'
import "./Dashboard.css"
import { LoginContext } from "../App"

const Dashboard = () => {

    const value = useContext(LoginContext)

    const requestLogout = () => {
        value.setLoggedIn(false)
        localStorage.removeItem("token")
    }
    return (
        <div className = "dashboard">
            <div className = "dashboard-main-container">
                <div className = "dashboard-main">
                    <div className = "find-tutor main-btn-container">
                        <button className = "find-tutor-button main-btn">Find a tutor</button>
                    </div>
                    <div className = "post-gig main-btn-container">
                        <button className = "post-gig-button main-btn">Post a gig</button>
                    </div>
                    <div className = "post-question main-btn-container">
                        <button className = "post-question-button main-btn">Post a question</button>
                    </div>
                </div>
            </div>
            <button onClick = {requestLogout}>Logout</button>
        </div>
    )
}

export default Dashboard
