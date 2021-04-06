import React,{ useEffect } from 'react'
import pic from "../images/welcome.png"
import "./Main.css"

const Main = () => {
    useEffect(() => {
        document.querySelector(".welcome-text").style.opacity = 1
    })
    return(
        <div className = "main-container">
            <div className = "main">
                <div className = "img-container">
                    <img className = "welcome-img" src = {pic} width = "500" height = "400" alt = "welcome"></img>
                </div>
                <div className = "welcome-text-container">
                    <div className = "welcome-text">
                        <h1 className = "welcome-heading">Welcome to <span style = {{color: "red", background: "white", padding: "0 10px 0 10px", borderRadius: "5px"}}>tutora</span></h1>
                        <div className = "welcome-line-container"></div>
                        <p className = "welcome-para">Better smart than sorry.</p>
                        <button className = "learn-more">
                            <div>Learn more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
