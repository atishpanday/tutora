import React from 'react'
import pic from "../images/india-literacy-rate-macrotrends.png"
import "./LiteracyRate.css"

const LiteracyRate = () => {
    return (
        <div className="literacy-rate-container">
            <div className="literacy-rate">
                <div className="literacy-text-container">
                    <p className="literacy-text">What you see on the right is a slowly and gradually increasing curve. We aim to kick off this curve into oblivion so that no kid in this country remains uneducated!</p>
                </div>
                <div className="literacy-rate-img-container">
                    <div className="literacy-rate-graph">
                        <img src={pic} height="350" width="600" alt="literacy rate"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiteracyRate