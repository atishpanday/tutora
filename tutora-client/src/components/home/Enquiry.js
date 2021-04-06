import React, { useRef } from 'react'
import "./Enquiry.css"

const Enquiry = () => {

    const nameRef = useRef()
    const emailRef = useRef()
    const quesRef = useRef()
    const sendData = () => {
        fetch("/enquiry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: nameRef.current.value,
                email: emailRef.current.value,
                question: quesRef.current.value
            })
        })
            .catch(err => console.log("could not send data to backend"))
    }

    return (
        <div className="enquiry-form-container">
            <div className="enquiry-form-card">
                <div className="enquiry-heading-container">
                    <h1 className="enquiry-heading">Got a question ? Ask us below</h1>
                </div>
                <form className="enquiry-form" onSubmit={sendData}>
                    <div className="enquiry-form-item-container">
                        <div className="enquiry-form-item-container-one">
                            <label className="enquiry-form-item">Name</label>
                            <input required className="enquiry-form-item enquiry-input" ref={nameRef}></input>
                        </div>
                        <div className="enquiry-form-item-container-one">
                            <label className="enquiry-form-item">Email</label>
                            <input required className="enquiry-form-item enquiry-input" ref={emailRef}></input>
                        </div>
                    </div>
                    <div className="enquiry-form-item-container">
                        <div className="enquiry-form-item-container-one">
                            <label className="enquiry-form-item">Question</label>
                            <textarea required className="enquiry-form-item enquiry-input question-input" ref={quesRef}></textarea>
                        </div>
                    </div>
                    <div className="enquiry-submit">
                        <button type="submit" className="enquiry-submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Enquiry
