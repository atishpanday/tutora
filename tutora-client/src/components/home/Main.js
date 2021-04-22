import React from 'react'
import Button from "../buttons/Button"
import "./Main.css"

const Main = () => {
    return (
        <div
            className="main-container"
        >
            <div
                className="main"
                style={{
                    height: "200px",
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between"
                }}
            >
                <h1
                    className="welcome-heading"
                    style={{
                        letterSpacing: "8px",
                        fontSize: "100px",
                        color: "black",
                    }}>
                    {/* <span
                        style={{
                            color: "red",
                            background: "white",
                            padding: "0 10px",
                            borderRadius: "5px",
                            WebkitTextStrokeWidth: "0",
                        }}> */}
                            Welcome
                        {/* </span> */}
                </h1>
                <p
                    style={{
                        fontSize: "18px"
                    }}
                    className="welcome-para">The best UI designs for your website!
                </p>
                <Button
                    h="50px"
                    w="140px"
                    border="2px solid #4b0082"
                    borderRadius="5px"
                    bgcolor="transparent"
                    ftSize = "16px"
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly"
                        }}>
                        <span
                            style = {{
                                color: "#4b0082"
                            }}>Learn more</span>
                        <svg style={{
                            transform: "rotateZ(90deg)",
                            fill: "#4b0082"
                        }}
                            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M10.024 4h6.015l7.961 8-7.961 8h-6.015l7.961-8-7.961-8zm-10.024 16h6.015l7.961-8-7.961-8h-6.015l7.961 8-7.961 8z" />
                        </svg>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Main
