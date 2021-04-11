import React from 'react'

const Card = ({h, w, bgcolor, boxShadow, children}) => {
    return (
        <div
            style = {{
                height: h,
                width: w,
                background: bgcolor,
                boxShadow: boxShadow,
                padding: "20px",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
            {children}
        </div>
    )
}

export default Card
