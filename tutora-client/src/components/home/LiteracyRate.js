import React from 'react'
import "./LiteracyRate.css"

const LiteracyRate = () => {
    return (
        <div
            className="literacy-rate-container"
            style={{
                height: "800px",
                width: "100%",
                background: "#d7d7fd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                perspective: "1200px"
            }}>
            <div
                className="literacy-rate"
                style={{
                    width: "60%",
                    height: "700px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-evenly"
                }}>
                <div>
                    <h1
                        style={{
                            letterSpacing: "3px",
                            color: "#4b0082",
                            margin: "10px 0"
                        }}>
                        Looking for a tutor?
                    </h1>
                    <h3
                        style={{
                            letterSpacing: "3px",
                            opacity: "0.6"
                        }}>
                        There are thousands of highly educated tutors just waiting to share their knowledge, and we simply provide the platform to connect them to you. Find tutors according to the subjects you'd like to study, the scope of you syllabus, as well as the location of your residence. All in one place.
                    </h3>
                </div>
                <div>
                    <h1
                        style={{
                            letterSpacing: "3px",
                            color: "#4b0082",
                            margin: "10px 0"
                        }}>
                        Why do you need a tutor?
                    </h1>
                    <h3
                        style={{
                            letterSpacing: "3px",
                            opacity: "0.6"
                        }}>
                        Sometimes, YouTube tutorials and Medium blog posts just aren't enough, because you still have that one annoying question, that no one seems to be addressing at all. In those times what you really need is a mentor, a tutor, who can personally understand and address your concerns.
                    </h3>
                </div>
                <div>
                    <h1
                        style = {{
                            color: "#4b0082",
                            letterSpacing: "3px",
                            margin: "10px 0"
                        }}>
                        Why tutora?
                    </h1>
                    <h3
                        style = {{
                            letterSpacing: "3px",
                            opacity: "0.6"
                        }}>
                        Why not?
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default LiteracyRate