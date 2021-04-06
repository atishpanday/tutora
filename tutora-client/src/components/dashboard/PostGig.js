import React from 'react'
import "./PostGig.css"

const PostGig = () => {
    return (
        <div className="post-gig-container">
            <div className="post-gig">
                <form className="post-gig-form">
                    <div className="subject-select-container post-gig-fields">
                        <label for="subject-select">Subject</label>
                        <select name="subjects" id="subject-select">
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Biology">Biology</option>
                            <option value="English">English</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="History">History</option>
                            <option value="Geography">Geography</option>
                        </select>
                    </div>
                    <div className="qualification-container post-gig-fields">
                        <label className="qual-label">Your highest qualification</label>
                        <input className="qual-input gig-input" placeholder="Example: MSc. Physics"></input>

                    </div>
                    <div className="description-container post-gig-fields">
                        <label className="des-label">Write a brief description about this gig</label>
                        <textarea className="des-input"></textarea>
                    </div>
                    <div className="location-container post-gig-fields">
                        <label className="loc-label">Location</label>
                        <input className="loc-input gig-input"></input>
                    </div>
                    <div className="online-offline post-gig-fields">
                        <label for="mode">Mode of tuition</label>
                        <select name="mode" id="mode">
                            <option value="online">Online</option>
                            <option value="offline">Offline</option>
                        </select>
                    </div>
                    <div className="fee-container post-gig-fields">
                        <label className="fee-label">Fee</label>
                        <input type="text" className="fee-input gig-input"></input>
                    </div>
                    <div className="submit-gig">
                        <button type="submit" className="submit-gig-btn">Post gig</button>
                    </div>
                </form>
                <div className="post-gig-side-info-container">
                    <div className="side-info-items">
                        <h3>Providing your location helps us provide you with students closest to your location</h3>
                        <h3>Consider fixing a reasonable price to compete with the rest of the market</h3>
                        <h3>Posting your tutorials online helps you reach students all over India</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostGig
