import React from 'react'

const Footer = () => {
    return (
        <div
        style = {{
            height: "500px",
            width: "100%",
            background: "#4b0082",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div
                style = {{
                    height: "400px",
                    width: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <div
                        style = {{
                            height: "400px",
                            width: "200px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <h4
                                style = {{
                                    color: "white",
                                    letterSpacing: "3px"
                                }}>
                                About
                            </h4>
                            <p>Tutora</p>
                            <p>Creators</p>
                            <p>Careers</p>
                    </div>
                    <div
                        style = {{
                            height: "400px",
                            width: "200px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly"
                        }}>
                            <h4
                                style = {{
                                    color: "white",
                                    letterSpacing: "3px"
                                }}>
                                Links
                            </h4>
                            <p>Blogs</p>
                            <p>Forum</p>
                            <p>Donations</p>
                    </div>
            </div>
            
        </div>
    )
}

export default Footer
