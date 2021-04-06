import React from 'react'
import NavBar from "../home/NavBar"
import SeachBar from "../home/SearchBar"
import "./TutorsPage.css"

const TutorsPage = () => {
    return (
        <>
            <NavBar />
            <SeachBar />
            <div className = "tutors-page-container">
                <div className = "tutor-card-container">
                    <div className = "tutor-card">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default TutorsPage
