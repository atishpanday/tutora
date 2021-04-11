import React from 'react'

const Form = ({ h, w, flexDirection, onSubmit, children }) => {
    return (
        <form
            onSubmit = {onSubmit}
            style={{
                height: h,
                width: w,
                display: "flex",
                flexDirection: flexDirection,
                alignItems: "center",
                justifyContent: "space-evenly"
            }}
        >
            {children}
        </form>
    )
}

export default Form
