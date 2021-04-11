import React from 'react'

const Button = ({type, border, bgcolor, h, w, borderRadius, color, ftSize, children}) => {
    return (
        <button
            type = {type}
            style = {{
                background: bgcolor,
                border: border,
                height: h,
                width: w,
                borderRadius: borderRadius,
                color: color,
                fontSize: ftSize,
                cursor: "pointer"
            }}>
            {children}
        </button>
    )
}

export default Button
