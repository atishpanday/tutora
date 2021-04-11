import React from 'react'

const PageContainer = ({bgcolor, flexDirection, children}) => {
    return (
        <div
            style = {{
                background: bgcolor,
                minHeight: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: flexDirection,
                alignItems: "center",
                justifyContent: "space-evenly"
            }}>
            {children}
        </div>
    )
}

export default PageContainer
